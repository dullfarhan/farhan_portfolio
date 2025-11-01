import { useState, useEffect } from 'react';

interface SuperPowerCardPremiumProps {
  title: string;
  icon: string;
  description: string;
  bgColor: string;
  skills: string[];
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
  const [isFlipped, setIsFlipped] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="perspective-1000 w-full max-w-[320px] sm:max-w-[370px] h-[280px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          mounted && isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card */}
        <div
          className={`absolute w-full h-full backface-hidden ${bgColor} rounded-[20px] p-6 flex flex-col gap-4 hover:shadow-premium transition-shadow`}
        >
          <div className="flex items-center gap-3">
            <img src={icon} alt={title} className="w-12 h-12 float-animation" />
            <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
          </div>
          <p className="text-sm sm:text-base text-textSecondary flex-grow">
            {description}
          </p>
          <div className="text-xs text-accent-indigo font-medium mt-auto">
            Click to see details →
          </div>
        </div>

        {/* Back of card */}
        <div
          className={`absolute w-full h-full backface-hidden rotate-y-180 ${bgColor} rounded-[20px] p-6 flex flex-col gap-4`}
        >
          <h3 className="text-lg sm:text-xl font-bold gradient-text mb-2">
            {title}
          </h3>

          {/* Proficiency bar */}
          <div className="mb-3">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-textSecondary">Proficiency</span>
              <span className="font-bold text-accent-indigo">{proficiency}%</span>
            </div>
            <div className="w-full bg-white/50 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-accent-indigo to-accent-purple rounded-full transition-all duration-1000"
                style={{ width: isFlipped ? `${proficiency}%` : '0%' }}
              />
            </div>
          </div>

          {/* Skills list */}
          <div className="flex-grow">
            <div className="text-xs font-semibold text-textSecondary mb-2">
              Key Skills:
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs bg-white px-2 py-1 rounded-full border border-accent-indigo/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="text-xs text-accent-purple font-medium mt-auto">
            ← Click to go back
          </div>
        </div>
      </div>
    </div>
  );
}


