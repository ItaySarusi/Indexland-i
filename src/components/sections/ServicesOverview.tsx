'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage, Language } from '@/lib/language-context';

interface Service {
  title: string | Record<Language, string>;
  description: string | Record<Language, string>;
  icon: React.ReactNode;
  href: string;
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
    en: "Our Services"
  };
  
  const defaultSubtitle = {
    he: "אנו מציעים מגוון פתרונות בתחום הנדל\"ן המשרדי וההשקעות הבינלאומיות",
    en: "We offer a variety of solutions in the field of office real estate and international investments"
  };
  
  const titleText = getLocalizedText(title) || t(defaultTitle);
  const subtitleText = getLocalizedText(subtitle) || t(defaultSubtitle);

  return (
    <section className="relative py-20 overflow-hidden">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-10 rounded-3xl shadow-glass-xl border-2 border-white/40 dark:border-white/10 backdrop-blur-2xl transition-all duration-300 animate-fade-in animate-scale-in hover:scale-105 hover:shadow-glass relative overflow-hidden group"
              style={{ animationDelay: `${0.1 + index * 0.12}s` }}
            >
              {/* Glass reflection overlay */}
              <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/50 to-transparent opacity-40 rounded-t-3xl pointer-events-none animate-glass-reflection" />
              <div className="text-primary mb-4 animate-scale-in">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-primary drop-shadow animate-fade-in delay-100">{getLocalizedText(service.title)}</h3>
              <p className="text-gray-600 dark:text-textSecondary mb-4 animate-fade-in delay-200">{getLocalizedText(service.description)}</p>
              {service.image && (
                <div className="mb-4 rounded-xl overflow-hidden animate-fade-in delay-300">
                  <Image 
                    src={service.image}
                    alt={getLocalizedText(service.title)}
                    width={350}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl shadow-lg"
                  />
                </div>
              )}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/30 to-transparent opacity-40 rounded-3xl" />
              <Link href={service.href} className="glass-btn inline-flex items-center justify-center px-6 py-2 mt-2 font-semibold text-primary bg-white/40 dark:bg-backgroundDark/30 border border-white/30 dark:border-white/10 rounded-xl shadow transition-all duration-300 hover:bg-white/60 hover:shadow-glass animate-fade-in delay-400 backdrop-blur-md">
                {t({ he: "קרא עוד", en: "Read More" })}
                <svg className={`w-4 h-4 ${language === 'he' ? 'mr-2 rtl:rotate-180' : 'ml-2'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 