'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage, Language } from '@/lib/language-context';
import { PAGES } from '@/constants/site';

interface TeamMember {
  name: string | Record<Language, string>;
  role: string | Record<Language, string>;
  bio: string | Record<Language, string>;
  image: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

interface TeamSectionProps {
  title?: string | Record<Language, string>;
  subtitle?: string | Record<Language, string>;
  variant?: 'grid' | 'list';
  bgColor?: string;
}

export default function TeamSection({
  title,
  subtitle,
  variant = 'grid',
  bgColor = 'white'
}: TeamSectionProps) {
  const { t } = useLanguage();
  
  // קבלת הטקסט בשפה הנכונה
  const getLocalizedText = (text: string | Record<Language, string> | undefined): string => {
    if (!text) return '';
    if (typeof text === 'string') {
      return text;
    }
    return t(text);
  };
  
  const titleText = getLocalizedText(title) || t(PAGES.ABOUT_US.team.title);
  const subtitleText = getLocalizedText(subtitle) || t(PAGES.ABOUT_US.team.subtitle);

  // Always use only Noam and Ori
  const visibleMembers = PAGES.ABOUT_US.team.members;

  return (
    <section className="relative py-24 px-4 md:px-16 bg-transparent transition-colors duration-200 overflow-hidden">
      {/* Peach-orange glassy background for the whole section */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#ffe5d0]/80 to-[#fff3e0]/70 backdrop-blur-xl rounded-3xl shadow-xl opacity-80 -z-10" style={{filter:'blur(2px)'}} />
      {/* Animated glassmorphic blobs */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[260px] bg-gradient-to-br from-orange-200/40 via-white/30 to-orange-400/20 rounded-full blur-3xl opacity-60 animate-float-slow" style={{animationDuration:'8s'}} />
        <div className="absolute bottom-0 right-1/4 w-[320px] h-[120px] bg-gradient-to-tr from-primary/30 via-white/20 to-orange-300/20 rounded-full blur-2xl opacity-40 animate-float-x" style={{animationDuration:'10s'}} />
        <div className="absolute top-1/3 left-0 w-[180px] h-[80px] bg-gradient-to-br from-orange-100/40 via-white/20 to-primary/20 rounded-full blur-2xl opacity-30 animate-float-y" style={{animationDuration:'12s'}} />
      </div>
      <div className="container relative z-10">
        <div className="text-center mb-14 relative">
          <h2 className="mb-4 text-4xl md:text-5xl font-extrabold tracking-tight text-primary drop-shadow-xl animate-fade-in">{subtitleText}</h2>
        </div>
        <div
          className="cards-container flex flex-wrap justify-center gap-6 md:gap-6 lg:gap-6 max-w-[85%] mx-auto relative"
        >
          {visibleMembers.map((member, index) => (
            <div
              key={index}
              className="card glass-card glass-inner-shadow rounded-2xl overflow-hidden animate-fade-in animate-scale-in transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-orange-300 relative p-0 group flex flex-col bg-white/70 dark:bg-backgroundDark/80 backdrop-blur-md border border-orange-100 shadow-xl flex-1 min-w-[260px] max-w-[400px]"
              style={{ animationDelay: `${0.1 + index * 0.12}s`, background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 60%, rgba(255,152,0,0.07) 100%)' }}
            >
              <div className="relative w-full h-[300px]">
                <img
                  src={member.image}
                  alt={getLocalizedText(member.name)}
                  className={`object-cover w-full h-full rounded-t-2xl ${getLocalizedText(member.name) === 'Ori' ? 'object-[center_20%]' : 'object-center'}`}
                  style={{ background: '#fff' }}
                />
              </div>
              <div className="px-8 py-8 flex flex-col items-center text-center bg-white/80 dark:bg-backgroundDark/80 transition-all duration-300 flex-1">
                <h3 className="text-2xl font-bold mb-1 text-primary drop-shadow animate-fade-in delay-100">{getLocalizedText(member.name)}</h3>
                <p className="text-primary dark:text-primary mb-3 font-semibold animate-fade-in delay-200">{getLocalizedText(member.role)}</p>
                <p className="text-gray-600 dark:text-textSecondary mb-0 animate-fade-in delay-300 group-hover:opacity-100 opacity-80 transition-opacity duration-300">
                  {getLocalizedText(member.bio)}
                </p>
                {member.socialLinks && (
                  <div className="flex space-x-4 rtl:space-x-reverse mt-4">
                    {member.socialLinks.linkedin && (
                      <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-textSecondary hover:text-primary dark:hover:text-primary transition-colors" aria-label="LinkedIn">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </a>
                    )}
                    {member.socialLinks.email && (
                      <a href={`mailto:${member.socialLinks.email}`} className="text-gray-500 dark:text-textSecondary hover:text-primary dark:hover:text-primary transition-colors" aria-label="Email">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-18px) scale(1.04); }
        }
        @keyframes float-x {
          0%, 100% { transform: translateX(0) scale(1); }
          50% { transform: translateX(24px) scale(1.03); }
        }
        @keyframes float-y {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(16px) scale(1.02); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-x { animation: float-x 10s ease-in-out infinite; }
        .animate-float-y { animation: float-y 12s ease-in-out infinite; }
        @media (max-width: 900px) {
          .cards-container {
            flex-direction: column;
            gap: 32px;
            max-width: 98%;
          }
          .card {
            max-width: 98vw;
            min-width: 0;
          }
        }
      `}</style>
    </section>
  );
} 