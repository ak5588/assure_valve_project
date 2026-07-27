import { PageShell } from "../components/site/PageShell";
import { PageHero } from "../components/site/PageHero";
import { Quality as QualitySection } from "../components/site/Quality";
import { CheckCircle2 } from "lucide-react";

const STAGES = [
  { n: "01", t: "Incoming Raw Material", d: "Mill test certificates verified; material grade, hardness and dimensions checked against PO." },
  { n: "02", t: "In-Process Inspection", d: "First-piece approval + patrol inspection every batch; setup validated before series run." },
  { n: "03", t: "Final Inspection", d: "100% dimensional check on critical dims; surface finish and geometric tolerances recorded." },
  { n: "04", t: "Pre-Dispatch Audit", d: "Visual, packing and documentation audit — inspection report accompanies every shipment." },
];

export default function QualityPage() {
  return (
    <PageShell>
      <PageHero
        crumb="Quality"
        eyebrow="Quality Assurance"
        title="Every component inspected. Every dimension recorded."
        description="A four-stage inspection process backed by calibrated instruments and traceable documentation — engineered to meet the tolerances that mission-critical applications demand."
      />
      <QualitySection />
      <section className="py-24 bg-background">
        <div className="container-industrial">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-accent" />
            <span className="text-eyebrow">Inspection Workflow</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight max-w-3xl mb-14">
            Four checkpoints between raw stock and dispatch.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {STAGES.map((s) => (
              <div key={s.n} className="bg-background p-8">
                <div className="font-display text-5xl font-bold text-accent">{s.n}</div>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-8">
            <div className="bg-secondary p-8">
              <h3 className="font-display text-xl font-bold text-foreground">Documentation with every batch</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {[
                  "Material Test Certificate (MTC)",
                  "Dimensional Inspection Report",
                  "Visual & Surface Finish Report",
                  "Packing List & Dispatch Note",
                ].map((x) => (
                  <li key={x} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" />{x}</li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary p-8">
              <h3 className="font-display text-xl font-bold text-foreground">Capabilities & tolerances</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {[
                  "Achievable tolerance ±0.005 mm",
                  "Surface finish up to Ra 0.4",
                  "Concentricity within 0.01 mm",
                  "Traceable calibrated instruments",
                ].map((x) => (
                  <li key={x} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" />{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
