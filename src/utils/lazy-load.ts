/**
 * Lazy Loading Utility
 * Implements Intersection Observer for lazy loading images and components
 */

export function initLazyLoading() {
  // Lazy load images
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
          
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.01,
    }
  );

  images.forEach((img) => imageObserver.observe(img));

  // Lazy load heavy components
  const lazyComponents = document.querySelectorAll('[data-lazy-component]');
  
  const componentObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.classList.add('loaded');
          observer.unobserve(element);
        }
      });
    },
    {
      rootMargin: '100px 0px',
      threshold: 0.01,
    }
  );

  lazyComponents.forEach((component) => componentObserver.observe(component));
}

/**
 * Preload critical resources
 */
export function preloadCriticalResources() {
  // Preload fonts
  const fontLinks = [
    { href: '/fonts/inter.woff2', type: 'font/woff2' },
  ];

  fontLinks.forEach(({ href, type }) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = type;
    link.href = href;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

/**
 * Optimize third-party scripts
 */
export function deferNonCriticalScripts() {
  // Defer analytics and non-critical scripts
  window.addEventListener('load', () => {
    // Analytics already loaded in head, but can add more here
  });
}


