import { useRef, useState, useEffect } from 'react';
import type { Project } from '../../data/projects';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardPremiumProps {
  project: Project;
  index: number;
}

export default function ProjectCardPremium({ project, index }: ProjectCardPremiumProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateX = (e.clientY - centerY) / 20;
    const rotateY = (centerX - e.clientX) / 20;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovering(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  // Use useEffect to ensure client-side only styles
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative tilt-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={mounted ? {
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovering ? 1.02 : 1})`,
        transition: 'transform 0.3s ease',
      } : undefined}
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-accent-indigo via-accent-purple to-accent-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
      
      <div className="card-premium card relative bg-surface overflow-hidden">
        {/* Image with overlay */}
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[18px] bg-gray-200">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          
          {/* Metrics overlay - shows on hover */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="grid grid-cols-2 gap-2 w-full">
                {project.metrics.slice(0, 4).map((metric, i) => (
                  <div key={i} className="text-white">
                    <div className="text-xs opacity-80">{metric.label}</div>
                    <div className="text-sm font-bold">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-[18px] sm:text-[20px] font-semibold gradient-text">
              {project.title}
            </h3>
            <div className="flex gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-indigo hover:text-accent-purple transition-colors"
                  aria-label="View live project"
                >
                  <ExternalLink size={20} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-indigo hover:text-accent-purple transition-colors"
                  aria-label="View on GitHub"
                >
                  <Github size={20} />
                </a>
              )}
            </div>
          </div>

          <p className="text-sm sm:text-base leading-[1.4]">
            {project.shortDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-white text-[12px] sm:text-[14px] font-normal px-3 py-2 rounded-full leading-none border border-gray-200 hover:border-accent-indigo hover:text-accent-indigo transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Tech stack icons */}
          {project.techStack && (
            <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200">
              {project.techStack.slice(0, 5).map((tech, i) => (
                <span
                  key={i}
                  className="text-xs text-textSecondary bg-gray-100 px-2 py-1 rounded"
                  title={tech.name}
                >
                  {tech.name}
                </span>
              ))}
              {project.techStack.length > 5 && (
                <span className="text-xs text-textSecondary bg-gray-100 px-2 py-1 rounded">
                  +{project.techStack.length - 5} more
                </span>
              )}
            </div>
          )}

          {/* View Case Study button */}
          <a
            href={`/projects/${project.id}`}
            className="mt-2 px-4 py-2 bg-gradient-to-r from-accent-indigo to-accent-purple text-white rounded-lg font-medium text-center hover:shadow-glow-indigo transition-all duration-300 hover:scale-105"
          >
            View Case Study
          </a>
        </div>
      </div>
    </div>
  );
}


