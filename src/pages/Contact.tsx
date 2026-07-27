import { PageShell } from "../components/site/PageShell";
import { PageHero } from "../components/site/PageHero";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const CARDS = [
  { icon: MapPin, title: "Factory Address", body: "746/8 GIDC Industrial Estate,\nMakarpura, Vadodara,\nGujarat 390010, India" },
  { icon: Phone, title: "Phone / WhatsApp", body: "+91 926 539 7041\n+91 926 539 7041" },
  { icon: Mail, title: "Email", body: "alokkushwaha135@gmail.com\nworks@assurevalve.in" },
  { icon: Clock, title: "Working Hours", body: "Monday – Saturday\n9:00 AM to 7:00 PM IST" },
];

export default function Contact() {
  return (
    <PageShell>
      <PageHero
        crumb="Contact"
        eyebrow="Get In Touch"
        title="Talk to our engineering & sales team."
        description="For quotations, vendor registration, technical discussion or a plant visit — reach us on any of the channels below."
      />

      <section className="py-24 bg-background">
        <div className="container-industrial">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {CARDS.map((c) => (
              <div key={c.title} className="bg-background p-8">
                <c.icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
                <div className="mt-5 text-eyebrow text-muted-foreground">{c.title}</div>
                <div className="mt-2 text-sm text-foreground whitespace-pre-line leading-relaxed">{c.body}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-10 items-stretch">
            <div className="bg-secondary p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-accent" />
                <span className="text-eyebrow">Visit The Plant</span>
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground tracking-tight leading-tight">
                We welcome plant visits and technical audits.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Procurement and quality teams are welcome to visit our facility in Makarpura GIDC, Vadodara.
                Please schedule a visit at least 48 hours in advance via email so our engineering team can be
                available.
              </p>
              <a
                href="mailto:alokkushwaha135@gmail.com"
                className="mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-primary-deep transition-colors"
              >
                Schedule A Visit
              </a>
            </div>

            <div className="min-h-[360px] bg-primary-deep grid-blueprint relative overflow-hidden">
              <iframe
                title="Assure Valve — Makarpura, Vadodara"
                src="https://www.google.com/maps?q=Makarpura+GIDC+Vadodara&output=embed"
                loading="lazy"
                className="absolute inset-0 w-full h-full border-0 grayscale contrast-125"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
