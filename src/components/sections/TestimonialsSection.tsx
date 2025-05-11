'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage, Language } from '@/lib/language-context';

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
  bgColor?: 'white' | 'light';
}

export default function TestimonialsSection({
  title,
  subtitle,
  testimonials = [],
  variant = 'grid',
  bgColor = 'light'
}: TestimonialsSectionProps) {
  const { language, t } = useLanguage();
  
  // קבלת הטקסט בשפה הנכונה
  const getLocalizedText = (text: string | Record<Language, string> | undefined): string => {
    if (!text) return '';
    if (typeof text === 'string') {
      return text;
    }
    return t(text);
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
    <section className={`py-12 ${bgColor === 'light' ? 'bg-backgroundLight dark:bg-backgroundDark' : 'bg-white dark:bg-backgroundDark dark:bg-opacity-90'} transition-colors duration-200`}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">{titleText}</h2>
          <p className="text-lg text-gray-600 dark:text-textSecondary max-w-3xl mx-auto">
            {subtitleText}
          </p>
        </div>
        
        <div className={`${variant === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}`}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-backgroundDark dark:bg-opacity-90 p-6 rounded-lg shadow-md"
            >
              <div className="mb-6">
                <svg className="h-8 w-8 text-primary mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                
                {testimonial.rating && renderStars(testimonial.rating)}
                
                <p className="text-gray-600 dark:text-textSecondary mb-4 italic">
                  "{getLocalizedText(testimonial.quote)}"
                </p>
              </div>
              
              <div className="flex items-center">
                {testimonial.avatar && (
                  <div className="flex-shrink-0 mr-4 rtl:mr-0 rtl:ml-4">
                    <Image 
                      src={testimonial.avatar}
                      alt={getLocalizedText(testimonial.author)}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </div>
                )}
                <div>
                  <h4 className="font-bold">{getLocalizedText(testimonial.author)}</h4>
                  <p className="text-sm text-gray-600 dark:text-textSecondary">
                    {getLocalizedText(testimonial.position)}
                    {testimonial.company && ` - ${getLocalizedText(testimonial.company)}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 