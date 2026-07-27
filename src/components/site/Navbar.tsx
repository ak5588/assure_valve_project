import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const NAV = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Machines", to: "/machines" as const },
  { label: "Products", to: "/products" as const },
  { label: "Quality", to: "/quality" as const },
  { label: "Clients", to: "/clients" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Certifications", to: "/certifications" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-industrial flex h-18 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img src="/assure_valve_logo.png" alt="Assure Valve Logo" className="h-14 w-auto md:h-16 object-contain rounded-sm" />
          </div>
          <div className="leading-tight">
            <div className={`font-display font-bold text-[15px] tracking-tight ${scrolled ? "text-foreground" : "text-white"}`}>
              ASSURE VALVE
            </div>
            <div className={`text-[10px] uppercase tracking-[0.2em] ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
              Component Mfg. Co.
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-foreground/80 hover:text-accent"
                  : "text-white/90 hover:text-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919265397041"
            className={`flex items-center gap-2 text-sm font-medium ${scrolled ? "text-foreground" : "text-white"}`}
          >
            <Phone className="h-4 w-4 text-accent" />
            +91 9265397041
          </a>
          <Link
            to="/quote"
            className="bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold tracking-wide uppercase hover:bg-accent-glow transition-colors"
          >
            Request Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container-industrial py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="py-2 text-sm font-medium text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/quote" onClick={() => setOpen(false)} className="mt-3 bg-accent text-accent-foreground text-center py-3 text-sm font-semibold uppercase">
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}