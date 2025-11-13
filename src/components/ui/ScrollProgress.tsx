import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const totalScroll = documentHeight - windowHeight;
      const progress = totalScroll > 0 ? (scrollTop / totalScroll) * 100 : 0;

      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <div
        className="scroll-progress"
        style={{
          transform: `scaleX(${scrollProgress / 100})`,
        }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
        title={`${Math.round(scrollProgress)}% scrolled`}
      />
      {/* Optional: Percentage indicator on hover (desktop only) */}
      <div 
        className="hidden md:block absolute top-0 right-0 text-xs text-textSecondary opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ transform: 'translateY(-100%)' }}
        aria-hidden="true"
      >
        {Math.round(scrollProgress)}%
      </div>
    </div>
  );
}


