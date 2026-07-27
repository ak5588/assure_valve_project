import { motion } from "framer-motion";
import { Factory, Fuel, Zap, Droplets, Wind, Cog } from "lucide-react";
import valveImg from "@/assets/valve-components.jpg";

const IND = [
  { icon: Zap, name: "Power Generation" },
  { icon: Fuel, name: "Oil & Gas" },
  { icon: Droplets, name: "Valve Manufacturing" },
  { icon: Wind, name: "Steam Turbines" },
  { icon: Factory, name: "Heavy Engineering" },
  { icon: Cog, name: "OEM & Vendor Development" },
];

export function Industries() {
  return (
    <section className="relative py-24 lg:py-32 bg-primary-deep overflow-hidden">
      <div className="absolute inset-0 grid-blueprint opacity-30" />
      <div className="container-industrial relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-accent" />
              <span className="text-eyebrow">Industries Served</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Trusted across mission-critical industries.
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed">
              Our components are specified in installations where failure is not an option —
              power plants, refineries, pipelines and turbine halls across India and abroad.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-px bg-white/10">
              {IND.map((i) => (
                <div key={i.name} className="bg-primary-deep p-5 flex items-center gap-3">
                  <i.icon className="h-6 w-6 text-accent shrink-0" strokeWidth={1.5} />
                  <span className="text-sm font-medium text-white">{i.name}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-accent" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-accent" />
            <img
              src={valveImg}
              alt="Precision machined valve and turbine components"
              loading="lazy"
              width={1408}
              height={1008}
              className="w-full aspect-[4/3] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}