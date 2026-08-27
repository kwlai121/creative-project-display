import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ThemeToggle from './ThemeToggle';
import Contact from './Contact';
import { GalleryModal } from './GalleryModal';
import Results from './Results';
import ColorPalette from './ColorPalette';
import MediaSection from './MediaSection';
import ReactMarkdown from 'react-markdown';
import { projects } from '@/data/projects';
import { loadAllProjectContent } from '@/utils/contentLoader';
import { withBase } from '@/lib/basePath';
import type { GalleryItem } from '@/types/project';

const normalizeGalleryItem = (item: string | GalleryItem, index: number, projectTitle: string): GalleryItem => {
  if (typeof item === 'string') {
    return { url: item, alt: `${projectTitle} gallery image ${index + 1}` };
  }
  return item;
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [content, setContent] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Track scroll position for header visual feedback
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load project content
  useEffect(() => {
    if (slug) {
      setLoading(true);
      loadAllProjectContent(slug)
        .then(setContent)
        .finally(() => setLoading(false));
    }
  }, [slug]);
  
  // Filter projects to only show published ones
  const publishedProjects = projects.filter(project => project.published);
  
  const project = projects.find(p => p.slug === slug);
  const currentIndex = publishedProjects.findIndex(p => p.slug === slug);
  const prevProject = currentIndex > 0 ? publishedProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < publishedProjects.length - 1 ? publishedProjects[currentIndex + 1] : null;

  const handleBackToPortfolio = () => {
    navigate('/', { state: { scrollToProjects: true } });
  };

  const openModal = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
    setModalOpen(true);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-pattern-grid flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium mb-4">Project Not Found</h1>
          <Button onClick={handleBackToPortfolio}>
            <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pattern-grid">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        Skip to main content
      </a>

      {/* Fixed header: brand + back to portfolio + prev/next + theme */}
      <header className={`fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md transition-shadow duration-300 ${isScrolled ? 'shadow-md border-border/50' : 'shadow-sm'}`}>
        <div className="container-width py-3">
          <div className="flex items-center justify-between gap-2">
            <Link to="/" className="text-xl font-medium tracking-tight shrink-0">
              <span className="sr-only">Designer Portfolio</span>
              <span className="text-primary">K.Lai</span>
            </Link>
            <div className="flex items-center gap-1 md:gap-4 min-w-0">
              <Button variant="ghost" onClick={handleBackToPortfolio} className="gap-2 px-2 md:px-4" size="sm">
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                <span className="hidden sm:inline">Back to Portfolio</span>
                <span className="sm:hidden">Back</span>
              </Button>
              <div className="flex items-center gap-1">
                {prevProject && (
                  <Button variant="ghost" size="icon" asChild aria-label={`Go to previous project: ${prevProject.title}`} className="h-11 w-11 md:h-auto md:w-auto">
                    <Link to={`/project/${prevProject.slug}`}>
                      <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                    </Link>
                  </Button>
                )}
                {nextProject && (
                  <Button variant="ghost" size="icon" asChild aria-label={`Go to next project: ${nextProject.title}`} className="h-11 w-11 md:h-auto md:w-auto">
                    <Link to={`/project/${nextProject.slug}`}>
                      <ChevronRight className="w-5 h-5" aria-hidden="true" />
                    </Link>
                  </Button>
                )}
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main id="main-content" className="pt-16">
      {/* Hero Section */}
      <section className="section">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-[4/3] relative overflow-hidden rounded-2xl mb-8 animate-scale-in">
              <img
                src={withBase(project.imageUrl)}
                alt={project.title}
                fetchPriority="high"
                className="object-cover w-full h-full"
              />
            </div>
            
            <div className="mb-8 animate-fade-in [animation-delay:200ms]">
              <Badge variant="secondary" className="mb-4">{project.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-medium mb-6">{project.title}</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">{project.description}</p>
            </div>

            {/* Key Results */}
            {!loading && content.keyResults && (
              <div className="animate-fade-in [animation-delay:300ms]">
                <Results content={content.keyResults} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="section">
          <div className="container-width">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-medium mb-4 animate-fade-in">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {project.gallery.map((item, index) => {
                  const galleryItem = normalizeGalleryItem(item, index, project.title);
                  return (
                    <button
                      key={index}
                      onClick={() => openModal(index)}
                      className={`aspect-[4/3] relative overflow-hidden rounded-xl animate-fade-in [animation-delay:${300 + index * 100}ms] group cursor-pointer focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none`}
                    >
                      <img
                        src={withBase(galleryItem.url)}
                        alt={galleryItem.alt}
                        loading="lazy"
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Media Section */}
      {(project.video || project.iframe) && (
        <MediaSection video={project.video} iframe={project.iframe} />
      )}

      {/* Project Details */}
      <section className="section">
        <div className="container-width">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              {loading ? (
                <div className="space-y-8" aria-busy="true" aria-live="polite">
                  <span className="sr-only">Loading project content...</span>
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="animate-pulse">
                      <div className="h-6 bg-muted rounded w-24 mb-4"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-muted rounded"></div>
                        <div className="h-4 bg-muted rounded w-5/6"></div>
                        <div className="h-4 bg-muted rounded w-4/6"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="animate-fade-in [animation-delay:500ms]">
                    <h2 className="text-2xl font-medium mb-4">Challenge</h2>
                    <div className="leading-relaxed prose prose-neutral dark:prose-invert max-w-none text-muted-foreground">
                      <ReactMarkdown>{content.challenge || 'Content loading...'}</ReactMarkdown>
                    </div>
                  </div>

                  <div className="animate-fade-in [animation-delay:600ms]">
                    <h2 className="text-2xl font-medium mb-4">Solution</h2>
                    <div className="leading-relaxed prose prose-neutral dark:prose-invert max-w-none text-muted-foreground">
                      <ReactMarkdown>{content.solution || 'Content loading...'}</ReactMarkdown>
                    </div>
                    {content.palette && content.palette.length > 0 && (
                      <ColorPalette colors={content.palette} />
                    )}
                  </div>

                  <div className="animate-fade-in [animation-delay:700ms]">
                    <h2 className="text-2xl font-medium mb-4">Process</h2>
                    <div className="leading-relaxed prose prose-neutral dark:prose-invert max-w-none text-muted-foreground">
                      <ReactMarkdown>{content.process || 'Content loading...'}</ReactMarkdown>
                    </div>
                  </div>

                  <div className="animate-fade-in [animation-delay:800ms]">
                    <h2 className="text-2xl font-medium mb-4">Results</h2>
                    <div className="leading-relaxed prose prose-neutral dark:prose-invert max-w-none text-muted-foreground">
                      <ReactMarkdown>{content.results || 'Content loading...'}</ReactMarkdown>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="space-y-8 md:sticky md:top-24">
                {/* Project Info */}
                <div className="animate-fade-in [animation-delay:400ms] p-5 rounded-xl border border-border/50 bg-card/50">
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Project Info</h3>
                  <dl className="space-y-3">
                    {project.category && (
                      <div className="flex justify-between items-baseline">
                        <dt className="text-sm text-muted-foreground">Type</dt>
                        <dd className="text-sm font-medium">{project.category}</dd>
                      </div>
                    )}
                    {project.role && (
                      <div className="flex justify-between items-baseline">
                        <dt className="text-sm text-muted-foreground">Role</dt>
                        <dd className="text-sm font-medium">{project.role}</dd>
                      </div>
                    )}
                    {project.year && (
                      <div className="flex justify-between items-baseline">
                        <dt className="text-sm text-muted-foreground">Year</dt>
                        <dd className="text-sm font-medium">{project.year}</dd>
                      </div>
                    )}
                    {project.client && (
                      <div className="flex justify-between items-baseline">
                        <dt className="text-sm text-muted-foreground">Client</dt>
                        <dd className="text-sm font-medium">{project.client}</dd>
                      </div>
                    )}
                  </dl>
                </div>

                {/* Technologies */}
                <div className="animate-fade-in [animation-delay:500ms]">
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Back to Portfolio (sidebar context) */}
                <div className="animate-fade-in [animation-delay:600ms]">
                  <Button variant="outline" size="sm" onClick={handleBackToPortfolio} className="w-full gap-2">
                    <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                    Back to Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Visual separator before Contact */}
      <div className="section" aria-hidden="true">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <Contact />

      {/* Gallery Modal */}
      {project.gallery && project.gallery.length > 0 && (
        <GalleryModal
          images={project.gallery.map(withBase)}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          initialIndex={selectedImageIndex}
          projectTitle={project.title}
        />
      )}

      {/* Navigation Footer */}
      <section className="section">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between py-8 border-t">
              {prevProject ? (
                <Button variant="ghost" asChild className="flex-1 justify-start pl-1 h-auto py-3">
                  <Link 
                    to={`/project/${prevProject.slug}`} 
                    className="flex items-center gap-3"
                    aria-label={`Previous project: ${prevProject.title}`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <div className="text-left hidden sm:block">
                      <p className="text-sm text-muted-foreground">Previous</p>
                      <p className="font-medium">{prevProject.title}</p>
                    </div>
                    <div className="text-left sm:hidden">
                      <p className="text-sm font-medium">Previous</p>
                    </div>
                  </Link>
                </Button>
              ) : <div />}
              
              {nextProject ? (
                <Button variant="ghost" asChild className="flex-1 justify-end pr-1 h-auto py-3">
                  <Link 
                    to={`/project/${nextProject.slug}`} 
                    className="flex items-center gap-3"
                    aria-label={`Next project: ${nextProject.title}`}
                  >
                    <div className="text-right hidden sm:block">
                      <p className="text-sm text-muted-foreground">Next</p>
                      <p className="font-medium">{nextProject.title}</p>
                    </div>
                    <div className="text-right sm:hidden">
                      <p className="text-sm font-medium">Next</p>
                    </div>
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </Button>
              ) : <div />}
            </div>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
};

export default ProjectDetail;