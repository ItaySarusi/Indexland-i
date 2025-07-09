'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage, Language } from '@/lib/language-context';
import { motion } from 'framer-motion';

interface Service {
  title: string | Record<Language, string>;
  description: string | Record<Language, string>;
  icon: React.ReactNode;
  href: string;
  svg: string;
  image?: string;
}

interface ServicesOverviewProps {
  title?: string | Record<Language, string>;
  subtitle?: string | Record<Language, string>;
  services: Service[];
}

export default function ServicesOverview({
  title,
  subtitle,
  services = []
}: ServicesOverviewProps) {
  const { t } = useLanguage();
  
  // Animation variants matching OurOfferSection exactly
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  
  // קבלת הטקסט בשפה הנכונה
  const getLocalizedText = (text: string | Record<Language, string> | undefined): string => {
    if (!text) return '';
    if (typeof text === 'string') {
      return text;
    }
    return t(text);
  };

  const defaultTitle = {
    he: "השירותים שלנו",
    en: "Core Offering"
  };
  
  const defaultSubtitle = {
    he: "אנו מציעים מגוון פתרונות בתחום הנדל\"ן המשרדי וההשקעות הבינלאומיות",
    en: "We offer a variety of solutions in the field of office real estate and international investments"
  };
  
  const titleText = getLocalizedText(title) || t(defaultTitle);
  const subtitleText = getLocalizedText(subtitle) || t(defaultSubtitle);

  return (
    <section className="relative py-20 px-12 overflow-hidden">
      {/* Floating glassmorphic background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[600px] h-[240px] bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-3xl opacity-40 animate-float-slow" />
      </div>
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-4xl md:text-5xl font-extrabold tracking-tight text-primary drop-shadow-xl animate-fade-in">
            {titleText}
          </h2>
          <p className="text-lg text-gray-600 dark:text-textSecondary max-w-3xl mx-auto animate-fade-in delay-100">
            {subtitleText}
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-stretch gap-12 md:gap-6 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative p-8 text-center z-10 rounded-3xl border-2 border-yellow-200 shadow-xl bg-white/10 dark:bg-backgroundDark/10 backdrop-blur-md max-w-xs w-full mx-auto lg:max-w-none"
              initial={{ 
                opacity: 0, 
                y: 50,
                x: 0
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                x: 0
              }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex flex-col items-center mb-6 animate-scale-in">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-yellow-100/40 shadow-lg mb-2 group-hover:scale-110 group-hover:shadow-gold-400 transition-all duration-300">
                  {service?.svg?.endsWith('.webm') ? (
                    <video 
                      width={64}
                      height={64}
                      src={service.svg}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-16 h-16"
                    />
                  ) : service?.svg ? (
                    <Image 
                      width={64}
                      height={64}
                      src={service.svg} 
                      alt={typeof service.title === 'string' ? service.title : ''} 
                      className="w-16 h-16"
                      unoptimized={service.svg?.endsWith('.gif')}
                    />
                  ) : service?.icon}
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-3 text-primary drop-shadow-xl animate-fade-in delay-100 text-center tracking-tight leading-tight">
                {getLocalizedText(service.title)}
              </h3>
              <p className="text-base md:text-lg text-gray-700 dark:text-textSecondary mb-0 animate-fade-in delay-200 text-center font-medium tracking-wide">
                {getLocalizedText(service.description)}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <style jsx>{`
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(32px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-up {
            animation: slide-up 1.1s cubic-bezier(0.23, 1, 0.32, 1) both;
          }
        `}</style>
      </div>
    </section>
  );
} 