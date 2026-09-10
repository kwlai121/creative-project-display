import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-2.5 py-2 border-2 border-foreground bg-background hover:bg-foreground hover:text-background transition-colors text-sm font-bold tabular-nums"
      aria-label={t('language.toggle')}
    >
      {language === 'en' ? 'ES' : 'EN'}
    </button>
  );
};

export default LanguageToggle;
