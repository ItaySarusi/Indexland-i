"use client";
import { useLanguage } from '@/lib/language-context';
import { FaBalanceScale, FaUserShield, FaLightbulb, FaHandshake } from 'react-icons/fa';

const values = [
  {
    icon: <FaBalanceScale className="text-primary text-4xl mb-3" />,
    title: { he: 'יושרה', en: 'Integrity' },
    description: {
      he: 'אנו פועלים בשקיפות מלאה, אמינות ומחויבות לאתיקה מקצועית בכל שלב.',
      en: 'We operate with full transparency, reliability, and a commitment to professional ethics at every stage.'
    }
  },
  {
    icon: <FaUserShield className="text-primary text-4xl mb-3" />,
    title: { he: 'אמון וביטחון', en: 'Trust & Security' },
    description: {
      he: 'הלקוחות שלנו נהנים מביטחון מלא ושקט נפשי לאורך כל הדרך.',
      en: 'Our clients enjoy complete security and peace of mind throughout the process.'
    }
  },
  {
    icon: <FaLightbulb className="text-primary text-4xl mb-3" />,
    title: { he: 'חדשנות', en: 'Innovation' },
    description: {
      he: 'אנו מאמצים טכנולוגיות חדשות ופתרונות יצירתיים ליצירת ערך מוסף.',
      en: 'We embrace new technologies and creative solutions to generate added value.'
    }
  },
  {
    icon: <FaHandshake className="text-primary text-4xl mb-3" />,
    title: { he: 'שותפות', en: 'Partnership' },
    description: {
      he: 'אנו רואים בלקוחותינו שותפים מלאים להצלחה ומלווים אותם יד ביד.',
      en: 'We see our clients as full partners in success and accompany them every step of the way.'
    }
  }
];

export default function CoreValuesSection() {
  const { t } = useLanguage();
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Floating glassmorphic background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[400px] h-[160px] bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-3xl opacity-40 animate-float-slow" />
      </div>
      <div className="container relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-14 animate-fade-in">
          {t({ he: 'הערכים שלנו', en: 'Our Core Values' })}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center animate-fade-in animate-scale-in"
              style={{ animationDelay: `${0.1 + idx * 0.12}s` }}
            >
              {value.icon}
              <h3 className="text-xl font-bold text-primary mb-2">
                {t(value.title)}
              </h3>
              <p className="text-gray-700 dark:text-textSecondary text-base">
                {t(value.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 