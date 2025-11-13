import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, input, textarea, [role="button"]');
      setIsHovering(!!isClickable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? '16px' : '8px',
          height: isHovering ? '16px' : '8px',
          background: isHovering ? '#8B5CF6' : '#6366F1',
        }}
      />
      <div
        className="cursor-outline"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? '48px' : '32px',
          height: isHovering ? '48px' : '32px',
          borderColor: isHovering ? 'rgba(139, 92, 246, 0.8)' : 'rgba(99, 102, 241, 0.5)',
        }}
      />
    </>
  );
}


