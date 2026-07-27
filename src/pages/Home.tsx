import { Navbar } from "../components/site/Navbar";
import { Hero } from "../components/site/Hero";
import { Capabilities } from "../components/site/Capabilities";
import { Industries } from "../components/site/Industries";
import { WhyChoose } from "../components/site/WhyChoose";
import { Process } from "../components/site/Process";
import { Quality } from "../components/site/Quality";
import { Gallery } from "../components/site/Gallery";
import { Clients } from "../components/site/Clients";
import { Testimonials } from "../components/site/Testimonials";
import { RFQ } from "../components/site/RFQ";
import { Footer } from "../components/site/Footer";
import { FloatingActions } from "../components/site/FloatingActions";
import { SeoHead } from "../components/seo/SeoHead";

export default function Home() {
  return (
    <main className="bg-background text-foreground font-sans antialiased">
      <SeoHead
        title="Assure Valve | Valve Component Manufacturer in Vadodara"
        description="Assure Valve is a trusted valve component manufacturer in Vadodara delivering precision machining, valve repair, welding, hard facing, thermal spray coating and refurbishment support."
        canonical="https://assurevalve.in/"
      />
      <Navbar />
      <Hero />
      <Clients />
      <Capabilities />
      <Industries />
      <WhyChoose />
      <Process />
      <Quality />
      <Gallery />
      <Testimonials />
      <RFQ />
      <Footer />
      <FloatingActions />
    </main>
  );
}
