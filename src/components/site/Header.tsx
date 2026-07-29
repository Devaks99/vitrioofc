import { Link } from "@tanstack/react-router";
import { Menu, X, Instagram } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/vitrio-logo.jpeg";
import { categories, INSTAGRAM_URL } from "@/lib/products";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={logo} alt="Vitrio" className="h-9 w-9 rounded-full object-cover" />
          <span className="text-lg font-bold tracking-tight">
            VITR<span className="text-primary">IO</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <Link
            to="/"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-primary" }}
          >
            Início
          </Link>
          <Link
            to="/produtos"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
          >
            Produtos
          </Link>
          <Link
            to="/ofertas"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
          >
            Ofertas
          </Link>
          <Link
            to="/sobre"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
          >
            Sobre
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden h-9 w-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-secondary hover:text-primary md:inline-flex"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <Link
            to="/produtos"
            className="hidden rounded-full gradient-brand px-5 py-2 text-sm font-semibold text-white shadow-brand transition-transform hover:scale-[1.02] md:inline-flex"
          >
            Ver ofertas
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground md:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-secondary"
            >
              Início
            </Link>
            <Link
              to="/produtos"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-secondary"
            >
              Todos os produtos
            </Link>
            <Link
              to="/ofertas"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-secondary"
            >
              Ofertas
            </Link>
            <div className="my-2 border-t border-border" />
            <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Categorias
            </p>
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/categoria/$slug"
                params={{ slug: c.slug }}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm hover:bg-secondary"
              >
                {c.name}
              </Link>
            ))}
            <Link
              to="/sobre"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-secondary"
            >
              Sobre
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
