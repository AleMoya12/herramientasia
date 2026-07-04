import Link from "next/link";
import { ArrowRight, LibraryBig, Search, Sparkles } from "lucide-react";

export function Hero() {
  const chips = [
    { label: "Texto", href: "/herramientas?q=texto" },
    { label: "Imagen", href: "/herramientas?q=imagen" },
    { label: "Video", href: "/herramientas?q=video" },
    { label: "Codigo", href: "/herramientas?q=codigo" },
    { label: "Audio", href: "/herramientas?q=audio" },
    { label: "Gratis", href: "/herramientas?q=gratis" }
  ];
  const categories = [
    { label: "Escribir y resumir", href: "/herramientas?q=escritura" },
    { label: "Disenar contenido visual", href: "/herramientas?q=diseno" },
    { label: "Programar con asistencia", href: "/herramientas?q=programacion" },
    { label: "Investigar y analizar", href: "/herramientas?q=analisis" }
  ];

  return (
    <section className="hero">
      <div className="hero-shell">
        <div className="hero-top">
          <div className="hero-copy">
            <p className="eyebrow">Directorio curado de herramientas IA</p>
            <h1>Encontra rapido la herramienta IA indicada para tu flujo de trabajo.</h1>
            <p>
              Busca por tarea, compara opciones y filtra por uso real. Un punto de
              partida claro para escribir, disenar, programar, investigar o automatizar
              sin perder tiempo entre promesas vacias.
            </p>
          </div>

          <div className="hero-actions">
            <Link className="button primary" href="/herramientas">
              <LibraryBig size={18} aria-hidden="true" />
              Explorar directorio
            </Link>
            <Link className="button secondary" href="/comparativas">
              Ver comparativas
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="hero-search-panel">
          <form className="hero-search" action="/herramientas" method="get">
            <div className="hero-search-icon">
              <Search size={18} aria-hidden="true" />
            </div>
            <div className="hero-search-copy">
              <label className="hero-search-label" htmlFor="hero-search-input">
                Busca por necesidad, presupuesto o formato
              </label>
              <input
                id="hero-search-input"
                name="q"
                type="search"
                className="hero-search-input"
                placeholder="Ej: transcribir reuniones, gratis, video, mockups o resumir PDFs"
              />
            </div>
            <button type="submit" className="hero-search-submit">
              <Sparkles size={16} aria-hidden="true" />
              Buscar
            </button>
          </form>

          <div className="hero-chip-row" aria-label="Temas destacados">
            {chips.map((chip) => (
              <Link key={chip.label} href={chip.href} className="hero-chip">
                {chip.label}
              </Link>
            ))}
          </div>

          <div className="hero-categories">
            {categories.map((category) => (
              <Link key={category.label} href={category.href} className="hero-category-card">
                <span className="hero-category-kicker">Categoria</span>
                <strong>{category.label}</strong>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
