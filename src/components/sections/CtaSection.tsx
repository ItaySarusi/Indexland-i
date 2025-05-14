'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { useLanguage, Language } from '@/lib/language-context';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaRegComments, FaHandshake } from 'react-icons/fa';

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
    // Animated floating icons config
    const floatingIcons = [
      { icon: <FaEnvelope />, style: 'top-8 left-12', delay: 0 },
      { icon: <FaPhoneAlt />, style: 'bottom-10 right-16', delay: 0.3 },
      { icon: <FaRegComments />, style: 'top-20 right-24', delay: 0.6 },
      { icon: <FaHandshake />, style: 'bottom-8 left-24', delay: 0.9 },
    ];
    // Detect direction for animation
    const { dir } = useLanguage();
    return (
      <section className={`relative py-16 ${getBgClass()} transition-colors duration-200 overflow-hidden`}> 
        {/* Animated floating white icons in background */}
        <div className="pointer-events-none absolute inset-0 z-0">
          {floatingIcons.map((item, i) => (
            <motion.div
              key={i}
              className={`absolute text-white/30 opacity-70 text-6xl md:text-7xl lg:text-8xl drop-shadow-xl ${item.style}`}
              initial={{ opacity: 0, scale: 0.7, rotate: 0 }}
              animate={{ opacity: 0.7, scale: 1.1, rotate: 360 }}
              transition={{ duration: 7, repeat: Infinity, repeatType: 'reverse', delay: item.delay, ease: 'linear' }}
              aria-hidden="true"
            >
              {item.icon}
            </motion.div>
          ))}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-gradient-to-br from-primary/30 to-secondary/20 rounded-full blur-3xl opacity-40 animate-float-slow" />
        </div>
        <div className="container">
          <motion.div
            className="glass-card rounded-3xl bg-gradient-to-r from-primary/90 to-secondary/90 p-12 md:p-16 shadow-2xl relative overflow-hidden border-2 border-white/30 dark:border-white/10 backdrop-blur-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            aria-label="Call to Action Section"
          >
            {/* Animated gradient border/glow */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none border-4 border-gradient-to-r from-primary/40 to-secondary/40 animate-glow" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-gradient-to-t from-white/60 to-transparent rounded-b-3xl blur-lg opacity-60 pointer-events-none" />
            <div className="md:flex md:items-center md:justify-between">
              <motion.div
                className="mb-6 md:mb-0 md:w-2/3"
                initial={{ opacity: 0, x: dir === 'rtl' ? 80 : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              >
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-xl animate-scale-in">
                  {titleText}
                </h2>
                {subtitleText && (
                  <p className="text-lg text-white/80 mb-0 animate-fade-in delay-100">
                    {subtitleText}
                  </p>
                )}
              </motion.div>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              >
                <Button
                  href={primaryButtonHref}
                  variant="outline"
                  size="lg"
                  className="relative glass-btn text-white border-white hover:bg-white hover:text-primary animate-scale-in hover:scale-105 hover:shadow-glass transition-all duration-300 font-semibold text-lg px-8 py-3 overflow-hidden group"
                  aria-label={primaryBtnText}
                >
                  <span className="flex items-center gap-2">
                    <FaRegComments className="text-xl text-white/90 group-hover:text-primary transition-colors duration-200" />
                    {primaryBtnText}
                  </span>
                  <span className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-white/40 group-hover:border-primary/60 transition-all duration-300 animate-neon-border" />
                </Button>
                {secondaryButtonText && secondaryButtonHref && (
                  <Button
                    href={secondaryButtonHref}
                    variant="ghost"
                    size="lg"
                    className="relative glass-btn text-white hover:bg-white/10 animate-scale-in hover:scale-105 hover:shadow-glass transition-all duration-300 font-semibold text-lg px-8 py-3 overflow-hidden group"
                    aria-label={secondaryBtnText}
                  >
                    <span className="flex items-center gap-2">
                      <FaHandshake className="text-xl text-white/90 group-hover:text-primary transition-colors duration-200" />
                      {secondaryBtnText}
                    </span>
                    <span className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-white/40 group-hover:border-primary/60 transition-all duration-300 animate-neon-border" />
                  </Button>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
        <style jsx>{`
          @keyframes neon-border {
            0% { box-shadow: 0 0 8px 2px #fff, 0 0 16px 4px #fff; }
            50% { box-shadow: 0 0 24px 8px #fff, 0 0 48px 16px #fff; }
            100% { box-shadow: 0 0 8px 2px #fff, 0 0 16px 4px #fff; }
          }
          .animate-neon-border {
            animation: neon-border 1.6s linear infinite;
          }
        `}</style>
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