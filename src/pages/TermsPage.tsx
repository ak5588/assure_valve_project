import { PageShell } from "../components/site/PageShell";
import { PageHero } from "../components/site/PageHero";
import { SeoHead } from "../components/seo/SeoHead";
import { termsAndConditions } from "../lib/seoContent";

export default function TermsPage() {
  return (
    <PageShell>
      <SeoHead
        title="Terms & Conditions | Assure Valve"
        description="View the terms of use for the Assure Valve website and enquiry process."
        canonical="https://assurevalve.in/terms-and-conditions"
      />
      <PageHero crumb="Terms" eyebrow="Terms & Conditions" title="Website terms and enquiry conditions." description="Please review the basic terms governing website use and quotation discussions." />
      <section className="py-24 bg-background">
        <div className="container-industrial space-y-6 text-sm leading-relaxed text-muted-foreground">
          {termsAndConditions.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
