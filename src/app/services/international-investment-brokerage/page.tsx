"use client";
import { useLanguage } from "@/lib/language-context";
import PageContainer from "@/components/layout/PageContainer";
import { SEO } from "@/constants/site";
import { useMemo } from "react";

export default function InternationalInvestmentBrokerage() {
  const { t, language } = useLanguage();

  // SEO metadata
  const metadata = useMemo(() => ({
    title: "Turnkey Office Solutions & Large Asset Management",
    description: t(SEO.internationalInvestmentBrokerage.description),
    keywords: t(SEO.internationalInvestmentBrokerage.keywords),
    openGraph: {
      images: [SEO.internationalInvestmentBrokerage.ogImage],
    },
  }), [language]);

  // Features
  const features = [
    {
      title: { he: "השקעות גלובליות", en: "Global Investments" },
      description: {
        he: "גישה לשווקים בינלאומיים עם פוטנציאל צמיחה גבוה",
        en: "Access to international markets with high growth potential",
      },
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: { he: "ליווי מקצועי", en: "Professional Guidance" },
      description: {
        he: "ליווי מקצה לקצה בעסקאות השקעה בינלאומיות",
        en: "End-to-end guidance in international investment deals",
      },
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: { he: "ניתוח שוק מקיף", en: "Comprehensive Market Analysis" },
      description: {
        he: "ניתוח מעמיק של שווקים ומגמות להבטחת השקעה חכמה",
        en: "In-depth analysis of markets and trends to ensure smart investment",
      },
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: { he: "פיזור סיכונים", en: "Risk Diversification" },
      description: {
        he: "אסטרטגיות לפיזור סיכונים אופטימלי בשווקים גלובליים",
        en: "Strategies for optimal risk diversification in global markets",
      },
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"></path>
        </svg>
      ),
    },
  ];

  // Hero Section
  const heroTitle = {
    he: "השקעות נדל\"ן בינלאומיות להשכרה",
    en: "International Real Estate Investments for Rent",
  };
  const heroDesc = {
    he: "גלו עולם של הזדמנויות השקעה יוקרתיות בנדל\"ן להשכרה במיקומים בינלאומיים מובילים, עם ליווי אישי ומקצועי.",
    en: "Discover a world of luxury real estate investment opportunities for rent in leading international locations, with personal and professional guidance.",
  };
  const heroBtn = {
    he: "לתיאום פגישת ייעוץ",
    en: "Book a Consultation",
  };

  // Dubai Section
  const dubaiTitle = {
    he: "השקעות בינלאומיות בדובאי",
    en: "International Investments in Dubai",
  };
  const dubaiDesc = {
    he: "דובאי הפכה בשנים האחרונות ליעד השקעה מבוקש למשקיעי נדל\"ן מכל העולם. בזכות רגולציה מתקדמת, תשואות גבוהות, פטור ממס רכישה, ומגוון פרויקטים יוקרתיים – דובאי מציעה שילוב נדיר של ביטחון, חדשנות ורווחיות. אנו מלווים את לקוחותינו בכל שלב – מאיתור הנכס ועד לניהול השוטף והשכרתו.",
    en: "In recent years, Dubai has become a sought-after investment destination for real estate investors worldwide. Thanks to advanced regulation, high returns, purchase tax exemption, and a variety of luxury projects – Dubai offers a rare combination of security, innovation, and profitability. We accompany our clients at every stage – from property sourcing to ongoing management and leasing.",
  };

  // Why Us Section
  const whyUsTitle = {
    he: "למה לעבוד איתנו",
    en: "Why Work With Us",
  };

  // CTA Section
  const ctaTitle = {
    he: "מעוניינים להשקיע בנדל\"ן בדובאי או בעולם?",
    en: "Interested in investing in real estate in Dubai or worldwide?",
  };
  const ctaDesc = {
    he: "צוות המומחים שלנו ישמח ללוות אותך בכל שלב – מהתכנון ועד לניהול הנכס והשכרתו. פנה אלינו לייעוץ ראשוני ללא התחייבות.",
    en: "Our team of experts will be happy to guide you at every stage – from planning to property management and leasing. Contact us for an initial consultation with no obligation.",
  };
  const ctaBtn = {
    he: "לתיאום פגישה",
    en: "Book a Meeting",
  };

  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Modern Office background */}
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1920&auto=format"
          alt="Modern Office"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 brightness-60"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4 py-24">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white drop-shadow-2xl" style={{lineHeight:1.1}}>
            Seamless Workspaces & Asset Control
          </h1>
          <p className="text-lg md:text-2xl text-white/90 font-light mb-10 max-w-2xl">
            Indexland handles every stage of your office lifecycle and real-estate portfolio—so you can focus on business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?meeting=true"
              className="px-8 py-3 rounded-full bg-orange-500 text-white font-semibold shadow-lg hover:bg-orange-600 transition-all text-lg border-2 border-orange-500"
            >
              Book a Meeting
            </a>
            <a
              href="#learn-more"
              className="px-8 py-3 rounded-full bg-white text-orange-500 font-semibold shadow-lg hover:bg-orange-50 transition-all text-lg border-2 border-orange-500"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto my-12">
        <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full opacity-40" />
      </div>

      {/* Dubai Investment Section */}
      <section className="relative py-20 overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/5 pointer-events-none rounded-3xl blur-lg opacity-60" />
        <div className="container z-10 relative">
          <div className="max-w-2xl mx-auto glass-card rounded-3xl shadow-2xl p-12 animate-slide-in-up text-center border border-white/30 dark:border-white/10 backdrop-blur-xl bg-white/70 dark:bg-gray-900/60">
            <div className="flex items-center justify-center mb-6">
              <svg className="w-14 h-14 text-primary drop-shadow-glow mr-3 rtl:ml-3 rtl:mr-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 110-16 8 8 0 010 16zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z" />
              </svg>
              <h2 className="text-3xl font-bold text-primary">
                {t(dubaiTitle)}
              </h2>
            </div>
            <p className="text-gray-700 dark:text-textSecondary text-lg">
              {t(dubaiDesc)}
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto my-12">
        <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full opacity-40" />
      </div>

      {/* Why Work With Us Section */}
      <section className="relative py-20 overflow-visible">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-12 animate-fade-in">
            {t(whyUsTitle)}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl shadow-xl p-8 flex flex-col items-center text-center animate-slide-in-up border border-white/20 dark:border-white/10 backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 hover:scale-105 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
              >
                <div className="absolute inset-0 pointer-events-none group-hover:opacity-60 opacity-0 transition-all duration-300 bg-gradient-to-br from-primary/10 to-secondary/20 blur-lg" />
                {feature.icon}
                <h3 className="text-xl font-bold text-primary mb-2 z-10 relative">
                  {t(feature.title)}
                </h3>
                <p className="text-gray-700 dark:text-textSecondary text-base z-10 relative">
                  {t(feature.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto my-12">
        <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full opacity-40" />
      </div>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container">
          <div className="max-w-2xl mx-auto glass-card rounded-3xl shadow-2xl p-12 animate-fade-in text-center border border-white/30 dark:border-white/10 backdrop-blur-xl bg-white/70 dark:bg-gray-900/60">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">
              {t(ctaTitle)}
            </h2>
            <p className="text-lg text-gray-700 dark:text-textSecondary mb-10">
              {t(ctaDesc)}
            </p>
            <a href="/book-meeting" className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 text-lg">
              {t(ctaBtn)}
            </a>
          </div>
        </div>
      </section>

      {/* Turnkey Office Solutions Flow Line Section */}
      <section className="w-full flex flex-col items-center py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-2">Turnkey Office Solutions – שירותי משרדים מקצה לקצה</h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 w-full max-w-5xl justify-between items-center">
          {/* Step 1 */}
          <div className="group flex flex-col items-center text-center flex-1 px-4 py-8 transition-all duration-300 hover:bg-orange-50 hover:shadow-xl rounded-2xl cursor-pointer">
            <svg className="w-12 h-12 mb-4 text-orange-500 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 48 48" stroke="currentColor"><rect x="8" y="16" width="32" height="24" rx="4" fill="#fff" stroke="#FF9800" strokeWidth="2.5"/><rect x="16" y="24" width="16" height="8" rx="2" fill="#FF9800"/><path d="M16 16V12a8 8 0 0 1 16 0v4" stroke="#FF9800" strokeWidth="2.5" strokeLinecap="round"/></svg>
            <h3 className="text-xl font-bold mb-2 text-primary">Discovery & Scouting</h3>
            <p className="text-gray-700 text-base">Tailored tours in prime Tel Aviv districts</p>
          </div>
          {/* Line connector */}
          <div className="hidden md:block w-8 h-1 bg-gradient-to-r from-orange-300 to-orange-500 mx-2 rounded-full" />
          {/* Step 2 */}
          <div className="group flex flex-col items-center text-center flex-1 px-4 py-8 transition-all duration-300 hover:bg-orange-50 hover:shadow-xl rounded-2xl cursor-pointer">
            <svg className="w-12 h-12 mb-4 text-orange-500 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 48 48" stroke="currentColor"><rect x="10" y="20" width="28" height="16" rx="4" fill="#fff" stroke="#FF9800" strokeWidth="2.5"/><path d="M14 28h20M14 32h12" stroke="#FF9800" strokeWidth="2.5" strokeLinecap="round"/><rect x="18" y="12" width="12" height="8" rx="2" fill="#FF9800"/></svg>
            <h3 className="text-xl font-bold mb-2 text-primary">Negotiation & Legal</h3>
            <p className="text-gray-700 text-base">Best lease terms, full paperwork support</p>
          </div>
          <div className="hidden md:block w-8 h-1 bg-gradient-to-r from-orange-300 to-orange-500 mx-2 rounded-full" />
          {/* Step 3 */}
          <div className="group flex flex-col items-center text-center flex-1 px-4 py-8 transition-all duration-300 hover:bg-orange-50 hover:shadow-xl rounded-2xl cursor-pointer">
            <svg className="w-12 h-12 mb-4 text-orange-500 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 48 48" stroke="currentColor"><rect x="8" y="20" width="32" height="16" rx="4" fill="#fff" stroke="#FF9800" strokeWidth="2.5"/><rect x="16" y="28" width="16" height="4" rx="2" fill="#FF9800"/><path d="M24 20v-8m0 0l-4 4m4-4l4 4" stroke="#FF9800" strokeWidth="2.5" strokeLinecap="round"/></svg>
            <h3 className="text-xl font-bold mb-2 text-primary">Build-Out & Move-In</h3>
            <p className="text-gray-700 text-base">Fit-out, IT integrations, and launch coordination</p>
          </div>
          <div className="hidden md:block w-8 h-1 bg-gradient-to-r from-orange-300 to-orange-500 mx-2 rounded-full" />
          {/* Step 4 */}
          <div className="group flex flex-col items-center text-center flex-1 px-4 py-8 transition-all duration-300 hover:bg-orange-50 hover:shadow-xl rounded-2xl cursor-pointer">
            <svg className="w-12 h-12 mb-4 text-orange-500 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 48 48" stroke="currentColor"><rect x="12" y="20" width="24" height="16" rx="4" fill="#fff" stroke="#FF9800" strokeWidth="2.5"/><path d="M24 28h8M16 32h16" stroke="#FF9800" strokeWidth="2.5" strokeLinecap="round"/><circle cx="24" cy="28" r="2" fill="#FF9800"/></svg>
            <h3 className="text-xl font-bold mb-2 text-primary">Ongoing Concierge</h3>
            <p className="text-gray-700 text-base">Supplies, maintenance, and staff assistance</p>
          </div>
        </div>
      </section>
    </PageContainer>
  );
} 