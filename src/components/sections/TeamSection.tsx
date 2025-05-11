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
  members: TeamMember[];
  variant?: 'grid' | 'list';
}

export default function TeamSection({
  title,
  subtitle,
  members = [],
  variant = 'grid'
}: TeamSectionProps) {
  const { language, t } = useLanguage();
  
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
    en: "Our Team"
  };
  
  const defaultSubtitle = {
    he: "הכירו את הצוות המקצועי שמאחורי ההצלחה שלנו",
    en: "Meet the professional team behind our success"
  };
  
  const titleText = getLocalizedText(title) || t(defaultTitle);
  const subtitleText = getLocalizedText(subtitle) || t(defaultSubtitle);

  return (
    <section className="py-12 bg-backgroundLight dark:bg-backgroundDark transition-colors duration-200">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">{titleText}</h2>
          <p className="text-lg text-gray-600 dark:text-textSecondary max-w-3xl mx-auto">
            {subtitleText}
          </p>
        </div>
        
        <div className={`${variant === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-8'}`}>
          {members.map((member, index) => (
            <div 
              key={index} 
              className={`bg-white dark:bg-backgroundDark dark:bg-opacity-90 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl
                ${variant === 'list' ? 'flex flex-col md:flex-row gap-6 p-6' : ''}`}
            >
              <div className={`${variant === 'list' ? 'flex-shrink-0 w-full md:w-1/3' : ''}`}>
                <div className={`${variant === 'list' ? '' : 'p-6'}`}>
                  <div className="relative overflow-hidden rounded-lg aspect-square mb-4">
                    <Image 
                      src={member.image} 
                      alt={getLocalizedText(member.name)}
                      className="object-cover"
                      fill
                    />
                  </div>
                </div>
              </div>
              
              <div className={`${variant === 'list' ? 'flex-grow' : 'px-6 pb-6'}`}>
                <h3 className="text-xl font-bold mb-1">{getLocalizedText(member.name)}</h3>
                <p className="text-primary dark:text-primary mb-3">{getLocalizedText(member.role)}</p>
                <p className="text-gray-600 dark:text-textSecondary mb-4">{getLocalizedText(member.bio)}</p>
                
                {member.socialLinks && (
                  <div className="flex space-x-4 rtl:space-x-reverse">
                    {member.socialLinks.linkedin && (
                      <a 
                        href={member.socialLinks.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 dark:text-textSecondary hover:text-primary dark:hover:text-primary transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    )}
                    {member.socialLinks.twitter && (
                      <a 
                        href={member.socialLinks.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 dark:text-textSecondary hover:text-primary dark:hover:text-primary transition-colors"
                        aria-label="Twitter"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                    )}
                    {member.socialLinks.email && (
                      <a 
                        href={`mailto:${member.socialLinks.email}`}
                        className="text-gray-500 dark:text-textSecondary hover:text-primary dark:hover:text-primary transition-colors"
                        aria-label="Email"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
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