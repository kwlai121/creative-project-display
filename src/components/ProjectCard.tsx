
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { withBase } from '@/lib/basePath';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  index: number;
  slug: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  category,
  imageUrl,
  index,
  slug
}) => {
  return (
    <Link 
      to={`/project/${slug}`}
      className={cn(
        "project-card animate-fade-in group block w-full md:w-[calc(33.333%-1.33rem)]",
        index > 0 && `[animation-delay:${index * 100}ms]`
      )}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
        <img 
          src={withBase(imageUrl)}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="mb-2">
          <Badge variant="secondary">
            {category}
          </Badge>
        </div>
        <h3 className="text-xl font-medium mt-2 mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
