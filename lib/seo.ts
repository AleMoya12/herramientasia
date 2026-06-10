import type { Metadata } from "next";
import { absoluteUrl, site } from "@/lib/site";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime
}: SeoInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title === site.name ? site.name : `${title} | ${site.name}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(site.url),
    alternates: {
      canonical: url
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "es_AR",
      type,
      publishedTime,
      images: [
        {
          url: absoluteUrl(site.ogImage),
          width: 1536,
          height: 1024,
          alt: "HerramientasIA, guía editorial de herramientas de inteligencia artificial"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(site.ogImage)]
    }
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}
