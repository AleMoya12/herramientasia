import { Breadcrumbs } from "@/components/Breadcrumbs";

export function PageIntro({
  title,
  description,
  current
}: {
  title: string;
  description: string;
  current: string;
}) {
  return (
    <section className="page-intro">
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: current, href: "#" }
        ]}
      />
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
