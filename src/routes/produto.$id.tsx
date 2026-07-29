import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { ProductCard } from "@/components/site/ProductCard";
import {
  formatBRL,
  getCategory,
  getProduct,
  products,
  waLink,
} from "@/lib/products";
import {
  ChevronRight,
  ExternalLink,
  MessageCircle,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";

export const Route = createFileRoute("/produto/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    return {
      meta: [
        { title: p ? `${p.name} — Vitrio` : "Produto — Vitrio" },
        { name: "description", content: p?.description ?? "Achado Vitrio" },
        { property: "og:title", content: p ? `${p.name} — Vitrio` : "Produto" },
        { property: "og:description", content: p?.description ?? "Achado Vitrio" },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const category = getCategory(product.category);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-1 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary">Início</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/produtos" className="hover:text-primary">Produtos</Link>
          {category && (
            <>
              <ChevronRight className="h-3 w-3" />
              <Link
                to="/categoria/$slug"
                params={{ slug: category.slug }}
                className="hover:text-primary"
              >
                {category.name}
              </Link>
            </>
          )}
          <ChevronRight className="h-3 w-3" />
          <span className="truncate text-foreground">{product.name}</span>
        </nav>

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-border bg-secondary">
            <img
              src={product.image}
              alt={product.name}
              width={800}
              height={800}
              className="aspect-square w-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {product.tagline}
            </p>
            <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">
              {product.name}
            </h1>

            <div className="mt-3 flex items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="font-semibold">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviews} avaliações)</span>
              </span>
            </div>

            <div className="mt-6 flex items-end gap-3">
              <span className="text-4xl font-extrabold">{formatBRL(product.price)}</span>
              {product.oldPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">
                    {formatBRL(product.oldPrice)}
                  </span>
                  <span className="rounded-full gradient-brand px-2.5 py-1 text-xs font-bold text-white">
                    -{discount}%
                  </span>
                </>
              )}
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Ou em até 12x na Shopee. Preço sujeito a alteração.
            </p>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {product.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-brand transition-transform hover:scale-[1.01]"
              >
                Comprar na Shopee <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={waLink(
                  `Olá Vitrio! Quero saber mais sobre: ${product.name} — ${formatBRL(product.price)}`,
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
              </a>
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { icon: Truck, t: "Enviado pela Shopee" },
                { icon: ShieldCheck, t: "Vendedor verificado" },
                { icon: Star, t: "Curadoria Vitrio" },
              ].map((b) => (
                <li
                  key={b.t}
                  className="flex items-center gap-2 rounded-xl border border-border bg-card p-3 text-xs"
                >
                  <b.icon className="h-4 w-4 text-primary" />
                  <span className="font-medium">{b.t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-extrabold sm:text-3xl">Você também pode gostar</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
