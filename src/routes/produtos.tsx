import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, products } from "@/lib/products";
import { z } from "zod";

const searchSchema = z.object({
  cat: z.string().optional(),
  q: z.string().optional(),
});

export const Route = createFileRoute("/produtos")({
  validateSearch: (s) => searchSchema.parse(s),
  head: () => ({
    meta: [
      { title: "Produtos — Vitrio" },
      {
        name: "description",
        content:
          "Catálogo completo dos achados Vitrio. Filtre por categoria e encontre os melhores produtos com desconto na Shopee.",
      },
      { property: "og:title", content: "Produtos — Vitrio" },
      { property: "og:description", content: "Catálogo completo dos achados Vitrio." },
    ],
  }),
  component: ProdutosPage,
});

function ProdutosPage() {
  const { cat, q } = Route.useSearch();
  const navigate = Route.useNavigate();

  const filtered = products.filter((p) => {
    if (cat && p.category !== cat) return false;
    if (q) {
      const s = q.toLowerCase();
      if (!p.name.toLowerCase().includes(s) && !p.tagline.toLowerCase().includes(s)) {
        return false;
      }
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Catálogo
          </p>
          <h1 className="text-3xl font-extrabold sm:text-4xl">Todos os produtos</h1>
          <p className="text-sm text-muted-foreground sm:text-base">
            Filtre por categoria ou busque pelo nome do achado.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() =>
                navigate({ search: (prev) => ({ ...prev, cat: undefined }) })
              }
              className={
                "rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors " +
                (!cat
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-background hover:border-primary hover:text-primary")
              }
            >
              Todas
            </button>
            {categories.map((c) => (
              <button
                key={c.slug}
                onClick={() =>
                  navigate({ search: (prev) => ({ ...prev, cat: c.slug }) })
                }
                className={
                  "rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors " +
                  (cat === c.slug
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-background hover:border-primary hover:text-primary")
                }
              >
                {c.name}
              </button>
            ))}
          </div>

          <input
            type="search"
            placeholder="Buscar achado..."
            defaultValue={q ?? ""}
            onChange={(e) => {
              const v = e.target.value;
              navigate({
                search: (prev) => ({ ...prev, q: v || undefined }),
                replace: true,
              });
            }}
            className="w-full rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:border-primary md:w-64"
          />
        </div>

        {filtered.length === 0 ? (
          <div className="mt-16 rounded-2xl border border-dashed border-border p-12 text-center">
            <p className="text-sm text-muted-foreground">
              Nenhum produto encontrado. Tente outra categoria.
            </p>
            <Link
              to="/produtos"
              className="mt-4 inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white"
            >
              Limpar filtros
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
