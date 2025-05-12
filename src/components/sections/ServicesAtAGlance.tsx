'use client';

import React, { useState } from 'react';
import { useLanguage, Language } from '@/lib/language-context';
import { motion, AnimatePresence } from 'framer-motion';
import PageContainer from '@/components/layout/PageContainer';
import { cn } from '@/lib/utils';
// Import Lucide icons
import { BriefcaseBusiness, AreaChart, Globe, MapPin } from 'lucide-react';

// הגדרת סוג השירות
interface ServiceItem {
  title: Record<Language, string>;
  description: Record<Language, string>;
  icon: React.ReactNode;
  subServices: Record<Language, string>[];
  accentColor?: string; // Optional accent color for visual distinction
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

  // כותרת ברירת מחדל
  const defaultTitle = {
    he: "מבט מהיר על השירותים שלנו",
    en: "Services at a Glance"
  };

  // תיאור ברירת מחדל
  const defaultSubtitle = {
    he: "פתרונות מותאמים אישית לניהול נכסים והשקעות בתל אביב ודובאי",
    en: "Tailored solutions for asset management and investments in Tel Aviv and Dubai"
  };

  // שירותים ברירת מחדל עם צבעי הדגשה אפשריים
  const defaultServices: ServiceItem[] = [
    {
      title: {
        he: "משרד מקיף A–Z",
        en: "Turnkey A–Z Office"
      },
      description: {
        he: "פתרון מלא לאיתור, התאמה וניהול שוטף של משרדים, המאפשר לך להתמקד בעסק הליבה שלך.",
        en: "A complete solution for scouting, fitting out, and managing offices, letting you focus on your core business."
      },
      icon: <BriefcaseBusiness />,
      subServices: [
        { he: "איתור נכסים (Scouting)", en: "Scouting" },
        { he: "ניהול מו\"מ וחתימת חוזה (Lease)", en: "Lease Negotiation & Signing" },
        { he: "תכנון וביצוע התאמות (Fit-out)", en: "Fit-out Planning & Execution" },
        { he: "שירותי ניהול ותחזוקה (Concierge)", en: "Concierge & Management" }
      ],
      accentColor: "text-orange-500"
    },
    {
      title: {
        he: "ניהול נכסים גדולים",
        en: "Large Asset Management"
      },
      description: {
        he: "פיקוח אסטרטגי ודיווח שקוף על תיקי נכסים מורכבים, למקסום תשואות וצמיחה לאורך זמן.",
        en: "Strategic oversight and transparent reporting for complex asset portfolios to maximize yields and long-term growth."
      },
      icon: <AreaChart />,
      subServices: [
        { he: "פיקוח וניהול שוטף של התיק", en: "Portfolio Oversight & Management" },
        { he: "דיווח מפורט וניתוח ביצועים", en: "Detailed Reporting & Analysis" }
      ],
      accentColor: "text-blue-500"
    },
    {
      title: {
        he: "השקעות בדובאי",
        en: "Dubai Investment"
      },
      description: {
        he: "ליווי מקיף לכניסה בטוחה ומוצלחת לשוק הנדל\"ן הדינמי של דובאי, מאיתור הזדמנויות ועד עמידה ברגולציה.",
        en: "Comprehensive guidance for safe and successful entry into Dubai's dynamic real estate market, from sourcing to compliance."
      },
      icon: <Globe />,
      subServices: [
        { he: "אסטרטגיית כניסה לשוק", en: "Market Entry Strategy" },
        { he: "איתור וניתוח הזדמנויות השקעה", en: "Sourcing & Investment Analysis" },
        { he: "ליווי תהליכי רגולציה ועמידה בתקנות", en: "Compliance & Regulatory Guidance" }
      ],
      accentColor: "text-green-500"
    },
    {
      title: {
        he: "תיווך מקומי",
        en: "Local Brokerage"
      },
      description: {
        he: "מומחיות מקומית וקשרים ענפים בשוק התל אביבי למכירה, השכרה והערכות שווי מדויקות של נכסים.",
        en: "Local expertise and extensive connections in the Tel Aviv market for sales, leasing, and accurate property valuations."
      },
      icon: <MapPin />,
      subServices: [
        { he: "שיווק ומכירת נכסים", en: "Property Sales & Marketing" },
        { he: "איתור שוכרים וניהול השכרות", en: "Leasing & Tenant Management" },
        { he: "הערכות שווי מקצועיות", en: "Professional Valuations" }
      ],
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
  const titleText = t(title || defaultTitle);
  const subtitleText = t(subtitle || defaultSubtitle);
  const serviceItems = services || defaultServices;

  return (
    <PageContainer>
      <section className="px-4 py-16 md:py-24 bg-gray-50 dark:bg-backgroundDark transition-colors duration-200">
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

          {/* טאבים / אקורדיון */} 
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* כותרות טאבים (דסקטופ) / כותרות אקורדיון (מובייל) */} 
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible lg:w-1/4">
              {serviceItems.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "text-start p-4 md:p-5 rounded-lg transition-all duration-300 ease-in-out flex-shrink-0 lg:w-full",
                    "font-semibold text-base md:text-lg",
                    activeIndex === index
                      ? "bg-white dark:bg-gray-800 shadow-md scale-105 text-primary dark:text-primary"
                      : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:text-gray-800 dark:hover:text-gray-200",
                    dir === 'rtl' ? "lg:border-r-4" : "lg:border-l-4",
                    activeIndex === index ? `${service.accentColor?.replace('text-', 'border-') || 'border-orange-500'}` : 'border-transparent'
                  )}
                >
                  {t(service.title)}
                </button>
              ))}
            </div>

            {/* תוכן הטאב/אקורדיון */} 
            <div className="lg:w-3/4">
              <AnimatePresence initial={false} mode="wait">
                {serviceItems.map((service, index) =>
                  activeIndex === index && (
                    <motion.div
                      key={index}
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg overflow-hidden"
                    >
                      <div className={`flex flex-col sm:flex-row items-start gap-6 ${service.accentColor || 'text-orange-500'}`}>
                        <div className="flex-shrink-0 p-3 bg-gray-100 dark:bg-gray-700 rounded-full">
                          <span className="h-8 w-8 md:h-10 md:w-10 flex items-center justify-center">
                            {service.icon}
                          </span>
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                            {t(service.title)}
                          </h3>
                          <p className="text-base text-gray-600 dark:text-gray-300 mb-5">
                            {t(service.description)}
                          </p>
                          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
                            {dir === 'rtl' ? "כולל בין היתר:" : "Including Services Like:"}
                          </h4>
                          <ul className="list-none space-y-1 text-sm text-gray-600 dark:text-gray-300">
                            {service.subServices.map((sub, subIndex) => (
                              <li key={subIndex} className="flex items-center gap-2">
                                <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path><path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                {t(sub)}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
} 