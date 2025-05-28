"use client";
import { useLanguage } from '@/lib/language-context';
import { LucideClipboardList, LucideRocket, LucideSettings, LucideTrendingUp } from 'lucide-react';

export default function OurOfferSection() {
  const { t } = useLanguage();
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
    <section className="relative py-24 overflow-visible bg-transparent">
      {/* Glassmorphic background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[400px] h-[160px] bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-3xl opacity-40 animate-float-slow" />
      </div>
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
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 md:gap-8 max-w-7xl mx-auto">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="flex-1 glass-card rounded-[2.5rem] shadow-2xl p-10 flex flex-col items-center text-center animate-fade-in animate-scale-in transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-gold-400 hover:bg-gradient-to-br hover:from-white/60 hover:to-primary/10 dark:hover:from-backgroundDark/60 dark:hover:to-secondary/10 border-4 border-gradient-to-br from-yellow-300/40 via-primary/20 to-secondary/20 bg-white/70 dark:bg-backgroundDark/80 relative overflow-hidden group"
              style={{ animationDelay: `${0.1 + idx * 0.13}s`, boxShadow: '0 8px 48px 0 rgba(255, 180, 80, 0.13), 0 1.5px 12px 0 rgba(255,255,255,0.13)' }}
            >
              {/* Glass reflection overlay + glow border */}
              <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/60 to-transparent opacity-50 rounded-t-[2.5rem] pointer-events-none animate-glass-reflection" />
              <div className="absolute inset-0 rounded-[2.5rem] border-4 border-gradient-to-br from-yellow-300/30 via-primary/10 to-secondary/10 group-hover:border-yellow-400 pointer-events-none" style={{boxShadow:'0 0 32px 0 rgba(255,180,80,0.10), 0 1.5px 12px 0 rgba(255,255,255,0.10)'}} />
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
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/30 to-transparent opacity-20 rounded-[2.5rem]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 