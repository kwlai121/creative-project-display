import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations, type TranslationKey } from '@/lib/translations';

export type Language = 'en' | 'es' | 'zh-Hant';

export const LANGUAGES: Language[] = ['en', 'es', 'zh-Hant'];

const STORAGE_KEY = 'site-language';

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const isSupportedLanguage = (value: string | null): value is Language =>
  value !== null && (LANGUAGES as string[]).includes(value);

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isSupportedLanguage(stored)) return stored;

  const browserLang = window.navigator.language?.toLowerCase() ?? '';
  if (browserLang.startsWith('es')) return 'es';
  if (browserLang.startsWith('zh')) return 'zh-Hant';
  return 'en';
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
  const toggleLanguage = () =>
    setLanguageState((prev) => LANGUAGES[(LANGUAGES.indexOf(prev) + 1) % LANGUAGES.length]);

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
