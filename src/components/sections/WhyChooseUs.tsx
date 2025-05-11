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
    <section className={`relative py-16 ${bgColor} dark:bg-backgroundDark dark:bg-opacity-90 transition-colors duration-200 overflow-hidden`}>
      {/* Parallax/floating glassmorphic background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-3xl opacity-40 animate-float-slow" />
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-gradient-to-tr from-secondary/20 to-primary/10 rounded-full blur-2xl opacity-30 animate-float-medium" />
      </div>
      <div className="container relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          <div>
            <h2 className="mb-4 text-4xl md:text-5xl font-extrabold tracking-tight text-primary drop-shadow-xl animate-fade-in">{titleText}</h2>
            <p className="text-lg text-gray-600 dark:text-textSecondary mb-8 animate-fade-in delay-100">{subtitleText}</p>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 glass-card rounded-3xl p-6 shadow-2xl border border-white/30 dark:border-white/10 backdrop-blur-2xl animate-fade-in transition-all duration-300 hover:scale-105 hover:shadow-glass group relative overflow-hidden">
                  {/* Glass reflection overlay */}
                  <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/40 to-transparent opacity-30 rounded-t-3xl pointer-events-none" />
                  <div className="text-primary flex-shrink-0 animate-scale-in">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-primary drop-shadow animate-fade-in delay-100">{getLocalizedText(feature.title)}</h3>
                    <p className="text-gray-600 dark:text-textSecondary animate-fade-in delay-200">{getLocalizedText(feature.description)}</p>
                  </div>
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/30 to-transparent opacity-30 rounded-3xl" />
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-in delay-200">
            {imageUrl && (
              <div className="relative">
                <Image 
                  src={imageUrl} 
                  alt={titleText} 
                  className="rounded-3xl shadow-2xl w-full h-auto object-cover dark:opacity-90 animate-scale-in"
                  width={600}
                  height={400}
                />
                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white/60 to-transparent rounded-b-3xl blur-lg opacity-60 pointer-events-none" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
} 