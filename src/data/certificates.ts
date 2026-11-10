import { BadgeCheck, FileCheck, type LucideIcon } from "lucide-react";
import gstPdf from "@/assets/certificates_pdf/gst-certificate.pdf";
import udyamPdf from "@/assets/certificates_pdf/udyam-certificate.pdf";

export type CertificateStatus = "Verified" | "In Process" | "Active";

export interface CertificateData {
  id: string;
  title: string;
  description: string;
  status: CertificateStatus;
  pdf: string;
  downloadName: string;
  icon: LucideIcon;
}

export const CERTIFICATES: CertificateData[] = [
  {
    id: "gst",
    title: "GST Registered",
    description: "GST Registration Certificate",
    status: "Verified",
    pdf: gstPdf,
    downloadName: "Assure_Valve_GST_Certificate.pdf",
    icon: BadgeCheck,
  },
  {
    id: "udyam",
    title: "Udyam Registered",
    description: "Udyam Registration Certificate",
    status: "Verified",
    pdf: udyamPdf,
    downloadName: "Assure_Valve_Udyam_Certificate.pdf",
    icon: FileCheck,
  },
];
