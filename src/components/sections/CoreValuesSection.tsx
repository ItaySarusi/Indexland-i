"use client";
import { PAGES } from '@/constants/site';
import { useLanguage } from '@/lib/language-context';
import { FaStar, FaBalanceScale, FaLightbulb, FaLink } from 'react-icons/fa';

const getIcon = (iconName: string) => {
  const iconProps = { className: "text-5xl mb-5 text-[#FF5722]" };
  
  switch (iconName) {
    case 'star':
      return <FaStar {...iconProps} />;
    case 'balance':
      return <FaBalanceScale {...iconProps} />;
    case 'lightbulb':
      return <FaLightbulb {...iconProps} />;
    case 'link':
      return <FaLink {...iconProps} />;
    default:
      return <FaStar {...iconProps} />;
  }
};

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
          {t(PAGES.ABOUT_US.coreValues.title)}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {PAGES.ABOUT_US.coreValues.values.map((value, idx) => (
            <div
              key={idx}
              className="rounded-3xl border shadow-xl p-10 flex flex-col items-center text-center backdrop-blur-md relative overflow-hidden bg-white border-[#FF784E] transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-105 animate-pop-in"
              style={{ animationDelay: `${0.1 + idx * 0.12}s` }}
            >
              {/* Neon floating dot */}
              <span className="absolute top-4 right-6 w-8 h-8 bg-[#FF5722] opacity-40 rounded-full blur-2xl animate-float-slow pointer-events-none" />
              {getIcon(value.icon)}
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