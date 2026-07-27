import { PageShell } from "../components/site/PageShell";
import { PageHero } from "../components/site/PageHero";
import { RFQ } from "../components/site/RFQ";

export default function Quote() {
  return (
    <PageShell>
      <PageHero
        crumb="Request Quote"
        eyebrow="Request For Quotation"
        title="Send us your drawing. Get a response in 24 hours."
        description="Upload a drawing, sample specification or component enquiry. Our engineering team reviews feasibility, materials and pricing — and responds the next working day."
      />
      <RFQ />
    </PageShell>
  );
}
