'use client';
import { Metadata } from "next";
import PageContainer from "@/components/layout/PageContainer";
import { useLanguage } from "@/lib/language-context";
import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { SEO } from "@/constants/site";

export default function OfficeAssetManagement() {
  const { language, dir } = useLanguage();

  // Features bilingual
  const features = [
    {
      title: {
        he: "ניהול נכסים מקיף",
        en: "Comprehensive Asset Management"
      },
      description: {
        he: "ניהול מקצועי ושוטף של נכסי המשרדים שלך",
        en: "Professional and ongoing management of your office assets"
      },
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm8 8v2h1v1H4v-1h1v-2H4v-1h16v1h-1z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: {
        he: "השבחת נכסים",
        en: "Asset Enhancement"
      },
      description: {
        he: "זיהוי הזדמנויות להשבחת הנכס והגדלת ערכו",
        en: "Identifying opportunities to enhance and increase asset value"
      },
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
        </svg>
      ),
    },
    {
      title: {
        he: "ניהול שוכרים",
        en: "Tenant Management"
      },
      description: {
        he: "ניהול מקצועי של היחסים עם השוכרים וטיפול בצרכיהם",
        en: "Professional management of tenant relations and needs"
      },
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
        </svg>
      ),
    },
    {
      title: {
        he: "אסטרטגיית יציאה",
        en: "Exit Strategy"
      },
      description: {
        he: "תכנון אסטרטגיית יציאה יעילה לבעלי הנכסים",
        en: "Planning an effective exit strategy for asset owners"
      },
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
      ),
    },
  ];

  // Hero section texts
  const heroTitle = {
    he: 'ייעוץ נדל"ן מקומי',
    en: 'Local Real Estate Consulting'
  };
  const heroDesc = {
    he: "פתרונות מקיפים לניהול והשבחת נכסי המשרדים שלך, עם דגש על מקסום התשואה",
    en: "Comprehensive solutions for managing and enhancing your office assets, with an emphasis on maximizing returns"
  };
  const heroBtn = {
    he: "צור קשר עכשיו",
    en: "Contact Us Now"
  };
  const servicesTitle = {
    he: "השירותים שלנו",
    en: "Our Services"
  };
  const servicesDesc = {
    he: "אנו מציעים מגוון שירותים בתחום ניהול נכסי המשרדים",
    en: "We offer a range of services in office asset management"
  };

  return (
    <PageContainer>
      {/* Hero Section - Full-width split city background */}
      <section
        className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden py-20"
        dir={dir}
        style={{fontFamily:'Inter, Urbanist, Helvetica Now, Helvetica, Arial, sans-serif'}}
      >
        {/* Split background: Dubai left, Tel Aviv right */}
        <div className="absolute inset-0 flex w-full h-full z-0">
          {/* Dubai side */}
          <div className="w-1/2 h-full">
            <img
              src="/dubai.jpg"
              alt="Dubai Skyline"
              className="object-cover w-full h-full opacity-80"
              style={{borderTopRightRadius:'2rem', borderBottomRightRadius:'2rem'}}
            />
          </div>
          {/* Tel Aviv side */}
          <div className="w-1/2 h-full">
            <img
              src="/telaviv.jpg"
              alt="Tel Aviv Skyline"
              className="object-cover w-full h-full opacity-80"
              style={{borderTopLeftRadius:'2rem', borderBottomLeftRadius:'2rem'}}
            />
          </div>
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-white/0 z-10" />
        </div>
        {/* Centered content */}
        <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white drop-shadow-2xl tracking-tight" style={{lineHeight:1.1, letterSpacing:'-0.01em'}}>
            Global Reach, Local Mastery
          </h1>
          <p className="text-lg md:text-2xl text-white/90 font-light mb-10 max-w-2xl mx-auto">
            Whether you're entering Dubai's boom market or optimizing Tel Aviv holdings, Indexland connects you to the right opportunities and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#download-dubai-guide"
              className="px-8 py-3 rounded-full bg-orange-500 text-white font-semibold shadow-lg hover:bg-orange-600 transition-all text-lg border-2 border-orange-500 min-w-[200px] text-center"
            >
              Download Dubai Guide
            </a>
            <a
              href="#contact-agent"
              className="px-8 py-3 rounded-full bg-white text-orange-500 font-semibold shadow-lg hover:bg-orange-50 transition-all text-lg border-2 border-orange-500 min-w-[200px] text-center"
              style={{borderWidth:2, fontWeight:700}}
            >
              Contact a Local Agent
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto my-12">
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full opacity-30" />
      </div>

      {/* Why Choose Us - Glassy cards with slide-in animation */}
      <section className="relative py-20 overflow-visible" dir={dir}>
        {/* Floating glassmorphic background */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[500px] h-[180px] bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-3xl opacity-40 animate-float-slow" />
        </div>
        <div className="container relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-10 animate-fade-in">
            {servicesTitle[language]}
          </h2>
          <p className="text-lg text-gray-600 dark:text-textSecondary text-center mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {servicesDesc[language]}
          </p>
        </div>
      </section>

      {/* International Real Estate Investment (Dubai) Section */}
      <section className="relative py-20 px-4 bg-white" dir={dir}>
        <div className="container mx-auto max-w-6xl flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-3" style={{fontFamily:'Inter, Urbanist, Helvetica Now, Helvetica, Arial, sans-serif'}}>
            International Real Estate Investment (Dubai)
          </h2>
          <p className="text-lg text-gray-700 dark:text-textSecondary text-center mb-12 max-w-2xl" style={{fontFamily:'Inter, Urbanist, Helvetica Now, Helvetica, Arial, sans-serif'}}>
            Tap into one of the world's fastest-growing markets.
          </p>
          {/* Optional Dubai map visual */}
          <div className="w-full flex justify-center mb-10">
            <img src="/dubai.jpg" alt="Dubai Map" className="rounded-3xl shadow-xl w-full max-w-md object-cover opacity-90 border-4 border-orange-100" style={{boxShadow:'0 8px 32px 0 rgba(0,0,0,0.12)'}} />
          </div>
          {/* Premium Grid of 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
            {/* Card 1 */}
            <div className="group relative bg-white border-2 border-orange-200 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-orange-500 cursor-pointer min-h-[260px] sparkle-card">
              <div className="mb-4 text-orange-500 group-hover:text-black transition-colors duration-300">
                {/* Icon: Research/Chart */}
                <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><rect x="3" y="12" width="4" height="8" rx="1" stroke="currentColor"/><rect x="9" y="8" width="4" height="12" rx="1" stroke="currentColor"/><rect x="15" y="4" width="4" height="16" rx="1" stroke="currentColor"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Market Research</h3>
              <p className="text-gray-700 text-base font-medium">Sector analysis, yield projections, regulatory overview</p>
              {/* Sparkle animation */}
              <span className="absolute top-3 right-3 w-4 h-4 bg-gradient-to-tr from-orange-300 to-white rounded-full opacity-60 animate-pulse pointer-events-none" style={{filter:'blur(2px)'}} />
            </div>
            {/* Card 2 */}
            <div className="group relative bg-white border-2 border-orange-200 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-orange-500 cursor-pointer min-h-[260px] sparkle-card">
              <div className="mb-4 text-orange-500 group-hover:text-black transition-colors duration-300">
                {/* Icon: Property/Building */}
                <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><rect x="3" y="7" width="7" height="14" rx="2" stroke="currentColor"/><rect x="14" y="3" width="7" height="18" rx="2" stroke="currentColor"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Property Sourcing</h3>
              <p className="text-gray-700 text-base font-medium">Residential, commercial, and mixed-use assets</p>
              <span className="absolute top-3 left-3 w-3 h-3 bg-gradient-to-tr from-orange-400 to-white rounded-full opacity-50 animate-pulse pointer-events-none" style={{filter:'blur(2px)'}} />
            </div>
            {/* Card 3 */}
            <div className="group relative bg-white border-2 border-orange-200 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-orange-500 cursor-pointer min-h-[260px] sparkle-card">
              <div className="mb-4 text-orange-500 group-hover:text-black transition-colors duration-300">
                {/* Icon: Legal/Shield */}
                <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z" stroke="currentColor"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeLinecap="round"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Legal & Compliance</h3>
              <p className="text-gray-700 text-base font-medium">Local counsel, visa facilitation, transaction structuring</p>
              <span className="absolute bottom-3 right-3 w-3 h-3 bg-gradient-to-tr from-orange-400 to-white rounded-full opacity-50 animate-pulse pointer-events-none" style={{filter:'blur(2px)'}} />
            </div>
            {/* Card 4 */}
            <div className="group relative bg-white border-2 border-orange-200 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-orange-500 cursor-pointer min-h-[260px] sparkle-card">
              <div className="mb-4 text-orange-500 group-hover:text-black transition-colors duration-300">
                {/* Icon: Oversight/Globe */}
                <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="currentColor"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Ongoing Oversight</h3>
              <p className="text-gray-700 text-base font-medium">On-ground asset management and performance tracking</p>
              <span className="absolute bottom-3 left-3 w-4 h-4 bg-gradient-to-tr from-orange-300 to-white rounded-full opacity-60 animate-pulse pointer-events-none" style={{filter:'blur(2px)'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Local Commercial Real Estate Agents (Tel Aviv) Section */}
      <section className="relative py-20 px-4 bg-gray-50" dir={dir}>
        <div className="container mx-auto max-w-6xl flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-3" style={{fontFamily:'Inter, Urbanist, Helvetica Now, Helvetica, Arial, sans-serif'}}>
            Local Commercial Real Estate Agents (Tel Aviv)
          </h2>
          <p className="text-lg text-gray-700 dark:text-textSecondary text-center mb-12 max-w-2xl" style={{fontFamily:'Inter, Urbanist, Helvetica Now, Helvetica, Arial, sans-serif'}}>
            Tel Aviv specialists in selling, buying, and leasing.
          </p>
          {/* Tel Aviv visual */}
          <div className="w-full flex justify-center mb-10">
            <img src="/telaviv.jpg" alt="Tel Aviv Offices" className="rounded-3xl shadow-xl w-full max-w-md object-cover opacity-95 border-4 border-orange-50" style={{boxShadow:'0 8px 32px 0 rgba(0,0,0,0.08)'}} />
          </div>
          {/* Light Premium Grid of 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
            {/* Card 1 */}
            <div className="group relative bg-white border-2 border-orange-100 rounded-2xl shadow-md p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-orange-400 cursor-pointer min-h-[220px] sparkle-card">
              <div className="mb-4 text-orange-400 group-hover:text-black transition-colors duration-300">
                {/* Icon: Sales/Handshake */}
                <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M8 12l-4 4m0 0l4 4m-4-4h18" stroke="currentColor" strokeLinecap="round"/><rect x="14" y="4" width="6" height="6" rx="2" stroke="currentColor"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Sales Representation</h3>
              <p className="text-gray-700 text-base font-medium">Secure top terms for buyers and sellers</p>
            </div>
            {/* Card 2 */}
            <div className="group relative bg-white border-2 border-orange-100 rounded-2xl shadow-md p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-orange-400 cursor-pointer min-h-[220px] sparkle-card">
              <div className="mb-4 text-orange-400 group-hover:text-black transition-colors duration-300">
                {/* Icon: Leasing/Key */}
                <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><circle cx="15" cy="9" r="3" stroke="currentColor"/><path d="M2 22l7-7m0 0l3 3m-3-3v4" stroke="currentColor" strokeLinecap="round"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Leasing Services</h3>
              <p className="text-gray-700 text-base font-medium">Marketing, viewings, renewals, and negotiations</p>
            </div>
            {/* Card 3 */}
            <div className="group relative bg-white border-2 border-orange-100 rounded-2xl shadow-md p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-orange-400 cursor-pointer min-h-[220px] sparkle-card">
              <div className="mb-4 text-orange-400 group-hover:text-black transition-colors duration-300">
                {/* Icon: Valuation/Chart */}
                <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><rect x="3" y="12" width="4" height="8" rx="1" stroke="currentColor"/><rect x="9" y="8" width="4" height="12" rx="1" stroke="currentColor"/><rect x="15" y="4" width="4" height="16" rx="1" stroke="currentColor"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Valuation & Advisory</h3>
              <p className="text-gray-700 text-base font-medium">Real-time comps, cap rates, and risk assessments</p>
            </div>
            {/* Card 4 */}
            <div className="group relative bg-white border-2 border-orange-100 rounded-2xl shadow-md p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-orange-400 cursor-pointer min-h-[220px] sparkle-card">
              <div className="mb-4 text-orange-400 group-hover:text-black transition-colors duration-300">
                {/* Icon: Support/Help */}
                <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor"/><path d="M12 16v-2m0-4a2 2 0 10-2-2" stroke="currentColor" strokeLinecap="round"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">After-Deal Support</h3>
              <p className="text-gray-700 text-base font-medium">Handover inspections, renewals, and ongoing guidance</p>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
} 