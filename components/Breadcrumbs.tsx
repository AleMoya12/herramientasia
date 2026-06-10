import Link from "next/link";

export function Breadcrumbs({ items }: { items: Array<{ label: string; href: string }> }) {
  return (
    <nav className="breadcrumbs" aria-label="Migas de pan">
      {items.map((item, index) => (
        <span key={item.href}>
          {index > 0 ? <span aria-hidden="true">/</span> : null}
          {index === items.length - 1 ? (
            <span aria-current="page">{item.label}</span>
          ) : (
            <Link href={item.href}>{item.label}</Link>
          )}
        </span>
      ))}
    </nav>
  );
}
