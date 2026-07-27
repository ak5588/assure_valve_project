import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowUpRight, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-deep text-white pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 grid-blueprint opacity-20" />
      <div className="container-industrial relative">
        <div className="grid lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-accent flex items-center justify-center rounded-sm">
                <span className="font-display font-bold text-accent-foreground text-lg">A</span>
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-[15px] tracking-tight">ASSURE VALVE</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/60">Component Mfg. Co.</div>
              </div>
            </div>
            <p className="mt-6 text-sm text-white/70 leading-relaxed max-w-sm">
              Precision CNC machining, valve and turbine component manufacturing for
              global OEMs — engineered from Makarpura, Vadodara, India.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="text-eyebrow text-accent mb-4">Company</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-accent">About</Link></li>
              <li><Link to="/machines" className="hover:text-accent">Machines</Link></li>
              <li><Link to="/quality" className="hover:text-accent">Quality</Link></li>
              <li><Link to="/clients" className="hover:text-accent">Clients</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-eyebrow text-accent mb-4">Explore</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/products" className="hover:text-accent">Products</Link></li>
              <li><Link to="/gallery" className="hover:text-accent">Gallery</Link></li>
              <li><Link to="/certifications" className="hover:text-accent">Certifications</Link></li>
              <li><Link to="/quote" className="hover:text-accent">Request Quote</Link></li>
              <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-eyebrow text-accent mb-4">Contact</div>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex gap-3"><MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" /> 746/8 GIDC Industrial Estate, Makarpura, Vadodara, Gujarat, India</div>
              <div className="flex gap-3"><Phone className="h-4 w-4 text-accent shrink-0 mt-0.5" /> +91 926 539 7041</div>
              <div className="flex gap-3"><Mail className="h-4 w-4 text-accent shrink-0 mt-0.5" /> alokkushwaha135@gmail.com</div>
            </div>
            <Link to="/quote" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-glow">
              Request A Quotation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Assure Valve Component Manufacturing Company. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span>GST · MSME · Udyam Registered</span>
            <a href="#" aria-label="Website" className="hover:text-accent"><Globe className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}