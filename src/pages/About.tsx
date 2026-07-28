import { motion } from "framer-motion";
import { PageShell } from "../components/site/PageShell";
import { PageHero } from "../components/site/PageHero";
import { WhyChoose } from "../components/site/WhyChoose";
import { Process } from "../components/site/Process";
import { Target, Eye, Award, Users } from "lucide-react";
import { SeoHead } from "../components/seo/SeoHead";
import { StructuredData } from "../components/seo/StructuredData";
import { siteConfig } from "../lib/seoContent";

const PILLARS = [
  { icon: Target, title: "Our Mission", body: "Deliver dependable valve components and engineering support for industrial customers who need precision, reliability and fast response." },
  { icon: Eye, title: "Our Vision", body: "To become a trusted manufacturing partner for valve, turbine and engineering component requirements across India and beyond." },
  { icon: Award, title: "Our Standards", body: "Every job is handled with technical clarity, inspection discipline and manufacturing accountability from enquiry to dispatch." },
  { icon: Users, title: "Our People", body: "Skilled machinists, welders and engineers bring practical experience to complex repair, machining and fabrication work." },
];

export default function About() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.companyName,
    url: siteConfig.website,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 298/1/B-4",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390010",
      addressCountry: "IN",
    },
    sameAs: [siteConfig.website, `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`],
  };

  return (
    <PageShell>
      <SeoHead
        title="About Assure Valve | Precision Valve Engineering Company"
        description="Learn about Assure Valve’s manufacturing capabilities, engineering-led approach and experience in valve component production and refurbishment."
        canonical="https://assurevalve.in/about"
      />
      <StructuredData data={organizationSchema} />
      <PageHero
        crumb="About"
        eyebrow="Our Story"
        title="Engineering trust, one precision component at a time."
        description="Assure Valve Component Manufacturing Company was established in 2022 and is backed by over 20 years of experience in the valve and engineering industry."
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
              Assure Valve is a Vadodara-based manufacturer supporting industrial buyers with precision valve components, repair services, CNC and VMC machining, welding and surface engineering solutions. Our capability is built around practical engineering knowledge and dependable execution.
            </p>
            <p>
              The company is established in 2022, while its leadership and technical team bring over 20 years of experience in valve and engineering operations. That experience informs how we review drawings, manage material selection, coordinate repair work and support technical enquiries.
            </p>
            <p>
              We work closely with procurement, maintenance and engineering teams who value repeatability, documentation and clear communication. Our goal is to provide a dependable manufacturing partner for mission-critical components and refurbishment support.
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
