import { motion } from "framer-motion";
import { PageShell } from "../components/site/PageShell";
import { PageHero } from "../components/site/PageHero";
import { WhyChoose } from "../components/site/WhyChoose";
import { Process } from "../components/site/Process";
import { Target, Eye, Award, Users } from "lucide-react";

const PILLARS = [
  { icon: Target, title: "Our Mission", body: "Deliver zero-defect precision components to global OEMs with uncompromising quality and on-time performance." },
  { icon: Eye, title: "Our Vision", body: "To be India's most trusted precision manufacturing partner for mission-critical valve and turbine applications." },
  { icon: Award, title: "Our Standards", body: "Every batch validated against drawing spec — traceable, calibrated, documented and dispatch-ready." },
  { icon: Users, title: "Our People", body: "Skilled machinists, welders and engineers with decades of combined experience in critical component manufacturing." },
];

export default function About() {
  return (
    <PageShell>
      <PageHero
        crumb="About"
        eyebrow="Our Story"
        title="Engineering trust, one precision component at a time."
        description="Founded in 2005 in Vadodara, Assure Valve Component Manufacturing Co. has grown into a trusted CNC precision manufacturer serving OEMs in power, oil & gas and heavy engineering."
      />

      <section className="py-24 lg:py-32 bg-background">
        <div className="container-industrial grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-accent" />
              <span className="text-eyebrow">Who We Are</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
              Two decades of precision, quietly delivered.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
            <p>
              Assure Valve Component Manufacturing Co. is a Vadodara-based precision manufacturer specialising in
              CNC turning, VMC machining and specialist welding for valve, turbine and heavy-engineering
              applications. Since 2005, we have supplied dimensionally critical components to OEMs across India
              and abroad.
            </p>
            <p>
              Our shop floor combines Jyoti CNC turning centres, VMC machines and certified welding capabilities
              with a calibrated inspection lab — allowing us to move from bar stock to finished, inspected
              components entirely in-house.
            </p>
            <p>
              We serve procurement teams who value repeatability, documentation and on-time delivery over
              lowest-cost promises. That focus has earned us long-term relationships with vendor-approved
              suppliers to global industrial names.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container-industrial">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-background p-8"
              >
                <p.icon className="h-9 w-9 text-accent" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-xl font-bold text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhyChoose />
      <Process />
    </PageShell>
  );
}
