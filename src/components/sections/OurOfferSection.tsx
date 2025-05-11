"use client";
import { useLanguage } from '@/lib/language-context';
import { FaHandshake } from 'react-icons/fa';

export default function OurOfferSection() {
  const { t } = useLanguage();
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Floating glassmorphic background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[400px] h-[160px] bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-3xl opacity-40 animate-float-slow" />
      </div>
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto glass-card rounded-3xl shadow-2xl p-12 animate-fade-in animate-scale-in text-center">
          <div className="flex items-center justify-center mb-4">
            <FaHandshake className="text-primary text-4xl mr-3 rtl:ml-3 rtl:mr-0" />
            <h2 className="text-2xl font-bold text-primary">
              {t({ he: 'ההצעה שלנו', en: 'Our Offer' })}
            </h2>
          </div>
          <p className="text-gray-700 dark:text-textSecondary text-lg">
            {t({
              he: 'אנו מציעים ללקוחותינו ליווי אישי, מקצועי וחדשני בכל שלבי ההשקעה והניהול, עם דגש על פתרונות מותאמים, שקיפות מלאה ותשומת לב לפרטים הקטנים.',
              en: 'We offer our clients personal, professional, and innovative guidance throughout all stages of investment and management, with an emphasis on tailored solutions, full transparency, and attention to detail.'
            })}
          </p>
        </div>
      </div>
    </section>
  );
} 