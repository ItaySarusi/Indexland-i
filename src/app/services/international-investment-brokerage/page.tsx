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
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-36">
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

      {/* Turnkey Office Solutions Flow Line Section */}
      <section className="w-full flex flex-col items-center py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-2">Turnkey Office Solutions</h2>
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

      {/* Maximize Returns Section */}
      <section className="w-full py-20 px-4 bg-transparent">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-12">
          Maximize returns and uptime across your properties
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="group bg-white/70 dark:bg-backgroundDark/80 border border-gray-200 dark:border-white/10 shadow-xl glass-card hover:bg-white/90 hover:shadow-2xl transition-all duration-300 rounded-xl md:rounded-lg p-8 flex flex-col items-center text-center cursor-pointer backdrop-blur-md hover:backdrop-blur-xl hover:border-primary/40 hover:scale-[1.03] relative overflow-hidden">
            <div className="mb-4 text-primary group-hover:text-secondary transition-colors duration-300">
              {/* Icon: Dashboard */}
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="2" stroke="currentColor"/><rect x="14" y="3" width="7" height="7" rx="2" stroke="currentColor"/><rect x="14" y="14" width="7" height="7" rx="2" stroke="currentColor"/><rect x="3" y="14" width="7" height="7" rx="2" stroke="currentColor"/></svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-primary">Portfolio Oversight</h3>
            <p className="text-gray-700 dark:text-textSecondary text-base font-medium">Centralized performance dashboard</p>
            {/* Glass hover effect */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/40 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
          </div>
          {/* Card 2 */}
          <div className="group bg-white/70 dark:bg-backgroundDark/80 border border-gray-200 dark:border-white/10 shadow-xl glass-card hover:bg-white/90 hover:shadow-2xl transition-all duration-300 rounded-xl md:rounded-lg p-8 flex flex-col items-center text-center cursor-pointer backdrop-blur-md hover:backdrop-blur-xl hover:border-primary/40 hover:scale-[1.03] relative overflow-hidden">
            <div className="mb-4 text-primary group-hover:text-secondary transition-colors duration-300">
              {/* Icon: Vendor/Settings */}
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" stroke="currentColor"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-1.82-.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 15 8.6a1.65 1.65 0 0 0 1.82.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 15z"/></svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-primary">Vendor Management</h3>
            <p className="text-gray-700 dark:text-textSecondary text-base font-medium">Preventive maintenance and SLAs</p>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/40 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
          </div>
          {/* Card 3 */}
          <div className="group bg-white/70 dark:bg-backgroundDark/80 border border-gray-200 dark:border-white/10 shadow-xl glass-card hover:bg-white/90 hover:shadow-2xl transition-all duration-300 rounded-xl md:rounded-lg p-8 flex flex-col items-center text-center cursor-pointer backdrop-blur-md hover:backdrop-blur-xl hover:border-primary/40 hover:scale-[1.03] relative overflow-hidden">
            <div className="mb-4 text-primary group-hover:text-secondary transition-colors duration-300">
              {/* Icon: Financial/Report */}
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor"/><path d="M8 10h8M8 14h4" stroke="currentColor"/></svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-primary">Financial Reporting</h3>
            <p className="text-gray-700 dark:text-textSecondary text-base font-medium">P&L, budgeting, and ROI analysis</p>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/40 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
          </div>
          {/* Card 4 */}
          <div className="group bg-white/70 dark:bg-backgroundDark/80 border border-gray-200 dark:border-white/10 shadow-xl glass-card hover:bg-white/90 hover:shadow-2xl transition-all duration-300 rounded-xl md:rounded-lg p-8 flex flex-col items-center text-center cursor-pointer backdrop-blur-md hover:backdrop-blur-xl hover:border-primary/40 hover:scale-[1.03] relative overflow-hidden">
            <div className="mb-4 text-primary group-hover:text-secondary transition-colors duration-300">
              {/* Icon: Value-Add/TrendingUp */}
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8" stroke="currentColor"/><path d="M14 7h7v7" stroke="currentColor"/></svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-primary">Value-Add Strategies</h3>
            <p className="text-gray-700 dark:text-textSecondary text-base font-medium">Capex planning, repositioning, and cost optimization</p>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/40 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
          </div>
        </div>
      </section>

      {/* Why Businesses Trust Indexland Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 font-sans" dir="auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-14 drop-shadow-lg font-sans" style={{fontFamily:'Inter, Urbanist, Helvetica Now, Helvetica, Arial, sans-serif'}}>
          Why Businesses Trust Indexland?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="group bg-gray-800/90 border border-gray-700 shadow-2xl rounded-xl p-6 md:p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-black hover:border-orange-500 hover:scale-[1.04] relative overflow-hidden min-h-[210px] w-full font-sans" style={{fontFamily:'Inter, Urbanist, Helvetica Now, Helvetica, Arial, sans-serif'}}>
            <div className="mb-5 text-orange-500 group-hover:text-white transition-colors duration-300">
              {/* Icon: Clock/Time Save */}
              <svg className="w-11 h-11" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor"/><path d="M12 6v6l4 2" stroke="currentColor" strokeLinecap="round"/></svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">Save 30+ hours monthly</h3>
            <p className="text-gray-200 text-base font-medium leading-snug">with managed offices<br/>and streamlined support</p>
          </div>
          {/* Card 2 */}
          <div className="group bg-gray-800/90 border border-gray-700 shadow-2xl rounded-xl p-6 md:p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-black hover:border-orange-500 hover:scale-[1.04] relative overflow-hidden min-h-[210px] w-full font-sans" style={{fontFamily:'Inter, Urbanist, Helvetica Now, Helvetica, Arial, sans-serif'}}>
            <div className="mb-5 text-orange-500 group-hover:text-white transition-colors duration-300">
              {/* Icon: Control/Shield */}
              <svg className="w-11 h-11" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z" stroke="currentColor"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeLinecap="round"/></svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">End-to-end control</h3>
            <p className="text-gray-200 text-base font-medium leading-snug">with zero hassle<br/>and full peace of mind</p>
          </div>
          {/* Card 3 */}
          <div className="group bg-gray-800/90 border border-gray-700 shadow-2xl rounded-xl p-6 md:p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-black hover:border-orange-500 hover:scale-[1.04] relative overflow-hidden min-h-[210px] w-full font-sans" style={{fontFamily:'Inter, Urbanist, Helvetica Now, Helvetica, Arial, sans-serif'}}>
            <div className="mb-5 text-orange-500 group-hover:text-white transition-colors duration-300">
              {/* Icon: Report/Chart */}
              <svg className="w-11 h-11" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><rect x="3" y="12" width="4" height="8" rx="1" stroke="currentColor"/><rect x="9" y="8" width="4" height="12" rx="1" stroke="currentColor"/><rect x="15" y="4" width="4" height="16" rx="1" stroke="currentColor"/></svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">Transparent reports</h3>
            <p className="text-gray-200 text-base font-medium leading-snug">Smarter real estate<br/>strategy and insights</p>
          </div>
        </div>
      </section>

      {/* Testimonial + CTA Section */}
      <section className="w-full py-16 md:py-20 px-2 md:px-4 bg-gradient-to-br from-white via-gray-50 to-white border-t border-b border-gray-200 font-sans" dir="auto">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <div className="relative mb-10 w-full">
            {/* Quote Icon */}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-orange-500 text-7xl font-serif opacity-30 select-none" aria-hidden="true">“</span>
            <blockquote className="text-xl md:text-3xl font-semibold text-gray-900 leading-snug drop-shadow-sm relative z-10 font-sans" style={{fontFamily:'Inter, Urbanist, Helvetica Now, Helvetica, Arial, sans-serif'}}>
              With Indexland managing our offices and assets, we reclaimed 30+ hours per month.
            </blockquote>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center w-full">
            <a
              href="/contact?meeting=true"
              className="px-8 py-3 rounded-full bg-orange-500 text-white font-extrabold shadow-lg hover:bg-black hover:text-orange-400 transition-all text-lg border-2 border-orange-500 min-w-[180px] text-center w-full sm:w-auto"
              style={{fontFamily:'Inter, Urbanist, Helvetica Now, Helvetica, Arial, sans-serif', letterSpacing:'0.01em'}}
            >
              Book a Meeting
            </a>
            <a
              href="#learn-more"
              className="px-8 py-3 rounded-full bg-white text-orange-500 font-extrabold shadow-lg hover:bg-black hover:text-white transition-all text-lg border-2 border-orange-500 min-w-[180px] text-center w-full sm:w-auto"
              style={{borderWidth:2, fontWeight:800, fontFamily:'Inter, Urbanist, Helvetica Now, Helvetica, Arial, sans-serif', letterSpacing:'0.01em'}}
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </PageContainer>
  );
} 