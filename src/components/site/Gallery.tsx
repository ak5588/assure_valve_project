import cnc from "@/assets/cnc-turning.jpg";
import welding from "@/assets/welding.jpg";
import valves from "@/assets/valve-components.jpg";
import factory from "@/assets/factory-floor.jpg";

export function Gallery() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container-industrial">
        <div className="grid lg:grid-cols-12 gap-6 mb-12 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-accent" />
              <span className="text-eyebrow">Inside The Facility</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
              A closer look at the shop floor.
            </h2>
          </div>
          <div className="lg:col-span-4 text-muted-foreground">
            Modern CNC infrastructure, disciplined workflow and skilled engineers — engineered for repeatable quality.
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3 lg:gap-4">
          <div className="col-span-12 md:col-span-8 relative group overflow-hidden">
            <img src={factory} alt="Shop floor" loading="lazy" width={1600} height={1008} className="w-full h-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <div className="text-eyebrow text-accent">01 — Shop Floor</div>
              <div className="mt-1 font-display text-xl font-bold">CNC Turning Bay</div>
            </div>
          </div>
          <div className="col-span-6 md:col-span-4 relative group overflow-hidden">
            <img src={cnc} alt="CNC turning" loading="lazy" width={1200} height={912} className="w-full h-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <div className="text-eyebrow text-accent">02</div>
              <div className="font-display text-sm font-bold mt-1">Precision Turning</div>
            </div>
          </div>
          <div className="col-span-6 md:col-span-4 relative group overflow-hidden">
            <img src={welding} alt="Stellite welding" loading="lazy" width={1408} height={1008} className="w-full h-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <div className="text-eyebrow text-accent">03</div>
              <div className="font-display text-sm font-bold mt-1">Stellite Welding</div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 relative group overflow-hidden">
            <img src={valves} alt="Finished components" loading="lazy" width={1408} height={1008} className="w-full h-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <div className="text-eyebrow text-accent">04 — Output</div>
              <div className="mt-1 font-display text-xl font-bold">Finished Components</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}