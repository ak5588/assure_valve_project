import { motion } from "framer-motion";
import { Cog, Layers, Flame, Wrench, Gauge, HardHat, ArrowUpRight } from "lucide-react";

const CAPS = [
  { icon: Cog, title: "CNC Turning", desc: "High-precision turning on Jyoti DX200 & DX250 for shafts, stems, spindles and rotational valve parts." },
  { icon: Layers, title: "VMC Machining", desc: "Vertical machining centre operations for bodies, bonnets, brackets and complex prismatic geometries." },
  { icon: Flame, title: "Stellite & TIG Welding", desc: "Certified stellite hard-facing and argon welding on valve seats, discs and turbine components." },
  { icon: Wrench, title: "Fabrication & Job Work", desc: "Custom engineering job works, fabrication and assemblies as per drawing, sample or specification." },
  { icon: Gauge, title: "Valve Components", desc: "Bodies, bonnets, stems, discs, seats and glands for gate, globe, ball, check and control valves." },
  { icon: HardHat, title: "Turbine Components", desc: "Precision-ground turbine parts for steam turbines and power-plant applications with critical tolerances." },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 lg:py-32 bg-background">
      <div className="container-industrial">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-accent" />
              <span className="text-eyebrow">What We Do</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
              End-to-end precision manufacturing under one roof.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              From bar stock to finished, inspected components — our capabilities cover
              CNC turning, VMC machining, specialist welding and quality-controlled fabrication
              tailored for valve, turbine and heavy-engineering applications.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {CAPS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative bg-background p-8 lg:p-10 hover:bg-primary transition-all duration-300 cursor-pointer"
            >
              <div className="absolute top-0 left-0 h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-500" />
              <c.icon className="h-10 w-10 text-primary group-hover:text-accent transition-colors" strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-xl font-bold text-foreground group-hover:text-white transition-colors">
                {c.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground group-hover:text-white/70 leading-relaxed transition-colors">
                {c.desc}
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary group-hover:text-accent transition-colors">
                Learn more <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}