import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';

// Filter projects to only show published ones
const publishedProjects = projects.filter(project => project.published);

const ProjectGrid = () => {
  return <section id="projects" className="section">
      <div className="container-width">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full mb-4">
            Portfolio
          </span>
          <h2 className="mb-4">Selected Projects</h2>
          <p className="text-muted-foreground">Explore my recent design work across various industries and platforms.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {publishedProjects.map((project, index) => <ProjectCard key={project.id} title={project.title} description={project.description} category={project.category} imageUrl={project.imageUrl} index={index} slug={project.slug} />)}
        </div>
      </div>
    </section>;
};

export default ProjectGrid;
