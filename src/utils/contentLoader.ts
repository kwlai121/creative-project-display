import { withBase } from '@/lib/basePath';

// Content loader utility for loading markdown content and results data
export const loadProjectContent = async (projectSlug: string, section: string): Promise<string> => {
  try {
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

export const loadKeyResults = async (projectSlug: string): Promise<any> => {
  try {
    // Try to load JSON results first (new format)
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

export const loadAllProjectContent = async (projectSlug: string) => {
  const sections = ['challenge', 'solution', 'process', 'results'];
  const content: Record<string, any> = {};
  
  // Load markdown sections
  await Promise.all(
    sections.map(async (section) => {
      content[section] = await loadProjectContent(projectSlug, section);
    })
  );
  
  // Load key results separately (could be JSON or markdown)
  content.keyResults = await loadKeyResults(projectSlug);
  
  return content;
};