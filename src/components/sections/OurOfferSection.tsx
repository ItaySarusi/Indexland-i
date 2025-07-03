"use client";
import { useLanguage } from '@/lib/language-context';
import { LucideClipboardList, LucideRocket, LucideSettings, LucideTrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function OurOfferSection() {
  const { t } = useLanguage();
  
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const steps = [
    {
      number: 1,
      icon: <LucideClipboardList className="w-10 h-10 text-primary" />,
      title: { he: 'תכנון וייעוץ', en: 'Consult & Plan' },
      description: {
        he: 'פגישת היכרות, הגדרת מטרות, ניתוח צרכים, תקציב ולוחות זמנים. התאמת אסטרטגיה אישית לכל לקוח.',
        en: 'Initial consultation to define your goals, analyze your needs, budget, and timeline. We craft a personalized strategy to ensure your office solution fits your business perfectly.'
      }
    },
    {
      number: 2,
      icon: <LucideRocket className="w-10 h-10 text-primary" />,
      title: { he: 'ביצוע', en: 'Execute' },
      description: {
        he: 'איתור נכסים מתאימים, סיורים מודרכים, ניהול מו"מ מקצועי, בדיקות משפטיות, והתאמות נדרשות עד להשקה.',
        en: 'We source and tour suitable properties, manage negotiations for the best terms, handle legal checks, and coordinate all fit-out and customizations—right up to your move-in day.'
      }
    },
    {
      number: 3,
      icon: <LucideSettings className="w-10 h-10 text-primary" />,
      title: { he: 'תפעול', en: 'Operate' },
      description: {
        he: 'שירות קונסיירז׳ יומיומי, תחזוקה שוטפת, ניהול ספקים, טיפול בתקלות, ותמיכה אדמיניסטרטיבית מלאה.',
        en: 'Daily concierge service, ongoing maintenance, vendor management, troubleshooting, and full administrative support to keep your office running smoothly.'
      }
    },
    {
      number: 4,
      icon: <LucideTrendingUp className="w-10 h-10 text-primary" />,
      title: { he: 'אופטימיזציה', en: 'Optimize' },
      description: {
        he: 'מעקב שוטף, ניתוח נתונים, ייעול תהליכים, השבחת הנכס, ושיפור מתמיד של סביבת העבודה.',
        en: 'Continuous monitoring and data analysis, process optimization, value-add strategies, and ongoing improvements to maximize your workspace efficiency and satisfaction.'
      }
    },
  ];
  
  return (
    <>
      <section className="relative py-24 overflow-visible bg-transparent">
        {/* Glassmorphic background */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[400px] h-[160px] bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-3xl opacity-40 animate-float-slow" />
        </div>
        {/* Mobile flow line behind cards (outside container) */}
        <svg className="lg:hidden absolute left-1/2 top-0 -translate-x-1/2 w-[200px] h-full z-0 pointer-events-none" height="2400" width="200" preserveAspectRatio="none" style={{minHeight:'2300px'}}>
          {/* Background glow path */}
          <path
            d="M100,210 C100,725 200,1225 100,1625 C0,1825 100,1925 100,2200"
            fill="none"
            stroke="url(#orangegray-gradient-bg-mobile)"
            strokeWidth="60"
            className="path-base"
          />
          {/* Main path */}
          <path
            d="M100,210 C100,725 200,1225 100,1625 C0,1825 100,1925 100,2200"
            fill="none"
            stroke="url(#orangegray-gradient-mobile)"
            strokeWidth="4"
            className="path-animation"
          />
          {/* Solid line */}
          <path
            d="M100,210 C100,725 200,1225 100,1625 C0,1825 100,1925 100,2200"
            fill="none"
            stroke="#FF5722"
            strokeWidth="2"
            strokeOpacity="0.8"
          />
          {/* Moving dot */}
          <circle r="6" fill="#FF5722">
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              path="M100,210 C100,725 200,1225 100,1625 C0,1825 100,1925 100,2200"
            />
          </circle>
          <defs>
            <linearGradient id="orangegray-gradient-bg-mobile" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF5722" stopOpacity="0.05" />
              <stop offset="1%" stopColor="#FF5722" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#9CA3AF" stopOpacity="0.1" />
              <stop offset="95%" stopColor="#FF5722" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#FF5722" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="orangegray-gradient-mobile" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF5722" stopOpacity="0.3" />
              <stop offset="1%" stopColor="#FF5722" />
              <stop offset="50%" stopColor="#9CA3AF" />
              <stop offset="95%" stopColor="#FF5722" />
              <stop offset="100%" stopColor="#FF5722" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="container relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary drop-shadow-xl mb-4" style={{letterSpacing: '-0.02em'}}>
              {t({ he: 'איך אנחנו עובדים', en: 'Our Approach' })}
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-60 mb-2" />
            <p className="text-lg text-gray-700 dark:text-textSecondary max-w-2xl mx-auto animate-fade-in delay-100">
              {t({
                he: 'תהליך ארבעה שלבים להצלחה בנדל"ן',
                en: 'Our Four-Step Process to Real Estate Success'
              })}
            </p>
          </div>
          
          {/* Cards container with flow */}
          <div className="relative max-w-7xl mx-auto z-10">
            {/* Flow line absolutely positioned behind cards */}
            <svg className="hidden lg:block absolute left-1/2 top-[calc(50%+6rem-90px)] -translate-x-1/2 -translate-y-1/2 w-[calc(100vw+400px)] h-[200px] z-0 pointer-events-none" style={{minWidth:'1400px'}} height="200" width="100%" preserveAspectRatio="none">
              {/* Background glow path */}
              <path
                d="M375,100 C700,30 1200,170 1750,100"
                fill="none"
                stroke="url(#orangegray-gradient-bg)"
                strokeWidth="100"
                className="path-base"
              />
              {/* Main path */}
              <path
                d="M375,100 C700,30 1200,170 1750,100"
                fill="none"
                stroke="url(#orangegray-gradient)"
                strokeWidth="4"
                className="path-animation"
              />
              {/* Solid line */}
              <path
                d="M375,100 C700,30 1200,170 1750,100"
                fill="none"
                stroke="#FF5722"
                strokeWidth="2"
                strokeOpacity="0.8"
              />
              {/* Moving dot */}
              <circle r="8" fill="#FF5722">
                <animateMotion
                  dur="6s"
                  repeatCount="indefinite"
                  path="M375,100 C700,30 1200,170 1750,100"
                />
              </circle>
              <defs>
                <linearGradient id="orangegray-gradient-bg" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF5722" stopOpacity="0.05" />
                  <stop offset="1%" stopColor="#FF5722" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#9CA3AF" stopOpacity="0.1" />
                  <stop offset="95%" stopColor="#FF5722" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#FF5722" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="orangegray-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF5722" stopOpacity="0.3" />
                  <stop offset="1%" stopColor="#FF5722" />
                  <stop offset="50%" stopColor="#9CA3AF" />
                  <stop offset="95%" stopColor="#FF5722" />
                  <stop offset="100%" stopColor="#FF5722" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-stretch gap-12 md:gap-6 relative z-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="relative p-8 text-center z-10 rounded-3xl border-2 border-yellow-200 shadow-xl bg-white/10 dark:bg-backgroundDark/10 backdrop-blur-md max-w-xs w-full mx-auto lg:max-w-none"
                  initial={{ 
                    opacity: 0, 
                    y: 50,
                    x: 0
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    x: 0
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex flex-col items-center mb-6 animate-scale-in">
                    <span className="mb-4 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-yellow-200/60 to-primary/10 text-primary font-extrabold text-2xl shadow-lg border-2 border-yellow-300 mb-2 animate-fade-in delay-100">
                      {step.number}
                    </span>
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-yellow-100/40 shadow-lg mb-2 group-hover:scale-110 group-hover:shadow-gold-400 transition-all duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-3 text-primary drop-shadow-xl animate-fade-in delay-100 text-center tracking-tight leading-tight">
                    {t(step.title)}
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 dark:text-textSecondary mb-0 animate-fade-in delay-200 text-center font-medium tracking-wide">
                    {t(step.description)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .path-base {
          filter: blur(30px);
        }
        .path-animation {
          stroke-dasharray: 8,8;
          animation: dash 30s linear infinite;
        }
        @keyframes dash {
          to {
            stroke-dashoffset: -1000;
          }
        }
      `}</style>
    </>
  );
} 