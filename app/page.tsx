import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { CategoryCard } from "@/components/CategoryCard";
import { ComparisonCard } from "@/components/ComparisonCard";
import { FAQItem } from "@/components/FAQItem";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { SectionTitle } from "@/components/SectionTitle";
import { blogPosts } from "@/content/blog";
import { categories } from "@/content/categories";
import { comparisons } from "@/content/comparisons";
import { faqs } from "@/content/faq";
import { absoluteUrl, site } from "@/lib/site";

export default function Home() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "es-AR"
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: absoluteUrl("/logo.svg")
  };

  return (
    <>
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={organizationJsonLd} />
      <Hero />

      <section className="section alt">
        <SectionTitle eyebrow="Criterio antes que volumen" title="Qué vas a encontrar" />
        <div className="grid four">
          {[
            ["Selección curada", "No listamos por listar. Priorizamos herramientas con propuesta clara, uso real y valor práctico."],
            ["Comparativas útiles", "Diferencias concretas: facilidad de uso, precio, casos ideales, límites y alternativas."],
            ["Guías para empezar", "Tutoriales simples para no perder tiempo entre promesas de marketing y pruebas eternas."],
            ["Actualidad bien explicada", "Cambios importantes del mundo IA traducidos a impacto real para negocios, creadores y equipos."]
          ].map(([title, description]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="Exploración"
          title="Categorías destacadas"
          description="Organizamos la IA por el problema que resuelve, no por etiquetas técnicas que nadie pidió."
        />
        <div className="grid three">
          {categories.slice(0, 6).map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <section className="section alt">
        <SectionTitle eyebrow="Decisión" title="Comparativas más consultadas" />
        <div className="grid two">
          {comparisons.map((comparison) => (
            <ComparisonCard key={comparison.title} comparison={comparison} />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="Método"
          title="Cómo elegir una herramienta IA"
          description="Elegir bien no es usar la más famosa. Es elegir la que mejor encaja con tu tarea, presupuesto, idioma, flujo de trabajo y nivel técnico."
        />
        <Link className="button secondary" href="/casos-de-uso">
          Ver casos de uso
        </Link>
      </section>

      <section className="section alt">
        <SectionTitle eyebrow="Blog" title="Últimas del blog" />
        <div className="grid three">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="Dudas frecuentes" title="FAQ breve" />
        <div className="faq-list">
          {faqs.slice(0, 3).map((item) => (
            <FAQItem key={item.question} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
