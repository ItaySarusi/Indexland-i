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
  reversed?: boolean;
  bgColor?: string;
}

export default function WhyChooseUs({
  title,
  subtitle,
  features = [],
  imageUrl = IMAGES.sections.whyChooseUs,
  reversed = false,
  bgColor = 'white'
}: WhyChooseUsProps) {
  const { t } = useLanguage();
  
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
    <section className={`relative py-12 ${bgColor} dark:bg-backgroundDark dark:bg-opacity-90 transition-colors duration-200 overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 pointer-events-none" />
      <div className="container">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          <div>
            <h2 className="mb-4">{titleText}</h2>
            <p className="text-lg text-gray-600 dark:text-textSecondary mb-8">
              {subtitleText}
            </p>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 glass-card rounded-2xl p-4 shadow-xl animate-fade-in transition-all duration-300 hover:scale-105 hover:shadow-glass group relative overflow-hidden">
                  <div className="text-primary flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{getLocalizedText(feature.title)}</h3>
                    <p className="text-gray-600 dark:text-textSecondary">{getLocalizedText(feature.description)}</p>
                  </div>
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/30 to-transparent opacity-30 rounded-2xl" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            {imageUrl && (
              <div className="relative">
                <Image 
                  src={imageUrl} 
                  alt={titleText} 
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover dark:opacity-90 animate-fade-in"
                  width={600}
                  height={400}
                />
                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white/60 to-transparent rounded-b-2xl blur-lg opacity-60 pointer-events-none" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
} 