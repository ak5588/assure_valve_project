import { ArrowRight, MapPin, Phone, Mail, Clock, Upload, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import type { FormEvent } from "react";

export function RFQ() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [fileName, setFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Capture all form data, including the file attachment
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://forminit.com/f/4pohkfgnr7j", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        e.currentTarget.reset(); // Clear form on success
        setFileName(""); // Clear file name on success
      } else {
        console.error("Web3Forms Error Data:", data);
        setSubmitStatus("error");
        alert(`Submission Failed: ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setSubmitStatus("error");
      alert("Submission Failed: Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rfq" className="py-24 lg:py-32 bg-secondary">
      <div className="container-industrial grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-accent" />
            <span className="text-eyebrow">Request For Quotation</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
            Send us your drawing. Get a response in 24 hours.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Share your drawing, sample specification or component enquiry. Our engineering
            team will review feasibility, materials and pricing — and respond the next
            working day.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { icon: MapPin, l: "746/8 GIDC Industrial Estate, Makarpura, Vadodara, Gujarat, India" },
              { icon: Phone, l: "+91 926 539 7041" },
              { icon: Mail, l: "alokkushwaha135@gmail.com" },
              { icon: Clock, l: "Mon – Sat · 9:00 AM to 7:00 PM IST" },
            ].map((x, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-0.5 h-9 w-9 bg-background border border-border flex items-center justify-center shrink-0">
                  <x.icon className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm text-foreground leading-relaxed">{x.l}</span>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="lg:col-span-7 bg-background border border-border p-8 lg:p-10 space-y-5 relative">

          {/* Success Overlay overlaying the form when submitted successfully */}
          {submitStatus === "success" && (
            <div className="absolute inset-0 z-10 bg-background/95 flex flex-col items-center justify-center p-8 text-center border border-border">
              <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">RFQ Sent Successfully!</h3>
              <p className="text-muted-foreground mb-6">We've received your request and will get back to you within 24 hours.</p>
              <button
                type="button"
                onClick={() => setSubmitStatus("idle")}
                className="bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-primary-deep transition-colors"
              >
                Send Another Request
              </button>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Company Name *" name="fi-text-company" placeholder="Your company" required />
            <Field label="Contact Person *" name="fi-sender-fullName" placeholder="Full name" required />
            <Field label="Email *" name="fi-sender-email" placeholder="you@company.com" type="email" required />
            <Field label="Phone *" name="fi-text-phone" placeholder="+91" type="tel" required />
            <Field label="Material" name="fi-text-material" placeholder="e.g. SS 316, F22, Stellite 6" />
            <Field label="Quantity" name="fi-text-quantity" placeholder="e.g. 250 pcs / month" />
          </div>

          {/* Updated File Upload Area */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Component Drawing (PDF / DWG / STEP)
            </label>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="mt-2 border-2 border-dashed border-border p-6 flex flex-col items-center justify-center text-center hover:border-accent hover:bg-accent/5 transition-colors cursor-pointer group"
            >
              <input
                type="file"
                name="fi-file-attachment"
                className="hidden"
                ref={fileInputRef}
                onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                accept=".pdf,.dwg,.step,.stp,.png,.jpg,.jpeg"
              />
              <Upload className="h-6 w-6 text-muted-foreground group-hover:text-accent mb-2 transition-colors" />
              <div className="text-sm text-foreground font-medium">
                {fileName ? fileName : "Click to upload drawing"}
              </div>
              {!fileName && (
                <div className="text-xs text-muted-foreground mt-1">max 20 MB</div>
              )}
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <textarea
              name="fi-text-message"
              rows={4}
              placeholder="Describe your requirement, tolerances, application, delivery timeline…"
              className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {submitStatus === "error" && (
            <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-3 border border-red-500/20">
              <AlertCircle className="h-4 w-4" />
              <span>Something went wrong. Please try again later or contact us directly.</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-primary-deep transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                Submitting...
                <Loader2 className="h-4 w-4 animate-spin" />
              </>
            ) : (
              <>
                Submit RFQ
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>

          <p className="text-xs text-muted-foreground">
            Your enquiry is confidential and used only for quotation purposes.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  );
}