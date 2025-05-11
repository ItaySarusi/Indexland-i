'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// הגדר את סוגי השפות שנתמכות
export type Language = 'he' | 'en';

// הגדר את סוג הערכים שיהיו זמינים בקונטקסט
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (text: Record<Language, string>) => string;
  dir: 'rtl' | 'ltr';
};

// יצירת הקונטקסט עם ערכים ברירת מחדל
const LanguageContext = createContext<LanguageContextType>({
  language: 'he',
  setLanguage: () => { },
  t: () => '',
  dir: 'rtl',
});

// הוק לשימוש בקונטקסט השפה
export const useLanguage = () => useContext(LanguageContext);

// ספק הקונטקסט עבור השפה
export function LanguageProvider({ children }: { children: ReactNode }) {
  // השתמש בשפת מערכת ההפעלה או בהעדפת המשתמש השמורה כערך ברירת מחדל
  const [language, setLanguage] = useState<Language>('he');
  const [dir, setDir] = useState<'rtl' | 'ltr'>('rtl');

  // פונקציה למיפוי של טקסט לפי השפה הנוכחית
  const t = (text: Record<Language, string>): string => {
    return text[language] || text.en || '';
  };

  // עדכן את כיוון הטקסט כאשר השפה משתנה
  useEffect(() => {
    setDir(language === 'he' ? 'rtl' : 'ltr');
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    
    // שמור את העדפת השפה של המשתמש
    localStorage.setItem('language', language);
  }, [language]);

  // בדוק אם יש שפה מועדפת השמורה בדפדפן
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'he' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    } else {
      // אם אין שפה שמורה, השתמש בשפת הדפדפן
      const browserLanguage = navigator.language.startsWith('he') ? 'he' : 'en';
      setLanguage(browserLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
} 