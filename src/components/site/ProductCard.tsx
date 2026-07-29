import { Link } from "@tanstack/react-router";
import { ExternalLink, Star } from "lucide-react";
import { formatBRL, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-brand">
      <Link
        to="/produto/$id"
        params={{ id: product.id }}
        className="relative block aspect-square overflow-hidden bg-secondary"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={800}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {discount > 0 && (
          <span className="absolute left-3 top-3 rounded-full gradient-brand px-2.5 py-1 text-xs font-bold text-white shadow-brand">
            -{discount}%
          </span>
        )}
        {product.hot && (
          <span className="absolute right-3 top-3 rounded-full bg-ink px-2.5 py-1 text-xs font-semibold text-white">
            🔥 Hot
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-medium uppercase tracking-wider text-primary">
          {product.tagline}
        </p>
        <Link
          to="/produto/$id"
          params={{ id: product.id }}
          className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-foreground hover:text-primary"
        >
          {product.name}
        </Link>

        <div className="mt-1.5 flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="h-3.5 w-3.5 fill-primary text-primary" />
          <span className="font-medium text-foreground">{product.rating}</span>
          <span>({product.reviews})</span>
        </div>

        <div className="mt-3 flex items-end justify-between gap-2">
          <div className="min-w-0">
            {product.oldPrice && (
              <p className="text-xs text-muted-foreground line-through">
                {formatBRL(product.oldPrice)}
              </p>
            )}
            <p className="text-lg font-bold text-foreground">
              {formatBRL(product.price)}
            </p>
          </div>
          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex shrink-0 items-center gap-1 rounded-full bg-ink px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary"
            aria-label={`Ver ${product.name} na Shopee`}
          >
            Ver <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </article>
  );
}
