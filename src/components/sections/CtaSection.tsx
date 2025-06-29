'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { useLanguage, Language } from '@/lib/language-context';
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
  bgColor = 'primary'
}: CtaSectionProps) {
  const { t, language } = useLanguage();
  
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
      <section className="py-8 sm:py-12 md:py-16 bg-[#fff9f6] transition-colors duration-200 flex justify-center items-center min-h-[340px]" dir={language === 'he' ? 'rtl' : 'ltr'}>
        <div className="container flex justify-center items-center px-2 sm:px-4">
          <div className="relative">
            <div className="cta-orange-card rounded-3xl shadow-2xl border-none p-4 sm:p-8 md:p-12 max-w-2xl w-full mx-auto flex flex-col items-center text-center overflow-visible">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-xl leading-tight break-words">{titleText}</h2>
              {subtitleText && (
                <p className="text-base sm:text-lg mb-8 text-white/90 drop-shadow leading-relaxed">{subtitleText}</p>
              )}
              <a
                href={primaryButtonHref}
                className="cta-animated-btn group font-extrabold text-lg sm:text-xl px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-xl bg-white text-primary border-2 border-white relative overflow-hidden transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/30"
              >
                <span className="relative z-10">{primaryBtnText}</span>
                <span className="shine-effect absolute inset-0 pointer-events-none" />
              </a>
              {/* Floating effect */}
              <div className="absolute -z-10 inset-0 rounded-3xl bg-[#f26a3d] blur-[2px] opacity-90 shadow-2xl" />
            </div>
          </div>
        </div>
        <style jsx>{`
          .cta-orange-card {
            background: #f26a3d;
            box-shadow: 0 8px 48px 0 #f26a3d88, 0 1.5px 12px 0 #fff3;
            border: none;
            position: relative;
          }
          .cta-animated-btn {
            box-shadow: 0 4px 32px 0 #fff8, 0 1.5px 12px 0 #ff980033;
            position: relative;
            overflow: hidden;
            transition: box-shadow 0.25s, background 0.25s, transform 0.18s, border-color 0.18s;
          }
          .cta-animated-btn:hover, .cta-animated-btn:focus {
            background: #fff7f2;
            box-shadow: 0 0 32px 8px #ff6a2b, 0 2px 24px 0 #ff9800cc;
            transform: scale(1.07);
            border-color: #ff9800;
            z-index: 2;
          }
          .shine-effect {
            content: '';
            display: block;
            background: linear-gradient(120deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.15) 100%);
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
  
  if (variant === 'highlight') {
    // Simplified floating icons config (removed motion animations)
    const floatingIcons = [
      { icon: <FaEnvelope />, style: 'top-8 left-12' },
      { icon: <FaPhoneAlt />, style: 'bottom-10 right-16' },
      { icon: <FaRegComments />, style: 'top-20 right-24' },
      { icon: <FaHandshake />, style: 'bottom-8 left-24' },
    ];
    
    return (
      <section className="relative py-20 bg-gradient-to-br from-[#ffb199] via-[#ff512f] to-[#ff512f]/90 transition-colors duration-200 overflow-hidden">
        {/* Static floating white icons in background */}
        <div className="pointer-events-none absolute inset-0 z-0">
          {floatingIcons.map((item, i) => (
            <div
              key={i}
              className={`absolute text-white/20 opacity-60 text-6xl md:text-7xl lg:text-8xl drop-shadow-xl ${item.style}`}
              aria-hidden="true"
            >
              {item.icon}
            </div>
          ))}
        </div>
        <div className="container flex justify-center items-center">
          <div
            className="relative w-full max-w-5xl mx-auto glass-card rounded-3xl p-12 md:p-16 shadow-2xl border border-white/40 backdrop-blur-2xl overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between"
            style={{ background: 'linear-gradient(120deg,rgba(255,255,255,0.38) 0%,rgba(255,255,255,0.18) 100%)', boxShadow: '0 8px 48px 0 rgba(255, 152, 0, 0.13), 0 1.5px 12px 0 rgba(255,255,255,0.13)' }}
            aria-label="Call to Action Section"
          >
            {/* Glass reflection overlay */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{background:'linear-gradient(120deg,rgba(255,255,255,0.22) 0%,rgba(255,255,255,0.10) 100%)'}} />
            {/* Glow border */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none border-4 border-white/40" style={{boxShadow:'0 0 32px 0 #fff7, 0 1.5px 12px 0 #fff3'}} />
            <div className="flex flex-col md:flex-row w-full md:items-center md:justify-between gap-8">
              <div className="flex-1 mb-8 md:mb-0 md:mr-8 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-xl tracking-tight leading-tight whitespace-pre-line">
                  {typeof titleText === 'string' ? titleText.replace(/ ([^ ]*)$/, '\n$1') : titleText}
                </h2>
                {subtitleText && (
                  <p className="text-lg text-white/80 mb-0 max-w-xl whitespace-pre-line">
                    {typeof subtitleText === 'string' ? subtitleText.replace(/ ([^ ]*)$/, '\n$1') : subtitleText}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-6 md:gap-6 flex-shrink-0 items-center md:items-end w-full max-w-xs">
                <a
                  href={primaryButtonHref}
                  className="luxury-cta-btn group"
                  aria-label={primaryBtnText}
                  tabIndex={0}
                >
                  <span className="flex items-center gap-2 text-primary font-bold text-lg">
                    <FaRegComments className="text-xl text-primary group-hover:text-primary transition-colors duration-200" />
                    {primaryBtnText}
                  </span>
                </a>
                {secondaryButtonText && secondaryButtonHref && (
                  <a
                    href={secondaryButtonHref}
                    className="luxury-cta-btn group"
                    aria-label={secondaryBtnText}
                    tabIndex={0}
                  >
                    <span className="flex items-center gap-2 text-primary font-bold text-lg">
                      <FaHandshake className="text-xl text-primary group-hover:text-primary transition-colors duration-200" />
                      {secondaryBtnText}
                    </span>
                  </a>
                )}
              </div>
            </div>
            <style jsx>{`
              .luxury-cta-btn {
                background: rgba(255,255,255,0.22);
                border: 2.5px solid #fff;
                border-radius: 1.5rem;
                box-shadow: 0 2px 24px 0 #fff6, 0 1.5px 12px 0 #fff3;
                padding: 1.25rem 2.5rem;
                min-width: 320px;
                min-height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: box-shadow 0.25s, background 0.25s, transform 0.18s, border-color 0.18s;
                font-weight: 700;
                font-size: 1.18rem;
                outline: none;
                position: relative;
                overflow: hidden;
              }
              .luxury-cta-btn:hover, .luxury-cta-btn:focus, .luxury-cta-btn:active {
                background: rgba(255,255,255,0.32);
                box-shadow: 0 0 32px 6px #fff, 0 2px 24px 0 #ff9800cc;
                transform: scale(1.055);
                border-color: #ff9800;
                z-index: 2;
              }
            `}</style>
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