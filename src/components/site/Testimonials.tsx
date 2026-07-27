import { Quote } from "lucide-react";

const T = [
  {
    q: "Assure Valve has been a reliable partner for our critical valve components. Consistent quality and on-time delivery — every single lot.",
    a: "Head of Procurement",
    c: "Leading Valve OEM, Gujarat",
  },
  {
    q: "Their in-house inspection discipline and traceability made them one of our approved suppliers for turbine spares.",
    a: "Vendor Development Engineer",
    c: "Power Plant Equipment Manufacturer",
  },
  {
    q: "Complex geometries, tight tolerances, small batches — they deliver where most vendors give up.",
    a: "Purchase Manager",
    c: "Oil & Gas Component Supplier",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-white">
      <div className="container-industrial">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-accent" />
            <span className="text-eyebrow">Client Voices</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            The people who buy from us, in their words.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10">
          {T.map((t, i) => (
            <div key={i} className="bg-primary p-8 lg:p-10">
              <Quote className="h-8 w-8 text-accent" strokeWidth={1.5} />
              <p className="mt-6 text-white/90 leading-relaxed">"{t.q}"</p>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="font-display font-bold">{t.a}</div>
                <div className="text-sm text-white/60 mt-1">{t.c}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}