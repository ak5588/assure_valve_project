import { PageShell } from "../components/site/PageShell";
import { PageHero } from "../components/site/PageHero";
import { Award, FileCheck, ShieldCheck, BadgeCheck } from "lucide-react";

const CERTS = [
  { icon: BadgeCheck, title: "GST Registered", body: "Valid GSTIN, invoicing-ready for pan-India B2B procurement.", status: "Active" },
  { icon: ShieldCheck, title: "MSME Registered", body: "Recognised Micro, Small & Medium Enterprise under the MSMED Act, 2006.", status: "Active" },
  { icon: FileCheck, title: "Udyam Registered", body: "Government-of-India Udyam registration for MSME benefits and vendor onboarding.", status: "Active" },
  { icon: Award, title: "ISO 9001:2015", body: "Quality Management System implementation and certification in progress.", status: "In Process" },
];

export default function Certifications() {
  return (
    <PageShell>
      <PageHero
        crumb="Certifications"
        eyebrow="Credentials"
        title="Statutory and quality credentials that pass procurement audits."
        description="We maintain the registrations and documentation that OEM vendor-onboarding teams expect — available for verification on request."
      />

      <section className="py-24 bg-background">
        <div className="container-industrial">
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {CERTS.map((c) => (
              <div key={c.title} className="bg-background p-8 lg:p-10">
                <div className="flex items-start justify-between gap-4">
                  <c.icon className="h-10 w-10 text-accent" strokeWidth={1.5} />
                  <span className={`text-[10px] font-semibold uppercase tracking-widest px-3 py-1 border ${c.status === "Active" ? "text-accent border-accent" : "text-muted-foreground border-border"}`}>
                    {c.status}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-foreground">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-secondary p-8 lg:p-12">
            <h3 className="font-display text-2xl font-bold text-foreground">Need certificates for vendor registration?</h3>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              Copies of GST, Udyam, MSME certificates, PAN, cancelled cheque and bank details for vendor
              onboarding are shared on request. Write to <span className="text-primary font-semibold">alokkushwaha135@gmail.com</span> with your vendor code.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
