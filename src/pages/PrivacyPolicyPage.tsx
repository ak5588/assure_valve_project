import { PageShell } from "../components/site/PageShell";
import { PageHero } from "../components/site/PageHero";
import { SeoHead } from "../components/seo/SeoHead";
import { privacyPolicy } from "../lib/seoContent";

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <SeoHead
        title="Privacy Policy | Assure Valve"
        description="Read Assure Valve’s privacy policy for website enquiries and communication practices."
        canonical="https://assurevalve.in/privacy-policy"
      />
      <PageHero crumb="Privacy Policy" eyebrow="Privacy" title="Privacy policy for website enquiries and communications." description="How we handle information submitted through the website and direct contact channels." />
      <section className="py-24 bg-background">
        <div className="container-industrial space-y-6 text-sm leading-relaxed text-muted-foreground">
          {privacyPolicy.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
