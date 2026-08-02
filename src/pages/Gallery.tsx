import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, Phone } from "lucide-react";
import { PageShell } from "../components/site/PageShell";
import { SeoHead } from "../components/seo/SeoHead";
import { GALLERY_IMAGES, GALLERY_CATEGORIES, type GalleryCategory } from "../data/gallery";
import { GalleryLightbox } from "../components/site/GalleryLightbox";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <PageShell>
      <SeoHead
        title="Gallery | Assure Valve"
        description="Explore real CNC machining, valve manufacturing, welding, thermal spray coating and precision engineering work completed by Assure Valve."
        canonical="https://assurevalve.in/gallery"
      />

      {/* Header Section */}
      <section className="pt-28 pb-12 lg:pt-32 lg:pb-16 bg-background">
        <div className="container-industrial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-accent" />
              <span className="text-eyebrow">Manufacturing Portfolio</span>
            </div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1] mb-6">
              Real Work. <br />
              <span className="text-accent">Real Precision.</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Every image shown here is captured from our actual manufacturing, machining, welding, repair and inspection work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="pb-24 lg:pb-32 bg-background min-h-screen">
        <div className="container-industrial">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-3 mb-12">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-sm font-semibold uppercase tracking-wider rounded-full border transition-colors ${
                  activeCategory === cat
                    ? "bg-primary border-primary text-primary-foreground"
                    : "bg-background border-border text-foreground hover:border-primary/30 hover:bg-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.length > 0 ? (
                filteredImages.map((img, index) => (
                  <motion.button
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={img.id}
                    onClick={() => setLightboxIndex(index)}
                    className="group relative w-full block break-inside-avoid rounded-xl border border-border bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent text-left"
                  >
                    <img
                      src={img.image}
                      alt={img.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                      <span className="text-accent text-[10px] font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {img.category}
                      </span>
                      <div className="flex items-end justify-between gap-4">
                        <h3 className="font-display text-lg md:text-xl font-bold text-white leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                          {img.title}
                        </h3>
                        <div className="h-8 w-8 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full py-24 text-center text-muted-foreground"
                >
                  No images available in this category.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Bonus CTA */}
      <section className="bg-primary-deep py-24">
        <div className="container-industrial text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            Need Similar Precision Components?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg mb-10">
            Talk with our engineering team for custom machining, valve repair and fabrication requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/quote"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-accent-glow transition-colors"
            >
              Request Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+919898989898"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 border border-white/30 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Call Now
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {lightboxIndex !== null && filteredImages.length > 0 && (
        <GalleryLightbox
          images={filteredImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </PageShell>
  );
}
