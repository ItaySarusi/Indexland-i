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
    <section className={`py-12 ${bgColor === 'gray' ? 'bg-gray-50 dark:bg-backgroundDark dark:bg-opacity-70' : 'bg-white dark:bg-backgroundDark dark:bg-opacity-90'} transition-colors duration-200`}>
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
            <div key={index} className="bg-white dark:bg-backgroundDark dark:bg-opacity-90 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <div className="text-xl font-semibold mb-2">{getLocalizedText(metric.label)}</div>
              {metric.description && (
                <p className="text-gray-600 dark:text-textSecondary">{getLocalizedText(metric.description)}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 