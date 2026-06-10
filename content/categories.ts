export type Category = {
  slug: string;
  title: string;
  description: string;
  accent: "moss" | "petrol" | "copper";
};

export const categories: Category[] = [
  {
    slug: "chatbots-busqueda",
    title: "Chatbots y búsqueda con IA",
    description: "Para investigar, resumir, resolver dudas y acelerar tareas cotidianas.",
    accent: "petrol"
  },
  {
    slug: "redaccion-productividad",
    title: "Redacción y productividad",
    description: "Asistentes para escribir mejor, ordenar ideas y trabajar con menos fricción.",
    accent: "moss"
  },
  {
    slug: "programacion",
    title: "Programación",
    description: "Herramientas para escribir, revisar, explicar y mejorar código.",
    accent: "copper"
  },
  {
    slug: "diseno-imagen",
    title: "Diseño e imagen",
    description: "Creación visual, conceptos, anuncios, branding y contenido creativo.",
    accent: "petrol"
  },
  {
    slug: "video",
    title: "Vídeo",
    description: "Generación, edición y aceleración de workflows audiovisuales.",
    accent: "moss"
  },
  {
    slug: "audio-voz",
    title: "Audio y voz",
    description: "Locuciones, doblaje, transcripción y síntesis de voz.",
    accent: "copper"
  },
  {
    slug: "automatizacion",
    title: "Automatización",
    description: "Conectá apps, delegá tareas y reducí trabajo manual repetitivo.",
    accent: "moss"
  },
  {
    slug: "seo-marketing",
    title: "SEO y marketing",
    description: "Investigación, estrategia, contenidos, anuncios y optimización de canales.",
    accent: "petrol"
  },
  {
    slug: "educacion",
    title: "Educación",
    description: "Recursos para explicar, estudiar, evaluar y crear materiales didácticos.",
    accent: "copper"
  },
  {
    slug: "negocio-operaciones",
    title: "Negocio y operaciones",
    description: "Análisis, documentación, procesos internos y decisiones de gestión.",
    accent: "moss"
  }
];
