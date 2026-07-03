// Prefixes a root-relative public asset path (e.g. "/images/foo.jpg") with the
// app's base URL, so assets resolve correctly when deployed under a subpath
// (like GitHub Pages project sites: https://user.github.io/repo-name/).
export const withBase = (path: string): string => {
  if (/^https?:\/\//.test(path)) return path;

  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${normalizedBase}${normalizedPath}`;
};
