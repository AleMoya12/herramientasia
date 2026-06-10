import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/content/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="card blog-card">
      <p className="card-meta">
        {post.category} · {new Date(`${post.date}T00:00:00`).toLocaleDateString("es-AR")}
      </p>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <Link className="text-link" href={`/blog/${post.slug}`}>
        Leer análisis
        <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </article>
  );
}
