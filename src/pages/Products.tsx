import { motion } from "framer-motion";
import { PageShell } from "../components/site/PageShell";
import { PageHero } from "../components/site/PageHero";
import valveImg from "../assets/valve-components.jpg";
import cnc from "../assets/cnc-turning.jpg";
import welding from "../assets/welding.jpg";
import factory from "../assets/factory-floor.jpg";

const PRODUCTS = [
  { img: valveImg, title: "Valve Components", items: ["Bodies & Bonnets", "Stems & Discs", "Seats & Glands", "Yokes & Gland Nuts"] },
  { img: cnc, title: "CNC Turned Parts", items: ["Shafts & Spindles", "Bushings & Sleeves", "Flanges & Adapters", "Rotational Precision Parts"] },
  { img: welding, title: "Turbine Components", items: ["Steam Turbine Blades (rough / semi-finish)", "Nozzle Segments", "Diaphragm Components", "Stellite Hard-faced Parts"] },
  { img: factory, title: "Fabrication & Job Work", items: ["Custom Assemblies", "Prototype to Batch Production", "Reverse Engineering from Sample", "Sub-contract Machining"] },
];

export default function Products() {
  return (
    <PageShell>
      <PageHero
        crumb="Products"
        eyebrow="Product Range"
        title="Precision components built to drawing, delivered on schedule."
        description="From single-piece prototypes to repeat production batches — engineered for valve manufacturers, turbine OEMs and heavy-engineering primes."
      />
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-industrial space-y-16">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-12 gap-8 items-center"
            >
              <div className={`lg:col-span-6 relative overflow-hidden group ${i % 2 ? "lg:order-2" : ""}`}>
                <img src={p.img} alt={p.title} loading="lazy" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 to-transparent" />
                <div className="absolute top-4 left-4 text-eyebrow text-white">{String(i + 1).padStart(2, "0")}</div>
              </div>
              <div className="lg:col-span-6 p-2 lg:p-8">
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground tracking-tight">{p.title}</h2>
                <ul className="mt-6 space-y-3">
                  {p.items.map((x) => (
                    <li key={x} className="flex items-start gap-3 text-base text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 bg-accent shrink-0" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
