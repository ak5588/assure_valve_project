import { motion } from "framer-motion";
import { Target, Clock, Award, Users, Microscope, Truck } from "lucide-react";

const REASONS = [
  { icon: Target, title: "Backed by 20+ years of experience", desc: "Our leadership and technical team bring a practical understanding of valve engineering, repair and manufacturing workflows." },
  { icon: Microscope, title: "Engineering-led quality support", desc: "Inspection, documentation and traceability are built into every stage of the process." },
  { icon: Clock, title: "Responsive to urgent enquiries", desc: "We support repeat production as well as fast-moving repair and refurbishment requirements." },
  { icon: Award, title: "Manufacturing capability under one roof", desc: "Machining, welding, hard facing and coating services are coordinated to reduce handoffs and delays." },
  { icon: Users, title: "Practical industry knowledge", desc: "We understand the operating conditions and service demands of critical industrial valve applications." },
  { icon: Truck, title: "Trusted by industrial buyers", desc: "Our work is shaped around reliability, repeatability and clear communication from enquiry to dispatch." },
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