export interface ProjectVideo {
  url: string;
  title?: string;
  description?: string;
  type?: 'youtube' | 'vimeo' | 'mp4' | 'webm';
}

export interface ProjectIframe {
  url: string;
  title?: string;
  description?: string;
  height?: string; // e.g., "400px" or "50vh"
  width?: string;
}

export interface GalleryItem {
  url: string;
  alt: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  title_es?: string;
  title_zh?: string;
  description: string;
  description_es?: string;
  description_zh?: string;
  category: string;
  category_es?: string;
  category_zh?: string;
  imageUrl: string;
  technologies: string[];
  gallery?: (string | GalleryItem)[];
  video?: ProjectVideo;
  iframe?: ProjectIframe;
  published: boolean;
  role?: string;
  role_es?: string;
  role_zh?: string;
  year?: string;
  client?: string;
  liveUrl?: string;
}
