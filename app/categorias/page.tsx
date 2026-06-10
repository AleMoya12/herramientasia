import type { Metadata } from "next";
import { CategoryCard } from "@/components/CategoryCard";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { categories } from "@/content/categories";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Categorías",
  description:
    "Navegá por familias de herramientas IA según el problema que querés resolver: chatbots, imagen, código, automatización, voz y más.",
  path: "/categorias/"
});

export default function CategoriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Categorías", path: "/categorias/" }
        ])}
      />
      <PageIntro
        current="Categorías"
        title="Categorías por problema real"
        description="Navegá por familias de herramientas según el problema que querés resolver. Desde chatbots y generadores de imágenes hasta asistentes de código, automatización y voz."
      />
      <section className="section">
        <div className="grid three">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>
    </>
  );
}
