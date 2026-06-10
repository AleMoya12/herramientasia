import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { glossary } from "@/content/glossary";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Glosario",
  description:
    "Conceptos de inteligencia artificial explicados en lenguaje claro: LLM, agente, multimodal, RAG, embeddings, prompt y más.",
  path: "/glosario/"
});

export default function GlossaryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Glosario", path: "/glosario/" }
        ])}
      />
      <PageIntro
        current="Glosario"
        title="Glosario IA en lenguaje claro"
        description="Conceptos básicos y avanzados explicados sin vueltas: LLM, agente, multimodal, RAG, automatización, embeddings, prompt, fine-tuning y más."
      />
      <section className="section">
        <div className="glossary-list">
          {glossary.map((item) => (
            <article className="glossary-term" key={item.term}>
              <h3>{item.term}</h3>
              <p>{item.definition}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
