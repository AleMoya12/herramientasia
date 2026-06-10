import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { useCases } from "@/content/useCases";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Casos de uso",
  description:
    "Ideas concretas para usar IA en marketing, ventas, diseño, desarrollo, contenido, automatización, operaciones y trabajo diario.",
  path: "/casos-de-uso/"
});

export default function UseCasesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Casos de uso", path: "/casos-de-uso/" }
        ])}
      />
      <PageIntro
        current="Casos de uso"
        title="Casos de uso para aplicar IA"
        description="Ideas concretas para usar IA en marketing, ventas, atención al cliente, creación de contenido, diseño, operaciones y desarrollo."
      />
      <section className="section">
        <div className="grid three">
          {useCases.map((useCase) => (
            <article className="card" key={useCase.title}>
              <h3>{useCase.title}</h3>
              <p>{useCase.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
