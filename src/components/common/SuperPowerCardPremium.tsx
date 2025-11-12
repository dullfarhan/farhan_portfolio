import React, { useState, useEffect } from 'react';

interface SuperPowerCardPremiumProps {
  title: string;
  icon: string | { src: string };
  description: string;
  bgColor: string;
  skills: string[] | string[][];
  proficiency: number;
}

export default function SuperPowerCardPremium({
  title,
  icon,
  description,
  bgColor,
  skills,
  proficiency,
}: SuperPowerCardPremiumProps) {
  const [mounted, setMounted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHoverDevice, setIsHoverDevice] = useState(false);

  // Handle icon - can be string URL or ImageMetadata object
  const iconUrl = typeof icon === 'string' ? icon : icon?.src || '';
  
  // Ensure skills is always a flat array (Astro may serialize as nested)
  const skillsArray = Array.isArray(skills) && skills.length > 0 && Array.isArray(skills[0])
    ? skills.flat() as string[]
    : (Array.isArray(skills) ? skills as string[] : []);

  useEffect(() => {
    setMounted(true);
    // Detect if device supports hover
    const mediaQuery = window.matchMedia('(hover: hover)');
    setIsHoverDevice(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsHoverDevice(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleClick = () => {
    if (!isHoverDevice) {
      setIsExpanded(!isExpanded);
    }
  };

  const showDetails = isHoverDevice ? undefined : isExpanded;

  return (
    <div
      className="w-full max-w-[320px] sm:max-w-[370px] h-[280px] group liquid-glass-frosted rounded-3xl overflow-hidden glass-morph glass-shimmer glass-depth-on-scroll"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-expanded={showDetails}
      aria-label={`${title} - ${showDetails ? 'Hide' : 'Show'} details`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {/* Single glass card with hover expand */}
      <div className={`absolute inset-0 liquid-glass-frosted rounded-3xl p-6 flex flex-col gap-5 transition-all duration-300 ${
        isHoverDevice ? 'group-hover:bg-opacity-[0.82]' : showDetails ? 'bg-opacity-[0.82]' : ''
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 liquid-glass-clear rounded-2xl flex items-center justify-center">
            <img src={iconUrl} alt={title} className="w-8 h-8" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-textPrimary">{title}</h3>
        </div>

        {/* Show description on non-hover, skills on hover/click */}
        <div className="flex-grow relative">
          {/* Description - hidden on hover/expand */}
          <p className={`text-sm sm:text-base text-textSecondary leading-relaxed transition-all duration-300 ${
            isHoverDevice 
              ? 'group-hover:opacity-0 group-hover:absolute' 
              : showDetails ? 'opacity-0 absolute' : ''
          }`}>
            {description}
          </p>

          {/* Skills on hover/expand */}
          <div className={`transition-all duration-300 space-y-4 ${
            isHoverDevice 
              ? 'opacity-0 group-hover:opacity-100' 
              : showDetails ? 'opacity-100' : 'opacity-0'
          }`}>
            {/* Proficiency bar - Apple style */}
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="text-textSecondary font-medium">Proficiency</span>
                <span className="font-semibold text-accent-blue">{proficiency}%</span>
              </div>
              <div className="w-full bg-wash-light rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-accent-blue rounded-full transition-all duration-700"
                  style={{ width: `${proficiency}%` }}
                />
              </div>
            </div>

            {/* Skills list */}
            <div>
              <div className="text-xs font-semibold text-textSecondary mb-3">
                Key Skills:
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsArray.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs liquid-glass-badge text-textPrimary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-xs text-accent-blue font-medium mt-auto">
          {isHoverDevice ? 'Hover for details →' : 'Tap for details →'}
        </div>
      </div>
    </div>
  );
}


