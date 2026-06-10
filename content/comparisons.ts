export type Comparison = {
  title: string;
  description: string;
  winner: string;
  idealFor: string;
};

export const comparisons: Comparison[] = [
  {
    title: "ChatGPT vs Claude vs Gemini",
    description: "Tres asistentes potentes, pero con diferencias claras en ecosistema, escritura, análisis y conectores.",
    winner: "Depende del flujo: ChatGPT por amplitud, Claude por lectura larga, Gemini por Google Workspace.",
    idealFor: "Elegir un asistente principal de trabajo."
  },
  {
    title: "Canva IA vs Adobe Firefly",
    description: "Canva resuelve piezas completas con velocidad; Firefly ofrece mayor control creativo dentro de Adobe.",
    winner: "Canva para equipos no diseñadores; Firefly para flujos creativos avanzados.",
    idealFor: "Marketing, diseño y contenido visual."
  },
  {
    title: "Sora vs Runway",
    description: "Dos enfoques de video generativo con diferencias en disponibilidad, control creativo y producción.",
    winner: "Runway para workflows audiovisuales disponibles; Sora para generación avanzada cuando encaja.",
    idealFor: "Prototipos, anuncios, escenas y piezas audiovisuales."
  },
  {
    title: "Zapier vs Notion AI",
    description: "Zapier conecta aplicaciones; Notion AI mejora documentación, búsqueda y trabajo dentro del workspace.",
    winner: "Zapier si el problema es conectar apps; Notion AI si el cuello de botella está en conocimiento interno.",
    idealFor: "Operaciones, automatización y productividad."
  },
  {
    title: "Herramientas IA gratis vs de pago",
    description: "El plan gratis sirve para explorar, pero los límites de uso, privacidad y colaboración suelen decidir el salto.",
    winner: "Gratis para probar; pago cuando la herramienta entra en un proceso real.",
    idealFor: "Emprendedores y equipos que están evaluando presupuesto."
  }
];
