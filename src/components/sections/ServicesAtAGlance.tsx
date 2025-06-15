'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, Language } from '@/lib/language-context';
import { motion, AnimatePresence } from 'framer-motion';
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
  const { t, dir } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [userSelected, setUserSelected] = useState<boolean>(false);
  const sectionRef = useRef(null);

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

  // אנימציות של Framer Motion
  const contentVariants = {
    hidden: { opacity: 0, height: 0, y: -10 },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -10,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  // הגדרת תוכן סופי ע"י שימוש בברירות מחדל במידת הצורך
  const titleText = t(title || PAGES.HOME.servicesAtAGlance.title);
  const subtitleText = t(subtitle || PAGES.HOME.servicesAtAGlance.subtitle);
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

          {/* Horizontal tabs above main card */}
          <div className="flex overflow-x-auto pb-4 snap-x snap-mandatory md:justify-center md:flex-wrap gap-4 md:gap-6 mb-10">
            {serviceItems.map((service, index) => (
              <button
                key={index}
                onClick={() => handleCardClick(index)}
                className={cn(
                  "px-5 md:px-8 h-14 md:h-16 min-w-[180px] md:min-w-[220px] rounded-2xl font-medium md:font-semibold text-base md:text-lg transition-all duration-300 ease-in-out flex items-center justify-center relative overflow-hidden snap-center shrink-0",
                  "backdrop-blur-xl border-2 border-transparent bg-white/60 dark:bg-backgroundDark/60 shadow-lg",
                  "hover:bg-gradient-to-br hover:from-white/80 hover:to-primary/10 dark:hover:from-backgroundDark/80 dark:hover:to-secondary/10",
                  activeIndex === index
                    ? "text-primary dark:text-primary"
                    : "text-gray-600 dark:text-gray-300 border-white/30"
                )}
              >
                {activeIndex === index && (
                  <span className="absolute inset-0 pointer-events-none rounded-2xl animate-neon-border z-10" style={{boxShadow: '0 0 16px 4px #ff9800, 0 0 32px 8px #ff9800'}} />
                )}
                <span className="relative z-20">{t(service.title)}</span>
              </button>
            ))}
          </div>

          {/* Main card below tabs */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-3xl">
              {serviceItems.map((service, index) => (
                <div
                  key={index}
                  style={{ display: activeIndex === index ? 'block' : 'none' }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className={cn(
                      "glass-card glass-inner-shadow p-10 md:p-16 rounded-3xl shadow-2xl border-2 border-gradient-to-br from-primary/20 to-secondary/20 bg-white/90 dark:bg-backgroundDark/90 relative overflow-hidden",
                      "flex flex-col sm:flex-row items-center gap-10",
                      service.accentColor || 'text-orange-500'
                    )}
                  >
                    <div className="flex-shrink-0 p-6 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg mb-6 sm:mb-0 flex items-center justify-center">
                      <span className="h-16 w-16 md:h-20 md:w-20 flex items-center justify-center text-5xl">
                        {service.icon}
                      </span>
                    </div>
                    <div className="flex-grow text-center sm:text-left">
                      <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight flex items-center gap-2 justify-center sm:justify-start">
                        {t(service.title)}
                      </h3>
                      <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-4 mx-auto sm:mx-0" />
                      <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-5 font-medium">
                        {t(service.description)}
                      </p>
                      <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
                        {dir === 'rtl' ? "כולל בין היתר:" : "Including Services Like:"}
                      </h4>
                      <ul className="list-none space-y-1 text-lg text-gray-700 dark:text-gray-200">
                        {service.subServices.map((sub, subIndex) => (
                          <li key={subIndex} className="flex items-center gap-2 justify-center sm:justify-start">
                            <span className="text-primary text-lg">»</span>
                            {t(sub)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
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