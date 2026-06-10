import type { Metadata } from "next";
import { ArticleTemplate } from "@/components/ArticleTemplate";
import { getPost } from "@/content/blog";
import { pageMetadata } from "@/lib/seo";

const post = getPost("paginas-web-no-murieron-con-la-ia")!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}/`,
  type: "article",
  publishedTime: post.date
});

export default function WebArticlePage() {
  return <ArticleTemplate post={post} />;
}
