import type { Metadata } from "next";
import { ComparisonCard } from "@/components/ComparisonCard";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { comparisons } from "@/content/comparisons";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Comparativas",
  description:
    "Comparativas honestas entre herramientas populares de IA: qué gana cada una, en qué falla y para qué tipo de usuario conviene.",
  path: "/comparativas/"
});

export default function ComparisonsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Comparativas", path: "/comparativas/" }
        ])}
      />
      <PageIntro
        current="Comparativas"
        title="Comparativas útiles para decidir"
        description="Comparativas honestas entre herramientas populares de IA. Qué gana cada una, en qué falla y para qué tipo de usuario conviene."
      />
      <section className="section">
        <div className="grid two">
          {comparisons.map((comparison) => (
            <ComparisonCard key={comparison.title} comparison={comparison} />
          ))}
        </div>
      </section>
    </>
  );
}
