import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
  crumb,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  crumb: string;
}) {
  return (
    <section className="relative bg-primary-deep pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-blueprint opacity-30" />
      <div className="absolute left-0 top-1/2 h-1 w-24 bg-accent" />
      <div className="container-industrial relative">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 mb-6">
          <Link to="/" className="hover:text-accent">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-accent">{crumb}</span>
        </nav>
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-accent" />
          <span className="text-eyebrow text-accent">{eyebrow}</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-lg text-white/75 max-w-2xl leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  );
}