'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage, Language } from '@/lib/language-context';

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

const founders: TeamMember[] = [
  {
    name: 'Noam',
    role: 'Founder',
    bio: 'Noam, Founder – Over 10 years in real estate, Noam led Indexland\'s vision from boutique agency to full-spectrum consultancy.',
    image: '/partner1.webp',
    socialLinks: { linkedin: '#', email: 'noam@indexland.com' }
  },
  {
    name: 'Ori',
    role: 'Co-Founder',
    bio: 'Ori, Co-Founder – Expert in asset management and client operations, Ori is the operational heart behind every Indexland project.',
    image: '/partner2.webp',
    socialLinks: { linkedin: '#', email: 'ori@indexland.com' }
  }
];

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
  
  const defaultTitle = {
    he: "הצוות שלנו",
    en: "Meet the Team"
  };
  
  const defaultSubtitle = {
    he: "הכירו את המומחים שמאחורי Indexland",
    en: "Meet The Experts Behind Indexland"
  };
  
  const titleText = getLocalizedText(title) || t(defaultTitle);
  const subtitleText = getLocalizedText(subtitle) || t(defaultSubtitle);

  // Always use only Noam and Ori
  const visibleMembers = founders;

  return (
    <section className="relative py-24 px-16 bg-backgroundLight dark:bg-backgroundDark transition-colors duration-200 overflow-hidden">
      {/* Floating glassmorphic background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[400px] h-[160px] bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-3xl opacity-40 animate-float-slow" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 pointer-events-none" />
      <div className="container relative z-10">
        <div className="text-center mb-14">
          <h2 className="mb-4 text-4xl md:text-5xl font-extrabold tracking-tight text-primary drop-shadow-xl animate-fade-in">{subtitleText}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12">
          {visibleMembers.map((member, index) => (
            <div
              key={index}
              className="glass-card glass-inner-shadow rounded-3xl overflow-hidden animate-fade-in animate-scale-in transition-all duration-300 hover:scale-105 hover:shadow-glass relative p-0 group"
              style={{ animationDelay: `${0.1 + index * 0.12}s` }}
            >
              <div className="relative overflow-hidden aspect-square w-full h-72">
                <img
                  src={member.image}
                  alt={getLocalizedText(member.name)}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="px-8 py-8 flex flex-col items-center text-center bg-white/80 dark:bg-backgroundDark/80 transition-all duration-300">
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
    </section>
  );
} 