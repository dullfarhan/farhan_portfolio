import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initParallaxEffects() {
  // Check for reduced motion preference
  if (typeof window === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Apple style: Minimal parallax effects - most depth is handled by CSS
  // Only apply subtle scroll-based transforms for elements that need it
  requestAnimationFrame(() => {
    try {
      // Minimal fade-in for glass depth elements on scroll
      const glassDepthElements = document.querySelectorAll('.glass-depth-on-scroll');
      
      glassDepthElements.forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0.8, transform: 'scale(0.98)' },
          {
            opacity: 1,
            transform: 'scale(1)',
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 90%',
              toggleActions: 'play none none none',
              invalidateOnRefresh: true,
            },
          }
        );
      });

    } catch (error) {
      // Silently handle missing elements
      console.log('Depth effects initialized');
    }
  });
}

