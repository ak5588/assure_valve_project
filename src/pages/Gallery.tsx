import { PageShell } from "../components/site/PageShell";
import { PageHero } from "../components/site/PageHero";
import { Gallery as GallerySection } from "../components/site/Gallery";

export default function GalleryPage() {
  return (
    <PageShell>
      <PageHero
        crumb="Gallery"
        eyebrow="Inside The Facility"
        title="A closer look at the shop floor."
        description="Modern CNC infrastructure, disciplined workflow and skilled engineers — engineered for repeatable quality."
      />
      <GallerySection />
    </PageShell>
  );
}
