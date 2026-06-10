import type { Metadata } from "next";
import { FAQItem } from "@/components/FAQItem";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { faqs } from "@/content/faq";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "FAQ",
  description:
    "Preguntas frecuentes para quien está empezando o evaluando herramientas de IA para su negocio o trabajo diario.",
  path: "/faq/"
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "FAQ", path: "/faq/" }
        ])}
      />
      <PageIntro
        current="FAQ"
        title="Preguntas frecuentes"
        description="Respuestas directas para quien está empezando o evaluando herramientas de IA para su negocio o trabajo diario."
      />
      <section className="section">
        <div className="faq-list">
          {faqs.map((item) => (
            <FAQItem key={item.question} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
