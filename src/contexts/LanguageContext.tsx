import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations, type TranslationKey } from '@/lib/translations';

export type Language = 'en' | 'es';

const STORAGE_KEY = 'site-language';

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'es') return stored;

  return window.navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // localStorage can throw in private browsing / disabled storage — ignore.
    }
  }, [language]);

  const setLanguage = (next: Language) => setLanguageState(next);
  const toggleLanguage = () => setLanguageState((prev) => (prev === 'en' ? 'es' : 'en'));

  const t = (key: TranslationKey) => translations[language][key] ?? translations.en[key] ?? key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
