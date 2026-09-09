import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-2.5 py-2 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors text-sm font-medium tabular-nums"
      aria-label={t('language.toggle')}
    >
      {language === 'en' ? 'ES' : 'EN'}
    </button>
  );
};

export default LanguageToggle;
