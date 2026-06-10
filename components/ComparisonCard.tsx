import type { Comparison } from "@/content/comparisons";

export function ComparisonCard({ comparison }: { comparison: Comparison }) {
  return (
    <article className="card comparison-card">
      <p className="card-meta">{comparison.idealFor}</p>
      <h3>{comparison.title}</h3>
      <p>{comparison.description}</p>
      <strong>{comparison.winner}</strong>
    </article>
  );
}
