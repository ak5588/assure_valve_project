import { motion } from "framer-motion";
import factoryImg from "@/assets/factory-floor.jpg";

const STEPS = [
  { n: "01", title: "RFQ & Drawing Review", desc: "Engineering team reviews drawings, materials and tolerances within 24 hours." },
  { n: "02", title: "Process Planning", desc: "Tooling, fixturing and CNC programs designed for repeatable precision." },
  { n: "03", title: "Precision Machining", desc: "CNC turning, VMC machining and welding on calibrated equipment." },
  { n: "04", title: "Multi-Stage Inspection", desc: "Incoming, in-process, final and pre-dispatch QC with Mitutoyo gauges." },
  { n: "05", title: "Packing & Dispatch", desc: "VCI-protected packing and documentation for domestic & export shipping." },
];

export function Process() {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container-industrial">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-accent" />
            <span className="text-eyebrow">Manufacturing Process</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
            From enquiry to dispatch, engineered for consistency.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28">
              <img
                src={factoryImg}
                alt="Assure Valve manufacturing shop floor"
                loading="lazy"
                width={1600}
                height={1008}
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent p-6 max-w-[220px]">
                <div className="font-display text-3xl font-bold text-accent-foreground leading-none">15,000</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-accent-foreground/80">
                  sq. ft. plant area, Makarpura GIDC
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative border-l border-border pl-8">
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative pb-12 last:pb-0"
                >
                  <div className="absolute -left-[41px] top-1 h-4 w-4 bg-background border-2 border-accent" />
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-sm font-bold text-accent tracking-widest">{s.n}</span>
                    <h3 className="font-display text-2xl font-bold text-foreground">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}