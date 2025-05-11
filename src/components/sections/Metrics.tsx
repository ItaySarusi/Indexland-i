'use client';

import React from 'react';
import { useLanguage, Language } from '@/lib/language-context';

interface Metric {
  value: string;
  label: string | Record<Language, string>;
  description?: string | Record<Language, string>;
}

interface MetricsProps {
  title?: string | Record<Language, string>;
  subtitle?: string | Record<Language, string>;
  metrics: Metric[];
  bgColor?: 'white' | 'gray';
}

export default function Metrics({
  title,
  subtitle,
  metrics = [],
  bgColor = 'gray'
}: MetricsProps) {
  const { t } = useLanguage();
  
  // Function to get localized text
  const getLocalizedText = (text: string | Record<Language, string> | undefined): string => {
    if (!text) return '';
    if (typeof text === 'string') {
      return text;
    }
    return t(text);
  };
  
  const defaultTitle = {
    he: "במספרים",
    en: "In Numbers"
  };
  
  const defaultSubtitle = {
    he: "מספרים שמדברים בעד עצמם",
    en: "Numbers that speak for themselves"
  };
  
  const titleText = getLocalizedText(title) || t(defaultTitle);
  const subtitleText = getLocalizedText(subtitle) || t(defaultSubtitle);

  return (
    <section className={`relative py-12 ${bgColor === 'gray' ? 'bg-gray-50' : bgColor === 'white' ? 'bg-white' : 'bg-backgroundLight dark:bg-backgroundDark'} transition-colors duration-200 overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 pointer-events-none" />
      <div className="container">
        {(titleText || subtitleText) && (
          <div className="text-center mb-12">
            {titleText && <h2 className="mb-4">{titleText}</h2>}
            {subtitleText && (
              <p className="text-lg text-gray-600 dark:text-textSecondary max-w-3xl mx-auto">
                {subtitleText}
              </p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl shadow-xl text-center animate-fade-in transition-all duration-300 hover:scale-105 hover:shadow-glass relative overflow-hidden">
              <div className="text-4xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <div className="text-xl font-semibold mb-2">{getLocalizedText(metric.label)}</div>
              {metric.description && (
                <p className="text-gray-600 dark:text-textSecondary">{getLocalizedText(metric.description)}</p>
              )}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/30 to-transparent opacity-30 rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 