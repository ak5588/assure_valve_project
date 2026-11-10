import type { VercelRequest, VercelResponse } from '@vercel/node';
import formidable from 'formidable';
import { Resend } from 'resend';
import * as fs from 'fs';

// Disable default Vercel body parser to allow formidable to parse the multipart stream
export const config = {
  api: {
    bodyParser: false,
  },
};

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_EXTENSIONS = ['pdf', 'doc', 'docx', 'png', 'jpg', 'jpeg', 'zip', 'rar', 'dwg', 'step', 'stp'];

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ success: false, message: 'Server configuration error: Missing API key.' });
  }

  try {
    const form = formidable({
      maxFileSize: MAX_FILE_SIZE,
      keepExtensions: true,
    });

    const { fields, files } = await new Promise<{ fields: formidable.Fields; files: formidable.Files }>((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          reject(err);
        } else {
          resolve({ fields, files });
        }
      });
    });

    // Formidable v3 provides fields and files as arrays. We safely extract the first element if present.
    const getField = (name: string): string => {
      const field = fields[name];
      if (!field) return '';
      return (Array.isArray(field) ? field[0] : field).toString().trim();
    };

    // Honeypot check for spam bots
    const honeypot = getField('fi-hp-website');
    if (honeypot) {
      // Silently accept to avoid alerting spammers
      return res.status(200).json({ success: true, message: 'RFQ submitted successfully.' });
    }

    const company = getField('fi-text-company');
    const name = getField('fi-sender-fullName');
    const email = getField('fi-sender-email');
    const phone = getField('fi-text-phone');
    const material = getField('fi-text-material') || 'Not specified';
    const quantity = getField('fi-text-quantity') || 'Not specified';
    const message = getField('fi-text-message') || 'No message provided';

    if (!company || !name || !email || !phone) {
      return res.status(400).json({ success: false, message: 'Required fields are missing.' });
    }

    const attachments: any[] = [];
    const fileField = files['fi-file-attachment'];
    const file = Array.isArray(fileField) ? fileField[0] : fileField;

    if (file && file.size > 0) {
      // Formidable will reject if size exceeds maxFileSize config, but we double-check here
      if (file.size > MAX_FILE_SIZE) {
        return res.status(400).json({ success: false, message: 'File size exceeds 10MB limit.' });
      }

      // 'originalFilename' is used in formidable v3, 'name' in v2
      const originalFilename = file.originalFilename || (file as any).name || 'upload';
      const ext = originalFilename.split('.').pop()?.toLowerCase();
      
      if (!ext || !ALLOWED_EXTENSIONS.includes(ext)) {
        return res.status(400).json({ success: false, message: 'Invalid file type. Allowed: PDF, DWG, STEP, STP, DOC, DOCX, PNG, JPG, JPEG, ZIP, RAR.' });
      }

      const fileData = fs.readFileSync(file.filepath);
      
      attachments.push({
        filename: originalFilename,
        content: fileData, // Resend Node.js SDK accepts Buffers natively
      });
    }

    const cleanCompany = escapeHtml(company);
    const cleanName = escapeHtml(name);
    const cleanEmail = escapeHtml(email);
    const cleanPhone = escapeHtml(phone);
    const cleanMaterial = escapeHtml(material);
    const cleanQuantity = escapeHtml(quantity);
    const cleanMessage = escapeHtml(message);
    const cleanFilename = file && file.size > 0 ? escapeHtml(file.originalFilename || (file as any).name || 'upload') : 'None';

    const htmlContent = `
      <div style="font-family: sans-serif; max-w-2xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
        <h2 style="color: #1e3a8a; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">New RFQ Submission</h2>
        
        <h3 style="color: #374151; margin-top: 24px;">Company Details</h3>
        <p style="margin: 4px 0;"><strong>Company:</strong> ${cleanCompany}</p>
        
        <h3 style="color: #374151; margin-top: 24px;">Contact Person</h3>
        <p style="margin: 4px 0;"><strong>Name:</strong> ${cleanName}</p>
        <p style="margin: 4px 0;"><strong>Email:</strong> <a href="mailto:${cleanEmail}">${cleanEmail}</a></p>
        <p style="margin: 4px 0;"><strong>Phone:</strong> <a href="tel:${cleanPhone}">${cleanPhone}</a></p>
        <p style="margin: 4px 0;"><strong>WhatsApp:</strong> <a href="https://wa.me/${cleanPhone.replace(/\\D/g,'')}">Chat on WhatsApp</a></p>
        
        <h3 style="color: #374151; margin-top: 24px;">Project Requirements</h3>
        <p style="margin: 4px 0;"><strong>Industry / Material:</strong> ${cleanMaterial}</p>
        <p style="margin: 4px 0;"><strong>Quantity:</strong> ${cleanQuantity}</p>
        
        <h3 style="color: #374151; margin-top: 24px;">Message</h3>
        <div style="background-color: #f3f4f6; padding: 16px; border-radius: 6px; white-space: pre-wrap;">${cleanMessage}</div>
        
        <h3 style="color: #374151; margin-top: 24px;">Attachment Information</h3>
        <p style="margin: 4px 0;"><strong>File Attached:</strong> ${cleanFilename}</p>
        
        <p style="color: #9ca3af; font-size: 12px; margin-top: 32px; border-top: 1px solid #e5e7eb; padding-top: 16px;">
          Submission Date & Time: ${new Date().toUTCString()}
        </p>
      </div>
    `;

    const fromEmail = process.env.RFQ_FROM_EMAIL || 'onboarding@resend.dev';
    const toEmail = process.env.RFQ_TO_EMAIL;

    if (!toEmail) {
      throw new Error('Server configuration error: Missing destination email.');
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `Assure Valve <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New RFQ | ${company}`,
      html: htmlContent,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(500).json({ success: false, message: 'Failed to send email via Resend.' });
    }

    return res.status(200).json({ success: true, message: 'RFQ submitted successfully.' });

  } catch (err: any) {
    console.error('Server Error:', err);
    // If formidable throws a file size error, it can be caught here
    if (err.code === 1009) {
       return res.status(400).json({ success: false, message: 'File size exceeds 10MB limit.' });
    }
    return res.status(500).json({ 
      success: false, 
      message: err?.message || 'An unexpected error occurred.' 
    });
  }
}
