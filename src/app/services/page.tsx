'use client';

import PageContainer from "@/components/layout/PageContainer";
import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Metrics from "@/components/sections/Metrics";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";
import ContactSection from "@/components/sections/ContactSection";
import { IMAGES, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS, PAGES } from "@/constants/site";
import Image from "next/image";

export default function Services() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <Hero 
        title={PAGES.SERVICES.hero.title}
        subtitle={PAGES.SERVICES.hero.subtitle}
        primaryActionLabel={PAGES.SERVICES.hero.primaryActionLabel}
        primaryActionHref="/book-meeting"
        secondaryActionLabel={PAGES.SERVICES.hero.secondaryActionLabel}
        secondaryActionHref="/book-meeting"
        imageUrl="/view.webp"
        variant="background-image"
      />

      {/* Services Overview */}
      <ServicesOverview services={PAGES.SERVICES.services} />

      {/* Why Choose Us */}
      <WhyChooseUs 
        features={PAGES.SERVICES.features} 
        imageUrl={IMAGES.sections.whyChooseUs} 
        bgColor="bg-gray-50 dark:bg-backgroundDark/80" 
      />

      {/* Metrics */}
      <Metrics metrics={PAGES.SERVICES.metrics} />

      {/* FAQ Section */}
      <FaqSection 
        faqs={PAGES.SERVICES.faqs} 
        title={PAGES.SERVICES.faqTitle}
      />

      {/* CTA Section */}
      <CtaSection 
        title={PAGES.SERVICES.cta.title}
        subtitle={PAGES.SERVICES.cta.subtitle}
        primaryButtonText={PAGES.SERVICES.cta.primaryButtonText}
        primaryButtonHref="/book-meeting"
        secondaryButtonText={PAGES.SERVICES.cta.secondaryButtonText}
        secondaryButtonHref="/contact"
        variant="centered"
      />
    </PageContainer>
  );
} 