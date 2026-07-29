import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { ProductCard } from "@/components/site/ProductCard";
import { getHotDeals } from "@/lib/products";
import { Flame } from "lucide-react";

export const Route = createFileRoute("/ofertas")({
  head: () => ({
    meta: [
      { title: "Ofertas quentes — Vitrio" },
      {
        name: "description",
        content:
          "As melhores ofertas selecionadas pela Vitrio. Descontos reais em produtos que valem a pena.",
      },
      { property: "og:title", content: "Ofertas quentes — Vitrio" },
      {
        property: "og:description",
        content: "Descontos reais em produtos que valem a pena.",
      },
    ],
  }),
  component: OfertasPage,
});

function OfertasPage() {
  const list = getHotDeals();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-brand text-white shadow-brand">
            <Flame className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Hot deals
            </p>
            <h1 className="text-3xl font-extrabold sm:text-4xl">Ofertas quentes</h1>
          </div>
        </div>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Selecionamos os maiores descontos do momento. Corre porque essas ofertas
          voam rápido!
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
