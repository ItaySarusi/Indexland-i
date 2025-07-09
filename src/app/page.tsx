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
    },
    {
      title: t(PAGES.HOME.services[3].title),
      description: t(PAGES.HOME.services[3].description),
      icon: (
        <svg className="w-12 h-12 text-purple-600 animate-pulse" fill="none" viewBox="0 0 48 48" stroke="currentColor"><path d="M24 4l-8 8h6v12h4V12h6l-8-8z" fill="#9C27B0"/><rect x="8" y="32" width="32" height="8" rx="2" fill="#9C27B0"/><circle cx="16" cy="28" r="2" fill="#9C27B0"/><circle cx="32" cy="28" r="2" fill="#9C27B0"/></svg>
      ),
      href: "/services/local-brokerage",
      svg: "/files/svg/House-searching-rafiki.svg"
    }
  ];
  
  // Metrics data
  const metrics = [
    {
      value: "500+",
      label: {
        he: "לקוחות מרוצים",
        en: "Satisfied Clients"
      },
      description: {
        he: "לקוחות שבחרו בנו כשותפים",
        en: "Clients who chose us as partners"
      }
    },
    {
      value: "200M+",
      label: {
        he: "נכסים בניהול",
        en: "Assets Under Management"
      },
      description: {
        he: "שווי נכסים המנוהלים על ידי הצוות שלנו",
        en: "Value of assets managed by our team"
      }
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
      }
    },
    {
      value: "98%",
      label: {
        he: "שיעור שביעות רצון",
        en: "Satisfaction Rate"
      },
      description: {
        he: "אחוז הלקוחות שממליצים על שירותינו",
        en: "Percentage of clients who recommend our services"
      }
    }
  ];
  
  // Testimonials data
  const testimonials = [
    {
      quote: "Indexland transformed our office space beyond our expectations. Their attention to detail and professional approach made the entire process seamless.",
      author: "David Chen",
      position: "CEO",
      company: "TechCorp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "The international investment guidance we received was invaluable. Indexland's expertise helped us make informed decisions in foreign markets.",
      author: "Sarah Williams",
      position: "Operations Director",
      company: "StartupHub",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop&crop=face"
    },
    {
      quote: "Asset management services exceeded our ROI expectations. The team's strategic approach delivered outstanding results.",
      author: "Michael Rodriguez",
      position: "Property Manager",
      company: "GlobalRealty",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
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
              title={PAGES.HOME.hero.title}
              subtitle={PAGES.HOME.hero.subtitle}
              primaryActionLabel={PAGES.HOME.hero.primaryActionLabel}
              primaryActionHref="/book-meeting"
              secondaryActionLabel={PAGES.HOME.hero.secondaryActionLabel}
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

          {/* ServicesOverview (core offering) - Clean animations matching Our Approach */}
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
          
          
          {/* CtaSection - simple fade up */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
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
