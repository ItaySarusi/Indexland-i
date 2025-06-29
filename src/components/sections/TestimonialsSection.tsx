'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { Language } from '@/lib/language-context'; // Assuming Language type is exported from here

interface Testimonial {
  quote: string | Record<Language, string>;
  author: string | Record<Language, string>;
  position: string | Record<Language, string>;
  company?: string | Record<Language, string>;
  avatar?: string;
}

interface TestimonialsSectionProps {
  title?: string | Record<Language, string>;
  subtitle?: string | Record<Language, string>;
  testimonials: Testimonial[];
  bgColor?: 'white' | 'light' | 'gray';
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function TestimonialsSection({
  title,
  subtitle,
  testimonials = [],
  bgColor = 'light',
  autoPlay = true,
  autoPlayInterval = 7000,
}: TestimonialsSectionProps) {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // Track animation direction
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Helper function to get localized text
  const getLocalizedText = useCallback((text: string | Record<string, string> | undefined): string => {
    if (!text) return '';
    if (typeof text === 'string') return text;
    return t(text);
  }, [t]);

  // Stop autoplay
  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  // Start autoplay
  const startAutoPlay = useCallback(() => {
    if (!autoPlay || testimonials.length <= 1) return;
    stopAutoPlay(); // Clear existing interval
    autoPlayRef.current = setInterval(() => {
      setDirection(1); // Auto-rotation always moves forward (right)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, autoPlayInterval);
  }, [autoPlay, autoPlayInterval, testimonials.length]);

  // Handle slide change
  const goToSlide = (index: number) => {
    stopAutoPlay();
    setCurrentIndex(index);
    // Optionally restart autoplay after manual interaction
    // setTimeout(startAutoPlay, 5000); 
  };

  const nextSlide = () => {
    stopAutoPlay();
    setDirection(1); // Moving forward
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    // Optionally restart autoplay
    // setTimeout(startAutoPlay, 5000);
  };

  const prevSlide = () => {
    stopAutoPlay();
    setDirection(-1); // Moving backward
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
     // Optionally restart autoplay
    // setTimeout(startAutoPlay, 5000);
  };

  // Effect for autoplay
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay(); // Cleanup on unmount
  }, [startAutoPlay]); // Rerun if startAutoPlay changes

  // Effect to update scroll position (optional, for visual centering if needed)
  useEffect(() => {
    if (containerRef.current) {
        const slideWidth = containerRef.current.offsetWidth;
        // Basic scroll, might need adjustment based on exact layout/styling
        containerRef.current.scrollTo({
            left: currentIndex * slideWidth,
            behavior: 'smooth' 
        });
    }
  }, [currentIndex]);

  const defaultTitle = {
    he: 'מה הלקוחות שלנו חושבים',
    en: 'What Our Clients Think',
  };

  const titleText = getLocalizedText(title) || t(defaultTitle);
  const subtitleText = getLocalizedText(subtitle);

  if (!testimonials || testimonials.length === 0) {
    return null; // Don't render anything if there are no testimonials
  }

  const currentTestimonial = testimonials[currentIndex];

  // Animation variants for directional sliding
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <section className={`px-8 relative py-16 md:py-24 overflow-hidden ${
      bgColor === 'white' ? 'bg-white' : bgColor === 'gray' ? 'bg-gray-50' : 'bg-blue-50'
    } dark:bg-backgroundDark dark:bg-opacity-90 transition-colors duration-200`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 pointer-events-none opacity-50" />
      
      <div className="container relative z-10">
        {(titleText || subtitleText) && (
          <div className="text-center mb-12 max-w-3xl mx-auto">
            {titleText && <h2 className="mb-4">{titleText}</h2>}
            {subtitleText && <p className="text-lg text-gray-600 dark:text-textSecondary">{subtitleText}</p>}
          </div>
        )}

        <div className="relative max-w-3xl mx-auto">
          {/* Testimonial Card with Animation */}
          <div className="relative overflow-hidden min-h-[300px] md:min-h-[250px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-10 min-h-[300px] md:min-h-[250px] flex flex-col justify-center absolute inset-0 w-full"
              >
                <svg className="w-10 h-10 text-primary dark:text-secondary mb-4 opacity-80" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.983 3v7.391c0 2.749-2.05 5.749-5.983 7.609l2.454 1.992c3.759-1.992 4.546-5.992 4.546-8.601h3v-9h-7.017zm11.017 0v7.391c0 2.749-2.05 5.749-5.983 7.609l2.454 1.992c3.759-1.992 4.546-5.992 4.546-8.601h3v-9h-7.017z"/>
                </svg>

                <blockquote className="text-gray-700 dark:text-gray-300 text-base md:text-lg lg:text-xl italic mb-4 md:mb-6 flex-grow leading-relaxed">
                  &ldquo;{getLocalizedText(currentTestimonial.quote)}&rdquo;
                </blockquote>
                
                <div className="flex items-center mt-auto">
                  <Image
                    className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full mr-3 md:mr-4 border-2 border-primary/50 flex-shrink-0"
                    src={currentTestimonial.avatar || '/images/placeholder-avatar.png'} // Provide fallback
                    alt={getLocalizedText(currentTestimonial.author)}
                    width={48}
                    height={48}
                    onError={(e) => (e.currentTarget.src = '/images/placeholder-avatar.png')} // Handle image load error
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-primary dark:text-secondary text-sm md:text-base truncate">
                      {getLocalizedText(currentTestimonial.author)}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-tight">
                      {getLocalizedText(currentTestimonial.position)}
                      {currentTestimonial.company && (
                        <span>, {getLocalizedText(currentTestimonial.company)}</span>
                      )}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          {testimonials.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                aria-label={language === 'he' ? 'המלצה קודמת' : 'Previous testimonial'}
                className="absolute top-1/2 -left-4 md:-left-10 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 z-20 cursor-pointer"
              >
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button
                onClick={nextSlide}
                aria-label={language === 'he' ? 'המלצה הבאה' : 'Next testimonial'}
                className="absolute top-1/2 -right-4 md:-right-10 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 z-20 cursor-pointer"
              >
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </>
          )}
        </div>

        {/* Navigation Dots */}
        {testimonials.length > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`${language === 'he' ? 'עבור להמלצה' : 'Go to testimonial'} ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer ${
                  currentIndex === index ? 'bg-primary dark:bg-secondary' : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        )}
      </div>
      {/* Simple CSS Fade-in Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0.3; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
} 