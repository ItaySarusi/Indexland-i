'use client';
import { Metadata } from "next";
import PageContainer from "@/components/layout/PageContainer";
import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Metrics from "@/components/sections/Metrics";
import TeamSection from "@/components/sections/TeamSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";
import { SEO, IMAGES } from "@/constants/site";
import MissionVisionSection from "@/components/sections/MissionVisionSection";
import OurOfferSection from "@/components/sections/OurOfferSection";
import CoreValuesSection from "@/components/sections/CoreValuesSection";
import { useLanguage } from '@/lib/language-context';
import { motion } from 'framer-motion';
import AboutTabsSection from "@/components/sections/AboutTabsSection";
import ClientsLogoCarousel from "@/components/sections/ClientsLogoCarousel";
import { PAGES } from '@/constants/site';

export default function AboutUs() {
  const { t, language, dir } = useLanguage();

  return (
    <PageContainer>
      <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}>
        <Hero 
          title={PAGES.ABOUT_US.hero.title}
          subtitle={PAGES.ABOUT_US.hero.subtitle}
          primaryActionLabel={PAGES.ABOUT_US.hero.primaryActionLabel}
          primaryActionHref="/book-meeting"
          secondaryActionLabel={PAGES.ABOUT_US.hero.secondaryActionLabel}
          secondaryActionHref="/services"
          imageUrl="/view.webp"
          variant="background-image"
        />
      </motion.div>

      {/* Our Story Section */}
      <motion.section id="our-story" className="relative py-6 px-2 bg-transparent overflow-hidden" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.0, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}>
        <AboutTabsSection />
      </motion.section>

      {/* Our Clients Logo Carousel Section */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.0, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}>
        <ClientsLogoCarousel />
      </motion.section>

      {/* WhyChooseUs - smooth scale */}
      <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
          <WhyChooseUs 
            features={PAGES.ABOUT_US.features} 
            imageUrl={IMAGES.sections.whyChooseUs} 
            bgColor="bg-gray-50 dark:bg-backgroundDark/80" 
          />
        </motion.div>

      {/* Team Section */}
      <motion.div initial={{ opacity: 0, rotateY: 30 }} whileInView={{ opacity: 1, rotateY: 0 }} viewport={{ once: true }} transition={{ duration: 1.0, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
        <TeamSection />
      </motion.div>

      {/* Core Values Section */}
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.0, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}>
        <CoreValuesSection />
      </motion.div>

      {/* CTA Section */}
        <CtaSection 
          title={PAGES.ABOUT_US.cta.title}
          subtitle={PAGES.ABOUT_US.cta.subtitle}
          primaryButtonText={PAGES.ABOUT_US.cta.primaryButtonText}
          primaryButtonHref="/book-meeting"
          secondaryButtonText={PAGES.ABOUT_US.cta.secondaryButtonText}
          secondaryButtonHref="/services"
          variant="centered"
        />

      {/* FAQ Section */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.0, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}>
        <FaqSection 
          faqs={PAGES.ABOUT_US.faqs} 
          title={PAGES.ABOUT_US.faqTitle}
        />
      </motion.div>
    </PageContainer>
  );
} 