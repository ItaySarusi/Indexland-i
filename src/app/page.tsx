'use client';

import { useState, useEffect } from "react";
import PageContainer from "@/components/layout/PageContainer";
import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServicesAtAGlance from "@/components/sections/ServicesAtAGlance";
import Metrics from "@/components/sections/Metrics";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";
import ClientsSuccessSection from "@/components/sections/ClientsSuccessSection";
import { IMAGES } from "@/constants/site";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import SlackIntro from "@/components/mage-ui/hero/slack-intro";
import StaticSlackElements from "@/components/mage-ui/decorative/static-slack-elements";
import { motion } from 'framer-motion';

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);
  const [loadedContent, setLoadedContent] = useState(false);

  // נטען את התוכן רק אחרי שהלואדר מסתיים
  useEffect(() => {
    if (!showLoader) {
      const timer = setTimeout(() => {
        setLoadedContent(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [showLoader]);

  const handleAnimationComplete = () => {
    setShowLoader(false);
  };

  // שירותים לדוגמה
  const services = [
    {
      title: "Turnkey Office Solutions",
      description: "From scouting and lease to daily concierge.",
      icon: (
        <svg className="w-12 h-12 text-primary animate-bounce" fill="none" viewBox="0 0 48 48" stroke="currentColor"><rect x="8" y="16" width="32" height="24" rx="4" fill="#fff" stroke="#FF9800" strokeWidth="2.5"/><rect x="16" y="24" width="16" height="8" rx="2" fill="#FF9800"/><path d="M16 16V12a8 8 0 0 1 16 0v4" stroke="#FF9800" strokeWidth="2.5" strokeLinecap="round"/></svg>
      ),
      href: "/services/turnkey-office-solutions",
      svg: "/files/gif/company.gif"
    },
    {
      title: "Large Asset Management",
      description: "End-to-end strategy, reporting & value creation.",
      icon: (
        <svg className="w-12 h-12 text-blue-600 animate-pulse" fill="none" viewBox="0 0 48 48" stroke="currentColor"><rect x="10" y="28" width="6" height="12" rx="2" fill="#2196F3"/><rect x="21" y="20" width="6" height="20" rx="2" fill="#90CAF9"/><rect x="32" y="12" width="6" height="28" rx="2" fill="#2196F3"/><path d="M10 40h28" stroke="#2196F3" strokeWidth="2.5"/></svg>
      ),
      href: "/services/large-asset-management",
      svg: "/files/svg/Building-permit-amico.svg"
    },
    {
      title: "International Investment",
      description: "Dubai-based sourcing, legal, and investor support.",
      icon: (
        <svg className="w-12 h-12 text-green-600 animate-spin-slow" fill="none" viewBox="0 0 48 48" stroke="currentColor"><circle cx="24" cy="24" r="18" fill="#C8E6C9" stroke="#43A047" strokeWidth="2.5"/><path d="M24 12v10l8 4" stroke="#388E3C" strokeWidth="2.5" strokeLinecap="round"/><path d="M24 6a18 18 0 1 1 0 36a18 18 0 0 1 0-36z" stroke="#43A047" strokeWidth="2.5"/></svg>
      ),
      href: "/services/international-investment",
      svg: "/files/svg/Investor-presentation-bro.svg"
    },
    {
      title: "Local Brokerage",
      description: "Tel Aviv deals—sales, leases, and market advisory.",
      icon: (
        <svg className="w-12 h-12 text-purple-600 animate-wiggle" fill="none" viewBox="0 0 48 48" stroke="currentColor"><rect x="10" y="20" width="28" height="16" rx="4" fill="#E1BEE7" stroke="#9C27B0" strokeWidth="2.5"/><path d="M24 8v12" stroke="#9C27B0" strokeWidth="2.5" strokeLinecap="round"/><circle cx="24" cy="14" r="4" fill="#9C27B0"/></svg>
      ),
      href: "/services/local-brokerage",
      svg: "/files/svg/House-searching-rafiki.svg"
    }
  ];
  
  // יתרונות לדוגמה
  const features = [
    {
      title: {
        he: "שותף אחד חכם",
        en: "One Smart Partner."
      },
      description: {
        he: "משרדים, נכסים והשקעות – הכל במקום אחד.",
        en: "Offices, assets, investments—all in one place."
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: {
        he: "Data-First.",
        en: "Data-First."
      },
      description: {
        he: "דשבורדים בזמן אמת. החלטות חכמות יותר.",
        en: "Real-time dashboards. Smarter decisions."
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: {
        he: "On the Ground.",
        en: "On the Ground."
      },
      description: {
        he: "שורשים בתל אביב עם גישה מקומית עמוקה.",
        en: "Tel Aviv roots with deep local access."
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: {
        he: "Go Global.",
        en: "Go Global."
      },
      description: {
        he: "שער חלק לשוק של דובאי.",
        en: "Smooth gateway into Dubai's market."
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];
  
  // מדדים לדוגמה
  const metrics = [
    {
      value: "+500",
      label: {
        he: "לקוחות מרוצים",
        en: "Satisfied Clients"
      },
      description: {
        he: "לקוחות שבחרו בנו כשותפים לדרך",
        en: "Clients who chose us as partners"
      },
    },
    {
      value: "M+200",
      label: {
        he: "נכסים בניהול",
        en: "Assets Under Management"
      },
      description: {
        he: "שווי נכסים המנוהלים על ידי הצוות שלנו",
        en: "Value of assets managed by our team"
      },
    },
    {
      value: "15",
      label: {
        he: "שנות ניסיון",
        en: "Years of Experience"
      },
      description: {
        he: "ניסיון מצטבר בתחום הנדל\"ן וההשקעות",
        en: "Cumulative experience in real estate and investments"
      },
    },
    {
      value: "98%",
      label: {
        he: "שביעות רצון",
        en: "Satisfaction Rate"
      },
      description: {
        he: "אחוז הלקוחות שממליצים על שירותינו",
        en: "Percentage of clients who recommend our services"
      },
    },
  ];
  
  // המלצות לקוחות
  const testimonials = [
    {
      quote: {
        he: "Indexland ליוו אותנו בתהליך רכישת נכס בחו\"ל. מהרגע הראשון קיבלנו שירות מקצועי, אדיב ומותאם אישית לצרכים שלנו. אני ממליץ בחום על השירותים שלהם.",
        en: "Indexland accompanied us through the process of purchasing a property overseas. From the first moment, we received professional, courteous, and tailored service to our needs. I highly recommend their services."
      },
      author: {
        he: "יובל כהן",
        en: "Yuval Cohen"
      },
      position: {
        he: "מנכ\"ל",
        en: "CEO"
      },
      company: {
        he: "טק פרו בע\"מ",
        en: "Tech Pro Ltd"
      },
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format",
      rating: 5
    },
    {
      quote: {
        he: "הליווי של צוות Indexland היה מעל ומעבר למצופה. הם עזרו לנו למצוא את הנכס המושלם עבור המשרדים החדשים שלנו ודאגו לכל הפרטים. התהליך היה חלק ומקצועי.",
        en: "The guidance from the Indexland team was above and beyond our expectations. They helped us find the perfect property for our new offices and took care of all the details. The process was smooth and professional."
      },
      author: {
        he: "מיכל לוי",
        en: "Michal Levy"
      },
      position: {
        he: "סמנכ\"ל תפעול",
        en: "COO"
      },
      company: {
        he: "חברת אלפא אינטרנשיונל",
        en: "Alpha International"
      },
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format",
      rating: 5
    },
    {
      quote: {
        he: "בתור משקיע מנוסה, אני יכול לומר בוודאות שהשירות שקיבלתי מ-Indexland היה מהטובים שחוויתי. הידע והמקצועיות שלהם עזרו לי להשיג תשואה מצוינת על ההשקעה שלי.",
        en: "As an experienced investor, I can confidently say that the service I received from Indexland was among the best I've experienced. Their knowledge and professionalism helped me achieve an excellent return on my investment."
      },
      author: {
        he: "אייל דגן",
        en: "Eyal Dagan"
      },
      position: {
        he: "משקיע נדל\"ן",
        en: "Real Estate Investor"
      },
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format",
      rating: 5
    }
  ];
  
  // צוות לדוגמה
  const teamMembers = [
    {
      name: {
        he: "דן ישראלי",
        en: "Dan Israeli"
      },
      role: {
        he: "מייסד ומנכ\"ל",
        en: "Founder & CEO"
      },
      bio: {
        he: "עם ניסיון של למעלה מ-15 שנה בתחום הנדל\"ן והשקעות, דן הוביל עסקאות בהיקף של מאות מיליוני דולרים.",
        en: "With over 15 years of experience in real estate and investments, Dan has led deals worth hundreds of millions of dollars."
      },
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format",
      socialLinks: {
        linkedin: "https://linkedin.com/",
        email: "dan@indexland.com"
      }
    },
    {
      name: {
        he: "מיכל ברק",
        en: "Michal Barak"
      },
      role: {
        he: "סמנכ\"לית השקעות בינלאומיות",
        en: "VP of International Investments"
      },
      bio: {
        he: "מיכל מתמחה בייעוץ ללקוחות בינלאומיים ובהשקעות מעבר לים, עם מומחיות מיוחדת בשווקים האירופאים והאמריקאיים.",
        en: "Michal specializes in advising international clients and overseas investments, with special expertise in European and American markets."
      },
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format",
      socialLinks: {
        linkedin: "https://linkedin.com/",
        email: "michal@indexland.com"
      }
    },
    {
      name: {
        he: "יונתן כהן",
        en: "Jonathan Cohen"
      },
      role: {
        he: "מנהל נכסים בכיר",
        en: "Senior Asset Manager"
      },
      bio: {
        he: "יונתן אחראי על ניהול תיק הנכסים של החברה, עם התמחות בהשבחת נכסים ומיקסום תשואות.",
        en: "Jonathan is responsible for managing the company's asset portfolio, specializing in asset enhancement and yield maximization."
      },
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format",
      socialLinks: {
        linkedin: "https://linkedin.com/",
        email: "jonathan@indexland.com"
      }
    }
  ];

  return (
    <>
      {showLoader && <SlackIntro onAnimationComplete={handleAnimationComplete} />}
      
      <div className={`transition-opacity duration-500 ${loadedContent ? 'opacity-100' : 'opacity-0'}`}>
        <PageContainer>
          {/* Hero Section - fade up & scale in */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <Hero
              variant="background-image"
              title="Indexland: Your A–Z Office & Real Estate Partner"
              subtitle="Turnkey workspace solutions, asset management, and investment services—local and global."
              primaryActionLabel="Book a Meeting"
              primaryActionHref="/book-meeting"
              secondaryActionLabel="Explore Services"
              secondaryActionHref="/services"
              imageUrl={IMAGES.hero.home}
              enableTyping={false}
            />
          </motion.div>

          {/* StaticSlackElements (minimal) - slide in from left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'anticipate' }}
            className="relative w-full overflow-hidden"
          >
            <StaticSlackElements 
              type="minimal" 
              variant="primary" 
              scrollEffect="parallax"
              className="opacity-90 py-6 mb-4" 
            />
          </motion.div>

          {/* ServicesOverview (core offering) - NO ANIMATION */}
          <ServicesOverview services={services} />
          
          {/* WhyChooseUs - pop in & scale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'backOut' }}
          >
            <WhyChooseUs features={features} imageUrl={IMAGES.sections.whyChooseUs} bgColor="bg-gray-50 dark:bg-backgroundDark/80" />
          </motion.div>
          
          {/* ServicesAtAGlance - slide up & fade */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'anticipate' }}
          >
            <ServicesAtAGlance />
          </motion.div>
          
          {/* StaticSlackElements (full) - scaleX pop */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.5 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, type: 'spring', stiffness: 180 }}
            className="relative w-full overflow-hidden"
          >
            <StaticSlackElements 
              type="full" 
              direction="horizontal"
              variant="mixed" 
              scrollEffect="parallax"
              className="opacity-95 py-6" 
            />
          </motion.div>
          
          {/* Metrics - flip in */}
          <motion.div
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'circOut' }}
          >
            <Metrics metrics={metrics} />
          </motion.div>

          {/* TestimonialsSection - bounce in */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
          >
            <TestimonialsSection 
              testimonials={testimonials}
              bgColor="white"
              autoPlay={true}
              autoPlayInterval={6000}
            />
          </motion.div>
          
          {/* ClientsSuccessSection - fade in & scale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'anticipate' }}
          >
            <ClientsSuccessSection />
          </motion.div>
          
          {/* CtaSection - pop in from bottom */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
          >
            <CtaSection 
              title={{
                he: "מוכנים להתחיל?",
                en: "Ready to get started?"
              }}
              subtitle={{
                he: "צרו איתנו קשר היום לפגישת ייעוץ ללא התחייבות",
                en: "Contact us today for a no-obligation consultation"
              }}
              primaryButtonText={{
                he: "תיאום פגישה",
                en: "Book a Meeting"
              }}
              primaryButtonHref="/book-meeting"
              secondaryButtonText={{
                he: "קרא עוד על השירותים שלנו",
                en: "Learn More About Our Services"
              }}
              secondaryButtonHref="/services/office-asset-management"
              variant="highlight"
              bgColor="light"
            />
          </motion.div>

          {/* StaticSlackElements (scattered) - fade in & scale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'anticipate' }}
            className="relative w-full overflow-hidden"
          >
            <StaticSlackElements 
              type="scattered" 
              variant="mixed" 
              scrollEffect="parallax"
              className="opacity-95 py-6" 
            />
          </motion.div>
        </PageContainer>
      </div>
    </>
  );
}
