import React, { useState, useEffect } from 'react';
import type { Project } from '../../data/projects';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardPremiumProps {
  project: Project;
  index: number;
}

export default function ProjectCardPremium({ project, index }: ProjectCardPremiumProps) {
  // Use useEffect to ensure client-side only styles
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <article
      className="group relative liquid-glass-card rounded-3xl overflow-hidden liquid-glass-hover glass-morph glass-shimmer glass-depth-on-scroll"
      role="article"
      aria-labelledby={`project-${index}-title`}
    >
        {/* Image with overlay */}
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[18px] bg-gray-200">
          <img
            src={project.thumbnail}
            alt={`${project.title} project preview`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={index === 0 ? 'high' : 'auto'}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              // Try fallback to a data URI placeholder or default image
              if (!target.src.includes('data:image')) {
                target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="350" height="270" viewBox="0 0 350 270"%3E%3Crect fill="%23f3f4f6" width="350" height="270"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-family="sans-serif" font-size="14"%3EImage loading...%3C/text%3E%3C/svg%3E';
                target.alt = `${project.title} - Image unavailable`;
              }
            }}
          />
          
          {/* Metrics overlay - Apple liquid glass style */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="absolute inset-0 liquid-glass-dark opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 flex items-end p-4 rounded-[18px]">
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 w-full">
                {project.metrics.slice(0, 4).map((metric, i) => (
                  <div key={i} className="text-white">
                    <div className="text-xs opacity-70 font-medium">{metric.label}</div>
                    <div className="text-sm font-semibold">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col gap-5 p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg sm:text-xl font-semibold text-textPrimary">
              {project.title}
            </h3>
            <div className="flex gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textSecondary hover:text-accent-blue transition-colors duration-300 p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="View live project (opens in new tab)"
                >
                  <ExternalLink size={18} aria-hidden="true" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textSecondary hover:text-accent-blue transition-colors duration-300 p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="View on GitHub (opens in new tab)"
                >
                  <Github size={18} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          <p className="text-sm sm:text-base text-textSecondary leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Tags - Glass badges */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="liquid-glass-badge text-textPrimary text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Tech stack - Minimal style */}
          {project.techStack && (
            <div className="flex flex-wrap gap-2 pt-2 border-t border-black/5">
              {project.techStack.slice(0, 5).map((tech, i) => (
                <span
                  key={i}
                  className="text-xs text-textTertiary bg-wash-light px-2 py-1 rounded-md font-medium"
                  title={tech.name}
                >
                  {tech.name}
                </span>
              ))}
              {project.techStack.length > 5 && (
                <span 
                  className="text-xs text-textTertiary bg-wash-light px-2 py-1 rounded-md font-medium cursor-help"
                  title={`${project.techStack.slice(5).map(t => t.name).join(', ')}`}
                  aria-label={`${project.techStack.length - 5} more technologies: ${project.techStack.slice(5).map(t => t.name).join(', ')}`}
                >
                  +{project.techStack.length - 5} more
                </span>
              )}
            </div>
          )}

          {/* View Case Study button - Liquid Glass */}
          <a
            href={`/projects/${project.id}`}
            className="mt-2 liquid-glass-button text-accent-blue text-center hover:bg-glass-tinted focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 min-h-[44px] flex items-center justify-center"
            aria-label={`View ${project.title} case study`}
          >
            View Case Study
          </a>
        </div>
  </article>
);
}


