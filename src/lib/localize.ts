import type { Language } from '@/contexts/LanguageContext';

// Picks a project's `${field}_es` value when browsing in Spanish, falling
// back to the base (English) field if no translation was provided.
export const localizeField = <T extends Record<string, unknown>>(
  item: T,
  field: string,
  language: Language
): string => {
  if (language === 'es') {
    const localized = item[`${field}_es`];
    if (typeof localized === 'string' && localized.length > 0) return localized;
  }
  return item[field] as string;
};
