import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Mail } from "lucide-react";
import logo from "@/assets/vitrio-logo.jpeg";
import { categories, waLink, INSTAGRAM_URL } from "@/lib/products";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Vitrio" className="h-10 w-10 rounded-full" />
              <span className="text-lg font-bold">
                VITR<span className="text-primary">IO</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground text-balance">
              Os melhores achados da internet. Produtos selecionados com carinho, ofertas
              reais e preços que valem a pena.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Categorias</h4>
            <ul className="mt-4 space-y-2">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/categoria/$slug"
                    params={{ slug: c.slug }}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Vitrio</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary">Início</Link></li>
              <li><Link to="/produtos" className="text-sm text-muted-foreground hover:text-primary">Produtos</Link></li>
              <li><Link to="/ofertas" className="text-sm text-muted-foreground hover:text-primary">Ofertas</Link></li>
              <li><Link to="/sobre" className="text-sm text-muted-foreground hover:text-primary">Sobre</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Contato</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={waLink("Olá! Vim pelo site da Vitrio 👋")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <Instagram className="h-4 w-4" /> @vitrio_ofc
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@vitrio.com.br"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <Mail className="h-4 w-4" /> contato@vitrio.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Vitrio. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Os preços podem sofrer alteração. Alguns links são de afiliado.
          </p>
        </div>
      </div>
    </footer>
  );
}
