'use client';

import { CONTACT_PHONE, PAGES } from "@/constants/site";
import { useLanguage } from "@/lib/language-context";
import PageContainer from "@/components/layout/PageContainer";
import Hero from "@/components/sections/Hero";
import ContactSection from "@/components/sections/ContactSection";
import FaqSection from "@/components/sections/FaqSection";

export default function Contact() {
  const { t, language, dir } = useLanguage();

  return (
    <PageContainer>
      <div dir={dir}>
        <Hero
          title={t(PAGES.CONTACT.hero.title)}
          subtitle={t(PAGES.CONTACT.hero.subtitle)}
          variant="centered"
        />
        
        <ContactSection 
          title={t(PAGES.CONTACT.contactSection.title)}
          subtitle={t(PAGES.CONTACT.contactSection.subtitle)}
        />
        
        <FaqSection 
          title={t(PAGES.CONTACT.faq.title)}
          subtitle={t(PAGES.CONTACT.faq.subtitle)}
          faqs={PAGES.CONTACT.faqs}
          columns={2}
          bgColor="light"
        />
        
        <div className="py-12 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary-700 dark:bg-primary-800 rounded-lg shadow-xl overflow-hidden">
              <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                <div className="lg:self-center lg:max-w-3xl">
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl" dir={dir}>
                    <span className="block">{t(PAGES.CONTACT.cta.title)}</span>
                  </h2>
                  <p className="mt-4 text-lg leading-6 text-gray-100" dir={dir}>
                    {t(PAGES.CONTACT.cta.subtitle)}
                  </p>
                  <div className={`mt-8 flex ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                    <div className="inline-flex rounded-md shadow">
                      <a
                        href={`tel:${CONTACT_PHONE}`}
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50"
                      >
                        {t(PAGES.CONTACT.cta.callButton)}
                      </a>
                    </div>
                    <div className={`${dir === 'rtl' ? 'ml-4' : 'mr-4'} inline-flex`}>
                      <a
                        href="mailto:info@indexland.com"
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-800 hover:bg-primary-900"
                      >
                        {t(PAGES.CONTACT.cta.emailButton)}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full h-96 relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27049.089169843918!2d34.762819874357046!3d32.087888350840274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b8ed2312f3d%3A0xa2aafe806de6c9f4!2sAllenby%20St%2C%20Tel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1700000000000!5m2!1sen!2sil" 
            className="w-full h-full border-0" 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title={t(PAGES.CONTACT.map.title)}
            aria-label={t(PAGES.CONTACT.map.ariaLabel)}
          />
        </div>
      </div>
    </PageContainer>
  );
} 