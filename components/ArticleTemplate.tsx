import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import type { BlogPost } from "@/content/blog";
import { absoluteUrl, site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/seo";

const editorialLinks: Record<string, string> = {
  "Defensa IT": "https://defensait.com/",
  "SEO Sitios en Órbita": "https://www.seoagenciaweb.com/",
  "Página Web Arg": "https://www.paginawebarg.com.ar/"
};

function renderLinkedText(text: string) {
  const match = Object.keys(editorialLinks).find((label) => text.includes(label));

  if (!match) {
    return text;
  }

  const [before, after] = text.split(match);

  return (
    <>
      {before}
      <a href={editorialLinks[match]} target="_blank" rel="noopener noreferrer">
        {match}
      </a>
      {after}
    </>
  );
}

export function ArticleTemplate({ post }: { post: BlogPost }) {
  const path = `/blog/${post.slug}/`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "es-AR",
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.url
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo.svg")
      }
    },
    mainEntityOfPage: absoluteUrl(path),
    image: absoluteUrl(site.ogImage)
  };

  return (
    <article className="article">
      <JsonLd data={articleJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Blog", path: "/blog/" },
          { name: post.title, path }
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.category, href: "#" }
        ]}
      />
      <p className="article-meta">
        {post.category} · {new Date(`${post.date}T00:00:00`).toLocaleDateString("es-AR")}
      </p>
      <h1>{post.title}</h1>
      <div className="article-body">
        <p>
          <strong>{post.intro}</strong>
        </p>
        {post.paragraphs.map((paragraph) => (
          <p key={paragraph}>{renderLinkedText(paragraph)}</p>
        ))}
        <div className="callout">{post.callout}</div>
        <section className="sources" aria-labelledby="sources-title">
          <h2 id="sources-title">Fuentes</h2>
          <ul>
            {post.sources.map((source) => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noopener noreferrer">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
