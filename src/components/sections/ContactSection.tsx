'use client';

import React from 'react';
import { useLanguage, Language } from '@/lib/language-context';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS } from '@/constants/site';

interface ContactInfo {
  icon: React.ReactNode;
  title: string | Record<Language, string>;
  info: string | Record<Language, string>;
  link?: string;
}

interface ContactSectionProps {
  title?: string | Record<Language, string>;
  subtitle?: string | Record<Language, string>;
  contactInfos?: ContactInfo[];
  bgColor?: 'white' | 'light';
  variant?: 'default' | 'compact';
}

export default function ContactSection({
  title,
  subtitle,
  contactInfos,
  bgColor = 'light',
  variant = 'default'
}: ContactSectionProps) {
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
    he: "צור קשר",
    en: "Contact Us"
  };
  
  const defaultSubtitle = {
    he: "צוות המומחים שלנו זמין לענות על כל שאלה",
    en: "Our team of experts is available to answer any questions"
  };

  const defaultContactInfos = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498.974A1 1 0 0111.28 5H13a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
        </svg>
      ),
      title: {
        he: "דוא״ל",
        en: "Email"
      },
      info: CONTACT_EMAIL,
      link: `mailto:${CONTACT_EMAIL}`
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498.974A1 1 0 0111.28 5H13a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
        </svg>
      ),
      title: {
        he: "טלפון",
        en: "Phone"
      },
      info: CONTACT_PHONE,
      link: `tel:${CONTACT_PHONE}`
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: {
        he: "כתובת",
        en: "Address"
      },
      info: CONTACT_ADDRESS
    }
  ];
  
  const titleText = getLocalizedText(title) || t(defaultTitle);
  const subtitleText = getLocalizedText(subtitle) || t(defaultSubtitle);
  
  const formLabels = {
    name: {
      he: "שם מלא",
      en: "Full Name"
    },
    email: {
      he: "דוא״ל",
      en: "Email"
    },
    phone: {
      he: "טלפון",
      en: "Phone"
    },
    subject: {
      he: "נושא",
      en: "Subject"
    },
    message: {
      he: "הודעה",
      en: "Message"
    },
    send: {
      he: "שלח הודעה",
      en: "Send Message"
    }
  };

  return (
    <section className={`py-12 ${bgColor === 'light' ? 'bg-backgroundLight dark:bg-backgroundDark' : 'bg-white dark:bg-backgroundDark dark:bg-opacity-90'} transition-colors duration-200`}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">{titleText}</h2>
          <p className="text-lg text-gray-600 dark:text-textSecondary max-w-3xl mx-auto">
            {subtitleText}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-backgroundDark dark:bg-opacity-90 rounded-lg shadow-md p-6">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  label={t(formLabels.name)}
                  placeholder={t(formLabels.name)}
                  required
                  fullWidth
                />
                <Input 
                  label={t(formLabels.email)}
                  type="email"
                  placeholder={t(formLabels.email)}
                  required
                  fullWidth
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  label={t(formLabels.phone)}
                  type="tel"
                  placeholder={t(formLabels.phone)}
                  fullWidth
                />
                <Input 
                  label={t(formLabels.subject)}
                  placeholder={t(formLabels.subject)}
                  fullWidth
                />
              </div>
              <Textarea 
                label={t(formLabels.message)}
                placeholder={t(formLabels.message)}
                rows={5}
                required
                fullWidth
              />
              <div className="flex justify-center">
                <Button type="submit" size="lg">
                  {t(formLabels.send)}
                </Button>
              </div>
            </form>
          </div>
          
          <div className="space-y-6">
            {(contactInfos || defaultContactInfos).map((info, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mr-4 rtl:mr-0 rtl:ml-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                    {info.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{getLocalizedText(info.title)}</h3>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-gray-600 dark:text-textSecondary hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      {typeof info.info === 'object' ? getLocalizedText(info.info) : info.info}
                    </a>
                  ) : (
                    <p className="text-gray-600 dark:text-textSecondary">
                      {typeof info.info === 'object' ? getLocalizedText(info.info) : info.info}
                    </p>
                  )}
                </div>
              </div>
            ))}
            
            {variant === 'default' && (
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.1560503724477!2d34.77764531520259!3d32.06459262720151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca5d2e132f5%3A0xd629e9ab1f58f814!2z16nVkCfcl9eu15zVnCAxMDAsINeo15nXqNeZ15wg15HXm9eV15wg15nXpNeVLCDXqtecINeQ15HXmded15nXpNeV!5e0!3m2!1siw!2sil!4v1643276243788!5m2!1siw!2sil"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="rounded-lg"
                  title="מפה"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 