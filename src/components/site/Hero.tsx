import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-cnc.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-primary-deep">
      <img
        src={heroImg}
        alt="Precision CNC machining of a valve component"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-deep via-primary-deep/85 to-primary-deep/30" />
      <div className="absolute inset-0 grid-blueprint opacity-40" />

      {/* Accent bar */}
      <div className="absolute left-0 top-1/2 h-1 w-24 bg-accent" />

      <div className="relative z-10 container-industrial pt-40 pb-24 lg:pt-48 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-accent" />
            <span className="text-eyebrow text-accent">Trusted Manufacturing Partner Since 2005</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
            Precision <span className="text-accent">Valve Components</span>, Turbine Parts &{" "}
            <span className="block sm:inline">Specialized Welding Solutions.</span>
          </h1>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-white/75 max-w-2xl leading-relaxed">
            CNC machining, stellite and inconel welding, HVOF coating, thermal spray and
            valve repair for OEMs across valve, pump, chemical and power industries.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
            <a
              href="#rfq"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-accent-glow transition-colors"
            >
              Request Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#capabilities"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 border border-white/30 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Explore Capabilities
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 text-white/60 text-xs uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent" /> MSME · Udyam · GST Registered
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div>Tolerance up to ±0.005 mm</div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div>On-time Delivery 98.7%</div>
          </div>
        </motion.div>
      </div>

      {/* Bottom stat strip */}
      <div className="absolute bottom-0 inset-x-0 border-t border-white/10 bg-primary-deep/60 backdrop-blur-sm">
        <div className="container-industrial grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {[
            { k: "20+", v: "Years Experience" },
            { k: "500+", v: "Projects Delivered" },
            { k: "12", v: "CNC & Support Machines" },
            { k: "40+", v: "OEM Clients Served" },
          ].map((s) => (
            <div key={s.v} className="py-6 px-4 lg:px-8">
              <div className="font-display text-3xl lg:text-4xl font-bold text-white">
                {s.k}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-widest text-white/60">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}