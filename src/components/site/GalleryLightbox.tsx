import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize } from "lucide-react";
import type { GalleryImage } from "@/data/gallery";

interface GalleryLightboxProps {
  images: GalleryImage[];
  initialIndex: number;
  onClose: () => void;
}

export function GalleryLightbox({ images, initialIndex, onClose }: GalleryLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const currentImage = images[currentIndex];
  const hasNext = currentIndex < images.length - 1;
  const hasPrev = currentIndex > 0;

  const handleNext = useCallback(() => {
    if (hasNext) setCurrentIndex((prev) => prev + 1);
  }, [hasNext]);

  const handlePrev = useCallback(() => {
    if (hasPrev) setCurrentIndex((prev) => prev - 1);
  }, [hasPrev]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, handleNext, handlePrev]);

  // Touch swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && hasNext) {
      handleNext();
    }
    if (isRightSwipe && hasPrev) {
      handlePrev();
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex flex-col bg-background/95 backdrop-blur-xl">
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 absolute top-0 left-0 right-0 z-20">
          <div className="text-white/60 font-mono text-sm tracking-widest">
            {currentIndex + 1} / {images.length}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={currentImage.image}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/70 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full"
              title="Fullscreen"
            >
              <Maximize className="w-5 h-5" />
            </a>
            <div className="w-px h-6 bg-white/20 mx-1 hidden sm:block" />
            <button
              onClick={onClose}
              className="p-2 text-white/70 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full"
              title="Close (ESC)"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Main Image Area */}
        <div
          className="flex-1 relative flex items-center justify-center p-4 sm:p-12 overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <motion.img
            key={currentImage.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            src={currentImage.image}
            alt={currentImage.title}
            className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-sm"
          />

          {/* Navigation Controls */}
          {hasPrev && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 text-white/70 hover:text-white bg-black/20 hover:bg-black/50 backdrop-blur-md rounded-full transition-all hover:-translate-x-1"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          )}
          {hasNext && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 text-white/70 hover:text-white bg-black/20 hover:bg-black/50 backdrop-blur-md rounded-full transition-all hover:translate-x-1"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          )}
        </div>

        {/* Bottom Details */}
        <div className="p-6 sm:p-8 sm:pb-10 absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
          <div className="max-w-4xl mx-auto pointer-events-auto text-center sm:text-left flex flex-col items-center sm:items-start">
            <span className="text-accent text-[10px] sm:text-xs font-semibold uppercase tracking-widest border border-accent/30 bg-accent/10 px-3 py-1 rounded-full mb-3">
              {currentImage.category}
            </span>
            <h2 className="text-white font-display text-2xl sm:text-3xl font-bold tracking-tight mb-2">
              {currentImage.title}
            </h2>
            <p className="text-white/70 text-sm sm:text-base max-w-2xl">
              {currentImage.description}
            </p>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
