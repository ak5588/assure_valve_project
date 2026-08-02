import { motion } from "framer-motion";
import { PageShell } from "../components/site/PageShell";
import { PageHero } from "../components/site/PageHero";
import cnc from "../assets/cnc-turning.jpg";
import factory from "../assets/factory-floor.jpg";

const MACHINES = [
  { name: "Jyoti DX 200", type: "CNC Turning Centre", spec: "Chuck Ø 200 mm · Max turning Ø 250 mm · Length 500 mm", qty: 3 },
  { name: "Jyoti DX 250", type: "CNC Turning Centre", spec: "Chuck Ø 250 mm · Max turning Ø 320 mm · Length 750 mm", qty: 2 },
  { name: "VMC 640", type: "Vertical Machining Centre", spec: "X 640 · Y 400 · Z 500 mm · BT-40 · 10,000 RPM", qty: 2 },
  { name: "VMC 850", type: "Vertical Machining Centre", spec: "X 850 · Y 500 · Z 550 mm · BT-40 · 8,000 RPM", qty: 1 },
  { name: "Conventional Lathes", type: "Support Machining", spec: "6 ft / 8 ft beds for rough turning & secondary ops", qty: 3 },
  { name: "Radial Drill", type: "Drilling & Tapping", spec: "Ø 40 mm capacity · 1600 mm arm", qty: 1 },
  { name: "TIG / Argon Welding Stations", type: "Welding", spec: "Stellite hard-facing, SS & alloy welding — certified operators", qty: 2 },
  { name: "Surface & Cylindrical Grinders", type: "Finishing", spec: "For seat & stem grinding — Ra 0.4 achievable", qty: 2 },
];

export default function Machines() {
  return (
    <PageShell>
      <PageHero
        crumb="Machines"
        eyebrow="Plant & Machinery"
        title="Modern CNC and VMC infrastructure engineered for repeatability."
        description="12+ CNC and VMC and support machines across a 10,000 sq. ft. facility in Makarpura, Vadodara — configured for high-mix precision component manufacturing."
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="container-industrial">
          <div className="grid md:grid-cols-2 gap-4 mb-16">
            <img src={factory} alt="Shop floor" className="w-full aspect-[4/3] object-cover" loading="lazy" />
            <img src={cnc} alt="CNC turning centre" className="w-full aspect-[4/3] object-cover" loading="lazy" />
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {MACHINES.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="bg-background p-8 flex items-start justify-between gap-6"
              >
                <div>
                  <div className="text-eyebrow text-accent">{m.type}</div>
                  <h3 className="mt-2 font-display text-xl font-bold text-foreground">{m.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.spec}</p>
                </div>
                <div className="shrink-0 text-right">
                  <div className="font-display text-3xl font-bold text-primary">{m.qty}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Units</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-px bg-border border border-border">
            {[
              { k: "10,000", v: "Sq. Ft. Facility" },
              { k: "12+", v: "CNC and VMC & Support Machines" },
              { k: "3 Shift", v: "Operational Capacity" },
            ].map((s) => (
              <div key={s.v} className="bg-secondary p-8 text-center">
                <div className="font-display text-4xl font-bold text-primary">{s.k}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
