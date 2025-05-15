'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '@/constants/site';
import { useLanguage } from '@/lib/language-context';

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // בדיקת מצב Dark Mode בטעינת הדף
  useEffect(() => {
    // בדיקה אם יש העדפה שמורה בלוקל סטורג'
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'he' ? 'en' : 'he');
  };

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <header className="navbar-glass fixed top-0 left-0 w-full z-50 transition-colors duration-200 py-2 px-4 bg-white/0 backdrop-blur-xl">
      <div className="container flex items-center justify-between flex-row-reverse">
        <nav className="hidden md:flex items-center gap-8 order-1">
          {NAV_LINKS[language].map((link) =>
            !link.children ? (
              <Link
                key={link.name}
                href={link.href}
                className={link.isButton
                  ? "snake-border-btn bg-primary text-white dark:text-textPrimary"
                  : "snake-border-btn"
                }
              >
                <span>{link.name}</span>
              </Link>
            ) : (
              <div key={link.name} className="relative group">
                <button className="snake-border-btn flex items-center gap-1">
                  <span>{link.name}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`absolute right-0 mt-2 w-64 bg-white/90 dark:bg-backgroundDark/90 border dark:border-gray-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all backdrop-blur-xl`}>
                  {link.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="block px-4 py-3 text-gray-700 dark:text-textPrimary hover:bg-gray-50 dark:hover:bg-backgroundDark dark:hover:bg-opacity-50"
                    >
                      <span className="block font-medium">{child.name}</span>
                      <span className="block text-sm text-gray-500 dark:text-textSecondary">{child.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )
          )}
          <button
            onClick={toggleDarkMode}
            className="snake-border-btn ml-2 p-2 flex items-center justify-center"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          <button
            onClick={toggleLanguage}
            className="snake-border-btn px-3 py-1 flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <span>{language === 'he' ? 'EN' : 'עב'}</span>
          </button>
        </nav>
        <Link
          href="/"
          className="font-extrabold text-3xl tracking-tight text-primary order-2 ml-0 mr-12 drop-shadow-neon"
          onClick={closeMenu}
        >
          Indexland
        </Link>
        
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleDarkMode}
            className="mr-2 p-2 rounded-md text-gray-700 dark:text-textPrimary"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          
          <button 
            onClick={toggleLanguage}
            className="mr-4 px-2 py-1 rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-textPrimary flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            {language === 'he' ? 'EN' : 'עב'}
          </button>
          
          <button 
            className="text-gray-700 dark:text-textPrimary"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-backgroundDark shadow-lg p-4 z-50">
            <nav className="flex flex-col space-y-3">
              {NAV_LINKS[language].map((link) => 
                !link.children ? (
                  <Link 
                    key={link.name}
                    href={link.href}
                    className="py-2 text-gray-700 dark:text-textPrimary hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <div key={link.name} className="py-2">
                    <div className="font-medium text-gray-700 dark:text-textPrimary mb-2">{link.name}</div>
                    <div className="px-4 space-y-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block py-1 text-gray-600 dark:text-textSecondary hover:text-primary"
                          onClick={toggleMenu}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 