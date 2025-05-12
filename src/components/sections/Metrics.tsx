'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage, Language } from '@/lib/language-context';
import { useInView } from 'react-intersection-observer';

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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
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
    <section ref={ref} className={`relative py-12 ${bgColor === 'gray' ? 'bg-gray-50' : bgColor === 'white' ? 'bg-white' : 'bg-backgroundLight dark:bg-backgroundDark'} transition-colors duration-200 overflow-hidden`}>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="glass-card glass-inner-shadow p-8 rounded-3xl text-center animate-fade-in transition-all duration-300 hover:scale-105 hover:shadow-glass relative overflow-hidden" style={{ animationDelay: `${0.1 + index * 0.12}s` }}>
              {/* Glass reflection overlay */}
              <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/40 to-transparent opacity-30 rounded-t-3xl pointer-events-none" />
              <div className="text-5xl font-extrabold text-primary mb-2 drop-shadow animate-scale-in">
                <CountUpAnimation value={metric.value} inView={inView} />
              </div>
              <div className="text-xl font-semibold mb-2 text-primary animate-fade-in delay-100">{getLocalizedText(metric.label)}</div>
              {metric.description && (
                <p className="text-gray-600 dark:text-textSecondary animate-fade-in delay-200">{getLocalizedText(metric.description)}</p>
              )}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/30 to-transparent opacity-30 rounded-3xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 

// קומפוננטת אנימציה למספרים
function CountUpAnimation({ value, inView }: { value: string; inView: boolean }) {
  const [displayValue, setDisplayValue] = useState("0");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    if (!inView) return;
    
    // נקה את הערך מכל תווים שאינם מספרים
    const numericPart = value.replace(/[^\d.]/g, '');
    const suffix = value.replace(numericPart, '');
    
    const targetValue = parseFloat(numericPart);
    let currentValue = 0;
    
    // חישוב הקפיצה בכל צעד כדי שהאנימציה תיקח בערך 2 שניות
    const steps = 50;
    const increment = targetValue / steps;
    
    // נקה טיימר קודם אם קיים
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // הפעל את האנימציה
    intervalRef.current = setInterval(() => {
      currentValue += increment;
      
      if (currentValue >= targetValue) {
        currentValue = targetValue;
        clearInterval(intervalRef.current as NodeJS.Timeout);
        intervalRef.current = null;
      }
      
      // עיגול המספר בהתאם לסוג הערך
      let formattedValue;
      if (Number.isInteger(targetValue)) {
        formattedValue = Math.floor(currentValue).toString();
      } else {
        // שמירה על אותו מספר ספרות אחרי הנקודה כמו בערך המקורי
        const decimalPlaces = (numericPart.split('.')[1] || '').length;
        formattedValue = currentValue.toFixed(decimalPlaces);
      }
      
      // הוספת הסיומת (אם קיימת)
      setDisplayValue(`${formattedValue}${suffix}`);
    }, 40); // כ-50 צעדים ב-2 שניות
    
    // ניקוי בעת פירוק הקומפוננטה
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [value, inView]);
  
  return <>{displayValue}</>;
}