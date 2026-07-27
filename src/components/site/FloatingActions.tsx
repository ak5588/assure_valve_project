import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/919265397041"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="h-13 w-13 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </a>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shadow-lg hover:bg-primary-deep transition-colors"
        >
          <ArrowUp className="h-5 w-5 text-white" />
        </button>
      )}
    </div>
  );
}