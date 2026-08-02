import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown, Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const CAPABILITIES = [
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Machines", to: "/machines" },
  { label: "Quality", to: "/quality" },
  { label: "Clients", to: "/clients" },
  { label: "Certifications", to: "/certifications" },
];

const MOBILE_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Machines", to: "/machines" },
  { label: "Industries", to: "/industries" },
  { label: "Quality", to: "/quality" },
  { label: "Clients", to: "/clients" },
  { label: "Gallery", to: "/gallery" },
  { label: "Certifications", to: "/certifications" },
  { label: "Contact", to: "/contact" },
  { label: "FAQ", to: "/faq" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isTransparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getLinkClass = (path: string) => {
    const active = location.pathname === path;
    if (!isTransparent) {
      return active ? "text-accent" : "text-foreground/80 hover:text-accent";
    } else {
      return active ? "text-accent" : "text-white/90 hover:text-accent";
    }
  };

  const isCapabilitiesActive = CAPABILITIES.some(c => location.pathname === c.to);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        !isTransparent
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-industrial flex h-20 items-center justify-between py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative">
            <img src="/assure_valve_logo.png" alt="Assure Valve Logo" className="h-14 w-auto md:h-16 object-contain rounded-sm" />
          </div>
          <div className="leading-tight hidden sm:block">
            <div className={`font-display font-bold text-[15px] tracking-tight transition-colors ${!isTransparent ? "text-foreground" : "text-white"}`}>
              ASSURE VALVE
            </div>
            <div className={`text-[10px] uppercase tracking-[0.2em] transition-colors ${!isTransparent ? "text-muted-foreground" : "text-white/70"}`}>
              Component Mfg. Co.
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 h-full">
          <Link to="/" className={`px-2 xl:px-3 py-2 text-sm font-medium transition-colors ${getLinkClass("/")}`}>Home</Link>
          <Link to="/about" className={`px-2 xl:px-3 py-2 text-sm font-medium transition-colors ${getLinkClass("/about")}`}>About</Link>
          
          <div className="relative group h-full flex items-center">
            <button className={`flex items-center gap-1 px-2 xl:px-3 py-2 text-sm font-medium transition-colors ${!isTransparent ? (isCapabilitiesActive ? 'text-accent' : 'text-foreground/80 hover:text-accent') : (isCapabilitiesActive ? 'text-accent' : 'text-white/90 hover:text-accent')}`}>
              Capabilities <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-56">
              <div className="bg-background border border-border shadow-xl p-2 flex flex-col gap-1">
                {CAPABILITIES.map(c => (
                  <Link key={c.label} to={c.to} className={`px-4 py-2.5 text-sm font-medium transition-colors ${location.pathname === c.to ? "text-accent bg-accent/5" : "text-foreground hover:bg-secondary hover:text-accent"}`}>
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/industries" className={`px-2 xl:px-3 py-2 text-sm font-medium transition-colors ${getLinkClass("/industries")}`}>Industries</Link>
          <Link to="/gallery" className={`px-2 xl:px-3 py-2 text-sm font-medium transition-colors ${getLinkClass("/gallery")}`}>Gallery</Link>
          <Link to="/contact" className={`px-2 xl:px-3 py-2 text-sm font-medium transition-colors ${getLinkClass("/contact")}`}>Contact</Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex shrink-0">
          <Link
            to="/quote"
            className="bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-accent-glow transition-colors"
          >
            Request Quote
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className={`p-2 transition-colors ${!isTransparent ? "text-foreground" : "text-white"}`} aria-label="Menu">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] flex flex-col h-full bg-background border-border p-0">
              <SheetHeader className="p-6 border-b border-border text-left">
                <SheetTitle className="font-display font-bold text-lg">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col py-4">
                  {MOBILE_NAV.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className={`px-6 py-3 text-sm font-medium transition-colors ${location.pathname === item.to ? "text-accent bg-accent/5 border-l-2 border-accent" : "text-foreground hover:bg-secondary border-l-2 border-transparent"}`}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="p-6 border-t border-border bg-secondary mt-auto space-y-4">
                <div className="flex flex-col gap-3 text-sm">
                  <a href="tel:+919898129694" className="flex items-center gap-2 font-medium text-foreground hover:text-accent transition-colors"><Phone className="h-4 w-4 text-accent" /> +91 98981 29694</a>
                  <a href="mailto:assurevalvecomponent@gmail.com" className="flex items-center gap-2 font-medium text-foreground hover:text-accent transition-colors break-all"><Mail className="h-4 w-4 text-accent shrink-0" /> assurevalvecomponent@gmail.com</a>
                  <a href={`https://wa.me/919898129694?text=${encodeURIComponent("Hello Assure Valve, I would like to inquire about your services.")}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-medium text-foreground hover:text-accent transition-colors"><MessageCircle className="h-4 w-4 text-accent" /> WhatsApp Support</a>
                </div>
                <Link to="/quote" onClick={() => setOpen(false)} className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground py-3 text-sm font-semibold uppercase tracking-wider hover:bg-accent-glow transition-colors">
                  Request Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}