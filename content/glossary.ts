export type GlossaryTerm = {
  term: string;
  definition: string;
};

export const glossary: GlossaryTerm[] = [
  {
    term: "LLM",
    definition: "Modelo de lenguaje grande entrenado para comprender y generar texto, código y razonamiento asistido."
  },
  {
    term: "Agente",
    definition: "Sistema que puede interpretar un objetivo, decidir pasos y usar herramientas para avanzar una tarea."
  },
  {
    term: "Multimodal",
    definition: "Capacidad de trabajar con más de un tipo de entrada o salida, como texto, imagen, audio o video."
  },
  {
    term: "RAG",
    definition: "Técnica que combina búsqueda de información externa con generación de respuestas para mejorar contexto y precisión."
  },
  {
    term: "Embeddings",
    definition: "Representaciones numéricas de texto, imágenes u otros datos que permiten buscar similitud semántica."
  },
  {
    term: "Prompt",
    definition: "Instrucción o contexto que una persona entrega a un modelo para orientar la respuesta."
  },
  {
    term: "Fine-tuning",
    definition: "Ajuste adicional de un modelo con ejemplos específicos para mejorar su desempeño en una tarea concreta."
  },
  {
    term: "Automatización",
    definition: "Uso de reglas, integraciones o IA para ejecutar tareas repetitivas con menos intervención manual."
  }
];
