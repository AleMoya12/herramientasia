export type Tool = {
  name: string;
  category: string;
  description: string;
  bestFor: string;
  freePlan: string;
  language: string;
  output: string;
  integrations: string;
  alternative: string;
  reviewedAt: string;
  officialUrl: string;
};

export const tools: Tool[] = [
  {
    name: "ChatGPT",
    category: "Chatbots y búsqueda con IA",
    description: "Asistente general para escritura, análisis, planificación, código y conversación multimodal.",
    bestFor: "Equipos y profesionales que necesitan un copiloto amplio para tareas variadas.",
    freePlan: "Sí, con límites",
    language: "Español disponible",
    output: "Texto, imagen, análisis y código",
    integrations: "Apps, navegación, archivos y conectores según plan",
    alternative: "Claude",
    reviewedAt: "2026-06-10",
    officialUrl: "https://chatgpt.com/"
  },
  {
    name: "Claude",
    category: "Chatbots y búsqueda con IA",
    description: "Modelo conversacional fuerte para análisis largo, escritura cuidadosa y razonamiento asistido.",
    bestFor: "Lectura de documentos, redacción editorial y trabajo con contexto extenso.",
    freePlan: "Sí, con límites",
    language: "Español disponible",
    output: "Texto, análisis y código",
    integrations: "Web, escritorio, proyectos y conectores según disponibilidad",
    alternative: "Gemini",
    reviewedAt: "2026-06-10",
    officialUrl: "https://claude.ai/"
  },
  {
    name: "Gemini",
    category: "Chatbots y búsqueda con IA",
    description: "Asistente de Google integrado con búsqueda, Workspace y flujos de productividad.",
    bestFor: "Usuarios que ya trabajan en Gmail, Docs, Drive y hojas de cálculo.",
    freePlan: "Sí, con límites",
    language: "Español disponible",
    output: "Texto, imagen, análisis y asistencia en apps",
    integrations: "Google Workspace, Drive y ecosistema Google",
    alternative: "ChatGPT",
    reviewedAt: "2026-06-10",
    officialUrl: "https://gemini.google.com/"
  },
  {
    name: "GitHub Copilot",
    category: "Programación",
    description: "Asistente de desarrollo para escribir, explicar, revisar y navegar código.",
    bestFor: "Desarrolladores que quieren ayuda dentro del IDE, terminal y GitHub.",
    freePlan: "Plan gratuito disponible para ciertos usuarios",
    language: "Código y lenguaje natural",
    output: "Código, tests, explicaciones y revisiones",
    integrations: "VS Code, JetBrains, GitHub, CLI",
    alternative: "Cursor",
    reviewedAt: "2026-06-10",
    officialUrl: "https://github.com/features/copilot"
  },
  {
    name: "Canva IA",
    category: "Diseño e imagen",
    description: "Suite visual con funciones IA para generar, editar y adaptar piezas de diseño.",
    bestFor: "Emprendedores y equipos de marketing que necesitan velocidad visual.",
    freePlan: "Sí",
    language: "Español disponible",
    output: "Diseños, imágenes, presentaciones y piezas sociales",
    integrations: "Canva, apps y publicación en canales",
    alternative: "Adobe Firefly",
    reviewedAt: "2026-06-10",
    officialUrl: "https://www.canva.com/ai/"
  },
  {
    name: "Adobe Firefly",
    category: "Diseño e imagen",
    description: "Generación y edición visual pensada para flujos creativos y ecosistema Adobe.",
    bestFor: "Diseñadores que necesitan control visual y uso comercial más ordenado.",
    freePlan: "Créditos limitados",
    language: "Español disponible",
    output: "Imágenes, efectos, rellenos y variaciones visuales",
    integrations: "Photoshop, Illustrator, Express y Creative Cloud",
    alternative: "Canva IA",
    reviewedAt: "2026-06-10",
    officialUrl: "https://firefly.adobe.com/"
  },
  {
    name: "Runway",
    category: "Vídeo",
    description: "Plataforma creativa para generar, editar y transformar video con IA.",
    bestFor: "Equipos audiovisuales, creadores y prototipado de escenas.",
    freePlan: "Sí, con créditos",
    language: "Inglés principalmente",
    output: "Video, imagen y edición generativa",
    integrations: "Web app y flujos creativos",
    alternative: "Sora",
    reviewedAt: "2026-06-10",
    officialUrl: "https://runwayml.com/"
  },
  {
    name: "ElevenLabs",
    category: "Audio y voz",
    description: "Generación, clonación, doblaje y edición de voz sintética de alta calidad.",
    bestFor: "Podcasts, videos, capacitación, localización y prototipos de voz.",
    freePlan: "Sí, con límites",
    language: "Múltiples idiomas",
    output: "Audio, voces, doblaje y transcripción",
    integrations: "API, web app e integraciones de terceros",
    alternative: "PlayHT",
    reviewedAt: "2026-06-10",
    officialUrl: "https://elevenlabs.io/"
  },
  {
    name: "Zapier",
    category: "Automatización",
    description: "Automatización entre aplicaciones con funciones IA para crear flujos más rápido.",
    bestFor: "Negocios que quieren conectar herramientas sin desarrollo a medida.",
    freePlan: "Sí, con límites",
    language: "Español parcial",
    output: "Automatizaciones, acciones y flujos conectados",
    integrations: "Miles de apps",
    alternative: "Make",
    reviewedAt: "2026-06-10",
    officialUrl: "https://zapier.com/"
  }
];
