import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-cnc.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-primary-deep">
      <img
        src={heroImg}
        alt="Precision CNC and VMC machining of a valve component"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-linear-to-r from-primary-deep via-primary-deep/85 to-primary-deep/30" />
      <div className="absolute inset-0 grid-blueprint opacity-40" />

      {/* Accent bar */}
      <div className="absolute left-0 top-1/2 h-1 w-24 bg-accent" />

      <div className="relative z-10 container-industrial flex-1 flex flex-col justify-center pt-40 pb-24 lg:pt-48 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-accent" />
            <span className="text-eyebrow text-accent">Engineering-led valve manufacturing from Vadodara</span>
          </div>

          <h1 className="font-display text-[clamp(2.2rem,4.7vw,4.7rem)] font-bold text-white leading-[1.05] tracking-tight">
            Precision <span className="text-accent">valve component manufacturing</span>, repair and engineering support for demanding industrial applications.
          </h1>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-white/75 max-w-2xl leading-relaxed">
            Assure Valve delivers CNC and VMC machining, valve repair, welding, hard facing, thermal spray coating and refurbishment support for OEMs, EPCs and maintenance teams across India.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
            <Link
              to="/quote"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-accent-glow transition-colors"
            >
              Request Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 border border-white/30 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Explore Capabilities
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 text-white/60 text-xs uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent" /> GSTIN · PAN · Manufacturing facility in Vadodara
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div>Engineering-led quality support</div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div>Fast response for RFQs and repair enquiries</div>
          </div>
        </motion.div>
      </div>

      {/* Bottom stat strip */}
      <div className="relative z-10 border-t border-white/10 bg-primary-deep/60 backdrop-blur-sm mt-auto">
        <div className="container-industrial grid grid-cols-1 gap-3 py-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:py-0">
          {[
            { k: "25+", v: "Years of industry experience" },
            { k: "2022", v: "Company establishment" },
            { k: "All", v: "Core services under one roof" },
            { k: "24/7", v: "Enquiry support via phone and WhatsApp" },
          ].map((s) => (
            <div key={s.v} className="rounded-md border border-white/10 bg-white/5 px-4 py-5 text-center sm:rounded-none sm:border-0 sm:bg-transparent sm:px-4 sm:py-6 lg:px-8 lg:text-left">
              <div className="font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
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