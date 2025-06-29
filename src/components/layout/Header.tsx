'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/constants/site';
import { useLanguage } from '@/lib/language-context';

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

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

  // Scroll position detection for header background
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsAtTop(scrollTop < 50);
    };

    window.addEventListener('scroll', handleScroll);
    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && menuOpen) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [menuOpen]);

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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Check if a link is active
  const isLinkActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  // Check if a parent link with children is active
  const isParentActive = (link: { children?: { href: string }[]; href: string }) => {
    if (link.children) {
      return link.children.some((child: { href: string }) => isLinkActive(child.href));
    }
    return isLinkActive(link.href);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-[99999] transition-all duration-300 py-2 px-2 sm:px-4 max-w-full mx-auto ${
      isAtTop 
        ? 'bg-black/90 backdrop-blur-sm shadow-lg' 
        : 'navbar-glass bg-white/0 backdrop-blur-xl'
    }`}>
      <div className="container flex items-center justify-between flex-row-reverse flex-shrink-0" style={{ zIndex: '999999', position: 'relative' }}>
        <nav className="hidden md:flex items-center gap-8 order-1">
          {NAV_LINKS[language].map((link) =>
            !link.children ? (
              <Link
                key={link.name}
                href={link.href}
                className={`${link.isButton
                  ? "snake-border-btn bg-primary text-white dark:text-textPrimary"
                  : isLinkActive(link.href)
                    ? `snake-border-btn bg-primary/10 border-primary/30 font-semibold ${isAtTop ? 'text-white hover:text-gray-300' : 'text-primary hover:text-black'}`
                    : `snake-border-btn ${isAtTop ? 'text-white hover:text-gray-300' : 'hover:text-black'}`
                }`}
              >
                <span>{link.name}</span>
              </Link>
            ) : (
              <div key={link.name} className="relative group/dropdown">
                <button className={`snake-border-btn flex items-center gap-1 cursor-pointer ${
                  isParentActive(link) 
                    ? `bg-primary/10 border-primary/30 font-semibold ${isAtTop ? 'text-white hover:text-gray-300' : 'text-primary hover:text-black'}`
                    : `${isAtTop ? 'text-white hover:text-gray-300' : 'hover:text-black'}`
                }`}>
                  <span>{link.name}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-200 group-hover/dropdown:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute right-0 top-full w-64 bg-white/95 dark:bg-backgroundDark/95 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 ease-out backdrop-blur-xl z-[999999] transform scale-95 group-hover/dropdown:scale-100 origin-top-right pointer-events-none group-hover/dropdown:pointer-events-auto">
                  <div className="py-2">
                    {link.children.map((child, index) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className={`block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-all duration-200 ${
                          index === 0 ? 'rounded-t-lg' : ''
                        } ${
                          index === link.children.length - 1 ? 'rounded-b-lg' : ''
                        } ${
                          isLinkActive(child.href)
                            ? "bg-primary/10 text-primary font-semibold border-r-2 border-primary"
                            : "text-gray-700 dark:text-textPrimary hover:text-primary"
                        }`}
                      >
                        <span className="block font-medium text-sm">{child.name}</span>
                        <span className="block text-xs text-gray-500 dark:text-textSecondary mt-1">{child.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
          <button
            onClick={toggleDarkMode}
            className="snake-border-btn ml-2 p-2 flex items-center justify-center no-hover-effect"
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
            className="snake-border-btn px-3 py-1 flex items-center gap-1 no-hover-effect"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <span>{language === 'he' ? 'EN' : 'עב'}</span>
          </button>
        </nav>
        
        <Link
          href="/"
          className="font-extrabold text-3xl tracking-tight text-primary order-2 ml-0 mr-12 drop-shadow-neon transition-colors duration-300"
          onClick={closeMenu}
        >
          Indexland
        </Link>
        
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleDarkMode}
            className={`mr-2 p-2 rounded-md no-hover-effect cursor-pointer transition-colors ${
              isAtTop 
                ? 'text-white hover:bg-white/20' 
                : 'text-gray-700 dark:text-textPrimary hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
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
            className={`mr-4 px-2 py-1 rounded-md border flex items-center gap-1 no-hover-effect cursor-pointer transition-colors ${
              isAtTop 
                ? 'border-white/30 text-white hover:bg-white/20' 
                : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-textPrimary hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            {language === 'he' ? 'EN' : 'עב'}
          </button>
          
          <button 
            className={`cursor-pointer transition-all duration-300 p-2 rounded-md ${
              menuOpen 
                ? 'bg-black text-white hover:bg-gray-800' 
                : isAtTop 
                  ? 'text-white hover:bg-white/20' 
                  : 'text-gray-700 dark:text-textPrimary hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6">
              {/* Hamburger Icon */}
              <div 
                className={`absolute inset-0 transition-all duration-300 cursor-pointer ${menuOpen ? 'opacity-0 rotate-180 scale-75 pointer-events-none' : 'opacity-100 rotate-0 scale-100'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setMenuOpen(true);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              {/* X Icon */}
              <div 
                className={`absolute inset-0 transition-all duration-300 cursor-pointer ${menuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-75 pointer-events-none'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setMenuOpen(false);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </button>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden absolute left-0 right-0 bg-white/95 dark:bg-backgroundDark/95 shadow-lg z-[999999] border-t border-gray-200 dark:border-gray-700 backdrop-blur-xl transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen 
            ? 'max-h-96 opacity-100 transform translate-y-0 visible' 
            : 'max-h-0 opacity-0 transform -translate-y-2 pointer-events-none invisible'
        }`} style={{ top: 'calc(100% + 8px)' }}>
          <div ref={menuRef} className="p-4">
            <nav className="flex flex-col space-y-3">
              {NAV_LINKS[language].map((link, index) => 
                !link.children ? (
                  <Link 
                    key={link.name}
                    href={link.href}
                    className={`py-2 px-4 rounded-md text-center transition-all duration-300 ease-out cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transform ${
                      menuOpen 
                        ? 'translate-x-0 opacity-100 scale-100' 
                        : 'translate-x-4 opacity-0 scale-95'
                    } ${
                      link.isButton
                        ? "bg-primary text-white dark:text-textPrimary hover:bg-primary/90"
                        : isLinkActive(link.href)
                          ? "bg-primary/10 text-primary font-semibold border border-primary/30"
                          : "text-gray-700 dark:text-textPrimary hover:text-primary"
                    }`}
                    style={{ 
                      transitionDelay: menuOpen ? `${index * 50}ms` : `${(NAV_LINKS[language].length - index - 1) * 25}ms` 
                    }}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <div 
                    key={link.name} 
                    className={`py-2 transition-all duration-300 ease-out transform ${
                      menuOpen 
                        ? 'translate-x-0 opacity-100 scale-100' 
                        : 'translate-x-4 opacity-0 scale-95'
                    }`}
                    style={{ 
                      transitionDelay: menuOpen ? `${index * 50}ms` : `${(NAV_LINKS[language].length - index - 1) * 25}ms` 
                    }}
                  >
                    <div className={`font-medium mb-2 ${
                      isParentActive(link) 
                        ? "text-primary font-semibold" 
                        : "text-gray-700 dark:text-textPrimary"
                    }`}>{link.name}</div>
                    <div className="px-4 space-y-2">
                      {link.children.map((child, childIndex) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={`block py-1 transition-all duration-300 ease-out cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded px-2 transform ${
                            menuOpen 
                              ? 'translate-x-0 opacity-100 scale-100' 
                              : 'translate-x-2 opacity-0 scale-95'
                          } ${
                            isLinkActive(child.href)
                              ? "text-primary font-semibold"
                              : "text-gray-600 dark:text-textSecondary hover:text-primary"
                          }`}
                          style={{ 
                            transitionDelay: menuOpen 
                              ? `${(index * 50) + (childIndex * 25) + 100}ms` 
                              : `${(NAV_LINKS[language].length - index - 1) * 25 + (link.children.length - childIndex - 1) * 15}ms` 
                          }}
                          onClick={closeMenu}
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
        </div>
      </div>
    </header>
  );
} 