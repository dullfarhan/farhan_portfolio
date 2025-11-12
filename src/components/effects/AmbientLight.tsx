import React, { useEffect, useRef } from 'react';

/**
 * Apple-style subtle ambient light effect
 * Inspired by iOS 26 / macOS Tahoe 26
 */
export default function AmbientLight() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Subtle ambient orbs with varied colors
    const orbs = [
      { x: 0.2, y: 0.3, radius: 300, color: '99, 102, 241', opacity: 0.04 }, // Indigo
      { x: 0.8, y: 0.7, radius: 400, color: '168, 85, 247', opacity: 0.03 }, // Purple
      { x: 0.5, y: 0.5, radius: 500, color: '236, 72, 153', opacity: 0.025 }, // Pink
      { x: 0.3, y: 0.8, radius: 350, color: '59, 130, 246', opacity: 0.035 }, // Blue
      { x: 0.9, y: 0.2, radius: 450, color: '14, 165, 233', opacity: 0.03 }, // Cyan
    ];

    let time = 0;

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      orbs.forEach((orb, index) => {
        // Subtle floating motion
        const offsetX = Math.sin(time + index) * 50;
        const offsetY = Math.cos(time + index * 0.7) * 30;
        
        const x = canvas.width * orb.x + offsetX;
        const y = canvas.height * orb.y + offsetY;

        // Create gradient
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, orb.radius);
        gradient.addColorStop(0, `rgba(${orb.color}, ${orb.opacity})`);
        gradient.addColorStop(0.5, `rgba(${orb.color}, ${orb.opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  // Check for reduced motion preference
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 1 }}
      aria-hidden="true"
    />
  );
}

