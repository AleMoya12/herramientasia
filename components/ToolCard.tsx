import { ExternalLink } from "lucide-react";
import type { Tool } from "@/content/tools";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <article className="card tool-card">
      <div>
        <p className="card-meta">{tool.category}</p>
        <h3>{tool.name}</h3>
        <p>{tool.description}</p>
      </div>
      <dl>
        <div>
          <dt>Sirve para</dt>
          <dd>{tool.bestFor}</dd>
        </div>
        <div>
          <dt>Plan gratis</dt>
          <dd>{tool.freePlan}</dd>
        </div>
        <div>
          <dt>Salida</dt>
          <dd>{tool.output}</dd>
        </div>
        <div>
          <dt>Alternativa</dt>
          <dd>{tool.alternative}</dd>
        </div>
      </dl>
      <a href={tool.officialUrl} target="_blank" rel="noopener noreferrer" className="text-link">
        Sitio oficial
        <ExternalLink size={15} aria-hidden="true" />
      </a>
    </article>
  );
}
