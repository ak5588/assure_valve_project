import { PageShell } from "../components/site/PageShell";
import { PageHero } from "../components/site/PageHero";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SeoHead } from "../components/seo/SeoHead";
import { StructuredData } from "../components/seo/StructuredData";
import { siteConfig } from "../lib/seoContent";

const CARDS = [
  { icon: MapPin, title: "Factory Address", body: "Plot No. 298/1/B-4\nGIDC Makarpura\nVadodara\nGujarat – 390010\nIndia" },
  { icon: Phone, title: "Phone / WhatsApp", body: "+91 98981 29694" },
  { icon: Mail, title: "Email", body: "assurevalvecomponent@gmail.com" },
  { icon: Clock, title: "Working Hours", body: "24/7 Customer Support\nAvailable via Phone & WhatsApp" },
];

export default function Contact() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.companyName,
    image: "https://assurevalve.in/assure_valve_logo.png",
    url: siteConfig.website,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 298/1/B-4",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390010",
      addressCountry: "IN",
    },
    areaServed: ["Vadodara", "Gujarat", "India"],
    description: "Valve component manufacturer and repair company in Vadodara offering CNC and VMC machining, industrial welding, coating and refurbishment services.",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.3220,
      longitude: 73.1807,
    },
  };

  return (
    <PageShell>
      <SeoHead
        title="Contact Assure Valve | Request a Valve Component Quote"
        description="Contact Assure Valve for valve component manufacturing, industrial repair, technical consultation and urgent RFQ support in Vadodara and across India."
        canonical="https://assurevalve.in/contact"
      />
      <StructuredData data={localBusinessSchema} />
      <PageHero
        crumb="Contact"
        eyebrow="Get In Touch"
        title="Talk to our engineering & sales team."
        description="For quotations, technical discussion, refurbishment support or a plant visit — reach us on any of the channels below."
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="container-industrial">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {CARDS.map((c) => (
              <div key={c.title} className="bg-background p-8">
                <c.icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
                <div className="mt-5 text-eyebrow text-muted-foreground">{c.title}</div>
                <div className="mt-2 text-sm text-foreground whitespace-pre-line leading-relaxed break-words">{c.body}</div>
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
                Procurement, maintenance and quality teams are welcome to discuss requirements or visit our facility in Makarpura GIDC, Vadodara. Please share your enquiry in advance so our engineering team can be available for a focused discussion.
              </p>
              <a
                href="mailto:assurevalvecomponent@gmail.com"
                className="mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-primary-deep transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
              >
                Schedule A Visit
              </a>
            </div>

            <div className="flex flex-col border border-border h-full bg-background relative group">
              <div className="flex-1 min-h-[280px] bg-primary-deep grid-blueprint relative overflow-hidden">
                <iframe
                  title="Assure Valve — Makarpura, Vadodara"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3692.630088191627!2d73.19216257529119!3d22.254109679719825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDE1JzE0LjgiTiA3M8KwMTEnNDEuMSJF!5e0!3m2!1sen!2sin!4v1785675667759!5m2!1sen!2sin"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full border-0 grayscale contrast-125"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href="https://www.google.com/maps?q=22.254109679719825,73.19216257529119"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-primary-deep transition-colors shadow-lg z-10 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-accent opacity-0 group-hover:opacity-100 lg:opacity-100"
                >
                  <MapPin className="h-3 w-3" />
                  Open in Google Maps
                </a>
              </div>
              <div className="p-6 bg-secondary flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-t border-border">
                <div className="space-y-1.5">
                  <div className="font-semibold text-sm uppercase tracking-wider text-foreground">
                    Assure Valve Component Mfg. Co.
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    Makarpura GIDC, Vadodara,<br />Gujarat, India
                  </div>
                </div>
                <div className="sm:text-right space-y-1.5">
                  <div className="flex items-center gap-2 sm:justify-end text-sm font-medium text-foreground">
                    <Phone className="h-3.5 w-3.5 text-accent" />
                    +91 98981 29694
                  </div>
                  <div className="flex items-center gap-2 sm:justify-end text-sm text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 text-accent" />
                    24/7 Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
