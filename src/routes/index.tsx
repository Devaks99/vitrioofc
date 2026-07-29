import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShoppingBag,
  ShieldCheck,
  Tag,
  Star,
  Cpu,
  Home as HomeIcon,
  Car,
  Wrench,
  Flame,
  ArrowRight,
  Sparkles,
  Truck,
  MessageCircle,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { ProductCard } from "@/components/site/ProductCard";
import {
  categories,
  getFeatured,
  getHotDeals,
  products,
  waLink,
} from "@/lib/products";
import heroImg from "@/assets/hero-products.jpg";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu, Home: HomeIcon, Car, Wrench, Flame, Star,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vitrio — Os melhores achados da internet" },
      {
        name: "description",
        content:
          "Vitrio é a sua vitrine dos melhores achados da internet. Produtos selecionados, ofertas reais e preços que valem a pena, direto para a Shopee.",
      },
      { property: "og:title", content: "Vitrio — Os melhores achados da internet" },
      {
        property: "og:description",
        content:
          "Produtos selecionados com carinho, ofertas reais e preços que valem a pena.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = getFeatured();
  const hot = getHotDeals().slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 80% at 80% 20%, oklch(0.72 0.19 45 / 0.15), transparent 60%), radial-gradient(50% 60% at 10% 90%, oklch(0.78 0.16 52 / 0.12), transparent 60%)",
          }}
        />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pt-14 pb-16 sm:px-6 md:grid-cols-2 md:items-center md:pt-20 md:pb-24 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Curadoria diária
            </span>
            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Os melhores <span className="text-primary">achados</span>
              <br /> da internet.
            </h1>
            <p className="mt-5 max-w-lg text-balance text-base text-muted-foreground sm:text-lg">
              Produtos selecionados com carinho, ofertas reais e preços que valem
              a pena. Direto no seu WhatsApp e no seu carrinho da Shopee.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/produtos"
                className="inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-brand transition-transform hover:scale-[1.02]"
              >
                Ver ofertas <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={waLink("Olá Vitrio! Quero receber os achados 👋")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" /> Fale no WhatsApp
              </a>
            </div>

            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
              {[
                { k: "500+", v: "Achados" },
                { k: "70%", v: "Off médio" },
                { k: "4.8★", v: "Nota geral" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl border border-border bg-card p-4">
                  <dt className="text-xl font-bold text-foreground">{s.k}</dt>
                  <dd className="text-xs text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-ink shadow-brand">
              <img
                src={heroImg}
                alt="Produtos em destaque Vitrio"
                width={1600}
                height={1200}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-background/95 p-4 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full gradient-brand text-white">
                    <Flame className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Oferta do dia
                    </p>
                    <p className="truncate text-sm font-semibold">
                      Até 70% OFF em eletrônicos selecionados
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { icon: ShoppingBag, t: "Produtos selecionados", d: "Curadoria diária" },
            { icon: ShieldCheck, t: "Confiança & qualidade", d: "Vendedores testados" },
            { icon: Tag, t: "Preços que valem", d: "Ofertas reais" },
            { icon: Truck, t: "Frete Shopee", d: "Direto na sua casa" },
          ].map((b) => (
            <div key={b.t} className="flex items-center gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <b.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold">{b.t}</p>
                <p className="text-xs text-muted-foreground">{b.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Categorias"
          title="Explore por categoria"
          desc="Encontre exatamente o que você procura."
        />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {categories.map((c) => {
            const Icon = iconMap[c.icon] ?? Star;
            return (
              <Link
                key={c.slug}
                to="/categoria/$slug"
                params={{ slug: c.slug }}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 text-center transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-brand"
              >
                <div className="grid h-14 w-14 place-items-center rounded-full bg-ink text-primary ring-2 ring-primary/40 transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider">
                  {c.name}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <SectionHead
            eyebrow="Destaques"
            title="Achados do momento"
            desc="Os produtos que estão bombando na vitrine."
          />
          <Link
            to="/produtos"
            className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-primary hover:underline sm:inline-flex"
          >
            Ver todos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* HOT BANNER */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl gradient-dark p-8 text-white sm:p-12">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(40% 60% at 90% 0%, oklch(0.72 0.19 45 / 0.6), transparent 60%)",
            }}
          />
          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                <Flame className="h-3.5 w-3.5 text-primary" /> Ofertas quentes
              </span>
              <h3 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                Economize com <span className="text-primary">inteligência.</span>
              </h3>
              <p className="mt-3 max-w-md text-white/70">
                Nós pesquisamos, você economiza. Descontos reais em produtos que
                a gente usaria também.
              </p>
              <Link
                to="/ofertas"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
              >
                Ver ofertas quentes <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {hot.map((p) => (
                <a
                  key={p.id}
                  href={p.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="group overflow-hidden rounded-2xl bg-white/5 backdrop-blur transition-colors hover:bg-white/10"
                >
                  <div className="aspect-square overflow-hidden bg-white">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3">
                    <p className="line-clamp-1 text-xs font-medium text-white/90">
                      {p.name}
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-primary">
                      {p.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ALL PRODUCTS PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Vitrine"
          title="Todos os achados"
          desc="Uma seleção dos melhores produtos, atualizada com frequência."
        />
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}

function SectionHead({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-balance text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {desc && <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">{desc}</p>}
    </div>
  );
}
