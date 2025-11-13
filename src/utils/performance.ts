/**
 * Performance optimization utilities
 */

/**
 * Debounce function to limit function calls
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function to limit function calls
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * Preload critical resources
 */
export function preloadResource(href: string, as: 'script' | 'style' | 'image' | 'font' | 'fetch') {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  
  if (as === 'font') {
    link.crossOrigin = 'anonymous';
  }
  
  document.head.appendChild(link);
}

/**
 * Lazy load images with Intersection Observer
 */
export function lazyLoadImages() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px',
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

/**
 * Optimize animations based on device capability
 */
export function shouldReduceMotion(): boolean {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Get device performance tier
 */
export function getPerformanceTier(): 'low' | 'medium' | 'high' {
  if (typeof navigator === 'undefined' || !('hardwareConcurrency' in navigator)) {
    return 'medium';
  }

  const cores = navigator.hardwareConcurrency || 2;
  const memory = (navigator as any).deviceMemory || 4; // GB
  
  if (cores >= 8 && memory >= 8) {
    return 'high';
  } else if (cores >= 4 && memory >= 4) {
    return 'medium';
  }
  
  return 'low';
}

/**
 * Reduce animation complexity on low-end devices
 */
export function optimizeForDevice() {
  const tier = getPerformanceTier();
  
  if (tier === 'low') {
    document.documentElement.classList.add('low-performance');
    // Disable heavy animations
    const style = document.createElement('style');
    style.textContent = `
      .low-performance * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
      }
      .low-performance .parallax-bg,
      .low-performance .parallax-image,
      .low-performance .parallax-text {
        transform: none !important;
      }
    `;
    document.head.appendChild(style);
  }
}

/**
 * Initialize performance optimizations
 */
export function initPerformanceOptimizations() {
  // Optimize based on device
  optimizeForDevice();
  
  // Lazy load images
  lazyLoadImages();
  
  // Reduce motion if preferred
  if (shouldReduceMotion()) {
    document.documentElement.classList.add('reduced-motion');
  }
}




