"use client";
import { useLanguage } from '@/lib/language-context';
import { FaRegLightbulb, FaRegCompass, FaFlag, FaEye } from 'react-icons/fa';

export default function MissionVisionSection() {
  const { language, t } = useLanguage();
  return (
    <section className="relative py-24 px-16 overflow-visible bg-transparent">
      {/* Floating glassmorphic background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-3xl opacity-40 animate-float-slow" />
      </div>
      <div className="container relative z-10">
        {/* Elegant Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary drop-shadow-xl mb-4" style={{letterSpacing: '-0.02em'}}>
            Our Mission & Vision
          </h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-60 mb-2" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Mission Card */}
          <div className="glass-card rounded-3xl shadow-2xl p-12 animate-fade-in animate-scale-in mb-8 md:mb-0 transition-transform duration-200 hover:scale-105 hover:shadow-glass border-2 border-gradient-to-br from-primary/20 to-secondary/20 bg-white/90 dark:bg-backgroundDark/90 relative overflow-hidden group">
            {/* Glass reflection overlay */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/40 to-transparent opacity-30 rounded-t-3xl pointer-events-none" />
            <div className="flex items-center justify-center mb-4">
              <FaFlag className="text-primary text-4xl mr-3 rtl:ml-3 rtl:mr-0 group-hover:text-secondary transition-colors duration-200" />
              <h3 className="text-2xl font-bold text-primary drop-shadow animate-fade-in delay-100">
                {t({ he: 'המשימה שלנו', en: 'Our Mission' })}
              </h3>
            </div>
            <p className="text-gray-700 dark:text-textSecondary text-lg text-center animate-fade-in delay-200">
              {t({
                he: 'Equip businesses with end-to-end real estate and workspace solutions that drive efficiency, satisfaction, and scale.',
                en: 'Equip businesses with end-to-end real estate and workspace solutions that drive efficiency, satisfaction, and scale.'
              })}
            </p>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/30 to-transparent opacity-20 rounded-3xl" />
          </div>
          {/* Vision Card */}
          <div className="glass-card rounded-3xl shadow-2xl p-12 animate-fade-in animate-scale-in transition-transform duration-200 hover:scale-105 hover:shadow-glass border-2 border-gradient-to-br from-secondary/20 to-primary/20 bg-white/90 dark:bg-backgroundDark/90 relative overflow-hidden group">
            {/* Glass reflection overlay */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/40 to-transparent opacity-30 rounded-t-3xl pointer-events-none" />
            <div className="flex items-center justify-center mb-4">
              <FaEye className="text-secondary text-4xl mr-3 rtl:ml-3 rtl:mr-0 group-hover:text-primary transition-colors duration-200" />
              <h3 className="text-2xl font-bold text-secondary drop-shadow animate-fade-in delay-100">
                {t({ he: 'החזון שלנו', en: 'Our Vision' })}
              </h3>
            </div>
            <p className="text-gray-700 dark:text-textSecondary text-lg text-center animate-fade-in delay-200">
              {t({
                he: 'Redefine how companies build, manage, and grow their physical footprint—making every square meter work harder.',
                en: 'Redefine how companies build, manage, and grow their physical footprint—making every square meter work harder.'
              })}
            </p>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/30 to-transparent opacity-20 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
} 