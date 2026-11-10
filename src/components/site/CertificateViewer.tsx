import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink } from "lucide-react";
import type { CertificateData } from "@/data/certificates";

interface CertificateViewerProps {
  certificate: CertificateData | null;
  onClose: () => void;
}

export function CertificateViewer({ certificate, onClose }: CertificateViewerProps) {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (certificate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [certificate]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && certificate) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [certificate, onClose]);

  const handleDownload = async () => {
    if (!certificate) return;
    const downloadName = certificate.downloadName || `${certificate.title.replace(/\s+/g, "_")}.pdf`;
    try {
      const response = await fetch(certificate.pdf);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = downloadName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch {
      const link = document.createElement("a");
      link.href = certificate.pdf;
      link.download = downloadName;
      link.target = "_blank";
      link.click();
    }
  };

  return (
    <AnimatePresence>
      {certificate && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0 }}
            className="relative w-full max-w-5xl h-[90vh] sm:h-[85vh] bg-background rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-border"
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border bg-card">
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex h-12 w-12 rounded-full bg-primary/10 items-center justify-center shrink-0">
                  <certificate.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 id="certificate-title" className="font-display text-lg sm:text-xl font-bold text-foreground">
                    {certificate.title}
                  </h2>
                  <div className="flex items-center gap-3 mt-1">
                    <span
                      className={`text-[10px] sm:text-xs font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${
                        certificate.status === "Verified" || certificate.status === "Active"
                          ? "bg-accent/10 text-accent border-accent/20"
                          : "bg-muted text-muted-foreground border-border"
                      }`}
                    >
                      {certificate.status}
                    </span>
                    <span className="text-xs text-muted-foreground hidden sm:inline-block">
                      {certificate.description}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <a
                  href={certificate.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground bg-secondary hover:bg-secondary/80 rounded-md transition-colors"
                  title="View Full Screen"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="hidden lg:inline">Full Screen</span>
                </a>
                <button
                  type="button"
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-md transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
                  title="Download PDF"
                >
                  <Download className="h-4 w-4" />
                  <span className="hidden lg:inline">Download</span>
                </button>
                <div className="w-px h-6 bg-border mx-1" />
                <button
                  onClick={onClose}
                  className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 w-full bg-muted/30 relative">
              {/* Fallback overlay for mobile devices that don't support iframe PDF viewing well */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center sm:hidden bg-background pointer-events-none z-0">
                <certificate.icon className="h-16 w-16 text-muted-foreground/30 mb-4" />
                <p className="text-sm text-muted-foreground mb-4">
                  For the best viewing experience on mobile, please download the certificate.
                </p>
                <button
                  type="button"
                  onClick={handleDownload}
                  className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground bg-primary rounded-md shadow-sm"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download Certificate
                </button>
              </div>
              
              <iframe
                src={`${certificate.pdf}#view=FitH`}
                className="w-full h-full relative z-10 border-none bg-white"
                title={`${certificate.title} Document`}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
