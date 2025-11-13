import { useEffect, useRef } from 'react';

export default function FloatingShapes() {
  const shapes = [
    { size: 300, duration: 20, delay: 0, color: 'from-accent-indigo/20 to-accent-purple/20' },
    { size: 400, duration: 25, delay: 5, color: 'from-accent-purple/20 to-accent-pink/20' },
    { size: 250, duration: 18, delay: 10, color: 'from-accent-cyan/20 to-accent-indigo/20' },
    { size: 350, duration: 22, delay: 3, color: 'from-accent-pink/20 to-accent-cyan/20' },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-gradient-to-br ${shape.color} blur-3xl animate-float`}
          style={{
            width: shape.size,
            height: shape.size,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${shape.duration}s ease-in-out infinite`,
            animationDelay: `${shape.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

