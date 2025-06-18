'use client';

import { useState, useEffect } from "react";
import PageContainer from "@/components/layout/PageContainer";
import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import ServicesAtAGlance from "@/components/sections/ServicesAtAGlance";
import Metrics from "@/components/sections/Metrics";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";
import ClientsSuccessSection from "@/components/sections/ClientsSuccessSection";
import { PAGES } from "@/constants/site";
import SlackIntro from "@/components/mage-ui/hero/slack-intro";
import StaticSlackElements from "@/components/mage-ui/decorative/static-slack-elements";
import { motion } from 'framer-motion';
import OurOfferSection from "@/components/sections/OurOfferSection";
import { useLanguage } from '@/lib/language-context';

export default function Home() {
  const { t } = useLanguage();
  const [showLoader, setShowLoader] = useState(false);
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
        <svg className="w-12 h-12 text-green-600 animate-spin-slow" fill="none" viewBox="0 0 48 48" stroke="currentColor"><circle cx="24" cy="24" r="18" fill="#C8E6C9" stroke="#43A047" strokeWidth="2.5"/><path d="M24 12v10l8 4" stroke="#388E3C" strokeWidth="2.5" strokeLinecap="round"/><path d="M24 6a18 18 0 1 1 0 36a18 18 0 0 1 0-36z" stroke="#43A047" strokeWidth="2.5"/></svg>
      ),
      href: "/services/international-investment",
      svg: "/files/svg/Investor-presentation-bro.svg"
    },
    {
      title: t(PAGES.HOME.services[3].title),
      description: t(PAGES.HOME.services[3].description),
      icon: (
        <svg className="w-12 h-12 text-purple-600 animate-wiggle" fill="none" viewBox="0 0 48 48" stroke="currentColor"><rect x="10" y="20" width="28" height="16" rx="4" fill="#E1BEE7" stroke="#9C27B0" strokeWidth="2.5"/><path d="M24 8v12" stroke="#9C27B0" strokeWidth="2.5" strokeLinecap="round"/><circle cx="24" cy="14" r="4" fill="#9C27B0"/></svg>
      ),
      href: "/services/local-brokerage",
      svg: "/files/svg/House-searching-rafiki.svg"
    }
  ];

  return (
    <>
      {showLoader && <SlackIntro onAnimationComplete={handleAnimationComplete} />}
      
      <div className={`transition-opacity duration-500 ${loadedContent ? 'opacity-100' : 'opacity-0'}`}>
        <PageContainer>
          {/* Hero Section - fade up & scale in */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.99 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Hero
              variant="background-image"
              title={t(PAGES.HOME.hero.title)}
              subtitle={t(PAGES.HOME.hero.subtitle)}
              primaryActionLabel={t(PAGES.HOME.hero.primaryActionLabel)}
              primaryActionHref="/book-meeting"
              secondaryActionLabel={t(PAGES.HOME.hero.secondaryActionLabel)}
              secondaryActionHref="/services"
              imageUrl="/tlv.webp"
              enableTyping={false}
            />
          </motion.div>

          {/* StaticSlackElements (minimal) - slide in from left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
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
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, ease: [0.25, 0.46, 0.45, 0.94] } } }}>
            <OurOfferSection />
          </motion.div>
          
          {/* ServicesAtAGlance - slide up & fade */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <ServicesAtAGlance />
          </motion.div>
          
          {/* StaticSlackElements (full) - scaleX pop */}
          
            <StaticSlackElements 
              type="full" 
              direction="horizontal"
              variant="mixed" 
              scrollEffect="parallax"
              className="opacity-95 py-6" 
            />
          
          {/* Metrics - flip in */}
          <motion.div
            initial={{ opacity: 0, rotateY: 45 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Metrics metrics={PAGES.HOME.metrics} />
          </motion.div>

          {/* TestimonialsSection - smooth fade in */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <TestimonialsSection 
              testimonials={PAGES.HOME.testimonials}
              bgColor="white"
              autoPlay={true}
              autoPlayInterval={6000}
            />
          </motion.div>
          
          {/* ClientsSuccessSection - fade in & scale */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <ClientsSuccessSection />
          </motion.div> */}
          
          {/* CtaSection - smooth slide up */}
          
            <CtaSection 
              title={t(PAGES.HOME.cta.title)}
              subtitle={t(PAGES.HOME.cta.subtitle)}
              primaryButtonText={t(PAGES.HOME.cta.primaryButtonText)}
              primaryButtonHref="/book-meeting"
              secondaryButtonText={t(PAGES.HOME.cta.secondaryButtonText)}
              secondaryButtonHref="/services"
              variant="centered"
            />
        </PageContainer>
      </div>
    </>
  );
}
