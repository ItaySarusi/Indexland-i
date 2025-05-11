'use client';

import Link from 'next/link';
import { SITE_NAME, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS, SOCIAL_LINKS, NAV_LINKS } from '@/constants/site';
import { useLanguage } from '@/lib/language-context';

export default function Footer() {
  const { language, t } = useLanguage();
  
  return (
    <footer className="bg-backgroundDark text-textPrimary py-12 transition-colors duration-200">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">{SITE_NAME}</h3>
            <p className="text-textSecondary mb-4">
              {t({
                he: "פתרונות מתקדמים בתחום ניהול נכסי משרדים, תיווך והשקעות נדל&quot;ן בינלאומיות.",
                en: "Advanced solutions in office asset management, brokerage, and international real estate investments."
              })}
            </p>
            <div className="flex space-x-4">
              {Object.entries(SOCIAL_LINKS).map(([platform, url]) => (
                <a 
                  key={platform} 
                  href={url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textSecondary hover:text-primary transition-colors"
                >
                  <span className="sr-only">{platform}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">
              {t({ he: "ניווט מהיר", en: "Quick Navigation" })}
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS[language].map((link) => (
                !link.children ? (
                  <li key={link.name}>
                    <Link href={link.href} className="text-textSecondary hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ) : null
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">
              {t({ he: "צור קשר", en: "Contact Us" })}
            </h3>
            <address className="not-italic text-textSecondary">
              <p className="mb-2">{CONTACT_ADDRESS[language]}</p>
              <p className="mb-2">
                <a href={`tel:${CONTACT_PHONE}`} className="hover:text-primary transition-colors">
                  {CONTACT_PHONE}
                </a>
              </p>
              <p className="mb-2">
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-textSecondary">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. {t({ he: "כל הזכויות שמורות", en: "All rights reserved" })}.</p>
        </div>
      </div>
    </footer>
  );
} 