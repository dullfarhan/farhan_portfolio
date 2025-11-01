import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {
  // Wait for DOM to be fully ready
  if (typeof window === 'undefined') return;
  
  // Use requestAnimationFrame to ensure DOM is ready
  requestAnimationFrame(() => {
    try {
      // Fade up animations for sections
      const fadeUpElements = document.querySelectorAll('.fade-in-up');
      
      if (fadeUpElements.length > 0) {
        fadeUpElements.forEach((element) => {
          if (element) {
            // Set initial state then animate
            gsap.set(element, { opacity: 0, y: 50 });
            gsap.to(element, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                invalidateOnRefresh: true,
              },
            });
          }
        });
      }

      // Stagger animations for card grids (only for non-React elements)
      const staggerContainers = document.querySelectorAll('.stagger-container');
      
      staggerContainers.forEach((container) => {
        // Only animate direct children that are not React components
        const items = Array.from(container.children).filter(
          (child) => !child.hasAttribute('data-react-root')
        );
        
        if (items.length > 0) {
          // Set initial state then animate
          gsap.set(items, { opacity: 0, y: 30 });
          gsap.to(items, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
              invalidateOnRefresh: true,
            },
          });
        }
      });

      // Parallax effect for hero elements
      const parallaxElements = document.querySelectorAll('.parallax');
      
      if (parallaxElements.length > 0) {
        parallaxElements.forEach((element) => {
          if (element) {
            gsap.to(element, {
              y: -100,
              ease: 'none',
              scrollTrigger: {
                trigger: element,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                invalidateOnRefresh: true,
              },
            });
          }
        });
      }

      // Scale animations for images
      const scaleElements = document.querySelectorAll('.scale-in');
      
      if (scaleElements.length > 0) {
        scaleElements.forEach((element) => {
          if (element) {
            gsap.from(element, {
              scale: 0.8,
              opacity: 0,
              duration: 0.8,
              ease: 'back.out(1.7)',
              scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                invalidateOnRefresh: true,
              },
            });
          }
        });
      }
    } catch (error) {
      console.log('GSAP animations initialized with some elements missing - this is normal');
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


