import React, { type ReactNode } from 'react';
import confetti from 'canvas-confetti';

interface ConfettiButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function ConfettiButton({
  children,
  className = '',
  onClick,
}: ConfettiButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x, y },
      colors: ['#6366F1', '#8B5CF6', '#EC4899', '#06B6D4'],
    });

    onClick?.();
  };

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}


