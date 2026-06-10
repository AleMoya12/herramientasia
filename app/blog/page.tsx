import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { blogPosts } from "@/content/blog";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Noticias, análisis y contexto actual sobre inteligencia artificial, SEO, web, ciberseguridad y productividad.",
  path: "/blog/"
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Blog", path: "/blog/" }
        ])}
      />
      <PageIntro
        current="Blog"
        title="Actualidad IA bien explicada"
        description="Noticias, análisis y contexto actual traducidos a impacto real para negocios, creadores, equipos y pequeñas empresas."
      />
      <section className="section">
        <div className="grid three">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
