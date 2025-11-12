import React, { useEffect, useState } from 'react';

interface ProgressIndicatorProps {
  className?: string;
  showPercentage?: boolean;
}

export default function ProgressIndicator({ 
  className = '', 
  showPercentage = false 
}: ProgressIndicatorProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      const totalScroll = documentHeight - windowHeight;
      const progressPercentage = (scrollTop / totalScroll) * 100;

      setProgress(Math.min(progressPercentage, 100));
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div 
      className={`fixed top-0 left-0 right-0 h-1 bg-wash-light z-50 ${className}`}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      <div
        className="h-full bg-gradient-to-r from-accent-blue to-accent-blueLight transition-all duration-150 ease-out shadow-sm"
        style={{ width: `${progress}%` }}
      />
      {showPercentage && (
        <span className="sr-only">{Math.round(progress)}% read</span>
      )}
    </div>
  );
}

