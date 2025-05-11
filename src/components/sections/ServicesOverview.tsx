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
    <section className="relative py-12 bg-gray-50 dark:bg-backgroundDark dark:bg-opacity-70 transition-colors duration-200 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 pointer-events-none" />
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">{titleText}</h2>
          <p className="text-lg text-gray-600 dark:text-textSecondary max-w-3xl mx-auto">
            {subtitleText}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl shadow-xl transition-all duration-300 animate-fade-in hover:scale-105 hover:shadow-glass group relative overflow-hidden">
              <div className="text-primary mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{getLocalizedText(service.title)}</h3>
              <p className="text-gray-600 dark:text-textSecondary mb-4">{getLocalizedText(service.description)}</p>
              {service.image && (
                <div className="mb-4 rounded-lg overflow-hidden">
                  <Image 
                    src={service.image}
                    alt={getLocalizedText(service.title)}
                    width={350}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/30 to-transparent opacity-40 rounded-2xl" />
              <Link href={service.href} className="text-primary hover:opacity-90 font-medium inline-flex items-center">
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