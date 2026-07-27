import aparLogo from "@/assets/companies_image/apar.png";
import crayogasLogo from "@/assets/companies_image/crayogas.png";
import econLogo from "@/assets/companies_image/econ.png";
import flowserveLogo from "@/assets/companies_image/flowserve.png";
import gspLogo from "@/assets/companies_image/gsp.png";
import schwartzLogo from "@/assets/companies_image/schwartz.png";
import seeLogo from "@/assets/companies_image/see_linkages.png";
import siemensLogo from "@/assets/companies_image/siemens.png";
import steLogo from "@/assets/companies_image/ste.png";

const CLIENT_LOGOS = [
  { name: "Siemens Energy India", logo: siemensLogo, alt: "Siemens logo" },
  { name: "Apar Industries Ltd", logo: aparLogo, alt: "Apar Industries logo" },
  { name: "ECON Machinery Pvt. Ltd", logo: econLogo, alt: "ECON Machinery logo" },
  { name: "Flowserve India", logo: flowserveLogo, alt: "Flowserve logo" },
  { name: "Crayogas Equipment Pvt. Ltd", logo: crayogasLogo, alt: "Crayogas logo" },
  { name: "GSP Crop Science Ltd", logo: gspLogo, alt: "GSP logo" },
  { name: "Schwartz Turbo Tech Pvt. Ltd", logo: schwartzLogo, alt: "Schwartz Turbo Tech logo" },
  { name: "SEE Linkages Pvt. Ltd", logo: seeLogo, alt: "SEE Linkages logo" },
  { name: "Steam Turbine Engineering", logo: steLogo, alt: "STE logo" },
];

export function Clients() {
  return (
    <section className="py-20 bg-background border-y border-border">
      <div className="container-industrial">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-accent" />
            <span className="text-eyebrow">Trusted By Industry Leaders</span>
            <div className="h-px w-10 bg-accent" />
          </div>
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
            Supplying precision components to global OEMs & Indian majors.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {CLIENT_LOGOS.map((client) => (
            <div
              key={client.name}
              className="rounded-3xl border border-white/10 bg-surface p-6 shadow-sm shadow-black/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-24 items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.alt}
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
              <div className="mt-4 text-center text-xs uppercase tracking-[0.24em] text-muted-foreground">
                {client.name}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground uppercase tracking-widest">
          Logos shown with client permission. Vendor references available on request.
        </p>
      </div>
    </section>
  );
}