import { PageShell } from "../components/site/PageShell";
import { PageHero } from "../components/site/PageHero";
import { SeoHead } from "../components/seo/SeoHead";
import { industries } from "../lib/seoContent";
import { Link } from "react-router-dom";

export default function IndustriesPage() {
  return (
    <PageShell>
      <SeoHead
        title="Industries Served | Valve Components for Oil, Gas & Power"
        description="Assure Valve serves oil & gas, power plants, petrochemical, chemical, marine, steel and heavy engineering customers with mission-critical components."
        canonical="https://assurevalve.in/industries"
      />
      <PageHero
        crumb="Industries"
        eyebrow="Industries Served"
        title="Supporting critical applications where reliability matters."
        description="Our work is built for industrial environments where service life, uptime and dimensional integrity are essential."
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="container-industrial grid gap-8 lg:grid-cols-2">
          {industries.map((industry) => (
            <div key={industry} className="border border-border bg-secondary p-8">
              <h2 className="text-2xl font-semibold text-foreground">{industry}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Assure Valve supports customers in {industry.toLowerCase()} with components and repair work that require dependable materials, clear engineering support and repeatable processing.
              </p>
            </div>
          ))}
        </div>

        <div className="container-industrial mt-16 rounded-none border border-border bg-primary-deep p-10 text-white">
          <h2 className="text-3xl font-semibold">Need a technical partner for a valve or engineering requirement?</h2>
          <p className="mt-4 max-w-2xl text-white/75">
            Whether you need a new component, a refurbishment project or a repair solution, our team can help review the requirement and respond with a clear manufacturing approach.
          </p>
          <Link to="/quote" className="mt-8 inline-flex bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-accent-foreground">
            Request a Quote
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
