'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { useLanguage, Language } from '@/lib/language-context';

interface CtaSectionProps {
  title: string | Record<Language, string>;
  subtitle?: string | Record<Language, string>;
  primaryButtonText: string | Record<Language, string>;
  primaryButtonHref: string;
  secondaryButtonText?: string | Record<Language, string>;
  secondaryButtonHref?: string;
  variant?: 'default' | 'centered' | 'highlight';
  bgColor?: 'white' | 'light' | 'primary';
}

export default function CtaSection({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  variant = 'default',
  bgColor = 'gray'
}: CtaSectionProps) {
  const { t } = useLanguage();
  
  // קבלת הטקסט בשפה הנכונה
  const getLocalizedText = (text: string | Record<Language, string> | undefined): string => {
    if (!text) return '';
    if (typeof text === 'string') {
      return text;
    }
    return t(text);
  };
  
  const titleText = getLocalizedText(title);
  const subtitleText = getLocalizedText(subtitle);
  const primaryBtnText = getLocalizedText(primaryButtonText);
  const secondaryBtnText = secondaryButtonText ? getLocalizedText(secondaryButtonText) : '';
  
  const getBgClass = () => {
    switch (bgColor) {
      case 'light':
        return 'bg-backgroundLight dark:bg-backgroundDark';
      case 'primary':
        return 'bg-primary text-white';
      default:
        return 'bg-white dark:bg-backgroundDark dark:bg-opacity-90';
    }
  };

  if (variant === 'centered') {
    return (
      <section className={`py-12 ${getBgClass()} transition-colors duration-200`}>
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${bgColor === 'primary' ? 'text-white' : ''}`}>
              {titleText}
            </h2>
            {subtitleText && (
              <p className={`text-lg mb-8 ${bgColor === 'primary' ? 'text-white/80' : 'text-gray-600 dark:text-textSecondary'}`}>
                {subtitleText}
              </p>
            )}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                href={primaryButtonHref}
                variant={bgColor === 'primary' ? 'outline' : 'primary'}
                size="lg"
              >
                {primaryBtnText}
              </Button>
              {secondaryButtonText && secondaryButtonHref && (
                <Button 
                  href={secondaryButtonHref}
                  variant={bgColor === 'primary' ? 'ghost' : 'outline'}
                  size="lg"
                >
                  {secondaryBtnText}
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  if (variant === 'highlight') {
    return (
      <section className={`relative py-16 ${getBgClass()} transition-colors duration-200 overflow-hidden`}>
        {/* Glassmorphic, animated, layered background for CTA */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-gradient-to-br from-primary/30 to-secondary/20 rounded-full blur-3xl opacity-40 animate-float-slow" />
        </div>
        <div className="container">
          <div className="glass-card rounded-3xl bg-gradient-to-r from-primary/80 to-secondary/80 p-12 md:p-16 shadow-2xl animate-fade-in relative overflow-hidden border-2 border-white/30 dark:border-white/10 backdrop-blur-2xl">
            {/* Animated gradient border/glow */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none border-4 border-gradient-to-r from-primary/40 to-secondary/40 animate-glow" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-gradient-to-t from-white/60 to-transparent rounded-b-3xl blur-lg opacity-60 pointer-events-none" />
            <div className="md:flex md:items-center md:justify-between">
              <div className="mb-6 md:mb-0 md:w-2/3">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-xl animate-scale-in">
                  {titleText}
                </h2>
                {subtitleText && (
                  <p className="text-lg text-white/80 mb-0 animate-fade-in delay-100">
                    {subtitleText}
                  </p>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href={primaryButtonHref}
                  variant="outline"
                  size="lg"
                  className="glass-btn text-white border-white hover:bg-white hover:text-primary animate-scale-in hover:scale-105 hover:shadow-glass transition-all duration-300 font-semibold text-lg px-8 py-3"
                >
                  {primaryBtnText}
                </Button>
                {secondaryButtonText && secondaryButtonHref && (
                  <Button 
                    href={secondaryButtonHref}
                    variant="ghost"
                    size="lg"
                    className="glass-btn text-white hover:bg-white/10 animate-scale-in hover:scale-105 hover:shadow-glass transition-all duration-300 font-semibold text-lg px-8 py-3"
                  >
                    {secondaryBtnText}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  // Default variant
  return (
    <section className={`py-12 ${getBgClass()} transition-colors duration-200`}>
      <div className="container">
        <div className="md:flex md:items-center md:justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${bgColor === 'primary' ? 'text-white' : ''}`}>
              {titleText}
            </h2>
            {subtitleText && (
              <p className={`text-lg ${bgColor === 'primary' ? 'text-white/80' : 'text-gray-600 dark:text-textSecondary'}`}>
                {subtitleText}
              </p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              href={primaryButtonHref}
              variant={bgColor === 'primary' ? 'outline' : 'primary'}
              size="lg"
            >
              {primaryBtnText}
            </Button>
            {secondaryButtonText && secondaryButtonHref && (
              <Button 
                href={secondaryButtonHref}
                variant={bgColor === 'primary' ? 'ghost' : 'outline'}
                size="lg"
              >
                {secondaryBtnText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 