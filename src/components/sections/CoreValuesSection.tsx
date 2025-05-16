"use client";
import { useLanguage } from '@/lib/language-context';
import { FaStar, FaBalanceScale, FaLightbulb, FaLink } from 'react-icons/fa';

const values = [
  {
    icon: <FaStar className="text-5xl mb-5 text-[#FF5722]" />,
    title: { en: 'Excellence', he: 'מצוינות' },
    description: {
      en: 'No detail too small.',
      he: 'שום פרט אינו קטן מדי.'
    },
    cardColor: 'bg-white border-[#FF784E]'
  },
  {
    icon: <FaBalanceScale className="text-5xl mb-5 text-[#FF5722]" />,
    title: { en: 'Integrity', he: 'יושרה' },
    description: {
      en: 'Transparent terms and reporting.',
      he: 'תנאים ודיווח שקופים.'
    },
    cardColor: 'bg-white border-[#FF784E]'
  },
  {
    icon: <FaLightbulb className="text-5xl mb-5 text-[#FF5722]" />,
    title: { en: 'Innovation', he: 'חדשנות' },
    description: {
      en: 'Smarter processes powered by data.',
      he: 'תהליכים חכמים מונעי דאטה.'
    },
    cardColor: 'bg-white border-[#FF784E]'
  },
  {
    icon: <FaLink className="text-5xl mb-5 text-[#FF5722]" />,
    title: { en: 'Connection', he: 'קשר' },
    description: {
      en: 'Deep local ties and global networks.',
      he: 'קשרים מקומיים עמוקים ורשתות גלובליות.'
    },
    cardColor: 'bg-white border-[#FF784E]'
  }
];

export default function CoreValuesSection() {
  const { t } = useLanguage();
  return (
    <section className="relative py-24 px-16 overflow-hidden">
      {/* Floating glassmorphic background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[400px] h-[160px] bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-3xl opacity-40 animate-float-slow" />
      </div>
      <div className="container relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 animate-fade-in text-primary dark:text-white">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {values.map((value, idx) => (
            <div
              key={idx}
              className={`rounded-3xl border shadow-xl p-10 flex flex-col items-center text-center backdrop-blur-md relative overflow-hidden ${value.cardColor} transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-105 animate-pop-in`}
              style={{ animationDelay: `${0.1 + idx * 0.12}s` }}
            >
              {/* Neon floating dot */}
              <span className="absolute top-4 right-6 w-8 h-8 bg-[#FF5722] opacity-40 rounded-full blur-2xl animate-float-slow pointer-events-none" />
              {value.icon}
              <h3 className="text-xl font-bold mb-2 tracking-tight text-[#FF5722]">
                {t(value.title)}
              </h3>
              <p className="text-[#FF5722] text-base font-medium">
                {t(value.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 