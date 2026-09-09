import React from 'react';
import { ProjectVideo, ProjectIframe } from '@/types/project';
import { useLanguage } from '@/contexts/LanguageContext';

interface MediaSectionProps {
  video?: ProjectVideo;
  iframe?: ProjectIframe;
}

const MediaSection: React.FC<MediaSectionProps> = ({ video, iframe }) => {
  const { t } = useLanguage();

  const getEmbedUrl = (url: string, type?: string): string => {
    // YouTube URL conversion
    if (url.includes('youtube.com/watch') || url.includes('youtu.be/')) {
      const videoId = url.includes('youtu.be/') 
        ? url.split('youtu.be/')[1].split('?')[0]
        : url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // Vimeo URL conversion
    if (url.includes('vimeo.com/')) {
      const videoId = url.split('vimeo.com/')[1].split('?')[0];
      return `https://player.vimeo.com/video/${videoId}`;
    }
    
    return url;
  };

  const renderVideo = (video: ProjectVideo) => {
    const embedUrl = getEmbedUrl(video.url, video.type);
    const isDirectVideo = video.type === 'mp4' || video.type === 'webm' || video.url.includes('.mp4') || video.url.includes('.webm');

    if (isDirectVideo) {
      return (
        <video 
          controls 
          className="w-full h-full object-cover rounded-xl"
        >
          <source src={video.url} type={`video/${video.type || 'mp4'}`} />
          {t('media.videoFallback')}
        </video>
      );
    }

    return (
      <iframe
        src={embedUrl}
        title={video.title || t('media.videoDefaultTitle')}
        className="w-full h-full rounded-xl"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  };

  const renderIframe = (iframe: ProjectIframe) => {
    return (
      <iframe
        src={iframe.url}
        title={iframe.title || t('media.iframeDefaultTitle')}
        className="w-full h-full rounded-xl border-0"
        style={{ 
          height: iframe.height || '500px',
          width: iframe.width || '100%'
        }}
        frameBorder="0"
        allowFullScreen
      />
    );
  };

  if (!video && !iframe) return null;

  return (
    <section className="section">
      <div className="container-width">
        <div className="max-w-4xl mx-auto space-y-8">
          {video && (
            <div className="animate-fade-in">
              {video.title && (
                <h2 className="text-2xl font-medium mb-4">{video.title}</h2>
              )}
              {video.description && (
                <p className="text-muted-foreground mb-6">{video.description}</p>
              )}
              <div className="aspect-video relative overflow-hidden rounded-xl bg-muted">
                {renderVideo(video)}
              </div>
            </div>
          )}
          
          {iframe && (
            <div className="animate-fade-in">
              {iframe.title && (
                <h2 className="text-2xl font-medium mb-4">{iframe.title}</h2>
              )}
              {iframe.description && (
                <p className="text-muted-foreground mb-6">{iframe.description}</p>
              )}
              <div className="relative overflow-hidden rounded-xl bg-muted">
                {renderIframe(iframe)}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
