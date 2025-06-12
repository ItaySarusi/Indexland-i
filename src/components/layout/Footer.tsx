'use client';

import Link from 'next/link';
import { SITE_NAME, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS, SOCIAL_LINKS, NAV_LINKS } from '@/constants/site';
import { useLanguage } from '@/lib/language-context';
import { FaFacebook, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const { language, t } = useLanguage();
  
  return (
    <footer className="relative transition-colors duration-200">
      {/* Gradient background for light/dark mode */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#fff7f2] via-[#fff3e6] to-[#ffe0c2] dark:from-backgroundDark dark:via-gray-900 dark:to-primary/20" style={{background: 'linear-gradient(120deg, #fff7f2 0%, #fff3e6 60%, #ffe0c2 100%)'}} />
      <div className="container relative z-10 py-6 flex flex-col gap-4 items-center justify-center">
        {/* Main grid */}
        <div className="w-full flex flex-col md:flex-row md:items-start md:justify-center gap-8 md:gap-24">
          {/* Navigation */}
          <nav className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold text-primary mb-2">Navigation</h3>
            <div className="flex flex-col w-28 md:w-32">
              <Link href="/" className="rounded-md bg-primary text-white border-2 border-primary/70 shadow-md px-0 py-1.5 text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all text-center focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 nav-cta-btn mb-1">Home</Link>
              <Link href="/about-us" className="rounded-md bg-primary text-white border-2 border-primary/70 shadow-md px-0 py-1.5 text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all text-center focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 nav-cta-btn mb-1">About</Link>
              <Link href="/blog" className="rounded-md bg-primary text-white border-2 border-primary/70 shadow-md px-0 py-1.5 text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all text-center focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 nav-cta-btn">Blog</Link>
            </div>
          </nav>
          {/* Social & Contact in compact glass card */}
          <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="glass-card rounded-xl p-4 shadow-xl border border-white/30 dark:border-white/10 backdrop-blur-xl bg-white/80 dark:bg-backgroundDark/80 w-64 max-w-full">
              <h3 className="text-base font-bold text-primary mb-2">Contact</h3>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-1 text-sm">
                <FaEnvelope className="text-primary" />
                <a href="mailto:info@indexland.com" className="hover:text-primary transition-colors">info@indexland.com</a>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-1 text-sm">
                <FaPhone className="text-primary" />
                <a href="tel:+972-3-0000000" className="hover:text-primary transition-colors">+972-3-0000000</a>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-1 text-sm">
                <FaMapMarkerAlt className="text-primary" />
                <span>{language === 'he' ? 'רחוב הנחושת 10, תל אביב' : 'Hanehoshet 10, Tel Aviv'}</span>
              </div>
            </div>
          </div>
          {/* About/Brand */}
          <div className="flex flex-col gap-2 max-w-xs items-center md:items-start">
            <h3 className="text-lg font-bold text-primary mb-1">Indexland</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-center md:text-left">
              Advanced solutions: office asset management, brokerage, and international real estate investments.
            </p>
            <div className="flex gap-4 mt-2 justify-center md:justify-start">
              <a href="https://www.linkedin.com/company/indexland" target="_blank" rel="noopener noreferrer" className="hover:text-primary text-gray-500 dark:text-gray-400 text-xl"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-4 text-center text-gray-500 dark:text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} Indexland. All rights reserved.
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