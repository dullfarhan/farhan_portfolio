import React from 'react';

interface SkeletonLoaderProps {
  className?: string;
  variant?: 'text' | 'card' | 'image' | 'avatar' | 'button' | 'project-card' | 'testimonial';
  width?: string;
  height?: string;
  lines?: number;
  animated?: boolean;
}

export default function SkeletonLoader({ 
  className = '', 
  variant = 'text',
  width,
  height,
  lines = 3,
  animated = true
}: SkeletonLoaderProps) {
  const baseClasses = `skeleton ${animated ? 'animate-pulse' : ''} bg-gradient-to-r from-wash-light via-wash-medium to-wash-light rounded`;
  
  if (variant === 'card') {
    return (
      <div 
        className={`${baseClasses} ${className}`} 
        style={{ width: width || '100%', height: height || '300px' }} 
        role="status" 
        aria-label="Loading content"
        aria-busy="true"
      >
        <span className="sr-only">Loading content...</span>
      </div>
    );
  }
  
  if (variant === 'project-card') {
    return (
      <div className={`liquid-glass-card rounded-3xl overflow-hidden ${className}`} role="status" aria-label="Loading project card" aria-busy="true">
        <div className={`${baseClasses} w-full`} style={{ height: height || '200px' }} />
        <div className="p-6 space-y-4">
          <div className={`${baseClasses} h-6 w-3/4`} />
          <div className={`${baseClasses} h-4 w-full`} />
          <div className={`${baseClasses} h-4 w-5/6`} />
          <div className="flex gap-2">
            <div className={`${baseClasses} h-6 w-16 rounded-full`} />
            <div className={`${baseClasses} h-6 w-20 rounded-full`} />
            <div className={`${baseClasses} h-6 w-14 rounded-full`} />
          </div>
        </div>
        <span className="sr-only">Loading project card...</span>
      </div>
    );
  }
  
  if (variant === 'testimonial') {
    return (
      <div className={`liquid-glass-card p-8 sm:p-12 rounded-3xl ${className}`} role="status" aria-label="Loading testimonial" aria-busy="true">
        <div className={`${baseClasses} h-12 w-12 mb-4`} />
        <div className={`${baseClasses} h-6 w-full mb-2`} />
        <div className={`${baseClasses} h-6 w-5/6 mb-4`} />
        <div className="flex items-center gap-4">
          <div className={`${baseClasses} rounded-full`} style={{ width: '64px', height: '64px' }} />
          <div className="flex-1">
            <div className={`${baseClasses} h-5 w-32 mb-2`} />
            <div className={`${baseClasses} h-4 w-48`} />
          </div>
        </div>
        <span className="sr-only">Loading testimonial...</span>
      </div>
    );
  }
  
  if (variant === 'image') {
    return (
      <div 
        className={`${baseClasses} ${className}`} 
        style={{ width: width || '100%', height: height || '200px' }} 
        role="status" 
        aria-label="Loading image"
        aria-busy="true"
      >
        <span className="sr-only">Loading image...</span>
      </div>
    );
  }
  
  if (variant === 'avatar') {
    return (
      <div 
        className={`${baseClasses} rounded-full ${className}`} 
        style={{ width: width || '40px', height: height || '40px' }} 
        role="status" 
        aria-label="Loading avatar"
        aria-busy="true"
      >
        <span className="sr-only">Loading avatar...</span>
      </div>
    );
  }
  
  if (variant === 'button') {
    return (
      <div 
        className={`${baseClasses} ${className}`} 
        style={{ width: width || '120px', height: height || '44px' }} 
        role="status" 
        aria-label="Loading button"
        aria-busy="true"
      >
        <span className="sr-only">Loading button...</span>
      </div>
    );
  }
  
  // Text variant (default)
  return (
    <div className={className} role="status" aria-label="Loading text" aria-busy="true">
      <span className="sr-only">Loading text content...</span>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`${baseClasses} mb-2`}
          style={{ 
            width: i === lines - 1 ? '60%' : i === lines - 2 ? '80%' : '100%',
            height: height || '16px'
          }}
        />
      ))}
    </div>
  );
}




