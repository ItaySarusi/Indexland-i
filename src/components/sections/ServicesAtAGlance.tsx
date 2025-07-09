'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, Language } from '@/lib/language-context';
import { motion, AnimatePresence } from 'framer-motion';
import PageContainer from '@/components/layout/PageContainer';
import { cn } from '@/lib/utils';
import { PAGES } from '@/constants/site';
// Import Lucide icons
import { BriefcaseBusiness, AreaChart, Globe, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

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

  // Simple smooth animations - no complex transforms
  const contentVariants = {
    hidden: { 
      opacity: 0
    },
    visible: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  // Simplified button animations for mobile
  const buttonVariants = {
    enter: {
      opacity: 0,
      scale: 0.98
    },
    center: {
      opacity: 1,
      scale: 1
    },
    exit: {
      opacity: 0,
      scale: 0.98
    }
  };

  // When user clicks a card, set as selected and pause auto-rotation
  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    setUserSelected(true);
  };

  // Navigation functions for mobile carousel
  const handlePrevious = () => {
    const newIndex = activeIndex === 0 ? serviceItems.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
    setUserSelected(true);
  };

  const handleNext = () => {
    const newIndex = activeIndex === serviceItems.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
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

          {/* Mobile carousel and desktop tabs */}
          <div className="mb-10">
            {/* Mobile Carousel */}
            <div className="md:hidden relative flex items-center justify-center gap-4">
              {/* Left Arrow */}
              <button
                onClick={handlePrevious}
                className="w-12 h-12 rounded-full bg-white/80 dark:bg-backgroundDark/80 shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-backgroundDark transition-all duration-200 hover:scale-110 active:scale-95"
                aria-label="Previous service"
              >
                <ChevronLeft className={`w-6 h-6 text-primary ${language === 'he' ? 'transform scale-x-[-1]' : ''}`} />
              </button>

              {/* Current Button */}
              <div className="flex-1 max-w-xs relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.button
                    key={activeIndex}
                    variants={buttonVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.15,
                      ease: "easeInOut"
                    }}
                    onClick={() => handleCardClick(activeIndex)}
                    className="w-full px-5 md:px-8 h-14 md:h-16 rounded-2xl font-medium md:font-semibold text-base md:text-lg transition-all duration-300 ease-in-out flex items-center justify-center relative overflow-hidden backdrop-blur-xl border-2 border-transparent bg-white/60 dark:bg-backgroundDark/60 shadow-lg text-primary dark:text-primary"
                  >
                    <span className="relative z-20">{t(serviceItems[activeIndex].title)}</span>
                  </motion.button>
                </AnimatePresence>
              </div>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-white/80 dark:bg-backgroundDark/80 shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-backgroundDark transition-all duration-200 hover:scale-110 active:scale-95"
                aria-label="Next service"
              >
                <ChevronRight className={`w-6 h-6 text-primary ${language === 'he' ? 'transform scale-x-[-1]' : ''}`} />
              </button>
            </div>

            {/* Desktop Tabs */}
            <div className={cn(
              "hidden md:flex justify-center flex-wrap gap-4 md:gap-6",
              dir === 'rtl' && "md:flex-row-reverse"
            )}>
              {serviceItems.map((service, index) => (
                <button
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={cn(
                    "px-5 md:px-8 h-14 md:h-16 min-w-[180px] md:min-w-[220px] rounded-2xl font-medium md:font-semibold text-base md:text-lg transition-all duration-300 ease-in-out flex items-center justify-center relative overflow-hidden",
                    "backdrop-blur-xl border-2 border-transparent bg-white/60 dark:bg-backgroundDark/60 shadow-lg",
                    "hover:bg-gradient-to-br hover:from-white/80 hover:to-primary/10 dark:hover:from-backgroundDark/80 dark:hover:to-secondary/10",
                    activeIndex === index
                      ? "text-primary dark:text-primary border-primary/30"
                      : "text-gray-600 dark:text-gray-300 border-white/30"
                  )}
                >
                  <span className="relative z-20">{t(service.title)}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main card below tabs */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut"
                  }}
                  className={cn(
                    "p-8 md:p-10 rounded-3xl shadow-xl border border-primary/20 bg-white/70 dark:bg-backgroundDark/80 relative overflow-hidden flex flex-col items-center gap-4 transition-all duration-300",
                    "hover:shadow-2xl hover:border-primary/40",
                    serviceItems[activeIndex].accentColor || 'text-orange-500'
                  )}
                >
                  <motion.div
                    variants={itemVariants}
                    className="flex-shrink-0 flex flex-col items-center justify-center mb-2"
                  >
                    <span className="h-20 w-20 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg text-5xl mb-3">
                      {serviceItems[activeIndex].icon}
                    </span>
                  </motion.div>
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center text-center w-full"
                  >
                    <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-1 tracking-tight">
                      {t(serviceItems[activeIndex].title)}
                    </h3>
                    <div className="h-1 w-16 rounded-full mb-4 mx-auto bg-gradient-to-r from-primary to-secondary opacity-70" />
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-4 font-medium">
                      {t(serviceItems[activeIndex].description)}
                    </p>
                    <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
                      {language === 'he' ? "כולל בין היתר:" : "Including Services Like:"}
                    </h4>
                    <ul className="list-none space-y-1 text-base text-gray-700 dark:text-gray-200 w-full max-w-xs mx-auto">
                      {serviceItems[activeIndex].subServices.map((sub, subIndex) => (
                        <motion.li
                          key={subIndex}
                          variants={itemVariants}
                          className="flex items-center gap-2 justify-center"
                        >
                          <span>{t(sub)}</span>
                          <span className="text-primary text-lg">»</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.section>

    </PageContainer>
  );
} 