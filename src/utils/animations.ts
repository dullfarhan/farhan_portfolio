import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {
  // Wait for DOM to be fully ready
  if (typeof window === 'undefined') return;
  
  // Apple style: Most animations are now CSS-based
  // Only handle fade-in-up elements that need JS
  requestAnimationFrame(() => {
    try {
      // Fade up animations for sections - Apple style subtle
      const fadeUpElements = document.querySelectorAll('.fade-in-up');
      
      if (fadeUpElements.length > 0) {
        fadeUpElements.forEach((element) => {
          if (element && element instanceof HTMLElement) {
            gsap.fromTo(
              element,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: element,
                  start: 'top 85%',
                  toggleActions: 'play none none none',
                  invalidateOnRefresh: true,
                },
              }
            );
          }
        });
      }

    } catch (error) {
      // Silently handle missing elements
      console.log('Scroll animations initialized');
    }
  });
}

export function animateCounter(element: HTMLElement, target: number, duration: number = 2000) {
  const obj = { value: 0 };
  
  gsap.to(obj, {
    value: target,
    duration: duration / 1000,
    ease: 'power2.out',
    onUpdate: () => {
      element.textContent = Math.round(obj.value).toString();
    },
  });
}

export { gsap, ScrollTrigger };


