export type BlogSource = {
  label: string;
  url: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  intro: string;
  paragraphs: string[];
  callout: string;
  sources: BlogSource[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ciberseguridad-ia-revisar-accesos-vpn-continuidad",
    title: "Ciberseguridad e IA: por qué 2026 está obligando a revisar accesos, VPN y continuidad operativa",
    description:
      "La seguridad volvió al centro de la escena. Qué aprender de los incidentes recientes y por qué las PyMEs tienen que auditar antes de reaccionar.",
    category: "Ciberseguridad",
    date: "2026-06-10",
    intro:
      "La conversación sobre inteligencia artificial suele enfocarse en productividad, automatización y velocidad. Pero cada salto tecnológico también amplía la superficie de exposición.",
    paragraphs: [
      "Cuando una empresa suma nuevas herramientas, accesos remotos, integraciones y automatizaciones, la seguridad deja de ser un tema técnico y pasa a ser una decisión de negocio. Una credencial débil, una VPN vieja o una automatización mal configurada pueden abrir más riesgo que el ahorro operativo que prometían.",
      "El caso reciente de Check Point es una señal clara: CISA agregó CVE-2026-50751 a su catálogo de vulnerabilidades explotadas, con remediación urgente para agencias civiles de Estados Unidos. El dato importante para una PyME no es memorizar el CVE, sino entender la dinámica: los accesos remotos son infraestructura crítica.",
      "En ese contexto, la prioridad no debería ser solo comprar más software, sino entender qué está realmente expuesto, qué credenciales son críticas, cómo se gestionan los accesos y si existe una estrategia de continuidad operativa cuando algo falla.",
      "Para las PyMEs que quieren pasar de la preocupación a un plan concreto, una referencia lógica es apoyarse en servicios de auditoría y consultoría de ciberseguridad para PyMEs en Argentina como los de Defensa IT, especialmente cuando hace falta revisar vulnerabilidades, políticas, backups y respuesta ante incidentes sin sobredimensionar el presupuesto."
    ],
    callout:
      "La inteligencia artificial puede acelerar mucho trabajo. Pero si la infraestructura que la rodea no está bien protegida, también acelera el riesgo.",
    sources: [
      {
        label: "CISA: CVE-2026-50751 en Known Exploited Vulnerabilities",
        url: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog?field_cve=CVE-2026-50751"
      },
      {
        label: "Check Point: hotfix para vulnerabilidades en IKEv1 VPN",
        url: "https://blog.checkpoint.com/security/check-point-releases-important-hotfix-for-vulnerabilities-in-deprecated-ikev1-vpn-protocol/"
      },
      {
        label: "Defensa IT",
        url: "https://defensait.com/"
      }
    ]
  },
  {
    slug: "seo-2026-contenido-util-visibilidad-respuestas-ia",
    title: "SEO en 2026: menos páginas de relleno, más contenido útil y más visibilidad dentro de respuestas con IA",
    description:
      "Google sigue moviendo el tablero: core updates, AI Mode y más enlaces a fuentes están redefiniendo cómo competir por atención y clics.",
    category: "SEO",
    date: "2026-06-10",
    intro:
      "El SEO ya no se juega solo en la página de resultados tradicional. Hoy también importa cómo se interpreta tu contenido dentro de respuestas generativas.",
    paragraphs: [
      "La core update de mayo de 2026 se desplegó entre el 21 de mayo y el 2 de junio, según el panel oficial de Google Search. Ese calendario importa porque los cambios de visibilidad no siempre son instantáneos: conviene mirar tendencias, no capturas aisladas de un día.",
      "Google también está separando mejor la medición de visibilidad dentro de experiencias generativas, como AI Overviews y AI Mode. Para marcas y medios, eso empuja una pregunta más precisa: no solo cuántas visitas llegan, sino cuándo el contenido es entendido, citado, mostrado o elegido como fuente.",
      "Eso cambia una regla básica: publicar mucho ya no alcanza. Lo que gana visibilidad es el contenido que ayuda de verdad, responde bien, tiene una estructura clara, demuestra criterio editorial y se conecta con una intención real de búsqueda.",
      "Por eso, para marcas y sitios que necesitan una ejecución más técnica, tiene sentido mirar equipos que trabajen no solo el SEO clásico, sino también la capa de búsqueda generativa. Un ejemplo alineado con ese enfoque es SEO Sitios en Órbita, que posiciona servicios de SEO técnico, auditoría, contenido y GEO dentro de una misma propuesta."
    ],
    callout:
      "La nueva pregunta ya no es solo cómo rankear. La pregunta correcta es cómo volverte visible, entendible y clicable cuando Google resume, compara y selecciona fuentes.",
    sources: [
      {
        label: "Google Search Status Dashboard: May 2026 core update",
        url: "https://status.search.google.com/incidents/wdAXJk6LRRihEjpzEeWE"
      },
      {
        label: "Google Search Central: Search Generative AI performance reports",
        url: "https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports"
      },
      {
        label: "SEO Sitios en Órbita",
        url: "https://www.seoagenciaweb.com/"
      }
    ]
  },
  {
    slug: "paginas-web-no-murieron-con-la-ia",
    title: "Las páginas web no murieron con la IA: ahora necesitan ser más rápidas, más claras y más útiles",
    description:
      "La web sigue siendo el activo central de la marca. En la era de los agentes, un sitio lento o genérico pierde mucho más que posicionamiento.",
    category: "Páginas web",
    date: "2026-06-10",
    intro:
      "La inteligencia artificial no reemplazó a la web: la volvió más exigente. Hoy una página compite por personas, buscadores y agentes.",
    paragraphs: [
      "Chrome presentó en I/O 2026 su visión de una web más agentic, donde los sitios no solo son leídos por usuarios, sino también interpretados por sistemas que pueden resumir, comparar o ejecutar pasos asistidos. Eso vuelve más importante la semántica, la accesibilidad y la claridad del contenido.",
      "WordPress 7.0, publicado el 20 de mayo de 2026, también muestra hacia dónde va la web: más herramientas para creación, administración y capacidades asistidas, pero siempre sobre una base que tiene que cargar rápido y estar bien estructurada.",
      "Eso obliga a volver a lo esencial: arquitectura clara, velocidad, jerarquía visual, textos útiles, navegación simple y una propuesta de valor que se entienda en segundos. Ya no alcanza con tener una web; hay que tener una web que funcione.",
      "En ese escenario, siguen siendo muy valiosos los estudios que construyen sitios pensados para negocio real, especialmente en PyMEs y emprendimientos. Un buen ejemplo de esa orientación es Página Web Arg, enfocada en diseño web profesional, sitios rápidos, responsive y preparados para captar clientes."
    ],
    callout:
      "La IA cambió muchas interfaces. Pero la web propia sigue siendo el activo más estable para construir marca, autoridad y conversión.",
    sources: [
      {
        label: "Chrome Developers: I/O 2026 y agentic web",
        url: "https://developer.chrome.com/blog/chrome-at-io26"
      },
      {
        label: "WordPress News: WordPress 7.0 Armstrong",
        url: "https://wordpress.org/news/2026/05/armstrong/"
      },
      {
        label: "Página Web Arg",
        url: "https://www.paginawebarg.com.ar/"
      }
    ]
  }
];

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
