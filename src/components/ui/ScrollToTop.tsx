'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Check initial scroll position
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`fixed bottom-6 right-6 z-[99998] w-14 h-14 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl active:scale-95 flex items-center justify-center cursor-pointer ${
        isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-4 pointer-events-none'
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        background: 'rgb(255 87 34 / var(--tw-text-opacity))',
        boxShadow: '0 4px 20px rgba(255, 152, 0, 0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 6px 25px rgba(255, 152, 0, 0.6)';
        e.currentTarget.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 152, 0, 0.4)';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      {/* Black arrow icon */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6 text-black" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 10l7-7m0 0l7 7m-7-7v18" 
        />
      </svg>
    </button>
  );
} 