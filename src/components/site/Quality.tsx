import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import qImg from "@/assets/quality-inspection.jpg";

const INSTRUMENTS = [
  "Mitutoyo Digital Micrometers",
  "Mitutoyo Vernier Calipers",
  "Height Gauges",
  "Dial Vernier",
  "Bore Dial Gauges",
  "Depth Micrometers",
  "Surface Roughness Gauge",
  "Master Setting Blocks",
];

export function Quality() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container-industrial grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 relative"
        >
          <img
            src={qImg}
            alt="Engineer measuring component with Mitutoyo micrometer"
            loading="lazy"
            width={1408}
            height={1008}
            className="w-full aspect-[4/3] object-cover"
          />
          <div className="absolute -bottom-6 -left-6 bg-primary p-6 max-w-[240px] hidden md:block">
            <div className="font-display text-4xl font-bold text-white leading-none">±0.005<span className="text-accent">mm</span></div>
            <div className="mt-2 text-xs uppercase tracking-widest text-white/70">
              Achievable tolerance on critical dims
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-accent" />
            <span className="text-eyebrow">Quality Assurance</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
            Every component inspected. Every dimension recorded.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Four-stage inspection — incoming raw material, in-process, final and pre-dispatch —
            ensures nothing leaves our facility without meeting drawing specifications. All
            instruments are calibrated and traceable.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
            {INSTRUMENTS.map((i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>{i}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {["GST Registered", "MSME Registered", "Udyam Registered", "ISO 9001 (In-process)"].map((b) => (
              <span key={b} className="text-xs font-semibold uppercase tracking-widest border border-primary/20 bg-background px-4 py-2 text-primary">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}