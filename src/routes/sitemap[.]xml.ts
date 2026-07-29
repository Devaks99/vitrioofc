import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { categories, products } from "@/lib/products";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: { path: string; changefreq?: string; priority?: string }[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/produtos", changefreq: "daily", priority: "0.9" },
          { path: "/ofertas", changefreq: "daily", priority: "0.9" },
          { path: "/sobre", changefreq: "monthly", priority: "0.5" },
          ...categories.map((c) => ({
            path: `/categoria/${c.slug}`,
            changefreq: "weekly",
            priority: "0.8",
          })),
          ...products.map((p) => ({
            path: `/produto/${p.id}`,
            changefreq: "weekly",
            priority: "0.7",
          })),
        ];

        const urls = entries.map(
          (e) =>
            `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n` +
            (e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>\n` : "") +
            (e.priority ? `    <priority>${e.priority}</priority>\n` : "") +
            `  </url>`,
        );

        const xml =
          `<?xml version="1.0" encoding="UTF-8"?>\n` +
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          urls.join("\n") +
          `\n</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
