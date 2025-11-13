import { ReactNode } from 'react';

interface SectionNumberProps {
  number: string;
  children: ReactNode;
  className?: string;
}

export default function SectionNumber({ number, children, className = '' }: SectionNumberProps) {
  return (
    <div className={`flex items-baseline gap-4 mb-4 ${className}`}>
      <span className="text-sm sm:text-base font-mono text-accent-indigo opacity-60">
        {number}
      </span>
      <div className="flex-1">{children}</div>
    </div>
  );
}

