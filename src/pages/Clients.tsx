import { PageShell } from "../components/site/PageShell";
import { PageHero } from "../components/site/PageHero";
import { Clients as ClientsSection } from "../components/site/Clients";
import { Testimonials } from "../components/site/Testimonials";
import { Industries } from "../components/site/Industries";

export default function ClientsPage() {
  return (
    <PageShell>
      <PageHero
        crumb="Clients"
        eyebrow="Clients & Industries"
        title="Trusted by global OEMs and Indian industrial majors."
        description="Long-term vendor relationships built on documentation, repeatability and on-time delivery — not lowest-cost promises."
      />
      <ClientsSection />
      <Industries />
      <Testimonials />
    </PageShell>
  );
}
