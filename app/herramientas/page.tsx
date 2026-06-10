import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { ToolCard } from "@/components/ToolCard";
import { tools } from "@/content/tools";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Herramientas",
  description:
    "Explorá herramientas de IA ordenadas por categoría, objetivo y tipo de usuario para escribir, diseñar, programar, automatizar y crear contenido.",
  path: "/herramientas/"
});

export default function ToolsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Herramientas", path: "/herramientas/" }
        ])}
      />
      <PageIntro
        current="Herramientas"
        title="Directorio curado de herramientas IA"
        description="Explorá herramientas de IA ordenadas por categoría, objetivo y tipo de usuario. Encontrá opciones para escribir, diseñar, programar, automatizar y crear contenido con más claridad y menos prueba-error."
      />
      <section className="section">
        <div className="grid three">
          {tools.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      </section>
    </>
  );
}
