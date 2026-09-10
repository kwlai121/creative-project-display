
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

// Cycle through the three Bauhaus primaries so the grid reads as a
// deliberate color composition rather than a single repeated accent.
const BADGE_VARIANTS = ['red', 'yellow', 'blue'] as const;
const TITLE_HOVER_CLASSES = ['group-hover:text-bauhaus-red', 'group-hover:text-bauhaus-blue', 'group-hover:text-bauhaus-blue'];

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  category,
  imageUrl,
  index,
  slug
}) => {
  const colorIndex = index % BADGE_VARIANTS.length;

  return (
    <Link
      to={`/project/${slug}`}
      className={cn(
        "project-card animate-fade-in group block w-full md:w-[calc(33.333%-1.33rem)]",
        index > 0 && `[animation-delay:${index * 100}ms]`
      )}
    >
      <div className="aspect-[4/3] relative overflow-hidden border-b-2 border-foreground">
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
          <Badge variant={BADGE_VARIANTS[colorIndex]}>
            {category}
          </Badge>
        </div>
        <h3 className={cn("text-xl font-bold mt-2 mb-2 transition-colors", TITLE_HOVER_CLASSES[colorIndex])}>{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
