import React from 'react';
import { useLanguage, LANGUAGES, type Language } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const LANGUAGE_LABELS: Record<Language, string> = {
  en: 'EN',
  es: 'ES',
  'zh-Hant': '繁',
};

const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="inline-flex border-2 border-foreground" role="group" aria-label={t('language.toggle')}>
      {LANGUAGES.map((lang, index) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={cn(
            'px-2.5 py-2 text-sm font-bold transition-colors',
            index > 0 && 'border-l-2 border-foreground',
            language === lang
              ? 'bg-foreground text-background'
              : 'bg-background hover:bg-secondary'
          )}
          aria-pressed={language === lang}
        >
          {LANGUAGE_LABELS[lang]}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
