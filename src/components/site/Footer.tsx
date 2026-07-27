import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Globe, ArrowUpRight, MessageCircle } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Machines", to: "/machines" },
  { label: "Industries", to: "/industries" },
  { label: "Gallery", to: "/gallery" },
  { label: "Quality", to: "/quality" },
  { label: "Clients", to: "/clients" },
  { label: "Certifications", to: "/certifications" },
  { label: "Contact", to: "/contact" },
  { label: "FAQ", to: "/faq" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
  { label: "Sitemap", to: "#" },
];

const SERVICES = [
  "Valve Component Manufacturing",
  "Valve Repair",
  "CNC Machining",
  "Stellite Welding",
  "Inconel Welding",
  "Thermal Spray Coating",
  "HVOF Coating",
  "Hard Facing",
];

export function Footer() {
  return (
    <footer className="bg-primary-deep text-white pt-24 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 grid-blueprint opacity-20" />
      <div className="container-industrial relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Section 1: Company Logo & Description */}
          <div className="lg:col-span-3">
            <Link to="/" className="flex items-center gap-3 group shrink-0 inline-flex" aria-label="Home">
              <img src="/assure_valve_logo.png" alt="Assure Valve Logo" className="h-12 w-auto object-contain rounded-sm bg-white p-1" />
              <div className="leading-tight">
                <div className="font-display font-bold text-[16px] tracking-tight">ASSURE VALVE</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/60">Component Mfg. Co.</div>
              </div>
            </Link>
            <p className="mt-8 text-sm text-white/70 leading-relaxed max-w-sm">
              Precision Valve Component Manufacturing, Repair and Engineering Solutions backed by 20+ years of industry expertise.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-eyebrow text-accent mb-6">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-white/70">
              {QUICK_LINKS.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Our Services */}
          <div className="lg:col-span-3">
            <h3 className="text-eyebrow text-accent mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm text-white/70">
              {SERVICES.map(service => (
                <li key={service}>
                  <Link to="/services" className="hover:text-accent transition-colors flex items-center gap-2">
                    <span className="h-1 w-1 bg-accent/50 rounded-full shrink-0" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4 & 5: Contact and Follow Us */}
          <div className="lg:col-span-3 flex flex-col gap-10">
            <div>
              <h3 className="text-eyebrow text-accent mb-6">Contact</h3>
              <ul className="space-y-4 text-sm text-white/70">
                <li className="flex gap-3">
                  <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" /> 
                  <span className="leading-relaxed">Plot No. 298/1/B-4<br />GIDC Makarpura<br />Vadodara<br />Gujarat – 390010<br />India</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-4 w-4 text-accent shrink-0 mt-0.5" /> 
                  <a href="tel:+919898129694" className="hover:text-accent transition-colors">+91 98981 29694</a>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-4 w-4 text-accent shrink-0 mt-0.5" /> 
                  <a href="mailto:assurevalvecomponent@gmail.com" className="break-all hover:text-accent transition-colors">assurevalvecomponent@gmail.com</a>
                </li>
                <li className="flex gap-3">
                  <Clock className="h-4 w-4 text-accent shrink-0 mt-0.5" /> 
                  <span>24/7 Support</span>
                </li>
              </ul>
              <Link to="/quote" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-glow transition-colors group">
                Request A Quotation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
            
            <div>
              <h3 className="text-eyebrow text-accent mb-6">Follow Us</h3>
              <div className="flex items-center gap-4">
                <a 
                  href={`https://wa.me/919898129694?text=${encodeURIComponent("Hello Assure Valve, I would like to inquire about your services.")}`} 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label="Contact us on WhatsApp"
                  className="h-10 w-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/assure-valve-component-469a47303/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow us on LinkedIn"
                  className="h-10 w-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Assure Valve Component Mfg. Co. All rights reserved.</div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span>GSTIN: 24AQEPK9696G1ZE</span>
            <span className="hidden sm:inline">|</span>
            <span>PAN: AQEPK9696G</span>
            <a href="https://assurevalve.in" aria-label="Assure Valve website" className="hover:text-accent transition-colors"><Globe className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}