'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';

interface Testimonial {
  quote: string | Record<Language, string>;
  author: string | Record<Language, string>;
  position: string | Record<Language, string>;
  company?: string | Record<Language, string>;
  avatar?: string;
  rating?: number;
}

interface TestimonialsSectionProps {
  title?: string | Record<Language, string>;
  subtitle?: string | Record<Language, string>;
  testimonials: Testimonial[];
  variant?: 'grid' | 'carousel';
  bgColor?: 'white' | 'light' | 'gray';
}

export default function TestimonialsSection({
  title,
  subtitle,
  testimonials = [],
  variant = 'carousel',
  bgColor = 'light'
}: TestimonialsSectionProps) {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // קבלת הטקסט בשפה הנכונה
  const getLocalizedText = (text: string | Record<string, string> | undefined) => {
    if (!text) return '';
    if (typeof text === 'string') return text;
    return t(text);
  };
  
  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const defaultTitle = {
    he: "מה הלקוחות שלנו אומרים",
    en: "What Our Clients Say"
  };
  
  const defaultSubtitle = {
    he: "המחויבות שלנו ללקוחות שלנו היא ללא פשרות",
    en: "Our commitment to our clients is uncompromising"
  };
  
  const titleText = getLocalizedText(title) || t(defaultTitle);
  const subtitleText = getLocalizedText(subtitle) || t(defaultSubtitle);

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-primary' : 'text-gray-300 dark:text-gray-600'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className={`py-16 ${bgColor === 'white' ? 'bg-white' : bgColor === 'gray' ? 'bg-gray-50' : bgColor === 'light' ? 'bg-blue-50' : 'bg-white'} dark:bg-backgroundDark dark:bg-opacity-90 transition-colors duration-200`}>
      <div className="container">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="mb-4">{titleText}</h2>}
            {subtitle && <p className="text-lg text-gray-600 dark:text-textSecondary max-w-3xl mx-auto">{subtitleText}</p>}
          </div>
        )}
        
        {variant === 'carousel' ? (
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div className="relative">
                {testimonials.map((testimonial, idx) => (
                  <div 
                    key={idx}
                    className={`transition-all duration-300 ${idx === currentIndex ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}`}
                  >
                    <div className="relative p-6 md:p-10">
                      <div className="mb-4">
                        <svg className="w-8 h-8 text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      <p className="text-gray-600 dark:text-textSecondary mb-4 italic">
                        &ldquo;{getLocalizedText(testimonial.quote)}&rdquo;
                      </p>
                      <div className="flex items-center">
                        <div className="mr-4">
                          <Image 
                            className="w-12 h-12 object-cover rounded-full border-2 border-primary"
                            src={testimonial.avatar}
                            alt={typeof testimonial.author === 'object' ? testimonial.author[language] : testimonial.author}
                            width={48}
                            height={48}
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{typeof testimonial.author === 'object' ? testimonial.author[language] : testimonial.author}</p>
                          <p className="text-sm text-gray-600 dark:text-textSecondary">
                            {typeof testimonial.position === 'object' ? testimonial.position[language] : testimonial.position}
                            {testimonial.company && <span>, {typeof testimonial.company === 'object' ? testimonial.company[language] : testimonial.company}</span>}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className={`${variant === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}`}>
            {testimonials.map((testimonial, index) => (
              <div className="relative p-6 md:p-10">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-textSecondary mb-4 italic">
                  &ldquo;{getLocalizedText(testimonial.quote)}&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image 
                      className="w-12 h-12 object-cover rounded-full border-2 border-primary"
                      src={testimonial.avatar}
                      alt={typeof testimonial.author === 'object' ? testimonial.author[language] : testimonial.author}
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{typeof testimonial.author === 'object' ? testimonial.author[language] : testimonial.author}</p>
                    <p className="text-sm text-gray-600 dark:text-textSecondary">
                      {typeof testimonial.position === 'object' ? testimonial.position[language] : testimonial.position}
                      {testimonial.company && <span>, {typeof testimonial.company === 'object' ? testimonial.company[language] : testimonial.company}</span>}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
} 