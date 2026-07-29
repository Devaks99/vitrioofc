import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { ProductCard } from "@/components/site/ProductCard";
import { getByCategory, getCategory } from "@/lib/products";
import { ChevronRight } from "lucide-react";

export const Route = createFileRoute("/categoria/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category, list: getByCategory(category.slug) };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.category.name ?? "Categoria"} — Vitrio` },
      {
        name: "description",
        content: `Produtos da categoria ${loaderData?.category.name} selecionados pela Vitrio.`,
      },
      {
        property: "og:title",
        content: `${loaderData?.category.name ?? "Categoria"} — Vitrio`,
      },
      {
        property: "og:description",
        content: `Produtos da categoria ${loaderData?.category.name} selecionados pela Vitrio.`,
      },
    ],
  }),
  component: CategoryPage,
});

function CategoryPage() {
  const { category, list } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-1 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary">Início</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/produtos" className="hover:text-primary">Produtos</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{category.name}</span>
        </nav>
        <div className="mt-4 flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Categoria
          </p>
          <h1 className="text-3xl font-extrabold sm:text-4xl">{category.name}</h1>
          <p className="text-sm text-muted-foreground sm:text-base">{category.description}</p>
        </div>

        {list.length === 0 ? (
          <p className="mt-12 rounded-2xl border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
            Em breve, novos achados nesta categoria.
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {list.map((p) => (
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
