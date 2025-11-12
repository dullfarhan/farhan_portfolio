import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  variant?: 'default' | 'dots' | 'pulse';
  text?: string;
}

export default function LoadingSpinner({ 
  size = 'md', 
  className = '',
  variant = 'default',
  text
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  if (variant === 'dots') {
    return (
      <div className={`flex items-center gap-2 ${className}`} role="status" aria-label={text || "Loading"}>
        <div className={`${sizeClasses[size]} bg-accent-blue rounded-full animate-bounce`} style={{ animationDelay: '0ms' }} />
        <div className={`${sizeClasses[size]} bg-accent-blue rounded-full animate-bounce`} style={{ animationDelay: '150ms' }} />
        <div className={`${sizeClasses[size]} bg-accent-blue rounded-full animate-bounce`} style={{ animationDelay: '300ms' }} />
        {text && <span className="text-textSecondary text-sm ml-2">{text}</span>}
        <span className="sr-only">{text || "Loading..."}</span>
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <div className={`flex items-center gap-2 ${className}`} role="status" aria-label={text || "Loading"}>
        <div className={`${sizeClasses[size]} bg-accent-blue rounded-full animate-pulse`} />
        {text && <span className="text-textSecondary text-sm ml-2">{text}</span>}
        <span className="sr-only">{text || "Loading..."}</span>
      </div>
    );
  }

  // Default spinner
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`} role="status" aria-label={text || "Loading"}>
      <div 
        className={`${sizeClasses[size]} border-4 border-accent-blue/20 border-t-accent-blue rounded-full animate-spin`}
        style={{ 
          borderTopColor: '#0051D5',
          borderRightColor: '#0051D5'
        }}
      />
      {text && <span className="text-textSecondary text-sm">{text}</span>}
      <span className="sr-only">{text || "Loading..."}</span>
    </div>
  );
}

