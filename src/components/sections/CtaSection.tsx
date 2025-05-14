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
      <section className="relative py-16 bg-gradient-to-br from-[#ffecd2]/80 via-[#ffb199]/70 to-[#ff512f]/60 transition-colors duration-200 overflow-hidden">
        {/* Animated floating white icons in background */}
        <div className="pointer-events-none absolute inset-0 z-0">
          {floatingIcons.map((item, i) => (
            <motion.div
              key={i}
              className={`absolute text-white/20 opacity-60 text-6xl md:text-7xl lg:text-8xl drop-shadow-xl ${item.style}`}
              initial={{ opacity: 0, scale: 0.7, rotate: 0 }}
              animate={{ opacity: 0.6, scale: 1.1, rotate: 360 }}
              transition={{ duration: 7, repeat: Infinity, repeatType: 'reverse', delay: item.delay, ease: 'linear' }}
              aria-hidden="true"
            >
              {item.icon}
            </motion.div>
          ))}
        </div>
        <div className="container flex justify-center items-center">
          <motion.div
            className="relative w-full max-w-5xl mx-auto glass-card rounded-3xl p-12 md:p-16 shadow-2xl border border-white/30 backdrop-blur-2xl overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between"
            style={{ background: 'linear-gradient(120deg,rgba(255,255,255,0.25) 0%,rgba(255,255,255,0.10) 100%)', boxShadow: '0 8px 48px 0 rgba(255, 152, 0, 0.10), 0 1.5px 12px 0 rgba(255,255,255,0.10)' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            aria-label="Call to Action Section"
          >
            {/* Glass reflection overlay */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{background:'linear-gradient(120deg,rgba(255,255,255,0.18) 0%,rgba(255,255,255,0.08) 100%)'}} />
            {/* Glow border */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none border-4 border-white/30 animate-glow" style={{boxShadow:'0 0 32px 0 #fff7, 0 1.5px 12px 0 #fff3'}} />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-gradient-to-t from-white/60 to-transparent rounded-b-3xl blur-lg opacity-60 pointer-events-none" />
            <motion.div
              className="flex-1 mb-8 md:mb-0 md:mr-8"
              initial={{ opacity: 0, x: dir === 'rtl' ? 80 : -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-xl animate-scale-in tracking-tight">
                {titleText}
              </h2>
              {subtitleText && (
                <p className="text-lg text-white/80 mb-0 animate-fade-in delay-100">
                  {subtitleText}
                </p>
              )}
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 md:gap-4 flex-shrink-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            >
              <button
                className="luxury-cta-btn group"
                aria-label={primaryBtnText}
                tabIndex={0}
                type="button"
              >
                <span className="flex items-center gap-2 text-primary font-bold text-lg">
                  <FaRegComments className="text-xl text-primary group-hover:text-primary transition-colors duration-200" />
                  {primaryBtnText}
                </span>
              </button>
              {secondaryButtonText && secondaryButtonHref && (
                <button
                  className="luxury-cta-btn group"
                  aria-label={secondaryBtnText}
                  tabIndex={0}
                  type="button"
                >
                  <span className="flex items-center gap-2 text-primary font-bold text-lg">
                    <FaHandshake className="text-xl text-primary group-hover:text-primary transition-colors duration-200" />
                    {secondaryBtnText}
                  </span>
                </button>
              )}
            </motion.div>
            <style jsx>{`
              .luxury-cta-btn {
                background: rgba(255,255,255,0.18);
                border: 2px solid #fff;
                border-radius: 1.5rem;
                box-shadow: 0 2px 24px 0 #fff6, 0 1.5px 12px 0 #fff3;
                padding: 1.25rem 2.5rem;
                min-width: 220px;
                min-height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: box-shadow 0.25s, background 0.25s, transform 0.18s;
                font-weight: 700;
                font-size: 1.18rem;
                outline: none;
                position: relative;
                overflow: hidden;
              }
              .luxury-cta-btn:hover, .luxury-cta-btn:focus, .luxury-cta-btn:active {
                background: rgba(255,255,255,0.32);
                box-shadow: 0 0 32px 6px #fff, 0 2px 24px 0 #ff9800cc;
                transform: scale(1.045);
                border-color: #fff;
                z-index: 2;
              }
              .luxury-cta-btn:after {
                content: '';
                position: absolute;
                inset: 0;
                border-radius: 1.5rem;
                pointer-events: none;
                box-shadow: 0 0 0 0 #ff9800;
                transition: box-shadow 0.25s;
              }
              .luxury-cta-btn:hover:after, .luxury-cta-btn:focus:after, .luxury-cta-btn:active:after {
                box-shadow: 0 0 24px 6px #ff9800cc;
              }
            `}</style>
          </motion.div>
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