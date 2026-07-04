import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { ToolCard } from "@/components/ToolCard";
import { tools, type Tool } from "@/content/tools";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Herramientas",
  description:
    "Explora herramientas de IA ordenadas por categoria, objetivo y tipo de usuario para escribir, disenar, programar, automatizar y crear contenido.",
  path: "/herramientas/"
});

type SearchParams = Promise<{ q?: string | string[] }>;

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function getSearchText(params?: { q?: string | string[] }) {
  if (!params?.q) {
    return "";
  }

  return Array.isArray(params.q) ? params.q[0] ?? "" : params.q;
}

function getDerivedKeywords(tool: Tool) {
  const keywords: string[] = [];
  const normalizedFreePlan = normalizeText(tool.freePlan);
  const normalizedCategory = normalizeText(tool.category);
  const normalizedOutput = normalizeText(tool.output);
  const normalizedDescription = normalizeText(`${tool.description} ${tool.bestFor}`);

  if (
    normalizedFreePlan.includes("si") ||
    normalizedFreePlan.includes("gratuito") ||
    normalizedFreePlan.includes("creditos")
  ) {
    keywords.push("gratis", "gratuito", "free", "freemium", "sin costo");
  }

  if (normalizedCategory.includes("programacion") || normalizedOutput.includes("codigo")) {
    keywords.push("codigo", "programacion", "desarrollo", "dev");
  }

  if (normalizedCategory.includes("diseno") || normalizedOutput.includes("imagenes")) {
    keywords.push("diseno", "imagen", "mockup", "mockups", "visual");
  }

  if (normalizedCategory.includes("video")) {
    keywords.push("video", "clips", "escenas");
  }

  if (normalizedCategory.includes("audio") || normalizedOutput.includes("audio")) {
    keywords.push("audio", "voz", "transcribir", "transcripcion", "reuniones");
  }

  if (normalizedCategory.includes("automatizacion")) {
    keywords.push("automatizacion", "flujos", "integraciones", "workflow");
  }

  if (
    normalizedCategory.includes("chatbots") ||
    normalizedDescription.includes("escritura") ||
    normalizedDescription.includes("documentos")
  ) {
    keywords.push("texto", "redaccion", "resumir", "pdf", "pdfs", "investigacion");
  }

  return keywords.join(" ");
}

function getSearchIndex(tool: Tool) {
  return normalizeText(
    [
      tool.name,
      tool.category,
      tool.description,
      tool.bestFor,
      tool.freePlan,
      tool.language,
      tool.output,
      tool.integrations,
      tool.alternative,
      getDerivedKeywords(tool)
    ].join(" ")
  );
}

export default async function ToolsPage({
  searchParams
}: {
  searchParams?: SearchParams;
}) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const rawQuery = getSearchText(resolvedSearchParams);
  const query = normalizeText(rawQuery);

  const filteredTools = query
    ? tools.filter((tool) => getSearchIndex(tool).includes(query))
    : tools;

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
        description="Explora herramientas de IA ordenadas por categoria, objetivo y tipo de usuario. Encontra opciones para escribir, disenar, programar, automatizar y crear contenido con mas claridad y menos prueba-error."
      />
      <section className="section">
        <form className="directory-search" action="/herramientas" method="get">
          <input
            type="search"
            name="q"
            defaultValue={rawQuery}
            placeholder="Buscar por tarea, plan gratis, categoria o tipo de salida"
            aria-label="Buscar herramientas"
          />
          <button className="button primary" type="submit">
            Buscar
          </button>
          {rawQuery ? (
            <Link className="button secondary" href="/herramientas">
              Limpiar
            </Link>
          ) : null}
        </form>

        <p className="results-summary">
          {rawQuery
            ? `${filteredTools.length} resultado${filteredTools.length === 1 ? "" : "s"} para "${rawQuery}"`
            : `${tools.length} herramientas en el directorio`}
        </p>

        {filteredTools.length > 0 ? (
          <div className="grid three">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        ) : (
          <article className="card empty-state">
            <h3>
              No encontramos herramientas para &quot;{rawQuery}&quot;
            </h3>
            <p>
              Proba con terminos como texto, video, audio, gratis, diseno,
              automatizacion o programacion.
            </p>
            <Link className="button secondary" href="/herramientas">
              Ver todo el directorio
            </Link>
          </article>
        )}
      </section>
    </>
  );
}
