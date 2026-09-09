import { withBase } from '@/lib/basePath';
import type { Language } from '@/contexts/LanguageContext';

// Content loader utility for loading markdown content and results data.
// Spanish content lives alongside the English files as `{section}.es.md` /
// `results.es.json`; when a locale file is missing we fall back to English
// rather than showing a broken section.
export const loadProjectContent = async (
  projectSlug: string,
  section: string,
  language: Language = 'en'
): Promise<string> => {
  try {
    if (language === 'es') {
      const esResponse = await fetch(withBase(`/content/${projectSlug}/${section}.es.md`));
      if (esResponse.ok) return await esResponse.text();
    }

    const response = await fetch(withBase(`/content/${projectSlug}/${section}.md`));
    if (!response.ok) {
      throw new Error(`Failed to load ${section} content for ${projectSlug}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Error loading content:`, error);
    return `Content not available for ${section}`;
  }
};

export const loadKeyResults = async (projectSlug: string, language: Language = 'en'): Promise<any> => {
  try {
    // Try to load JSON results first (new format), localized when available
    if (language === 'es') {
      const esJsonResponse = await fetch(withBase(`/content/${projectSlug}/results.es.json`));
      if (esJsonResponse.ok) {
        const data = await esJsonResponse.json();
        if (data.outcomes) return { results: data.outcomes };
        return data;
      }
    }

    const jsonResponse = await fetch(withBase(`/content/${projectSlug}/results.json`));
    if (jsonResponse.ok) {
      const data = await jsonResponse.json();
      // Transform "outcomes" key to "results" if present (for backward compatibility)
      if (data.outcomes) {
        return { results: data.outcomes };
      }
      return data;
    }

    // Fallback to markdown format (old format)
    const mdResponse = await fetch(withBase(`/content/${projectSlug}/results.md`));
    if (mdResponse.ok) {
      const text = await mdResponse.text();
      return { results: text.split('\n').map(line => line.trim()).filter(line => line.length > 0) };
    }

    throw new Error(`Failed to load results for ${projectSlug}`);
  } catch (error) {
    console.error(`Error loading results:`, error);
    return { results: [] };
  }
};

export const loadColorPalette = async (projectSlug: string): Promise<{ name: string; hex: string }[]> => {
  try {
    const response = await fetch(withBase(`/content/${projectSlug}/palette.json`));
    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data.colors) ? data.colors : [];
  } catch (error) {
    return [];
  }
};

export const loadAllProjectContent = async (projectSlug: string, language: Language = 'en') => {
  const sections = ['challenge', 'solution', 'process', 'results'];
  const content: Record<string, any> = {};

  // Load markdown sections
  await Promise.all(
    sections.map(async (section) => {
      content[section] = await loadProjectContent(projectSlug, section, language);
    })
  );

  // Load key results separately (could be JSON or markdown)
  content.keyResults = await loadKeyResults(projectSlug, language);

  // Load an optional brand color palette (JSON, absent for most projects)
  content.palette = await loadColorPalette(projectSlug);

  return content;
};
