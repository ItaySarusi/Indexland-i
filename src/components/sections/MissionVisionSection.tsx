"use client";
import { useLanguage } from '@/lib/language-context';
import { FaRegLightbulb, FaRegCompass } from 'react-icons/fa';

export default function MissionVisionSection() {
  const { language, t } = useLanguage();
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Floating glassmorphic background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-3xl opacity-40 animate-float-slow" />
      </div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="glass-card rounded-3xl shadow-2xl p-10 animate-fade-in animate-scale-in mb-8 md:mb-0" style={{ animationDelay: '0.05s' }}>
            <div className="flex items-center mb-4">
              <FaRegLightbulb className="text-primary text-4xl mr-3 rtl:ml-3 rtl:mr-0" />
              <h2 className="text-2xl font-bold text-primary">
                {t({ he: 'המשימה שלנו', en: 'Our Mission' })}
              </h2>
            </div>
            <p className="text-gray-700 dark:text-textSecondary text-lg">
              {t({
                he: 'להוביל את תחום הנדל"ן המשרדי וההשקעות הבינלאומיות בישראל ובעולם, תוך שמירה על מקצועיות, שקיפות וחדשנות.',
                en: 'To lead the field of office real estate and international investments in Israel and worldwide, while maintaining professionalism, transparency, and innovation.'
              })}
            </p>
          </div>
          <div className="glass-card rounded-3xl shadow-2xl p-10 animate-fade-in animate-scale-in" style={{ animationDelay: '0.18s' }}>
            <div className="flex items-center mb-4">
              <FaRegCompass className="text-primary text-4xl mr-3 rtl:ml-3 rtl:mr-0" />
              <h2 className="text-2xl font-bold text-primary">
                {t({ he: 'החזון שלנו', en: 'Our Vision' })}
              </h2>
            </div>
            <p className="text-gray-700 dark:text-textSecondary text-lg">
              {t({
                he: 'ליצור ערך אמיתי וארוך טווח ללקוחותינו באמצעות פתרונות יצירתיים, ליווי אישי ומקצועי, והובלה טכנולוגית.',
                en: 'To create real, long-term value for our clients through creative solutions, personal and professional guidance, and technological leadership.'
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 