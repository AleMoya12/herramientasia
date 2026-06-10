import type { Metadata } from "next";
import { ArticleTemplate } from "@/components/ArticleTemplate";
import { getPost } from "@/content/blog";
import { pageMetadata } from "@/lib/seo";

const post = getPost("ciberseguridad-ia-revisar-accesos-vpn-continuidad")!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}/`,
  type: "article",
  publishedTime: post.date
});

export default function CybersecurityArticlePage() {
  return <ArticleTemplate post={post} />;
}
