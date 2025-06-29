'use client';

import { useState, useEffect } from "react";
import PageContainer from "@/components/layout/PageContainer";
import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import ServicesAtAGlance from "@/components/sections/ServicesAtAGlance";
import Metrics from "@/components/sections/Metrics";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";
import { PAGES } from "@/constants/site";
import SlackIntro from "@/components/mage-ui/hero/slack-intro";
import StaticSlackElements from "@/components/mage-ui/decorative/static-slack-elements";
import { motion } from 'framer-motion';
import OurOfferSection from "@/components/sections/OurOfferSection";
import { useLanguage } from '@/lib/language-context';

export default function Home() {
  const { t } = useLanguage();
  const [showLoader, setShowLoader] = useState(true);
  const [loadedContent, setLoadedContent] = useState(false);
  
  // Load content only after loader finishes
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

  // Services with icons and SVGs
  const services = [
    {
      title: t(PAGES.HOME.services[0].title),
      description: t(PAGES.HOME.services[0].description),
      icon: (
        <svg className="w-12 h-12 text-primary animate-bounce" fill="none" viewBox="0 0 48 48" stroke="currentColor"><rect x="8" y="16" width="32" height="24" rx="4" fill="#fff" stroke="#FF9800" strokeWidth="2.5"/><rect x="16" y="24" width="16" height="8" rx="2" fill="#FF9800"/><path d="M16 16V12a8 8 0 0 1 16 0v4" stroke="#FF9800" strokeWidth="2.5" strokeLinecap="round"/></svg>
      ),
      href: "/services/turnkey-office-solutions",
      svg: "/files/gif/Company.gif"
    },
    {
      title: t(PAGES.HOME.services[1].title),
      description: t(PAGES.HOME.services[1].description),
      icon: (
        <svg className="w-12 h-12 text-blue-600 animate-pulse" fill="none" viewBox="0 0 48 48" stroke="currentColor"><rect x="10" y="28" width="6" height="12" rx="2" fill="#2196F3"/><rect x="21" y="20" width="6" height="20" rx="2" fill="#90CAF9"/><rect x="32" y="12" width="6" height="28" rx="2" fill="#2196F3"/><path d="M10 40h28" stroke="#2196F3" strokeWidth="2.5"/></svg>
      ),
      href: "/services/large-asset-management",
      svg: "/files/svg/Building-permit-amico.svg"
    },
    {
      title: t(PAGES.HOME.services[2].title),
      description: t(PAGES.HOME.services[2].description),
      icon: (
        <svg className="w-12 h-12 text-green-600 animate-spin-slow" fill="none" viewBox="0 0 48 48" stroke="currentColor"><circle cx="24" cy="24" r="20" stroke="#4CAF50" strokeWidth="2.5" fill="none"/><path d="M24 8v16l8 8" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round"/></svg>
      ),
      href: "/services/international-investment-brokerage",
      svg: "/files/svg/investing.svg"
    }
  ];
  
  // Metrics data
  const metrics = [
    {
      number: "50+",
      label: {
        he: "פרויקטים שהושלמו",
        en: "Projects Completed"
      },
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      number: "₪500M+",
      label: {
        he: "שווי נכסים בניהול",
        en: "Assets Under Management"
      },
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "95%",
      label: {
        he: "שביעות רצון לקוחות",
        en: "Client Satisfaction"
      },
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      number: "24/7",
      label: {
        he: "זמינות ותמיכה",
        en: "Availability & Support"
      },
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];
  
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "David Chen",
      role: "CEO, TechCorp",
      content: "Indexland transformed our office space beyond our expectations. Their attention to detail and professional approach made the entire process seamless.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Sarah Williams", 
      role: "Operations Director, StartupHub",
      content: "The international investment guidance we received was invaluable. Indexland's expertise helped us make informed decisions in foreign markets.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Property Manager, GlobalRealty",
      content: "Asset management services exceeded our ROI expectations. The team's strategic approach delivered outstanding results.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];
  
  // צוות לדוגמה
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
              imageUrl="/tlv.webp"
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

          {/* Our Offer Section */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}>
            <OurOfferSection />
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
              variant="centered"
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
