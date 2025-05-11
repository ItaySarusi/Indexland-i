'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage, Language } from '@/lib/language-context';
import { IMAGES } from '@/constants/site';

interface Feature {
  title: string | Record<Language, string>;
  description: string | Record<Language, string>;
  icon: React.ReactNode;
}

interface WhyChooseUsProps {
  title?: string | Record<Language, string>;
  subtitle?: string | Record<Language, string>;
  features: Feature[];
  imageUrl?: string;
}

export default function WhyChooseUs({
  title,
  subtitle,
  features = [],
  imageUrl = IMAGES.sections.whyChooseUs
}: WhyChooseUsProps) {
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
    he: "למה לבחור בנו",
    en: "Why Choose Us"
  };
  
  const defaultSubtitle = {
    he: "אנו מחויבים למצוינות ולשירות לקוחות ברמה הגבוהה ביותר",
    en: "We are committed to excellence and the highest level of customer service"
  };
  
  const titleText = getLocalizedText(title) || t(defaultTitle);
  const subtitleText = getLocalizedText(subtitle) || t(defaultSubtitle);

  return (
    <section className="py-12 bg-white dark:bg-backgroundDark dark:bg-opacity-90 transition-colors duration-200">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <h2 className="mb-4">{titleText}</h2>
            <p className="text-lg text-gray-600 dark:text-textSecondary mb-8">
              {subtitleText}
            </p>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-primary flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{getLocalizedText(feature.title)}</h3>
                    <p className="text-gray-600 dark:text-textSecondary">{getLocalizedText(feature.description)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            {imageUrl && (
              <Image 
                src={imageUrl} 
                alt={titleText} 
                className="rounded-lg shadow-xl w-full h-auto object-cover dark:opacity-90"
                width={600}
                height={400}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
} 