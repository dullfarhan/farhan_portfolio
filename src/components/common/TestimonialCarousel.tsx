import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
}

export default function TestimonialCarousel({
  testimonials,
  autoPlayInterval = 5000,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying || !testimonials || testimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length, autoPlayInterval]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if carousel is in viewport
      const carousel = document.querySelector('[data-testimonial-carousel]');
      if (!carousel) return;
      
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Touch swipe handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Safety check for empty testimonials
  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-textSecondary">No testimonials available.</p>
      </div>
    );
  }

  const currentTestimonial = testimonials[currentIndex];

  // Safety check for current testimonial
  if (!currentTestimonial) {
    return (
      <div className="text-center py-12">
        <p className="text-textSecondary">Loading testimonials...</p>
      </div>
    );
  }

  return (
    <div 
      className="relative max-w-4xl mx-auto"
      data-testimonial-carousel
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Aria live region for screen readers */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Testimonial {currentIndex + 1} of {testimonials.length}: {currentTestimonial.name}
      </div>

      {/* Counter - Visible indicator */}
      <div className="flex justify-center mb-4">
        <span className="text-sm text-textSecondary font-medium">
          {currentIndex + 1} of {testimonials.length}
        </span>
      </div>

      {/* Main testimonial card - Liquid Glass with layers */}
      <div className="liquid-glass-card p-8 sm:p-12 rounded-3xl fade-in glass-layer-2 glass-depth-on-scroll specular-dynamic">
        {/* Quote mark - Apple style */}
        <div className="text-6xl text-accent-blue/30 mb-4 leading-none font-serif">"</div>

        {/* Quote text */}
        <p className="text-xl sm:text-2xl text-textPrimary mb-8 leading-relaxed">
          {currentTestimonial.quote}
        </p>

        {/* Rating - Subtle */}
        <div className="flex gap-1 mb-6" role="img" aria-label={`Rating: ${currentTestimonial.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={20}
              className={
                i < currentTestimonial.rating
                  ? 'fill-accent-blue text-accent-blue'
                  : 'text-wash-dark'
              }
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Author info */}
        <div className="flex items-center gap-4">
          <img
            src={currentTestimonial.image}
            alt={currentTestimonial.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-accent-blue/20 liquid-glass"
          />
          <div>
            <div className="font-semibold text-lg text-textPrimary">
              {currentTestimonial.name}
            </div>
            <div className="text-textSecondary">
              {currentTestimonial.role} at {currentTestimonial.company}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation buttons - Liquid Glass Button style */}
      <button
        onClick={goToPrevious}
        onMouseEnter={() => setIsAutoPlaying(false)}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 w-12 h-12 liquid-glass-button rounded-full flex items-center justify-center text-accent-blue glass-shimmer hover:bg-glass-tinted focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 min-h-[44px] min-w-[44px] shadow-lg"
        aria-label="Show previous testimonial"
        title="Previous testimonial (Left arrow key)"
      >
        <ChevronLeft size={24} aria-hidden="true" />
      </button>
      <button
        onClick={goToNext}
        onMouseEnter={() => setIsAutoPlaying(false)}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 w-12 h-12 liquid-glass-button rounded-full flex items-center justify-center text-accent-blue glass-shimmer hover:bg-glass-tinted focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 min-h-[44px] min-w-[44px] shadow-lg"
        aria-label="Show next testimonial"
        title="Next testimonial (Right arrow key)"
      >
        <ChevronRight size={24} aria-hidden="true" />
      </button>

      {/* Dots indicator - Liquid Glass Badge style */}
      <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Testimonial navigation">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center ${
              index === currentIndex
                ? 'liquid-glass-badge w-8 h-3'
                : 'liquid-glass-clear w-3 h-3'
            }`}
            aria-label={`Go to testimonial ${index + 1} of ${testimonials.length}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
            role="tab"
          />
        ))}
      </div>
    </div>
  );
}


