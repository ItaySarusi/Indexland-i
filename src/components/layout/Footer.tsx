'use client';

import Link from 'next/link';
import { CONTACT_PHONE, CONTACT_ADDRESS, NAV_LINKS, PAGES, COMPONENTS } from '@/constants/site';
import { useLanguage } from '@/lib/language-context';
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const { language, t } = useLanguage();
  
  return (
    <footer className="relative transition-colors duration-200">
      {/* Gradient background for light/dark mode */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#fff7f2] via-[#fff3e6] to-[#ffe0c2] dark:from-backgroundDark dark:via-gray-900 dark:to-primary/20" style={{background: 'linear-gradient(120deg, #fff7f2 0%, #fff3e6 60%, #ffe0c2 100%)'}} />
      <div className="container relative z-10 py-6 flex flex-col gap-4 items-center justify-center max-w-6xl mx-auto px-4">
        {/* Main grid - Mobile: centered, PC: 3-column layout */}
        <div className="w-full flex flex-col items-center text-center md:grid md:grid-cols-3 md:items-center md:text-center gap-6 md:gap-4">
          {/* Brand - Left on PC, top on mobile */}
          <div className="flex flex-col gap-2 max-w-xs items-center mx-auto">
            <h3 className="text-lg font-bold text-primary mb-1">Indexland</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-center">
              {t(PAGES.HOME.hero.subtitle)}
            </p>
            <div className="flex gap-4 mt-2 justify-center">
              <a href="https://www.linkedin.com/company/indexland" target="_blank" rel="noopener noreferrer" className="hover:text-primary text-gray-500 dark:text-gray-400 text-xl cursor-pointer"><FaLinkedin /></a>
            </div>
          </div>
          
                     {/* Navigation - Center on PC, middle on mobile */}
          <nav className="flex flex-col items-center">
            <h3 className="text-lg font-bold text-primary mb-2 text-center">{t(COMPONENTS.FOOTER.quickLinks.title)}</h3>
            <div className="flex flex-col w-28 md:w-32 mb-4">
              <Link href="/" className="rounded-md bg-primary text-white border-2 border-primary/70 shadow-md px-0 py-1.5 text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all text-center focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 nav-cta-btn mb-1 cursor-pointer">{language === 'he' ? NAV_LINKS.he[0].name : NAV_LINKS.en[0].name}</Link>
              <Link href="/about-us" className="rounded-md bg-primary text-white border-2 border-primary/70 shadow-md px-0 py-1.5 text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all text-center focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 nav-cta-btn mb-1 cursor-pointer">{language === 'he' ? NAV_LINKS.he[1].name : NAV_LINKS.en[1].name}</Link>
              <Link href="/blog" className="rounded-md bg-primary text-white border-2 border-primary/70 shadow-md px-0 py-1.5 text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all text-center focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 nav-cta-btn cursor-pointer">{language === 'he' ? NAV_LINKS.he[3].name : NAV_LINKS.en[3].name}</Link>
            </div>
            {/* Copyright under navigation */}
            <div className="text-center text-gray-500 dark:text-gray-400 text-xs">
              &copy; {new Date().getFullYear()} Indexland. {t(COMPONENTS.FOOTER.copyright)}
            </div>
          </nav>
          
          {/* Contact - Right on PC, bottom on mobile */}
          <div className="flex flex-col gap-2 items-center mx-auto">
            <div className="glass-card rounded-xl p-4 shadow-xl border border-white/30 dark:border-white/10 backdrop-blur-xl bg-white/80 dark:bg-backgroundDark/80 w-64 max-w-full">
              <h3 className="text-base font-bold text-primary mb-2 text-center">{t(COMPONENTS.FOOTER.contact.title)}</h3>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-1 text-sm">
                <FaEnvelope className="text-primary" />
                <a href="mailto:info@indexland.com" className="hover:text-primary transition-colors cursor-pointer">info@indexland.com</a>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-1 text-sm">
                <FaPhone className="text-primary" />
                <a href={`tel:${CONTACT_PHONE}`} className="hover:text-primary transition-colors cursor-pointer">{CONTACT_PHONE}</a>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-1 text-sm">
                <FaMapMarkerAlt className="text-primary" />
                <span>{language === 'he' ? CONTACT_ADDRESS.he : CONTACT_ADDRESS.en}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .nav-cta-btn {
          box-shadow: 0 2px 12px 0 rgba(255, 152, 0, 0.08);
          transition: box-shadow 0.2s, background 0.2s;
        }
        .nav-cta-btn:active, .nav-cta-btn:focus, .nav-cta-btn:focus-visible {
          box-shadow: 0 0 0 4px #ff9800, 0 2px 16px 0 #ff9800cc;
          background: #ff9800 !important;
          color: #fff !important;
        }
        .nav-cta-btn:hover {
          box-shadow: 0 0 12px 2px #ff9800cc, 0 2px 16px 0 #ff9800cc;
        }
      `}</style>
    </footer>
  );
} 