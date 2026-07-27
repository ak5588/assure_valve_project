import { PageShell } from "../components/site/PageShell";
import { PageHero } from "../components/site/PageHero";
import { RFQ } from "../components/site/RFQ";
import { SeoHead } from "../components/seo/SeoHead";

export default function Quote() {
  return (
    <PageShell>
      <SeoHead
        title="Request a Quote | Assure Valve Component Manufacturing"
        description="Share your drawing, sample or requirement with Assure Valve for a fast technical review and manufacturing quotation."
        canonical="https://assurevalve.in/quote"
      />
      <PageHero
        crumb="Request Quote"
        eyebrow="Request For Quotation"
        title="Send us your drawing. Get a response with a practical quotation."
        description="Upload a drawing, sample specification or component enquiry. Our engineering team reviews feasibility, materials and service approach before responding with the next step."
      />
      <RFQ />
    </PageShell>
  );
}
