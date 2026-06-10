import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { navItems } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="HerramientasIA inicio">
        <Image src="/logo.svg" alt="" width={42} height={42} priority />
        <span>herramientasia</span>
      </Link>
      <nav className="main-nav" aria-label="Navegación principal">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="icon-link" href="/herramientas" aria-label="Buscar herramientas">
        <Search size={18} aria-hidden="true" />
      </Link>
    </header>
  );
}
