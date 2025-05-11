'use client';

import React, { useState } from 'react';
import { useLanguage, Language } from '@/lib/language-context';

interface FaqItem {
  question: string | Record<Language, string>;
  answer: string | Record<Language, string>;
}

interface FaqSectionProps {
  title?: string | Record<Language, string>;
  subtitle?: string | Record<Language, string>;
  faqs: FaqItem[];
  columns?: 1 | 2;
  bgColor?: 'white' | 'light';
}

export default function FaqSection({
  title,
  subtitle,
  faqs = [],
  columns = 1,
  bgColor = 'white'
}: FaqSectionProps) {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  // קבלת הטקסט בשפה הנכונה
  const getLocalizedText = (text: string | Record<Language, string> | undefined): string => {
    if (!text) return '';
    if (typeof text === 'string') {
      return text;
    }
    return t(text);
  };
  
  const defaultTitle = {
    he: "שאלות נפוצות",
    en: "Frequently Asked Questions"
  };
  
  const defaultSubtitle = {
    he: "תשובות לשאלות הנפוצות ביותר שנשאלות על ידי לקוחותינו",
    en: "Answers to the most common questions asked by our clients"
  };
  
  const titleText = getLocalizedText(title) || t(defaultTitle);
  const subtitleText = getLocalizedText(subtitle) || t(defaultSubtitle);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`relative py-12 ${bgColor === 'light' ? 'bg-backgroundLight dark:bg-backgroundDark' : 'bg-white dark:bg-backgroundDark dark:bg-opacity-90'} transition-colors duration-200 overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 pointer-events-none" />
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">{titleText}</h2>
          <p className="text-lg text-gray-600 dark:text-textSecondary max-w-3xl mx-auto">
            {subtitleText}
          </p>
        </div>
        
        <div className={`${columns === 2 ? 'grid grid-cols-1 lg:grid-cols-2 gap-8' : 'max-w-3xl mx-auto'}`}>
          <div className="space-y-4">
            {faqs.slice(0, columns === 2 ? Math.ceil(faqs.length / 2) : faqs.length).map((faq, index) => (
              <div 
                key={index} 
                className="glass-card rounded-2xl shadow-xl animate-fade-in animate-scale-in transition-all duration-300 hover:scale-105 hover:shadow-glass relative overflow-hidden"
                style={{ animationDelay: `${index * 0.10}s` }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center w-full px-6 py-4 text-left"
                >
                  <h3 className="font-semibold text-lg">{getLocalizedText(faq.question)}</h3>
                  <span className="text-primary">
                    {openIndex === index ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"></path>
                      </svg>
                    )}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-600 dark:text-textSecondary animate-fade-in animate-scale-in">
                    {getLocalizedText(faq.answer)}
                  </div>
                )}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/30 to-transparent opacity-30 rounded-2xl" />
              </div>
            ))}
          </div>
          
          {columns === 2 && faqs.length > 1 && (
            <div className="space-y-4">
              {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => {
                const actualIndex = index + Math.ceil(faqs.length / 2);
                return (
                  <div 
                    key={actualIndex} 
                    className="glass-card rounded-2xl shadow-xl animate-fade-in animate-scale-in transition-all duration-300 hover:scale-105 hover:shadow-glass relative overflow-hidden"
                    style={{ animationDelay: `${actualIndex * 0.10}s` }}
                  >
                    <button
                      onClick={() => toggleAccordion(actualIndex)}
                      className="flex justify-between items-center w-full px-6 py-4 text-left"
                    >
                      <h3 className="font-semibold text-lg">{getLocalizedText(faq.question)}</h3>
                      <span className="text-primary">
                        {openIndex === actualIndex ? (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"></path>
                          </svg>
                        )}
                      </span>
                    </button>
                    {openIndex === actualIndex && (
                      <div className="px-6 pb-4 text-gray-600 dark:text-textSecondary animate-fade-in animate-scale-in">
                        {getLocalizedText(faq.answer)}
                      </div>
                    )}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/30 to-transparent opacity-30 rounded-2xl" />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 