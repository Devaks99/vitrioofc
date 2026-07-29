import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { waLink } from "@/lib/products";

export function WhatsAppFab() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isHomePage = window.location.pathname === "/";
      const triggerElement = document.getElementById("achados-do-momento");

      if (!isHomePage) {
        setShowScrollTop(false);
        return;
      }

      if (triggerElement) {
        const triggerTop = triggerElement.getBoundingClientRect().top + window.scrollY;
        setShowScrollTop(window.scrollY >= triggerTop - 24);
      } else {
        setShowScrollTop(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-3">
      <button
        type="button"
        onClick={handleScrollTop}
        aria-label="Voltar ao topo"
        className={`group relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-black text-[#ff7a00] shadow-[0_8px_24px_rgba(0,0,0,0.16)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#ff7a00] hover:text-black ${
          showScrollTop ? "pointer-events-auto translate-y-0 opacity-100 visible" : "pointer-events-none translate-y-2 invisible opacity-0"
        }`}
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <ArrowUp className="relative z-10 h-5 w-5" />
      </button>

      <a
        href={waLink("Olá! Vim pelo site da Vitrio 👋 Gostaria de mais informações.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-brand transition-all duration-300 hover:-translate-y-1 hover:scale-105"
        style={{ backgroundColor: "var(--whatsapp)" }}
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
        </span>
      </a>
    </div>
  );
}
