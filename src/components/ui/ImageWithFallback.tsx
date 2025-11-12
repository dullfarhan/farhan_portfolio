import React, { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  loading?: 'lazy' | 'eager';
  priority?: 'high' | 'auto' | 'low';
  onLoad?: () => void;
  onError?: () => void;
}

export default function ImageWithFallback({
  src,
  alt,
  className = '',
  fallback = '/assets/images/placeholder.png',
  loading = 'lazy',
  priority = 'auto',
  onLoad,
  onError,
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    if (!hasError && imgSrc !== fallback) {
      setHasError(true);
      setImgSrc(fallback);
    }
    onError?.();
  };

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" aria-hidden="true">
          <span className="sr-only">Loading image...</span>
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        loading={loading}
        decoding="async"
        fetchPriority={priority}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${className}`}
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  );
}

