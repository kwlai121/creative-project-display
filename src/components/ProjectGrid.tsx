import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';
import { useLanguage } from '@/contexts/LanguageContext';
import { localizeField } from '@/lib/localize';

// Filter projects to only show published ones
const publishedProjects = projects.filter(project => project.published);

const ProjectGrid = () => {
  const { language, t } = useLanguage();

  return <section id="projects" className="section">
      <div className="container-width">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="label-tag bg-bauhaus-red text-bauhaus-red-foreground mb-4">
            {t('projects.eyebrow')}
          </span>
          <h2 className="mb-4">{t('projects.heading')}</h2>
          <p className="text-muted-foreground">{t('projects.subtext')}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {publishedProjects.map((project, index) => <ProjectCard
            key={project.id}
            title={localizeField(project, 'title', language)}
            description={localizeField(project, 'description', language)}
            category={localizeField(project, 'category', language)}
            imageUrl={project.imageUrl}
            index={index}
            slug={project.slug}
          />)}
        </div>
      </div>
    </section>;
};

export default ProjectGrid;
