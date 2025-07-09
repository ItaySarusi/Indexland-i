'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, Language } from '@/lib/language-context';
import { motion } from 'framer-motion';
import PageContainer from '@/components/layout/PageContainer';
import { cn } from '@/lib/utils';
import { PAGES } from '@/constants/site';
// Import Lucide icons
import { BriefcaseBusiness, AreaChart, Globe, MapPin } from 'lucide-react';

// הגדרת סוג השירות
interface ServiceItem {
  title: Record<Language, string>;
  description: Record<Language, string>;
  icon: React.ReactNode;
  subServices: Record<Language, string>[];
  accentColor?: string; // Optional accent color for visual distinction
  svg?: string; // Optional SVG path for visual distinction
}

// הגדרת הפרופס לקומפוננטה
interface ServicesAtAGlanceProps {
  title?: Record<Language, string>;
  subtitle?: Record<Language, string>;
  services?: ServiceItem[];
}

export default function ServicesAtAGlance({
  title,
  subtitle,
  services
}: ServicesAtAGlanceProps) {
  const { t, dir, language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [userSelected, setUserSelected] = useState<boolean>(false);
  const sectionRef = useRef(null);

  // Helper function to get localized text
  const getLocalizedText = (text: string | Record<Language, string> | undefined): string => {
    if (!text) return '';
    if (typeof text === 'string') {
      return text;
    }
    return t(text);
  };

  // שירותים ברירת מחדל עם צבעי הדגשה אפשריים
  const defaultServices: ServiceItem[] = [
    {
      title: PAGES.HOME.servicesAtAGlance.services[0].title,
      description: PAGES.HOME.servicesAtAGlance.services[0].description,
      icon: <BriefcaseBusiness />,
      svg: "/files/svg/Building-permit-amico.svg",
      subServices: PAGES.HOME.servicesAtAGlance.services[0].subServices,
      accentColor: "text-orange-500"
    },
    {
      title: PAGES.HOME.servicesAtAGlance.services[1].title,
      description: PAGES.HOME.servicesAtAGlance.services[1].description,
      icon: <AreaChart />,
      svg: "/files/svg/Building-permit-amico.svg",
      subServices: PAGES.HOME.servicesAtAGlance.services[1].subServices,
      accentColor: "text-blue-500"
    },
    {
      title: PAGES.HOME.servicesAtAGlance.services[2].title,
      description: PAGES.HOME.servicesAtAGlance.services[2].description,
      icon: <Globe />,
      subServices: PAGES.HOME.servicesAtAGlance.services[2].subServices,
      accentColor: "text-green-500"
    },
    {
      title: PAGES.HOME.servicesAtAGlance.services[3].title,
      description: PAGES.HOME.servicesAtAGlance.services[3].description,
      icon: <MapPin />,
      subServices: PAGES.HOME.servicesAtAGlance.services[3].subServices,
      accentColor: "text-purple-500"
    }
  ];



  // הגדרת תוכן סופי ע"י שימוש בברירות מחדל במידת הצורך
  const titleText = getLocalizedText(title) || t(PAGES.HOME.servicesAtAGlance.title);
  const subtitleText = getLocalizedText(subtitle) || t(PAGES.HOME.servicesAtAGlance.subtitle);
  const serviceItems = services || defaultServices;

  // Auto-rotate logic
  useEffect(() => {
    if (userSelected) return; // Pause auto-rotation if user selected
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % serviceItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [userSelected, serviceItems.length]);

  // When user clicks a card, set as selected and pause auto-rotation
  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    setUserSelected(true);
  };

  // If user clicks another card, resume auto-rotation from there
  useEffect(() => {
    if (!userSelected) return;
    // Resume auto-rotation after 30 seconds of inactivity
    const timeout = setTimeout(() => setUserSelected(false), 30000);
    return () => clearTimeout(timeout);
  }, [userSelected]);

  return (
    <PageContainer>
      <motion.section
        ref={sectionRef}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="px-4 py-16 md:py-24 bg-gray-50 dark:bg-backgroundDark transition-colors duration-200"
        dir={dir}
      >
        <div className="container mx-auto px-4">
          {/* כותרת וסאבטייטל */} 
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary dark:text-primary mb-4">
              {titleText}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {subtitleText}
            </p>
          </motion.div>

          {/* Simple Navigation Dots */}
          <div className="flex justify-center mb-12">
            <div className="flex gap-3">
              {serviceItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    activeIndex === index
                      ? "bg-primary scale-125"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  )}
                  aria-label={`${language === 'he' ? 'עבור לשירות' : 'Go to service'} ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Service Cards Grid - Simple Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {serviceItems.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                onClick={() => handleCardClick(index)}
                className={cn(
                  "relative p-6 rounded-2xl border-2 shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-backgroundDark/80 backdrop-blur-sm",
                  activeIndex === index
                    ? "border-primary bg-primary/5 shadow-xl"
                    : "border-gray-200 dark:border-gray-700 hover:border-primary/50"
                )}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg mb-4 text-2xl">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {t(service.title)}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t(service.description)}
                  </p>
                </div>
                {activeIndex === index && (
                  <div className="absolute inset-0 rounded-2xl border-2 border-primary shadow-lg pointer-events-none" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Active Service Details */}
          <div className="flex justify-center">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full max-w-2xl p-8 rounded-3xl shadow-xl border border-primary/20 bg-white/70 dark:bg-backgroundDark/80 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg text-4xl">
                  {serviceItems[activeIndex].icon}
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                {t(serviceItems[activeIndex].title)}
              </h3>
              <div className="h-1 w-16 rounded-full mb-6 mx-auto bg-gradient-to-r from-primary to-secondary" />
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-6 font-medium">
                {t(serviceItems[activeIndex].description)}
              </p>
              <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider">
                {language === 'he' ? "כולל בין היתר:" : "Including Services Like:"}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-md mx-auto">
                {serviceItems[activeIndex].subServices.map((sub, subIndex) => (
                  <div
                    key={subIndex}
                    className="flex items-center gap-2 justify-center py-1"
                  >
                    <span className="text-primary text-lg">»</span>
                    <span className="text-base text-gray-700 dark:text-gray-200">{t(sub)}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <style jsx>{`
        @keyframes neon-border {
          0% { box-shadow: 0 0 8px 2px #ff9800, 0 0 16px 4px #ff9800; }
          50% { box-shadow: 0 0 24px 8px #ff9800, 0 0 48px 16px #ff9800; }
          100% { box-shadow: 0 0 8px 2px #ff9800, 0 0 16px 4px #ff9800; }
        }
        .animate-neon-border {
          animation: neon-border 1.6s linear infinite;
        }
      `}</style>
    </PageContainer>
  );
} 