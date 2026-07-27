import { Link } from "react-router-dom";
import { PageShell } from "../components/site/PageShell";
import { PageHero } from "../components/site/PageHero";
import { SeoHead } from "../components/seo/SeoHead";

export default function NotFoundPage() {
  return (
    <PageShell>
      <SeoHead
        title="Page Not Found | Assure Valve"
        description="The requested page could not be found. Return to the Assure Valve website home page."
        canonical="https://assurevalve.in/404"
      />
      <PageHero
        crumb="404"
        eyebrow="Page Not Found"
        title="The page you are looking for is not available."
        description="The link may be outdated or the page may have moved. Please return to the homepage or contact us for assistance."
      />
      <section className="py-24 bg-background">
        <div className="container-industrial">
          <Link to="/" className="inline-flex bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-accent-foreground">
            Back to Home
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
