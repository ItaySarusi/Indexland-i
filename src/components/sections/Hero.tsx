'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useLanguage, Language } from '@/lib/language-context';

interface HeroProps {
  title: string | Record<Language, string>;
  subtitle: string | Record<Language, string>;
  primaryActionLabel?: string | Record<Language, string>;
  primaryActionHref?: string;
  secondaryActionLabel?: string | Record<Language, string>;
  secondaryActionHref?: string;
  imageUrl?: string;
  variant?: 'default' | 'centered' | 'image-right';
}

export default function Hero({
  title,
  subtitle,
  primaryActionLabel,
  primaryActionHref,
  secondaryActionLabel,
  secondaryActionHref,
  imageUrl,
  variant = 'default'
}: HeroProps) {
  const { language, t } = useLanguage();
  
  // קבלת הטקסט בשפה הנכונה
  const getLocalizedText = (text: string | Record<Language, string>): string => {
    if (typeof text === 'string') {
      return text;
    }
    return t(text);
  };
  
  const titleText = getLocalizedText(title);
  const subtitleText = getLocalizedText(subtitle);
  const primaryLabel = primaryActionLabel ? getLocalizedText(primaryActionLabel) : '';
  const secondaryLabel = secondaryActionLabel ? getLocalizedText(secondaryActionLabel) : '';

  const renderContent = () => (
    <div className="max-w-xl">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
        {titleText}
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-700 lg:text-xl">
        {subtitleText}
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
        {primaryActionLabel && primaryActionHref && (
          <Button href={primaryActionHref} size="lg">
            {primaryLabel}
          </Button>
        )}
        {secondaryActionLabel && secondaryActionHref && (
          <Button href={secondaryActionHref} variant="outline" size="lg">
            {secondaryLabel}
          </Button>
        )}
      </div>
    </div>
  );

  if (variant === 'centered') {
    return (
      <section className="relative bg-white/0 py-20 md:py-32 overflow-hidden">
        {/* Parallax/floating glassmorphic background */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-br from-primary/30 to-secondary/20 rounded-full blur-3xl opacity-60 animate-float-slow" />
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-secondary/30 to-primary/10 rounded-full blur-2xl opacity-40 animate-float-medium" />
          <div className="absolute bottom-0 left-1/3 w-96 h-40 bg-white/20 dark:bg-backgroundDark/30 backdrop-blur-xl rounded-3xl shadow-glass border border-white/20 dark:border-white/10 opacity-60 animate-float-fast" />
        </div>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-20 z-10 relative">
          <div className="mx-auto max-w-3xl glass-card animate-fade-in shadow-2xl rounded-3xl p-10 md:p-16 border border-white/30 dark:border-white/10 backdrop-blur-2xl relative overflow-hidden">
            {/* Glass reflection overlay */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/40 to-transparent opacity-30 rounded-t-3xl pointer-events-none" />
            <h1 className="mb-6 text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-primary drop-shadow-xl animate-scale-in" style={{letterSpacing: '-0.02em'}}>
              {titleText}
            </h1>
            <p className="mb-10 text-xl font-light text-gray-700 dark:text-textSecondary animate-fade-in delay-100 sm:px-16 lg:px-32">
              {subtitleText}
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
              {primaryActionLabel && primaryActionHref && (
                <Button href={primaryActionHref} size="lg" className="glass-btn animate-scale-in hover:scale-105 hover:shadow-glass transition-all duration-300 font-semibold text-lg px-8 py-3">
                  {primaryLabel}
                </Button>
              )}
              {secondaryActionLabel && secondaryActionHref && (
                <Button href={secondaryActionHref} variant="outline" size="lg" className="glass-btn animate-scale-in hover:scale-105 hover:shadow-glass transition-all duration-300 font-semibold text-lg px-8 py-3">
                  {secondaryLabel}
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-gradient-to-t from-white/60 to-transparent rounded-b-3xl blur-lg opacity-60 pointer-events-none" />
      </section>
    );
  }

  if (variant === 'image-right') {
    return (
      <section className="bg-white">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            {renderContent()}
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            {imageUrl && (
              <Image 
                src={imageUrl} 
                alt={typeof title === 'string' ? title : title[language]} 
                className="rounded-lg shadow-xl object-cover"
                width={500}
                height={350}
                priority
              />
            )}
          </div>
        </div>
      </section>
    );
  }

  // Default variant
  return (
    <section className="bg-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          {renderContent()}
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          {imageUrl && (
            <Image 
              src={imageUrl} 
              alt={typeof title === 'string' ? title : title[language]} 
              className="rounded-lg shadow-xl object-cover"
              width={500}
              height={350}
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
} 