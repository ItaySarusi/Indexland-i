'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// הגדר את סוגי השפות שנתמכות
export type Language = 'he' | 'en';

// הגדר את סוג הערכים שיהיו זמינים בקונטקסט
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (text: Record<Language, string> | undefined) => string;
  dir: 'rtl' | 'ltr';
};

// יצירת הקונטקסט עם ערכים ברירת מחדל
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => { },
  t: () => '',
  dir: 'ltr',
});

// הוק לשימוש בקונטקסט השפה
export const useLanguage = () => useContext(LanguageContext);

// ספק הקונטקסט עבור השפה
export function LanguageProvider({ children }: { children: ReactNode }) {
  // השתמש בשפת מערכת ההפעלה או בהעדפת המשתמש השמורה כערך ברירת מחדל
  const [language, setLanguage] = useState<Language>('en');
  const [dir, setDir] = useState<'rtl' | 'ltr'>('ltr');

  // פונקציה למיפוי של טקסט לפי השפה הנוכחית
  const t = (text: Record<Language, string> | undefined): string => {
    if (!text) return '';
    return text[language] || text.en || '';
  };

  // עדכן את כיוון הטקסט כאשר השפה משתנה
  useEffect(() => {
    const newDir = language === 'he' ? 'rtl' : 'ltr';
    setDir(newDir);
    
    // Save scroll position before changing direction
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;
    
    // Temporarily disable scroll restoration to prevent conflicts
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Update document direction
    document.documentElement.lang = language;
    document.documentElement.dir = newDir;
    
    // Add CSS to ensure smooth transition
    document.body.style.transition = 'direction 0.1s ease-in-out';
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Multiple restoration attempts to ensure scroll position is maintained
    const restoreScroll = () => {
      window.scrollTo({
        top: scrollY,
        left: scrollX,
        behavior: 'auto'
      });
    };
    
    // Immediate restoration
    restoreScroll();
    
    // Backup restorations with different timing
    setTimeout(restoreScroll, 10);
    setTimeout(restoreScroll, 50);
    setTimeout(() => {
      restoreScroll();
      // Clean up styles after direction change is complete
      document.body.style.transition = '';
      document.documentElement.style.scrollBehavior = 'smooth';
      
      // Re-enable scroll restoration
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
      }
    }, 100);
    
    // שמור את העדפת השפה של המשתמש
    localStorage.setItem('language', language);
  }, [language]);

  // בדוק אם יש שפה מועדפת השמורה בדפדפן
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'he' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    } else {
      // אם אין שפה שמורה, השתמש באנגלית כברירת מחדל
      setLanguage('en');
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
} 