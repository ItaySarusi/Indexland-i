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
              className="object-cover w-full h-full"
            />
          </div>
          {/* Tel Aviv side */}
          <div className="w-1/2 h-full">
            <img
              src="/telaviv.jpg"
              alt="Tel Aviv Skyline"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Overlay for readability: split gradient */}
          <div className="absolute inset-0 w-full h-full z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 50%, rgba(255,255,255,0.05) 100%)"
            }}
          />
        </div>
        {/* Centered content */}
        <div className="relative py-28 z-20 w-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white drop-shadow-2xl tracking-tight" style={{lineHeight:1.1, letterSpacing:'-0.01em'}}>
            Global Reach, Local Mastery
            </h1>
          <p className="text-lg md:text-2xl text-white/90 font-light mb-10 max-w-2xl mx-auto">
            Whether you're entering Dubai's boom market or optimizing Tel Aviv holdings, Indexland connects you to the right opportunities and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/onepager.pdf"
              download
              className="px-8 py-3 rounded-full bg-orange-500 text-white font-semibold shadow-lg hover:bg-orange-600 transition-all text-lg border-2 border-orange-500 min-w-[200px] text-center"
            >
              Download Dubai Guide
            </a>
            <a
              href="/book-meeting"
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

      {/* International Real Estate Investment (Dubai) Section */}
      <section className="relative py-20 px-4 bg-r" dir={dir}>
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
                {/* Icon: Market Research Video */}
                <video autoPlay loop muted playsInline width="80" height="80">
                  <source src="/files/webm/research.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Market Research</h3>
              <p className="text-gray-700 text-base font-medium">Sector analysis, yield projections, regulatory overview</p>
              {/* Sparkle animation */}
              <span className="absolute top-3 right-3 w-4 h-4 bg-gradient-to-tr from-orange-300 to-white rounded-full opacity-60 animate-pulse pointer-events-none" style={{filter:'blur(2px)'}} />
            </div>
            {/* Card 2 */}
            <div className="group relative bg-white border-2 border-orange-200 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-orange-500 cursor-pointer min-h-[260px] sparkle-card">
              <div className="mb-4 text-orange-500 group-hover:text-black transition-colors duration-300">
                {/* Icon: Property Sourcing Video */}
                <video autoPlay loop muted playsInline width="80" height="80">
                  <source src="/files/webm/source.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Property Sourcing</h3>
              <p className="text-gray-700 text-base font-medium">Residential, commercial, and mixed-use assets</p>
              <span className="absolute top-3 right-3 w-4 h-4 bg-gradient-to-tr from-orange-300 to-white rounded-full opacity-60 animate-pulse pointer-events-none" style={{filter:'blur(2px)'}} />
            </div>
            {/* Card 3 */}
            <div className="group relative bg-white border-2 border-orange-200 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-orange-500 cursor-pointer min-h-[260px] sparkle-card">
              <div className="mb-4 text-orange-500 group-hover:text-black transition-colors duration-300">
                {/* Icon: Legal & Compliance Video */}
                <video autoPlay loop muted playsInline width="80" height="80">
                  <source src="/files/webm/legal.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Legal & Compliance</h3>
              <p className="text-gray-700 text-base font-medium">Local counsel, visa facilitation, transaction structuring</p>
              <span className="absolute top-3 right-3 w-4 h-4 bg-gradient-to-tr from-orange-300 to-white rounded-full opacity-60 animate-pulse pointer-events-none" style={{filter:'blur(2px)'}} />
            </div>
            {/* Card 4 */}
            <div className="group relative bg-white border-2 border-orange-200 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-orange-500 cursor-pointer min-h-[260px] sparkle-card">
              <div className="mb-4 text-orange-500 group-hover:text-black transition-colors duration-300">
                {/* Icon: Ongoing Oversight Video */}
                <video autoPlay loop muted playsInline width="80" height="80">
                  <source src="/files/webm/tracking.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Ongoing Oversight</h3>
              <p className="text-gray-700 text-base font-medium">On-ground asset management and performance tracking</p>
              <span className="absolute top-3 right-3 w-4 h-4 bg-gradient-to-tr from-orange-300 to-white rounded-full opacity-60 animate-pulse pointer-events-none" style={{filter:'blur(2px)'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto my-12">
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full opacity-30" />
      </div>

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
            <img
              src="/telaviv.jpg"
              alt="Tel Aviv Offices"
              className="rounded-3xl shadow-xl w-full max-w-md object-cover"
              style={{minHeight:220, maxHeight:320, objectPosition:'center'}}
            />
          </div>
          {/* Light Premium Grid of 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
            {/* Card 1 */}
            <div className="group relative bg-white border-2 border-orange-100 rounded-2xl shadow-md p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-orange-400 cursor-pointer min-h-[220px] sparkle-card">
              <div className="mb-4 text-orange-400 group-hover:text-black transition-colors duration-300">
                {/* Icon: Sales Representation Video */}
                <video autoPlay loop muted playsInline width="80" height="80">
                  <source src="/files/webm/sales.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Sales Representation</h3>
              <p className="text-gray-700 text-base font-medium">Secure top terms for buyers and sellers</p>
            </div>
            {/* Card 2 */}
            <div className="group relative bg-white border-2 border-orange-100 rounded-2xl shadow-md p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-orange-400 cursor-pointer min-h-[220px] sparkle-card">
              <div className="mb-4 text-orange-400 group-hover:text-black transition-colors duration-300">
                {/* Icon: Leasing Services Video */}
                <video autoPlay loop muted playsInline width="80" height="80">
                  <source src="/files/webm/marketing.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Leasing Services</h3>
              <p className="text-gray-700 text-base font-medium">Marketing, viewings, renewals, and negotiations</p>
            </div>
            {/* Card 3 */}
            <div className="group relative bg-white border-2 border-orange-100 rounded-2xl shadow-md p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-orange-400 cursor-pointer min-h-[220px] sparkle-card">
              <div className="mb-4 text-orange-400 group-hover:text-black transition-colors duration-300">
                {/* Icon: Valuation & Advisory Video */}
                <video autoPlay loop muted playsInline width="80" height="80">
                  <source src="/files/webm/risk.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Valuation & Advisory</h3>
              <p className="text-gray-700 text-base font-medium">Real-time comps, cap rates, and risk assessments</p>
            </div>
            {/* Card 4 */}
            <div className="group relative bg-white border-2 border-orange-100 rounded-2xl shadow-md p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-orange-400 cursor-pointer min-h-[220px] sparkle-card">
              <div className="mb-4 text-orange-400 group-hover:text-black transition-colors duration-300">
                {/* Icon: After-Deal Support Video */}
                <video autoPlay loop muted playsInline width="80" height="80">
                  <source src="/files/webm/support.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">After-Deal Support</h3>
              <p className="text-gray-700 text-base font-medium">Handover inspections, renewals, and ongoing guidance</p>
            </div>
          </div>
                </div>
      </section>

      {/* Why Work with Us? Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200" dir={dir}>
        {/* Divider */}
        <div className="container mx-auto mb-12">
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full opacity-30" />
        </div>
        <div className="container mx-auto max-w-5xl flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-700 text-center mb-3" style={{fontFamily:'Inter, Urbanist, Helvetica Now, Helvetica, Arial, sans-serif'}}>
            Why Work with Us?
          </h2>
          <p className="text-lg text-orange-900 text-center mb-12 max-w-2xl" style={{fontFamily:'Inter, Urbanist, Helvetica Now, Helvetica, Arial, sans-serif'}}>
            Leverage our global strategies and local networks for confident, informed investments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {/* Card 1 */}
            <div className="group bg-white/90 border border-orange-200 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-orange-400 cursor-pointer min-h-[180px]">
              <div className="mb-4 text-orange-500 group-hover:text-orange-700 transition-colors duration-300">
                {/* Icon: Target (Business style) */}
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" stroke="currentColor"/>
                  <circle cx="12" cy="12" r="5" stroke="currentColor"/>
                  <circle cx="12" cy="12" r="2" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-orange-900">Strategic access to Dubai's top-performing zones</h3>
            </div>
            {/* Card 2 */}
            <div className="group bg-white/90 border border-orange-200 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-orange-400 cursor-pointer min-h-[180px]">
              <div className="mb-4 text-orange-500 group-hover:text-orange-700 transition-colors duration-300">
                {/* Icon: Bar Chart (Business style) */}
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <rect x="3" y="12" width="4" height="8" rx="1" stroke="currentColor"/>
                  <rect x="10" y="8" width="4" height="12" rx="1" stroke="currentColor"/>
                  <rect x="17" y="4" width="4" height="16" rx="1" stroke="currentColor"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-orange-900">Real-time valuation insights in Tel Aviv</h3>
            </div>
            {/* Card 3 */}
            <div className="group bg-white/90 border border-orange-200 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-orange-400 cursor-pointer min-h-[180px]">
              <div className="mb-4 text-orange-500 group-hover:text-orange-700 transition-colors duration-300">
                {/* Icon: Handshake (Business style) */}
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path d="M8 13l-4 4m0 0l4 4m-4-4h18" stroke="currentColor" strokeLinecap="round"/>
                  <rect x="14" y="4" width="6" height="6" rx="2" stroke="currentColor"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-orange-900">End-to-end transaction confidence across borders</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-4 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 flex flex-col items-center justify-center" dir={dir}>
        <div className="container mx-auto max-w-2xl flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8" style={{fontFamily:'Inter, Urbanist, Helvetica Now, Helvetica, Arial, sans-serif', letterSpacing:'-0.01em'}}>
            Ready to act on smarter real estate opportunities?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <a
              href="/onepager.pdf"
              download
              className="px-8 py-3 rounded-full bg-white text-orange-600 font-extrabold shadow-lg hover:bg-orange-100 transition-all text-lg border-2 border-white min-w-[200px] text-center w-full sm:w-auto"
              style={{fontFamily:'Inter, Urbanist, Helvetica Now, Helvetica, Arial, sans-serif', letterSpacing:'0.01em'}}
            >
              Download Dubai Guide
            </a>
            <a
              href="/book-meeting"
              className="px-8 py-3 rounded-full bg-orange-600 text-white font-extrabold shadow-lg hover:bg-black hover:text-orange-400 transition-all text-lg border-2 border-white min-w-[200px] text-center w-full sm:w-auto"
              style={{fontFamily:'Inter, Urbanist, Helvetica Now, Helvetica, Arial, sans-serif', letterSpacing:'0.01em'}}
            >
              Contact a Local Agent
            </a>
          </div>
        </div>
      </section>
    </PageContainer>
  );
} 