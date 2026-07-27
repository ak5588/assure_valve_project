import { motion } from "framer-motion";
import { Target, Clock, Award, Users, Microscope, Truck } from "lucide-react";

const REASONS = [
  { icon: Target, title: "Tolerance ±0.005 mm", desc: "Precision inspection on every batch with Mitutoyo instruments." },
  { icon: Microscope, title: "In-House Quality Lab", desc: "Incoming, in-process, final and pre-dispatch inspection stages." },
  { icon: Clock, title: "98.7% On-Time Delivery", desc: "Disciplined production planning and daily WIP tracking." },
  { icon: Award, title: "Approved Vendor", desc: "Certified supplier to valve OEMs and turbine part manufacturers." },
  { icon: Users, title: "Experienced Engineers", desc: "Setter-operators and QC engineers averaging 12+ years experience." },
  { icon: Truck, title: "Ready for OEM Scale", desc: "Batch quantities from prototypes to 10,000+ pcs per month." },
];

export function WhyChoose() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container-industrial">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-accent" />
            <span className="text-eyebrow">Why Assure Valve</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
            Six reasons global buyers keep coming back.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-background border border-border p-8 hover:border-accent transition-colors group"
            >
              <div className="flex items-start justify-between">
                <r.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                <span className="font-display text-2xl font-bold text-border group-hover:text-accent transition-colors">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-8 font-display text-lg font-bold text-foreground">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}