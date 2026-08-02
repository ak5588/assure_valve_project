import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { GALLERY_IMAGES } from "@/data/gallery";
import { GalleryLightbox } from "./GalleryLightbox";

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Take first 6 featured images
  const featuredImages = GALLERY_IMAGES.slice(0, 6);

  const getGridClasses = (index: number) => {
    switch (index) {
      case 0:
        return "md:col-span-12 lg:col-span-8 lg:row-span-2 aspect-video lg:aspect-auto";
      case 1:
      case 2:
        return "md:col-span-6 lg:col-span-4 aspect-square";
      case 3:
      case 4:
      case 5:
        return "md:col-span-4 lg:col-span-4 aspect-square";
      default:
        return "hidden";
    }
  };

  return (
    <>
      <section className="py-16 lg:py-16 lg:py-24 bg-background overflow-hidden">
        <div className="container-industrial">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-accent" />
                <span className="text-eyebrow">Inside Our Facility</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
                Real Manufacturing.
                <br />
                Real Engineering.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                Explore our machining capabilities, welding expertise, valve repair processes and finished precision components.
              </p>
            </div>
            <div className="hidden md:flex flex-col items-end shrink-0">
              <Link
                to="/gallery"
                className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-7 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                View Complete Gallery
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <div className="mt-3 text-[11px] text-muted-foreground uppercase tracking-widest font-medium">
                20+ Manufacturing Photos
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 lg:gap-4">
            {featuredImages.map((img, index) => (
              <button
                key={img.id}
                onClick={() => setLightboxIndex(index)}
                className={`group relative overflow-hidden rounded-xl border border-border bg-white shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent w-full text-left ${getGridClasses(
                  index
                )}`}
              >
                <img
                  src={img.image}
                  alt={img.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-accent text-[10px] font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {img.category}
                  </span>
                  <div className="flex items-end justify-between gap-4">
                    <h3 className="font-display text-lg md:text-xl font-bold text-white leading-tight">
                      {img.title}
                    </h3>
                    <div className="h-8 w-8 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center md:hidden">
            <Link
              to="/gallery"
              className="group inline-flex w-full items-center justify-center gap-3 bg-primary text-primary-foreground px-7 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors"
            >
              View Complete Gallery
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <div className="mt-4 text-[11px] text-muted-foreground uppercase tracking-widest font-medium text-center">
              20+ Manufacturing Photos
            </div>
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <GalleryLightbox
          images={featuredImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}