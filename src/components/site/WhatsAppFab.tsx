import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/products";

export function WhatsAppFab() {
  return (
    <a
      href={waLink("Olá! Vim pelo site da Vitrio 👋 Gostaria de mais informações.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-5 right-5 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-brand transition-transform hover:scale-105"
      style={{ backgroundColor: "var(--whatsapp)" }}
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
      </span>
    </a>
  );
}
