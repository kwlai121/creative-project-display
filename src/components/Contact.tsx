import React from 'react';
import { Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return <section id="contact" className="section">
      <div className="container-width">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-brand/10 text-brand rounded-full mb-4">
            {t('contact.eyebrow')}
          </span>
          <h2 className="mb-4">{t('contact.heading')}</h2>
          <p className="text-muted-foreground mb-4">
            {t('contact.paragraph')}
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            {t('contact.location')}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 rounded-2xl border border-border/50 bg-card hover:border-brand/30 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand/10 mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">{t('contact.phoneLabel')}</h3>
              <a href="tel:+50670494874" className="text-muted-foreground hover:text-foreground transition-colors">(506) 7049-4874</a>
            </div>

            <div className="p-6 rounded-2xl border border-border/50 bg-card hover:border-brand/30 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand/10 mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand" aria-hidden="true">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">{t('contact.emailLabel')}</h3>
              <a href="mailto:kwlai121@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">kwlai121@gmail.com</a>
            </div>

            <div className="p-6 rounded-2xl border border-border/50 bg-card hover:border-brand/30 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand/10 mb-4 mx-auto">
                <Linkedin className="w-6 h-6 text-brand" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-medium mb-2">{t('contact.linkedinLabel')}</h3>
              <a href="https://www.linkedin.com/in/king-lai-3ab14324/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">king-lai-3ab14324</a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
