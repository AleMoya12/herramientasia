import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LibraryBig } from "lucide-react";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Guía editorial de herramientas IA</p>
        <h1>Herramientas IA para trabajar mejor, crear más rápido y decidir con criterio</h1>
        <p>
          Descubrí, compará y elegí herramientas de inteligencia artificial según tu
          objetivo real: escribir, diseñar, programar, automatizar, investigar, editar
          audio o crear video. Sin humo, sin listas infinitas y con explicaciones claras.
        </p>
        <div className="hero-actions">
          <Link className="button primary" href="/herramientas">
            <LibraryBig size={18} aria-hidden="true" />
            Explorar herramientas
          </Link>
          <Link className="button secondary" href="/comparativas">
            Ver comparativas
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="hero-media" aria-hidden="true">
        <Image
          src="/hero-og.png"
          alt=""
          width={1536}
          height={1024}
          priority
          sizes="(max-width: 900px) 100vw, 48vw"
        />
      </div>
    </section>
  );
}
