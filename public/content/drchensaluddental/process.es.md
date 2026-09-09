### Investigación y Recolección de Requisitos
Mapeé las restricciones reales de la clínica: sin activos de marca existentes más allá de un nombre, pacientes que prefieren WhatsApp sobre el correo, y una narrativa familiar — tres generaciones, desde 1952 — para anclar la estrategia de generación de confianza.

### Arquitectura de Datos
Estructuré el sitio como una sola página con navegación basada en anclas, integré el marcado Organization de schema.org y metadatos Open Graph para cómo se representa el sitio fuera de él, y mapeé el flujo de formulario a bandeja de entrada: WPForms → SMTP autenticado vía la API de Gmail → la bandeja de entrada real de la clínica.

### Diseño UX y Prototipado
Construí el sistema visual alrededor de la marca dental azul-a-verde-azulado de la clínica, manteniendo la paleta fría y clínica en lugar de optar por una apariencia de marca dental más cálida y genérica.

### Desarrollo Frontend
Construí el sitio en WordPress/Elementor con CSS escrito a mano para el sistema de diseño personalizado, comportamiento responsivo hasta los 640px, y activos de imagen de producción — logotipos y fotografía hero — optimizados y servidos como WebP.

### Pruebas y Optimización
Ejecuté auditorías repetidas de Lighthouse y corregí cada problema señalado con evidencia: proporciones de contraste WCAG calculadas según la fórmula de luminancia relativa, jerarquía de encabezados corregida, datos estructurados añadidos, y luego reverificados después de cada cambio.
