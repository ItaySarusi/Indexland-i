'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useLanguage, Language } from '@/lib/language-context';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface HeroProps {
  title: string | Record<Language, string>;
  subtitle: string | Record<Language, string>;
  primaryActionLabel?: string | Record<Language, string>;
  primaryActionHref?: string;
  secondaryActionLabel?: string | Record<Language, string>;
  secondaryActionHref?: string;
  imageUrl?: string;
  variant?: 'default' | 'centered' | 'image-right' | 'background-image';
  className?: string;
  enableTyping?: boolean;
}

export default function Hero({
  title,
  subtitle,
  primaryActionLabel,
  primaryActionHref,
  secondaryActionLabel,
  secondaryActionHref,
  imageUrl,
  variant = 'default',
  className,
  enableTyping = true,
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

  // Typing animation state (moved to top level to avoid conditional hooks)
  const headline = titleText.split(':')[0];
  const subheadline = titleText.split(':')[1]?.trim() || '';
  const [typed, setTyped] = useState('');
  
  useEffect(() => {
    if (variant !== 'background-image' || !enableTyping) {
      setTyped(headline);
      return;
    }
    
    let i = 0;
    setTyped('');
    const interval = setInterval(() => {
      setTyped(headline.slice(0, i + 1));
      i++;
      if (i === headline.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [headline, enableTyping, variant]);

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

  // וריאנט חדש עם התמונה כרקע מלא
  if (variant === 'background-image') {
    
    return (
      <section className="relative overflow-hidden min-h-screen flex items-center -mt-20" style={{ minHeight: '100vh', paddingTop: '5rem' }}>
        {imageUrl && (
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src={imageUrl} 
              alt={typeof title === 'string' ? title : title[language]} 
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="brightness-[0.8]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
          </div>
        )}
        <div className="container mx-auto h-full flex justify-center items-center relative z-10">
          <div className="max-w-2xl w-full bg-black/20 backdrop-blur-sm py-6 px-8 rounded-lg border border-white/10 flex flex-col items-center text-center min-h-fit">
            <h1 className="mb-1 text-5xl font-extrabold tracking-tight leading-none md:text-6xl lg:text-7xl text-white drop-shadow-lg" style={{letterSpacing: '-0.02em'}}>
              <span className="block whitespace-pre-line pb-[1.5rem]">
                <span className="block">
                  {typed}
                  {enableTyping && <span className="inline-block animate-pulse">|</span>}
                </span>
                <motion.span
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: enableTyping ? (typed.length === headline.length ? 1 : 0) : 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="block text-white/90 text-2xl md:text-3xl mt-2 font-bold"
                >
                  {subheadline}
                </motion.span>
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: enableTyping ? (typed.length === headline.length ? 1 : 0) : 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-0 mb-2 text-lg font-normal text-white/90 lg:text-xl drop-shadow-md"
            >
              {subtitleText}
            </motion.p>
            <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-4 mt-1">
              {primaryActionLabel && primaryActionHref && (
                <Button
                  href={primaryActionHref}
                  size="lg"
                  className="shine-btn bg-orange-500 text-white hover:bg-orange-600 border-none font-semibold px-8 py-3 shadow-lg transition-all duration-300"
                >
                  {primaryLabel}
                </Button>
              )}
              {secondaryActionLabel && secondaryActionHref && (
                <Button
                  href={secondaryActionHref}
                  variant="outline"
                  size="lg"
                  className="shine-btn bg-white border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold px-8 py-3 shadow-lg transition-all duration-300"
                >
                  {secondaryLabel}
                </Button>
              )}
            </div>
          </div>
        </div>
        <style jsx>{`
          .shine-btn {
            position: relative;
            overflow: hidden;
          }
          .shine-btn::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -30%;
            width: 60%;
            height: 200%;
            background: linear-gradient(120deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.15) 100%);
            transform: skewX(-20deg);
            transition: opacity 0.3s;
            opacity: 0.7;
            pointer-events: none;
            animation: shine-move 2.2s linear infinite;
          }
          @keyframes shine-move {
            0% { left: -60%; }
            100% { left: 120%; }
          }
        `}</style>
      </section>
    );
  }

  if (variant === 'centered') {
    return (
      <section className="relative bg-white/0 py-20 md:py-32 overflow-hidden">
        {/* Parallax/floating glassmorphic background */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-br from-primary/30 to-secondary/20 rounded-full blur-3xl opacity-60 animate-float-slow" />
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-secondary/30 to-primary/10 rounded-full blur-2xl opacity-40 animate-float-medium" />
          <div className="absolute bottom-0 left-1/3 w-96 h-40 bg-white/20 dark:bg-backgroundDark/30 backdrop-blur-xl rounded-3xl shadow-glass border border-white/20 dark:border-white/10 opacity-60 animate-float-fast" />
        </div>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-20 z-1 relative">
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
      <section className="relative bg-white overflow-hidden">
        {/* Floating glassmorphic background */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[600px] h-[240px] bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-3xl opacity-40 animate-float-slow" />
        </div>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 relative z-1">
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
    <section className={`relative bg-white overflow-hidden ${className}`}>
      {/* Floating glassmorphic background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[600px] h-[240px] bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-3xl opacity-40 animate-float-slow" />
      </div>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 relative z-1">
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