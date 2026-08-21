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
  description: string;
  category: string;
  imageUrl: string;
  technologies: string[];
  gallery?: (string | GalleryItem)[];
  video?: ProjectVideo;
  iframe?: ProjectIframe;
  published: boolean;
  role?: string;
  year?: string;
  client?: string;
  liveUrl?: string;
}
