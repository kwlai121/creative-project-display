
import React from 'react';
import { withBase } from '@/lib/basePath';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container-width">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="aspect-square max-w-md mx-auto rounded-full overflow-hidden ring-4 ring-brand/15 ring-offset-4 ring-offset-background">
              <img
                src={withBase("/images/klai-me.webp")}
                alt="King, happily sitting next to a lake."
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-brand/10 text-brand rounded-full mb-4">
              {t('about.eyebrow')}
            </span>
            <h2 className="mb-6">
              {t('about.headingPre')}<span className="text-brand">{t('about.headingHighlight')}</span>{t('about.headingPost')}
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>{t('about.paragraph1')}</p>
              <p>{t('about.paragraph2')}</p>
              <p>{t('about.paragraph3')}</p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-foreground">{t('about.designToolsLabel')}</h3>
                <p className="text-sm text-muted-foreground">{t('about.designToolsValue')}</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-foreground">{t('about.methodologyLabel')}</h3>
                <p className="text-sm text-muted-foreground">{t('about.methodologyValue')}</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-foreground">{t('about.advocacyLabel')}</h3>
                <p className="text-sm text-muted-foreground">{t('about.advocacyValue')}</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-foreground">{t('about.collaborationLabel')}</h3>
                <p className="text-sm text-muted-foreground">{t('about.collaborationValue')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
