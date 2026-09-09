import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const quotes = {
  en: [
    {
      text: "He's a natural leader and a strong collaborator who effectively aligned stakeholders and engineering teams on a shared user-centric vision. King's strategic approach and dedication to quality make him a valuable asset to any team.",
      author: "Daniel Delgado",
      role: "Senior Engineering Manager",
      company: "WDS"
    },
    {
      text: "King is a great designer who elevated our product's aesthetic and user experience. His deep knowledge of accessibility ensured our designs were inclusive and user-friendly for all. He was also instrumental in improving our design system, which enhanced our team's productivity.",
      author: "Mauricio Varela",
      role: "Product Manager",
      company: "Caricaco"
    },
    {
      text: "King is the ultimate team player. Not only is he an impressive UX developer, he is insightful, detail-oriented and challenges others to be the best of themselves.",
      author: "Edgar Fernandez",
      role: "Founder",
      company: "Edenia Labs"
    }
  ],
  es: [
    {
      text: "Es un líder natural y un gran colaborador que alineó eficazmente a los interesados y a los equipos de ingeniería en una visión compartida centrada en el usuario. El enfoque estratégico de King y su dedicación a la calidad lo convierten en un activo valioso para cualquier equipo.",
      author: "Daniel Delgado",
      role: "Gerente Senior de Ingeniería",
      company: "WDS"
    },
    {
      text: "King es un excelente diseñador que elevó la estética y la experiencia de usuario de nuestro producto. Su profundo conocimiento de la accesibilidad aseguró que nuestros diseños fueran inclusivos y fáciles de usar para todos. También fue clave para mejorar nuestro sistema de diseño, lo cual potenció la productividad de nuestro equipo.",
      author: "Mauricio Varela",
      role: "Gerente de Producto",
      company: "Caricaco"
    },
    {
      text: "King es el compañero de equipo ideal. No solo es un desarrollador UX impresionante, también es perspicaz, meticuloso y reta a los demás a dar lo mejor de sí mismos.",
      author: "Edgar Fernandez",
      role: "Fundador",
      company: "Edenia Labs"
    }
  ],
};

const Quotes = () => {
  const { language, t } = useLanguage();
  const localizedQuotes = quotes[language];

  return (
    <section id="quotes" className="section">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-medium mb-12 text-center animate-fade-in">
            {t('quotes.heading')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localizedQuotes.map((quote, index) => (
              <div
                key={index}
                className={`group animate-fade-in [animation-delay:${200 + index * 150}ms]`}
              >
                <div className="relative p-6 rounded-2xl bg-card border border-border/50 hover:border-brand/30 transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-brand/10 mb-4">
                    <Quote className="w-4 h-4 text-brand" aria-hidden="true" />
                  </div>

                  <figure>
                    <blockquote className="text-foreground/80 leading-relaxed mb-6 italic">
                      "{quote.text}"
                    </blockquote>

                    <figcaption className="border-t border-border/30 pt-4">
                      <p className="font-medium text-foreground">{quote.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {quote.role} {language === 'es' ? 'en' : 'at'} {quote.company}
                      </p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
