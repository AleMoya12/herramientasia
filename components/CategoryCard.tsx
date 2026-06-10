import type { Category } from "@/content/categories";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <article className={`card category-card accent-${category.accent}`}>
      <span aria-hidden="true" />
      <h3>{category.title}</h3>
      <p>{category.description}</p>
    </article>
  );
}
