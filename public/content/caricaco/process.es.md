### Descubrimiento
Trabajé a partir de un brief de descubrimiento estructurado con el equipo de la fundación para mapear las restricciones reales: un presupuesto ajustado propio de una fundación, una fecha de entrega innegociable ligada a la ventana de postulación del programa, y un formulario de contacto que fallaba silenciosamente con los candidatos. Entender quién realmente llega a la página — en su mayoría aplicantes mobile-first de 18 a 29 años, llegando desde campañas en redes sociales — moldeó casi todas las decisiones que siguieron.

### Planificación de la migración
Auditué la plantilla heredada de Bootstrap/jQuery para separar lo que realmente estaba roto (el manejador PHP del formulario, el SEO ausente, los huecos responsivos) de lo que ya funcionaba (la identidad de marca, el contenido del programa), y luego planifiqué la reconstrucción en Astro/Tailwind alrededor de conservar lo segundo y arreglar lo primero — no un rediseño desde cero.

### Implementación
Reconstruí la página en Astro y Tailwind CSS v4, estandaricé el botón de CTA y la escala tipográfica en cada instancia, integré un flujo de Google Forms con un campo honeypot ajustado al bajo riesgo de spam de esta audiencia sin agregar la fricción de un CAPTCHA, e implementé datos estructurados de schema.org y metadatos Open Graph por página.

### Validación de accesibilidad y rendimiento
Auditué el sitio reconstruido contra WCAG 2.1 AA y lo probé bajo condiciones de 3G/4G simuladas, igualando la calidad de conexión que usa la mayoría de los aplicantes reales del programa.
