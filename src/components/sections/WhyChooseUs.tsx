'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage, Language } from '@/lib/language-context';
import { IMAGES } from '@/constants/site';
import { motion } from 'framer-motion';

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
    he: "למה Indexland?",
    en: "Why Indexland?"
  };
  
  const defaultSubtitle = {
    he: "השותף האולטימטיבי שלך לניהול נכסים והשקעות בתל אביב ודובאי",
    en: "Your ultimate partner for asset management and investments in Tel Aviv and Dubai"
  };
  
  const titleText = getLocalizedText(title) || t(defaultTitle);
  const subtitleText = getLocalizedText(subtitle) || t(defaultSubtitle);

  // Default features if none provided
  const defaultFeatures: Feature[] = features.length ? features : [
    {
      title: {
        he: "שירות הוליסטי",
        en: "Holistic Service"
      },
      description: {
        he: "שותף אחד לניהול משרדים, נכסים והשקעות",
        en: "One partner for offices, assets, and investments"
      },
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    },
    {
      title: {
        he: "מבוסס נתונים",
        en: "Data-Driven"
      },
      description: {
        he: "דשבורדים בזמן אמת ותובנות ביצועים",
        en: "Real-time dashboards and performance insights"
      },
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    },
    {
      title: {
        he: "מומחיות מקומית",
        en: "Local Expertise"
      },
      description: {
        he: "קשרים עמוקים בשוק תל אביב ותמיכה על הקרקע",
        en: "Deep Tel Aviv market connections and on-the-ground support"
      },
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    },
    {
      title: {
        he: "הגעה גלובלית",
        en: "Global Reach"
      },
      description: {
        he: "התרחבות חלקה לשוק הדינמי של דובאי",
        en: "Seamless expansion into Dubai's dynamic market"
      },
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    }
  ];

  return (
    <section className={`px-4 relative py-16 ${bgColor} dark:bg-backgroundDark dark:bg-opacity-90 transition-colors duration-200 overflow-hidden`}>
      {/* Parallax/floating glassmorphic background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-3xl opacity-40 animate-float-slow" />
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-gradient-to-tr from-secondary/20 to-primary/10 rounded-full blur-2xl opacity-30 animate-float-medium" />
      </div>
      <div className="container relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          <div>
            <h2 className="mb-4 text-4xl md:text-5xl font-extrabold tracking-tight text-primary drop-shadow-xl animate-fade-in text-center">{titleText}</h2>
            <p className="text-lg text-gray-600 dark:text-textSecondary mb-8 animate-fade-in delay-100 text-center">{subtitleText}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              {(features.length ? features : defaultFeatures).map((feature, index) => {
                // 0,1 (שורה ראשונה) delay 0; 2,3 (שורה שנייה) delay 0.25
                const rowDelay = index < 2 ? 0 : 0.25;
                return (
                  <motion.div
                    key={index}
                    className="glass-card glass-inner-shadow rounded-3xl p-4 max-w-md w-full mx-auto transition-all duration-300 hover:scale-105 hover:shadow-glass group relative overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, delay: rowDelay }}
                  >
                    {/* Glass reflection overlay */}
                    <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/40 to-transparent opacity-30 rounded-t-3xl pointer-events-none" />
                    <div className="text-primary flex-shrink-0 animate-scale-in mb-2 flex justify-center">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-primary drop-shadow text-center">{getLocalizedText(feature.title)}</h3>
                      <p className="text-gray-600 dark:text-textSecondary text-center">{getLocalizedText(feature.description)}</p>
                    </div>
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/30 to-transparent opacity-30 rounded-3xl" />
                  </motion.div>
                );
              })}
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