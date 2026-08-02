import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { PageShell } from "../components/site/PageShell";
import { PageHero } from "../components/site/PageHero";
import { SeoHead } from "../components/seo/SeoHead";
import { StructuredData } from "../components/seo/StructuredData";
import { services, siteConfig } from "../lib/seoContent";

const getAnchorsForService = (slug: string) => {
  switch (slug) {
    case "valve-component-manufacturing": return ["valve-components"];
    case "valve-repair-refurbishment": return ["fabrication"];
    case "cnc-machining": return ["cnc-turning", "vmc-machining"];
    case "industrial-welding": return ["stellite-welding"];
    case "thermal-spray-hvof-coating": return ["turbine-components"];
    default: return [];
  }
};

export default function ServicesPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const y = element.getBoundingClientRect().top + window.scrollY - 120;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);
  const serviceSchemas = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.summary,
    provider: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: siteConfig.website,
    },
  }));

  return (
    <PageShell>
      <SeoHead
        title="Valve Manufacturing Services | CNC and VMC Machining & Welding"
        description="Explore Assure Valve’s services including valve component manufacturing, CNC and VMC machining, valve repair, welding, hard facing and thermal spray coating."
        canonical="https://assurevalve.in/services"
      />
      <StructuredData data={{ "@context": "https://schema.org", "@graph": serviceSchemas }} />
      <PageHero
        crumb="Services"
        eyebrow="Our Core Services"
        title="Engineering support for precision manufacturing, repair and surface protection."
        description="From custom manufacturing to industrial repair and coating, our team supports demanding valve and engineering applications with practical technical execution."
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="container-industrial grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="border border-border bg-secondary p-8 lg:p-10 relative">
              {getAnchorsForService(service.slug).map(id => (
                <div key={id} id={id} className="absolute -top-32" aria-hidden="true" />
              ))}
              <div className="text-eyebrow text-accent">{service.title}</div>
              <p className="mt-4 text-lg font-semibold text-foreground">{service.summary}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.details}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.keywords.map((keyword) => (
                  <span key={keyword} className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {keyword}
                  </span>
                ))}
              </div>
              <Link to={`/services/${service.slug}`} className="mt-8 inline-flex text-sm font-semibold uppercase tracking-wider text-accent hover:text-accent-glow">
                Read more
              </Link>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
