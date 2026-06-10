export const site = {
  name: "HerramientasIA",
  domain: "herramientasia.com.ar",
  url: "https://herramientasia.com.ar",
  description:
    "Guía en español para descubrir, comparar y usar herramientas de inteligencia artificial con criterio práctico.",
  ogImage: "/hero-og.png",
  author: "HerramientasIA"
};

export const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/herramientas", label: "Herramientas" },
  { href: "/categorias", label: "Categorías" },
  { href: "/comparativas", label: "Comparativas" },
  { href: "/casos-de-uso", label: "Casos de uso" },
  { href: "/blog", label: "Blog" },
  { href: "/glosario", label: "Glosario" },
  { href: "/faq", label: "FAQ" }
];

export function absoluteUrl(path = "/") {
  return `${site.url}${path}`;
}
