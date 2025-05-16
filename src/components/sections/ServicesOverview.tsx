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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glass-card glass-inner-shadow p-12 rounded-[2.5rem] flex flex-col items-center text-center transition-all duration-300 group relative overflow-hidden shadow-2xl border-2 border-white/30 hover:scale-105 hover:shadow-2xl hover:border-primary/60 hover:bg-gradient-to-br hover:from-white/60 hover:to-primary/10 dark:hover:from-backgroundDark/60 dark:hover:to-secondary/10"
              initial={{ opacity: 0, x: language === 'he' ? 80 : -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.15 + index * 0.13, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Glass reflection overlay + glow border */}
              <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/60 to-transparent opacity-50 rounded-t-[2.5rem] pointer-events-none animate-glass-reflection" />
              <div className="absolute inset-0 rounded-[2.5rem] border-4 border-white/20 group-hover:border-primary/40 pointer-events-none" style={{boxShadow:'0 0 32px 0 rgba(255,180,80,0.10), 0 1.5px 12px 0 rgba(255,255,255,0.10)'}} />
              <div className="flex justify-center items-center mb-6 animate-scale-in">
                {service?.svg ? (
                    <Image 
                      width={104}
                      height={104}
                      src={service.svg} 
                      alt={typeof service.title === 'string' ? service.title : ''} 
                      className="w-28 h-28"
                    />
                  ) : service?.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-3 text-primary drop-shadow-xl animate-fade-in delay-100 text-center tracking-tight leading-tight">
                {getLocalizedText(service.title)}
              </h3>
              <p className="text-base md:text-lg text-gray-700 dark:text-textSecondary mb-0 animate-fade-in delay-200 text-center font-medium tracking-wide">
                {getLocalizedText(service.description)}
              </p>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/30 to-transparent opacity-40 rounded-[2.5rem]" />
            </motion.div>
          ))}
        </div>
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