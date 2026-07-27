import { useParams, Link } from "react-router-dom";
import { PageShell } from "../components/site/PageShell";
import { PageHero } from "../components/site/PageHero";
import { SeoHead } from "../components/seo/SeoHead";
import { StructuredData } from "../components/seo/StructuredData";
import { services, siteConfig } from "../lib/seoContent";

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <PageShell>
        <PageHero crumb="Service" eyebrow="Service Not Found" title="The requested service page could not be found." description="Please return to the services overview and choose a service to view." />
      </PageShell>
    );
  }

  const serviceSchema = {
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
  };

  return (
    <PageShell>
      <SeoHead
        title={`${service.title} | Assure Valve`}
        description={service.summary}
        canonical={`https://assurevalve.in/services/${service.slug}`}
      />
      <StructuredData data={serviceSchema} />
      <PageHero crumb="Services" eyebrow="Service Detail" title={service.title} description={service.summary} />
      <section className="py-24 bg-background">
        <div className="container-industrial space-y-8">
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">{service.details}</p>
          <div className="flex flex-wrap gap-2">
            {service.keywords.map((keyword) => (
              <span key={keyword} className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
                {keyword}
              </span>
            ))}
          </div>
          <div className="rounded-none border border-border bg-secondary p-8">
            <h2 className="text-2xl font-semibold text-foreground">Ready to discuss your requirement?</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Share drawings, dimensions or repair details and our team will review the requirement and respond with a practical next step.</p>
            <Link to="/quote" className="mt-6 inline-flex bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-accent-foreground">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
