import { useState } from "react";
import { PageShell } from "../components/site/PageShell";
import { PageHero } from "../components/site/PageHero";
import { CERTIFICATES, type CertificateData } from "../data/certificates";
import { CertificateViewer } from "../components/site/CertificateViewer";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<CertificateData | null>(null);

  return (
    <>
      <PageShell>
      <PageHero
        crumb="Certifications"
        eyebrow="Credentials"
        title="Statutory and quality credentials that pass procurement audits."
        description="We maintain the registrations and documentation that OEM vendor-onboarding teams expect — available for verification on request."
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="container-industrial">
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {CERTIFICATES.map((c) => (
              <button 
                key={c.id} 
                onClick={() => setSelectedCert(c)}
                className="group flex flex-col text-left bg-background p-8 lg:p-10 hover:bg-secondary/30 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <div className="flex w-full items-start justify-between gap-4">
                  <c.icon className="h-10 w-10 text-accent group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  <span className={`text-[10px] font-semibold uppercase tracking-widest px-3 py-1 border ${c.status === "Verified" ? "text-accent border-accent" : "text-muted-foreground border-border"}`}>
                    {c.status}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                <div className="mt-6 flex items-center text-xs font-semibold uppercase tracking-widest text-primary gap-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  <span>View Certificate</span>
                  <div className="h-px w-4 bg-primary" />
                </div>
              </button>
            ))}
          </div>

          <div className="mt-14 bg-secondary p-8 lg:p-12">
            <h3 className="font-display text-2xl font-bold text-foreground">Need certificates for vendor registration?</h3>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              Copies of GST, Udyam certificates, PAN, cancelled cheque and bank details for vendor
              onboarding are shared on request. Write to <span className="text-primary font-semibold">assurevalvecomponent@gmail.com</span> with your vendor code.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
      
      <CertificateViewer 
        certificate={selectedCert} 
        onClose={() => setSelectedCert(null)} 
      />
    </>
  );
}
