"use client";
import { useLanguage } from "@/lib/language-context";
import { PAGES } from "@/constants/site";
import PageContainer from "@/components/layout/PageContainer";
import { motion } from 'framer-motion';

export default function InternationalInvestmentBrokerage() {
  const { language, dir } = useLanguage();

  // Use translations from constants
  const heroTitle = PAGES.INTERNATIONAL_INVESTMENT_BROKERAGE.hero.title;
  const heroDesc = PAGES.INTERNATIONAL_INVESTMENT_BROKERAGE.hero.subtitle;
  const heroBtn1 = PAGES.INTERNATIONAL_INVESTMENT_BROKERAGE.hero.cta1;
  const heroBtn2 = PAGES.INTERNATIONAL_INVESTMENT_BROKERAGE.hero.cta2;

  // Turnkey Office Solutions section
  const turnkeyTitle = {
    he: "פתרונות משרדים מפתח בידיים",
    en: "Turnkey Office Solutions"
  };

  // Office solutions steps
  const officeSteps = [
    {
      title: { he: "גילוי וסיור", en: "Discovery & Scouting" },
      items: [
        { he: "1. ספרו לנו על הצרכים והתקציב שלכם", en: "1. Tell us your needs & budget" },
        { he: "2. אנחנו מכינים רשימה קצרה של המקומות הטובים ביותר", en: "2. We shortlist the best spaces" },
        { he: "3. הצטרפו לסיורים מודרכים במיקומים מובילים", en: "3. Join guided tours in top locations" }
      ]
    },
    {
      title: { he: "משא ומתן ומשפטי", en: "Negotiation & Legal" },
      items: [
        { he: "1. אנחנו מנהלים משא ומתן על התנאים הטובים ביותר", en: "1. We negotiate the best lease terms" },
        { he: "2. מטפלים בכל הניירת והבדיקות המשפטיות", en: "2. Handle all paperwork & legal checks" },
        { he: "3. אתם חותמים בביטחון מלא", en: "3. You sign with full confidence" }
      ]
    },
    {
      title: { he: "בנייה ומעבר", en: "Build-Out & Move-In" },
      items: [
        { he: "1. אנחנו מנהלים את כל העבודות וההתקנות", en: "1. We manage all fit-out & IT setup" },
        { he: "2. מתאמים ספקים ולוחות זמנים", en: "2. Coordinate vendors & timelines" },
        { he: "3. עוברים למשרד מוכן לעבודה", en: "3. Move in to a ready-to-work office" }
      ]
    },
    {
      title: { he: "שירות קונסיירז' שוטף", en: "Ongoing Concierge" },
      items: [
        { he: "1. אספקה ותחזוקה לפי דרישה", en: "1. Supplies & maintenance on demand" },
        { he: "2. תמיכת צוות ופתרון בעיות יומיומי", en: "2. Staff support & daily problem-solving" },
        { he: "3. התמקדו בעסק שלכם, אנחנו נטפל בשאר", en: "3. Focus on your business, we handle the rest" }
      ]
    }
  ];

  // Maximize Returns section
  const maximizeTitle = {
    he: "מקסמו תשואות וזמן פעילות בכל הנכסים שלכם",
    en: "Maximize Returns And Uptime Across Your Properties"
  };

  const maximizeCards = [
    {
      title: { he: "פיקוח על תיק הנכסים", en: "Portfolio Oversight" },
      description: { he: "לוח בקרה מרכזי לביצועים", en: "Centralized performance dashboard" }
    },
    {
      title: { he: "ניהול ספקים", en: "Vendor Management" },
      description: { he: "תחזוקה מונעת והסכמי רמת שירות", en: "Preventive maintenance and SLAs" }
    },
    {
      title: { he: "דיווח פיננסי", en: "Financial Reporting" },
      description: { he: "רווח והפסד, תקצוב וניתוח תשואה על השקעה", en: "P&L, budgeting, and ROI analysis" }
    },
    {
      title: { he: "אסטרטגיות הוספת ערך", en: "Value-Add Strategies" },
      description: { he: "תכנון השקעות הון, מיקום מחדש ואופטימיזציה של עלויות", en: "Capex planning, repositioning, and cost optimization" }
    }
  ];

  // Why Businesses Trust section
  const whyTrustTitle = {
    he: "למה עסקים סומכים על אינדקסלנד?",
    en: "Why Businesses Trust Indexland?"
  };

  const whyTrustCards = [
    {
      title: { he: "ניהול תיק נכסים מומחה", en: "Expert Portfolio Management" },
      description: { he: "ניהול תיק נכסים מסחריים מקומי מומחה המתמחה בנדל\"ן מסחרי", en: "Expert local commercial portfolio management specializing in commercial real estate" }
    },
    {
      title: { he: "שליטה מקצה לקצה", en: "End-to-end control" },
      description: { he: "ללא טרחה ועם שקט נפשי מלא", en: "with zero hassle and full peace of mind" }
    },
    {
      title: { he: "דוחות שקופים", en: "Transparent reports" },
      description: { he: "אסטרטגיית נדל\"ן חכמה יותר ותובנות", en: "Smarter real estate strategy and insights" }
    }
  ];

  // Testimonial section with person data
  const testimonialText = {
    he: "התחלנו לעבוד עם אינדקסלנד לפני 8 שנים עם תיק נכסים ומעולם לא הסתכלנו אחורה, זו הייתה הבחירה הטובה ביותר שיכולנו לעשות",
    en: "We started working with Indexland 8 years ago with an asset portfolio and never looked back, the best choice we could have made"
  };

  const testimonialPerson = {
    name: { he: "רחל כהן", en: "Rachel Cohen" },
    position: { he: "מנכ\"לית", en: "CEO" },
    company: { he: "טק פרו בע\"מ", en: "Tech Pro Ltd" },
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop&crop=face"
  };

  // CTA buttons
  const ctaBtn1 = {
    he: "לתיאום פגישה",
    en: "Book a Meeting"
  };
  const ctaBtn2 = {
    he: "למידע נוסף",
    en: "Learn More"
  };

  return (
    <PageContainer>
      {/* Hero Section - Fade up & scale in */}
      <motion.section
        initial={{ opacity: 0, y: 60, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative min-h-screen flex items-center justify-center pt-20"
        dir={dir}
      >
        {/* Modern Office background */}
        <img
          src="/office.webp"
          alt="Modern Office"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 brightness-60"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="container mx-auto relative z-20 w-full flex flex-col items-center justify-center text-center px-4 py-12" dir={dir}>
          <motion.h1
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'backOut' }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white drop-shadow-2xl"
            style={{ lineHeight: 1.1 }}
          >
            {heroTitle[language]}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: language === 'he' ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: 'anticipate' }}
            className="text-lg md:text-2xl text-white/90 font-light mb-10 max-w-2xl"
          >
            {heroDesc[language]}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5, type: 'spring', stiffness: 200 }}
              href="/book-meeting"
              className="px-8 py-3 rounded-full bg-orange-500 text-white font-semibold shadow-lg hover:bg-orange-600 transition-all text-lg border-2 border-orange-500"
            >
              {heroBtn1[language]}
            </motion.a>
            <motion.a
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5, type: 'spring', stiffness: 200 }}
              href="/services"
              className="px-8 py-3 rounded-full bg-white text-orange-500 font-semibold shadow-lg hover:bg-orange-50 transition-all text-lg border-2 border-orange-500"
            >
              {heroBtn2[language]}
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Divider - scaleX pop */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.5 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5, type: 'spring', stiffness: 180 }}
        className="container mx-auto my-12"
        dir={dir}
      >
        <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full opacity-40" />
      </motion.div>

      {/* Turnkey Office Solutions Flow Line Section - mobile-friendly animations */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1, margin: "-100px" }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="container mx-auto flex flex-col items-center py-16 px-4"
        dir={dir}
        style={{ opacity: 1 }} // Fallback for mobile
        data-section="turnkey-solutions"
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-10"
          style={{ opacity: 1 }} // Fallback for mobile
        >
          {turnkeyTitle[language]}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-full max-w-6xl" dir={dir}>
          {officeSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "-50px" }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5, ease: 'easeOut' }}
              className="group flex flex-col items-center text-center bg-white border-2 border-orange-200 rounded-3xl shadow-2xl p-10 min-h-[340px] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-orange-500 cursor-pointer"
              style={{ opacity: 1 }} // Fallback for mobile
            >
              <motion.img
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.4, ease: 'easeOut' }}
                src={`/files/svg/${
                  index === 0 ? 'House-searching-rafiki.svg' :
                  index === 1 ? 'Investor-presentation-bro.svg' :
                  index === 2 ? 'construction.svg' :
                  'Building-permit-amico.svg'
                }`}
                alt={step.title[language]}
                width="110"
                height="110"
                className="mb-6 rounded-2xl shadow-lg border-4 border-orange-100 object-contain bg-white p-2"
                style={{ opacity: 1 }} // Fallback for mobile
              />
              <h3 className="text-2xl font-extrabold mb-4 text-orange-500">{step.title[language]}</h3>
              <ul className={`text-gray-700 text-lg font-medium space-y-2 mx-auto max-w-xs ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                {step.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item[language]}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Maximize Returns Section - zoom in & flip cards */}
      <motion.section
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'anticipate' }}
        className="container mx-auto py-16 px-4 bg-transparent"
        dir={dir}
      >
        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.7, ease: 'backOut' }}
          className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-12"
        >
          {maximizeTitle[language]}
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto" dir={dir}>
          {maximizeCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: index % 2 === 0 ? 90 : -90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.7, type: 'tween', ease: 'circOut' }}
              className="group bg-white/70 dark:bg-backgroundDark/80 border border-gray-200 dark:border-white/10 shadow-xl glass-card hover:bg-white/90 hover:shadow-2xl transition-all duration-300 rounded-xl md:rounded-lg p-8 flex flex-col items-center text-center cursor-pointer backdrop-blur-md hover:backdrop-blur-xl hover:border-primary/40 hover:scale-[1.03] relative overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="mb-4 text-primary group-hover:text-secondary transition-colors duration-300"
              >
                {/* Icons based on index */}
                {index === 0 && (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="2" stroke="currentColor"/><rect x="14" y="3" width="7" height="7" rx="2" stroke="currentColor"/><rect x="14" y="14" width="7" height="7" rx="2" stroke="currentColor"/><rect x="3" y="14" width="7" height="7" rx="2" stroke="currentColor"/></svg>
                )}
                {index === 1 && (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor"/>
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor"/>
                    <path d="M3 13h18" stroke="currentColor"/>
                  </svg>
                )}
                {index === 2 && (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor"/><path d="M8 10h8M8 14h4" stroke="currentColor"/></svg>
                )}
                {index === 3 && (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8" stroke="currentColor"/><path d="M14 7h7v7" stroke="currentColor"/></svg>
                )}
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + index * 0.1, duration: 0.5 }}
                className="text-lg font-bold mb-2 text-primary"
              >
                {card.title[language]}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="text-gray-700 dark:text-textSecondary text-base font-medium"
              >
                {card.description[language]}
              </motion.p>
              {/* Glass hover effect */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/40 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Businesses Trust Indexland Section - bounce in */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
        className="bg-gradient-to-br from-white via-orange-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-sans border-t border-b border-gray-100 dark:border-none"
        dir={dir}
      >
        <div className="container mx-auto py-16 px-4">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.1, duration: 0.7, type: 'spring', bounce: 0.3 }}
          className="text-4xl md:text-5xl font-extrabold text-primary dark:text-white text-center mb-14 drop-shadow-lg font-sans"
          style={{ fontFamily: 'Inter, Urbanist, Helvetica Now, Helvetica, Arial, sans-serif' }}
        >
          {whyTrustTitle[language]}
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-5xl mx-auto" dir={dir}>
          {whyTrustCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.7, type: 'spring', bounce: 0.3 }}
              className="group bg-white/90 dark:bg-gray-800/90 border border-orange-100 dark:border-gray-700 shadow-2xl rounded-xl p-6 md:p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-orange-50 dark:hover:bg-black hover:border-orange-400 hover:scale-[1.04] relative overflow-hidden min-h-[210px] w-full font-sans"
              style={{ fontFamily: 'Inter, Urbanist, Helvetica Now, Helvetica, Arial, sans-serif' }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotate: index % 2 === 0 ? -8 : 8 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5, type: 'spring', bounce: 0.4 }}
                className="mb-5 text-orange-500 group-hover:text-primary dark:group-hover:text-white transition-colors duration-300"
              >
                {/* Icons based on index */}
                {index === 0 && (
                  <svg className="w-11 h-11" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor"/><path d="M12 6v6l4 2" stroke="currentColor" strokeLinecap="round"/></svg>
                )}
                {index === 1 && (
                  <svg className="w-11 h-11" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z" stroke="currentColor"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeLinecap="round"/></svg>
                )}
                {index === 2 && (
                  <svg className="w-11 h-11" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><rect x="3" y="12" width="4" height="8" rx="1" stroke="currentColor"/><rect x="9" y="8" width="4" height="12" rx="1" stroke="currentColor"/><rect x="15" y="4" width="4" height="16" rx="1" stroke="currentColor"/></svg>
                )}
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + index * 0.1, duration: 0.5 }}
                className="text-lg font-bold mb-2 text-primary dark:text-white"
              >
                {card.title[language]}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="text-gray-700 dark:text-gray-200 text-base font-medium leading-snug"
              >
                {card.description[language]}
              </motion.p>
            </motion.div>
          ))}
        </div>
        </div>
      </motion.section>

      {/* Testimonial + CTA Section - fade in & pop */}
      <motion.section
        initial={{ opacity: 0, scale: 0.92, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'backOut' }}
        className="bg-gradient-to-br from-white via-gray-50 to-white border-t border-b border-gray-200 font-sans"
        dir={dir}
      >
        <div className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center" dir={dir}>
          {/* Testimonial with person info */}
          <div className="mb-8">
            <img
              src={testimonialPerson.image}
              alt={testimonialPerson.name[language]}
              className="mx-auto w-20 h-20 rounded-full object-cover border-4 border-orange-200 shadow-lg mb-4"
            />
            <p className="text-lg font-semibold text-gray-900 mb-1">{testimonialPerson.name[language]}</p>
            <p className="text-sm text-gray-600">{testimonialPerson.position[language]}, {testimonialPerson.company[language]}</p>
          </div>
          
          <div className="relative mb-10 w-full">
            {/* Quote Icon */}
            <motion.span
              initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
              whileInView={{ opacity: 0.3, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7, type: 'spring', bounce: 0.3 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 text-orange-500 text-7xl font-serif select-none"
              aria-hidden="true"
            >
              &ldquo;
            </motion.span>
            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7, ease: 'anticipate' }}
              className="text-xl md:text-3xl font-semibold text-gray-900 leading-snug drop-shadow-sm relative z-10 font-sans"
              style={{ fontFamily: 'Inter, Urbanist, Helvetica Now, Helvetica, Arial, sans-serif' }}
            >
              {testimonialText[language]}
            </motion.blockquote>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7, type: 'spring', bounce: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mt-8 justify-center w-full"
          >
            <motion.a
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5, type: 'spring', stiffness: 200 }}
              href="/book-meeting"
              className="px-8 py-3 rounded-full bg-orange-500 text-white font-extrabold shadow-lg hover:bg-black hover:text-orange-400 transition-all text-lg border-2 border-orange-500 min-w-[180px] text-center w-full sm:w-auto"
              style={{ fontFamily: 'Inter, Urbanist, Helvetica Now, Helvetica, Arial, sans-serif', letterSpacing: '0.01em' }}
            >
              {ctaBtn1[language]}
            </motion.a>
            <motion.a
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5, type: 'spring', stiffness: 200 }}
              href="/services"
              className="px-8 py-3 rounded-full bg-white text-orange-500 font-extrabold shadow-lg hover:bg-black hover:text-white transition-all text-lg border-2 border-orange-500 min-w-[180px] text-center w-full sm:w-auto"
              style={{ borderWidth: 2, fontWeight: 800, fontFamily: 'Inter, Urbanist, Helvetica Now, Helvetica, Arial, sans-serif', letterSpacing: '0.01em' }}
            >
              {ctaBtn2[language]}
            </motion.a>
          </motion.div>
        </div>
        </div>
      </motion.section>
    </PageContainer>
  );
} 