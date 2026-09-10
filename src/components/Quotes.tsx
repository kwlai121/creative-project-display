import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { interpolate } from '@/lib/translations';

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
  'zh-Hant': [
    {
      text: "他是天生的領導者，也是出色的協作者，能有效地讓利害關係人與工程團隊在以使用者為中心的共同願景上保持一致。King 的策略思維與對品質的堅持，使他成為任何團隊都極具價值的資產。",
      author: "Daniel Delgado",
      role: "資深工程經理",
      company: "WDS"
    },
    {
      text: "King 是一位出色的設計師，大幅提升了我們產品的美感與使用者體驗。他對無障礙設計的深厚知識，確保我們的設計對所有人都具包容性且易於使用。他也在改善我們的設計系統上發揮關鍵作用，進而提升了團隊的生產力。",
      author: "Mauricio Varela",
      role: "產品經理",
      company: "Caricaco"
    },
    {
      text: "King 是最佳的團隊夥伴。他不僅是一位出色的 UX 開發者，還富有洞察力、注重細節，並激勵他人展現最好的自己。",
      author: "Edgar Fernandez",
      role: "創辦人",
      company: "Edenia Labs"
    }
  ],
};

const SHAPE_VARIANTS = [
  { badge: 'bg-bauhaus-red', icon: 'text-bauhaus-red-foreground', shadow: 'hover:shadow-hard-red' },
  { badge: 'bg-bauhaus-yellow', icon: 'text-bauhaus-yellow-foreground', shadow: 'hover:shadow-hard-yellow' },
  { badge: 'bg-bauhaus-blue', icon: 'text-bauhaus-blue-foreground', shadow: 'hover:shadow-hard-blue' },
];

const Quotes = () => {
  const { language, t } = useLanguage();
  const localizedQuotes = quotes[language];

  return (
    <section id="quotes" className="section">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in">
            {t('quotes.heading')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localizedQuotes.map((quote, index) => {
              const variant = SHAPE_VARIANTS[index % SHAPE_VARIANTS.length];
              return (
              <div
                key={index}
                className={`group animate-fade-in [animation-delay:${200 + index * 150}ms]`}
              >
                <div className={`relative p-6 bg-card border-2 border-foreground transition-all duration-200 ease-out hover:-translate-y-[3px] hover:-translate-x-[3px] ${variant.shadow}`}>
                  <div className={`w-9 h-9 flex items-center justify-center rounded-full border-2 border-foreground mb-4 ${variant.badge}`}>
                    <Quote className={`w-4 h-4 ${variant.icon}`} aria-hidden="true" />
                  </div>

                  <figure>
                    <blockquote className="text-foreground/80 leading-relaxed mb-6 italic">
                      "{quote.text}"
                    </blockquote>

                    <figcaption className="border-t-2 border-foreground/20 pt-4">
                      <p className="font-bold text-foreground">{quote.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {interpolate(t('quotes.roleAt'), { role: quote.role, company: quote.company })}
                      </p>
                    </figcaption>
                  </figure>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
