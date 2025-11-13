import { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length, autoPlayInterval]);

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

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main testimonial card */}
      <div className="glass-card p-8 sm:p-12 fade-in">
        {/* Quote mark */}
        <div className="text-6xl text-accent-indigo mb-4 leading-none">"</div>

        {/* Quote text */}
        <p className="text-xl sm:text-2xl text-textPrimary mb-8 leading-relaxed italic">
          {currentTestimonial.quote}
        </p>

        {/* Rating */}
        <div className="flex gap-1 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={20}
              className={
                i < currentTestimonial.rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }
            />
          ))}
        </div>

        {/* Author info */}
        <div className="flex items-center gap-4">
          <img
            src={currentTestimonial.image}
            alt={currentTestimonial.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-accent-indigo"
          />
          <div>
            <div className="font-bold text-lg text-textPrimary">
              {currentTestimonial.name}
            </div>
            <div className="text-textSecondary">
              {currentTestimonial.role} at {currentTestimonial.company}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-premium flex items-center justify-center text-accent-indigo hover:bg-accent-indigo hover:text-white transition-all"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 w-12 h-12 bg-white rounded-full shadow-premium flex items-center justify-center text-accent-indigo hover:bg-accent-indigo hover:text-white transition-all"
        aria-label="Next testimonial"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-accent-indigo w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}


