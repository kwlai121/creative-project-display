import type { Language } from '@/contexts/LanguageContext';

// Suffix appended to a base field name (e.g. "description" -> "description_es")
// to look up its translation. English has no suffix — it's the base field.
export const FIELD_SUFFIX: Partial<Record<Language, string>> = {
  es: 'es',
  'zh-Hant': 'zh',
};

// Picks a project's `${field}_${suffix}` value for the current language,
// falling back to the base (English) field if no translation was provided.
export const localizeField = <T extends Record<string, unknown>>(
  item: T,
  field: string,
  language: Language
): string => {
  const suffix = FIELD_SUFFIX[language];
  if (suffix) {
    const localized = item[`${field}_${suffix}`];
    if (typeof localized === 'string' && localized.length > 0) return localized;
  }
  return item[field] as string;
};
