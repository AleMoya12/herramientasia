import Link from "next/link";
import { navItems } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Link href="/" className="footer-brand">
            herramientasia
          </Link>
          <p>
            Guía práctica para encontrar software de IA que realmente sirva.
            Menos ruido. Más criterio.
          </p>
        </div>
        <nav aria-label="Navegación de pie">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <p className="credit">
        Sitio desarrollado por{" "}
        <a href="https://www.paginawebarg.com.ar/" target="_blank" rel="noopener noreferrer">
          Página Web Arg
        </a>
      </p>
    </footer>
  );
}
