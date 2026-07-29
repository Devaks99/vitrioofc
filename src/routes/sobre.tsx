import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import {
  ShoppingBag,
  ShieldCheck,
  Tag,
  Star,
  MessageCircle,
  Instagram,
} from "lucide-react";
import { INSTAGRAM_URL, waLink } from "@/lib/products";
import logoAsset from "@/assets/vitrio-logo.asset.json";
const logo = logoAsset.url;

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Vitrio" },
      {
        name: "description",
        content:
          "Conheça a Vitrio: a vitrine dos melhores achados da internet. Curadoria, transparência e ofertas que valem a pena.",
      },
      { property: "og:title", content: "Sobre a Vitrio" },
      {
        property: "og:description",
        content: "Curadoria dos melhores achados da internet.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <img
            src={logo}
            alt="Vitrio"
            className="h-24 w-24 rounded-full shadow-brand"
          />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Nossa história
          </p>
          <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">
            A vitrine dos melhores <span className="text-primary">achados.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-balance text-muted-foreground sm:text-lg">
            A Vitrio nasceu para tornar mais simples encontrar produtos bons,
            bonitos e com preço justo. Testamos, comparamos e selecionamos —
            você só aproveita.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: ShoppingBag,
              t: "Produtos selecionados",
              d: "Curadoria diária, sem enrolação.",
            },
            {
              icon: ShieldCheck,
              t: "Confiança e qualidade",
              d: "Só vendedores testados e aprovados.",
            },
            {
              icon: Tag,
              t: "Preços que valem",
              d: "Comparamos ofertas para você economizar de verdade.",
            },
            {
              icon: Star,
              t: "Indicações que fazem a diferença",
              d: "Achados que a gente também compraria.",
            },
          ].map((v) => (
            <div
              key={v.t}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <v.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">{v.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl gradient-dark p-8 text-center text-white sm:p-12">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Vamos conversar?
          </h2>
          <p className="mt-3 text-white/70">
            Sugestões, parcerias ou dúvidas — estamos aqui para você.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={waLink("Olá Vitrio! Quero falar com vocês 👋")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold"
            >
              <Instagram className="h-4 w-4" /> @vitrio_ofc
            </a>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
