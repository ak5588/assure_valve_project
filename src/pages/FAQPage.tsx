import { PageShell } from "../components/site/PageShell";
import { PageHero } from "../components/site/PageHero";
import { SeoHead } from "../components/seo/SeoHead";
import { StructuredData } from "../components/seo/StructuredData";
import { faqItems } from "../lib/seoContent";
import { Link } from "react-router-dom";

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <PageShell>
      <SeoHead
        title="FAQ | Assure Valve Manufacturing & Repair Services"
        description="Find answers about valve component manufacturing, repair capability, lead times, materials and project support at Assure Valve."
        canonical="https://assurevalve.in/faq"
      />
      <StructuredData data={faqSchema} />
      <PageHero
        crumb="FAQ"
        eyebrow="Frequently Asked Questions"
        title="Helpful answers for buyers, engineers and maintenance teams."
        description="We have outlined common questions around manufacturing scope, repair capability, materials and enquiry handling."
      />

      <section className="py-24 bg-background">
        <div className="container-industrial space-y-6">
          {faqItems.map((item) => (
            <details key={item.question} className="border border-border bg-secondary p-6">
              <summary className="cursor-pointer text-lg font-semibold text-foreground">{item.question}</summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>

        <div className="container-industrial mt-16">
          <Link to="/contact" className="inline-flex bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
            Contact the Team
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
