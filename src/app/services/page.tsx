'use client';

import PageContainer from "@/components/layout/PageContainer";
import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Metrics from "@/components/sections/Metrics";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";
import ContactSection from "@/components/sections/ContactSection";
import { IMAGES } from "@/constants/site";

export default function Services() {
  // שירותים לדוגמה
  const services = [
    {
      title: {
        he: "ניהול נכסי משרדים",
        en: "Office Asset Management"
      },
      description: {
        he: "ניהול מקצועי ומקיף של נכסי משרדים עם דגש על מקסום תשואה ושביעות רצון השוכרים",
        en: "Professional and comprehensive management of office assets with emphasis on maximizing returns and tenant satisfaction"
      },
      imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=600&auto=format",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"></path>
        </svg>
      ),
      svg: "/files/svg/office-asset-management.svg",
      href: "/services/office-asset-management"
    },
    {
      title: {
        he: "תיווך השקעות בינלאומיות",
        en: "International Investment Brokerage"
      },
      description: {
        he: "איתור וניתוח הזדמנויות השקעה איכותיות בשווקים בינלאומיים, כולל ליווי מלא בתהליך הרכישה",
        en: "Locating and analyzing quality investment opportunities in international markets, including full guidance in the acquisition process"
      },
      imageUrl: "https://images.unsplash.com/photo-1460572894071-bde5697f7197?q=80&w=600&auto=format",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"></path>
        </svg>
      ),
      svg: "/files/svg/international-investment-brokerage.svg",
      href: "/services/international-investment-brokerage"
    },
    {
      title: {
        he: "ייעוץ השקעות",
        en: "Investment Consulting"
      },
      description: {
        he: "ייעוץ פיננסי מותאם אישית המתמקד באסטרטגיות השקעה בנדל\"ן מסחרי ובניית תיק השקעות מאוזן",
        en: "Personalized financial consulting focusing on commercial real estate investment strategies and building a balanced investment portfolio"
      },
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
        </svg>
      ),
      svg: "/files/svg/investment-consulting.svg",
      href: "/services/investment-consulting"
    },
    {
      title: {
        he: "פיתוח וייזום פרויקטים",
        en: "Project Development & Initiation"
      },
      description: {
        he: "ליווי פרויקטים מהקונספט ועד להשלמה, כולל בדיקות היתכנות, תכנון, רישוי וניהול הבנייה",
        en: "Project guidance from concept to completion, including feasibility studies, planning, licensing, and construction management"
      },
      imageUrl: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?q=80&w=600&auto=format",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path>
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
        </svg>
      ),
      svg: "/files/svg/project-development.svg",
      href: "/services/project-development"
    },
  ];
  
  // יתרונות לדוגמה
  const features = [
    {
      title: {
        he: "גישה רב-תחומית",
        en: "Multidisciplinary Approach"
      },
      description: {
        he: "צוות מומחים ממגוון תחומים המספק פתרונות כוללים - משפטיים, פיננסיים ותפעוליים",
        en: "A team of experts from various fields providing comprehensive solutions - legal, financial, and operational"
      },
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
        </svg>
      ),
    },
    {
      title: {
        he: "פיזור סיכונים",
        en: "Risk Diversification"
      },
      description: {
        he: "אסטרטגיות חכמות לפיזור השקעות בין שווקים, נכסים ומדינות שונות",
        en: "Smart strategies for diversifying investments between markets, assets, and different countries"
      },
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: {
        he: "דיגיטציה וחדשנות",
        en: "Digitization & Innovation"
      },
      description: {
        he: "כלים טכנולוגיים מתקדמים לניטור וניהול נכסים וניתוח שוק בזמן אמת",
        en: "Advanced technological tools for monitoring and managing assets and real-time market analysis"
      },
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: {
        he: "מיקוד בקיימות",
        en: "Focus on Sustainability"
      },
      description: {
        he: "התמחות בנכסים ירוקים וסביבתיים עם דגש על חיסכון אנרגטי וקיימות לטווח ארוך",
        en: "Specialization in green and environmental assets with emphasis on energy savings and long-term sustainability"
      },
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.168 1.168a4 4 0 00-2.925.486l-1.042-1.042A3 3 0 007 8.172z" clipRule="evenodd"></path>
        </svg>
      ),
    },
  ];
  
  // מדדים לדוגמה
  const metrics = [
    {
      value: "97%",
      label: {
        he: "תפוסה ממוצעת",
        en: "Average Occupancy"
      },
      description: {
        he: "אחוז תפוסה ממוצע בנכסים שבניהולנו",
        en: "Average occupancy rate in properties under our management"
      },
    },
    {
      value: "+25%",
      label: {
        he: "תשואה משופרת",
        en: "Improved Yield"
      },
      description: {
        he: "שיפור ממוצע בתשואת נכסים תחת ניהולנו",
        en: "Average improvement in property yields under our management"
      },
    },
    {
      value: "150+",
      label: {
        he: "עסקאות בינלאומיות",
        en: "International Transactions"
      },
      description: {
        he: "עסקאות מוצלחות שתיווכנו בשווקים בינלאומיים",
        en: "Successful transactions we brokered in international markets"
      },
    },
    {
      value: "10+",
      label: {
        he: "מדינות פעילות",
        en: "Active Countries"
      },
      description: {
        he: "מדינות בהן אנו מנהלים נכסים ועסקאות",
        en: "Countries where we manage properties and transactions"
      },
    },
  ];

  // שאלות נפוצות
  const faqs = [
    {
      question: {
        he: "מהם היתרונות של ניהול נכסי משרדים דרך חברה מקצועית?",
        en: "What are the advantages of professional office asset management?"
      },
      answer: {
        he: "ניהול מקצועי מאפשר מקסום תשואה, הפחתת עלויות, שיפור שביעות רצון שוכרים, טיפול בתחזוקה שוטפת, מערכות דיגיטליות מתקדמות, וצוות מומחים זמין. הדבר מוביל לערך נכס גבוה יותר ושיעורי תפוסה גבוהים.",
        en: "Professional management enables return maximization, cost reduction, improved tenant satisfaction, ongoing maintenance handling, advanced digital systems, and an available team of experts. This leads to higher property value and occupancy rates."
      }
    },
    {
      question: {
        he: "אילו שווקים בינלאומיים מציעים את ההזדמנויות הטובות ביותר כיום?",
        en: "Which international markets offer the best opportunities today?"
      },
      answer: {
        he: "השווקים המובילים משתנים בהתאם לתנאים גלובליים, אך כיום אנו רואים הזדמנויות משמעותיות בערים מרכזיות באירופה, שווקים מתפתחים במזרח אירופה, ומוקדי טכנולוגיה בארה\"ב. חשוב לבצע ניתוח מותאם אישית לצרכי המשקיע הספציפיים.",
        en: "Leading markets vary according to global conditions, but today we see significant opportunities in central European cities, developing markets in Eastern Europe, and technology hubs in the US. It's important to perform customized analysis for the specific investor's needs."
      }
    },
    {
      question: {
        he: "כיצד תפורים השירותים שלכם למשקיעים בינלאומיים?",
        en: "How are your services tailored for international investors?"
      },
      answer: {
        he: "לצוות שלנו יש ניסיון בעבודה עם משקיעים מרחבי העולם. אנו מספקים תמיכה רב-לשונית, הבנה מעמיקה של חוקי מס בינלאומיים, ייעוץ משפטי מקומי, וניהול נכסים מרחוק. אנו גם מסייעים בהתאמה תרבותית ובהבנת הפרקטיקות העסקיות בכל שוק.",
        en: "Our team has experience working with investors from around the world. We provide multilingual support, deep understanding of international tax laws, local legal advice, and remote property management. We also assist with cultural adaptation and understanding business practices in each market."
      }
    },
    {
      question: {
        he: "מהו תהליך ההערכה והניתוח שלכם עבור השקעות פוטנציאליות?",
        en: "What is your evaluation and analysis process for potential investments?"
      },
      answer: {
        he: "התהליך שלנו כולל: 1) ניתוח מאקרו של השוק והמיקום, 2) בדיקת נאותות מקיפה הכוללת היבטים פיננסיים, טכניים ומשפטיים, 3) מודלים פיננסיים מפורטים, 4) הערכת סיכונים, 5) ניתוח תרחישים שונים, ו-6) המלצות אסטרטגיות עם תכנית יישום.",
        en: "Our process includes: 1) Macro analysis of the market and location, 2) Comprehensive due diligence including financial, technical, and legal aspects, 3) Detailed financial models, 4) Risk assessment, 5) Analysis of different scenarios, and 6) Strategic recommendations with implementation plan."
      }
    },
    {
      question: {
        he: "איך אתם מבטיחים שקיפות בניהול ההשקעות?",
        en: "How do you ensure transparency in investment management?"
      },
      answer: {
        he: "השקיפות היא ערך מרכזי עבורנו. אנו מספקים דוחות תקופתיים מפורטים, גישה בזמן אמת למערכות ניהול הנכסים הדיגיטליות שלנו, פגישות סקירה רבעוניות, ותקשורת פתוחה ומיידית לגבי כל התפתחות משמעותית. הלקוחות שלנו מקבלים תמונה מלאה ומדויקת של ביצועי ההשקעות שלהם.",
        en: "Transparency is a core value for us. We provide detailed periodic reports, real-time access to our digital asset management systems, quarterly review meetings, and open and immediate communication about any significant developments. Our clients receive a complete and accurate picture of their investment performance."
      }
    },
    {
      question: {
        he: "האם הפתרונות שלכם מותאמים למשקיעים קטנים או רק למוסדיים?",
        en: "Are your solutions suitable for small investors or only institutional ones?"
      },
      answer: {
        he: "אנו מציעים פתרונות מותאמים לכל סוגי המשקיעים, מיחידים עם תקציבים מוגבלים ועד משקיעים מוסדיים גדולים. עבור משקיעים קטנים יותר, אנו מציעים אפשרויות כמו קרנות השקעה משותפות, שותפויות ומבני השקעה המאפשרים גישה לנכסים איכותיים עם השקעה התחלתית נמוכה יותר.",
        en: "We offer customized solutions for all types of investors, from individuals with limited budgets to large institutional investors. For smaller investors, we offer options such as joint investment funds, partnerships, and investment structures that allow access to quality assets with a lower initial investment."
      }
    }
  ];

  // פרטי יצירת קשר
  const contactInfo = {
    email: {
      label: {
        he: "דוא\"ל",
        en: "Email"
      },
      value: "info@indexland.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      )
    },
    phone: {
      label: {
        he: "טלפון",
        en: "Phone"
      },
      value: "+972-3-1234567",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
      )
    },
    address: {
      label: {
        he: "כתובת",
        en: "Address"
      },
      value: {
        he: "רחוב אלנבי 123, תל אביב, ישראל",
        en: "123 Allenby St., Tel Aviv, Israel"
      },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      )
    }
  };

  // פרטי יצירת קשר
  const contactInfos = [
    {
      icon: contactInfo.email.icon,
      title: contactInfo.email.label,
      info: contactInfo.email.value,
      link: `mailto:${contactInfo.email.value}`
    },
    {
      icon: contactInfo.phone.icon,
      title: contactInfo.phone.label,
      info: contactInfo.phone.value,
      link: `tel:${contactInfo.phone.value}`
    },
    {
      icon: contactInfo.address.icon,
      title: contactInfo.address.label,
      info: contactInfo.address.value
    }
  ];

  return (
    <PageContainer>
      <Hero
        title="Seamless Workspaces & Asset Control"
        subtitle="Indexland handles every step of your office lifecycle and real-estate portfolio—so you can focus on business."
        primaryActionLabel="Book a Meeting"
        primaryActionHref="/contact?meeting=true"
        secondaryActionLabel="Learn More"
        secondaryActionHref="#services-overview"
        imageUrl="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80"
        variant="background-image"
      />

      {/* Turnkey Office Solutions Flow Line Section */}
      <section className="w-full flex flex-col items-center py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-12">Turnkey Office Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl">
          {/* Step 1 */}
          <div className="group flex flex-col items-center text-center bg-white border-2 border-orange-100 rounded-2xl shadow-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-orange-400 cursor-pointer min-h-[260px]">
            <svg className="w-12 h-12 mb-4 text-orange-500 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 48 48" stroke="currentColor"><rect x="8" y="16" width="32" height="24" rx="4" fill="#fff" stroke="#FF9800" strokeWidth="2.5"/><rect x="16" y="24" width="16" height="8" rx="2" fill="#FF9800"/><path d="M16 16V12a8 8 0 0 1 16 0v4" stroke="#FF9800" strokeWidth="2.5" strokeLinecap="round"/></svg>
            <h3 className="text-xl font-bold mb-2 text-primary">Discovery & Scouting</h3>
            <p className="text-gray-700 text-base font-medium">We start with a deep-dive consultation to understand your business needs, location preferences, and budget. Then, we organize tailored tours in prime Tel Aviv districts, presenting only the most relevant office spaces for your company's goals.</p>
          </div>
          {/* Step 2 */}
          <div className="group flex flex-col items-center text-center bg-white border-2 border-orange-100 rounded-2xl shadow-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-orange-400 cursor-pointer min-h-[260px]">
            <svg className="w-12 h-12 mb-4 text-orange-500 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 48 48" stroke="currentColor"><rect x="10" y="20" width="28" height="16" rx="4" fill="#fff" stroke="#FF9800" strokeWidth="2.5"/><path d="M14 28h20M14 32h12" stroke="#FF9800" strokeWidth="2.5" strokeLinecap="round"/><rect x="18" y="12" width="12" height="8" rx="2" fill="#FF9800"/></svg>
            <h3 className="text-xl font-bold mb-2 text-primary">Negotiation & Legal</h3>
            <p className="text-gray-700 text-base font-medium">Our experts negotiate the best lease terms for you, manage all legal paperwork, and ensure full compliance. We handle every detail, from contract review to final signatures, so you can move forward with confidence and peace of mind.</p>
          </div>
          {/* Step 3 */}
          <div className="group flex flex-col items-center text-center bg-white border-2 border-orange-100 rounded-2xl shadow-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-orange-400 cursor-pointer min-h-[260px]">
            <svg className="w-12 h-12 mb-4 text-orange-500 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 48 48" stroke="currentColor"><rect x="8" y="20" width="32" height="16" rx="4" fill="#fff" stroke="#FF9800" strokeWidth="2.5"/><rect x="16" y="28" width="16" height="4" rx="2" fill="#FF9800"/><path d="M24 20v-8m0 0l-4 4m4-4l4 4" stroke="#FF9800" strokeWidth="2.5" strokeLinecap="round"/></svg>
            <h3 className="text-xl font-bold mb-2 text-primary">Build-Out & Move-In</h3>
            <p className="text-gray-700 text-base font-medium">We coordinate all aspects of your office fit-out, including IT integrations, furniture, and branding. Our team manages timelines and vendors, ensuring a seamless move-in and a workspace ready for immediate productivity.</p>
          </div>
          {/* Step 4 */}
          <div className="group flex flex-col items-center text-center bg-white border-2 border-orange-100 rounded-2xl shadow-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-orange-400 cursor-pointer min-h-[260px]">
            <svg className="w-12 h-12 mb-4 text-orange-500 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 48 48" stroke="currentColor"><rect x="12" y="20" width="24" height="16" rx="4" fill="#fff" stroke="#FF9800" strokeWidth="2.5"/><path d="M24 28h8M16 32h16" stroke="#FF9800" strokeWidth="2.5" strokeLinecap="round"/><circle cx="24" cy="28" r="2" fill="#FF9800"/></svg>
            <h3 className="text-xl font-bold mb-2 text-primary">Ongoing Concierge</h3>
            <p className="text-gray-700 text-base font-medium">After move-in, we provide ongoing support: supplies, maintenance, staff assistance, and day-to-day problem-solving. Our concierge service ensures your office runs smoothly, letting you focus on your business growth.</p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto my-16">
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full opacity-30 animate-fade-in" />
      </div>

      {/* ServicesOverview Section */}
      <div className="container max-w-6xl mx-auto mb-20 animate-fade-in animate-scale-in" style={{ animationDelay: '0.1s' }}>
        <div className="glass-card rounded-3xl shadow-2xl p-10 md:p-14">
          <ServicesOverview 
            title={{
              he: "הפתרונות שלנו",
              en: "Our Solutions"
            }}
            subtitle={{
              he: "שירותים מקצועיים המותאמים לצרכי הלקוח",
              en: "Professional services tailored to client needs"
            }}
            services={services} 
          />
        </div>
      </div>

      {/* Divider */}
      <div className="container mx-auto my-16">
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full opacity-30 animate-fade-in" />
      </div>

      {/* WhyChooseUs Section */}
      <div className="container max-w-6xl mx-auto mb-20 animate-fade-in animate-scale-in" style={{ animationDelay: '0.2s' }}>
        <div className="glass-card rounded-3xl shadow-2xl p-10 md:p-14">
          <WhyChooseUs 
            title={{
              he: "למה לבחור בנו",
              en: "Why Choose Us"
            }}
            subtitle={{
              he: "הצוות המקצועי שלנו מביא ניסיון של עשרות שנים וגישה חדשנית",
              en: "Our professional team brings decades of experience and an innovative approach"
            }}
            features={features} 
            imageUrl={IMAGES?.sections?.whyChooseUs || ""}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="container mx-auto my-16">
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full opacity-30 animate-fade-in" />
      </div>

      {/* Metrics Section */}
      <div className="container max-w-6xl mx-auto mb-20 animate-fade-in animate-scale-in" style={{ animationDelay: '0.3s' }}>
        <div className="glass-card rounded-3xl shadow-2xl p-10 md:p-14">
          <Metrics 
            title={{
              he: "ביצועים מוכחים",
              en: "Proven Performance"
            }}
            subtitle={{
              he: "תוצאות מוכחות בשטח",
              en: "Proven results in the field"
            }}
            metrics={metrics} 
          />
        </div>
      </div>

      {/* Divider */}
      <div className="container mx-auto my-16">
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full opacity-30 animate-fade-in" />
      </div>

      {/* FAQ Section */}
      <div className="container max-w-6xl mx-auto mb-20 animate-fade-in animate-scale-in" style={{ animationDelay: '0.4s' }}>
        <div className="glass-card rounded-3xl shadow-2xl p-10 md:p-14">
          <FaqSection 
            title={{
              he: "שאלות נפוצות",
              en: "Frequently Asked Questions"
            }}
            subtitle={{
              he: "תשובות לשאלות הנפוצות ביותר על שירותים שלנו",
              en: "Answers to the most common questions about our services"
            }}
            faqs={faqs}
            columns={2}
            bgColor="light"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="container mx-auto my-16">
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full opacity-30 animate-fade-in" />
      </div>

      {/* Contact Section */}
      <div className="container max-w-4xl mx-auto mb-20 animate-fade-in animate-scale-in" style={{ animationDelay: '0.5s' }}>
        <div className="glass-card rounded-3xl shadow-2xl p-10 md:p-14">
          <ContactSection 
            title={{
              he: "דברו איתנו",
              en: "Talk to Us"
            }}
            subtitle={{
              he: "צור קשר עם המומחים שלנו כדי לקבל מידע נוסף על השירותים שלנו",
              en: "Contact our experts to get more information about our services"
            }}
            contactInfos={contactInfos}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="container mx-auto my-16">
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full opacity-30 animate-fade-in" />
      </div>

      {/* CTA Section */}
      <div className="container max-w-4xl mx-auto mb-20 animate-fade-in animate-scale-in" style={{ animationDelay: '0.6s' }}>
        <CtaSection 
          title={{
            he: "מוכנים להתחיל?",
            en: "Ready to Start?"
          }}
          subtitle={{
            he: "הצעד הראשון להשקעה מוצלחת מתחיל בשיחה",
            en: "The first step to a successful investment starts with a conversation"
          }}
          primaryButtonText={{
            he: "קבע פגישת ייעוץ",
            en: "Schedule a Consultation"
          }}
          primaryButtonHref="/contact"
          secondaryButtonText={{
            he: "צור קשר",
            en: "Contact Us"
          }}
          secondaryButtonHref="/contact"
          variant="highlight"
          bgColor="primary"
        />
      </div>
    </PageContainer>
  );
} 