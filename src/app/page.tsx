import PageContainer from "@/components/layout/PageContainer";
import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Metrics from "@/components/sections/Metrics";
import { SEO, IMAGES } from "@/constants/site";
import { Metadata } from "next";
import { Language } from "@/lib/language-context";

export const metadata: Metadata = {
  title: SEO.home.title.he,
  description: SEO.home.description.he,
  keywords: SEO.home.keywords.he,
  openGraph: {
    images: [SEO.home.ogImage],
  },
};

export default function Home() {
  // שירותים לדוגמה
  const services = [
    {
      title: {
        he: "ניהול נכסי משרדים",
        en: "Office Asset Management"
      },
      description: {
        he: "ניהול מקצועי של נכסי משרדים עם דגש על השבחה והשאת תשואה",
        en: "Professional management of office assets with emphasis on enhancement and yield maximization"
      },
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm8 8v2h1v1H4v-1h1v-2H4v-1h16v1h-1z" clipRule="evenodd"></path>
        </svg>
      ),
      href: "/services/office-asset-management",
      image: IMAGES.sections.services.officeManagement
    },
    {
      title: {
        he: "תיווך השקעות בינלאומיות",
        en: "International Investment Brokerage"
      },
      description: {
        he: "ליווי אישי בתהליך ההשקעה בנכסי נדל\"ן בינלאומיים",
        en: "Personal guidance in the process of investing in international real estate assets"
      },
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"></path>
        </svg>
      ),
      href: "/services/international-investment-brokerage",
      image: IMAGES.sections.services.internationalInvestment
    },
    {
      title: {
        he: "ייעוץ השקעות",
        en: "Investment Consulting"
      },
      description: {
        he: "ייעוץ מקצועי המותאם אישית לצרכים שלך והאסטרטגיה העסקית",
        en: "Professional consulting tailored to your needs and business strategy"
      },
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
        </svg>
      ),
      href: "/book-meeting",
      image: IMAGES.sections.services.investmentAdvice
    },
  ];
  
  // יתרונות לדוגמה
  const features = [
    {
      title: {
        he: "ניסיון מקצועי",
        en: "Professional Experience"
      },
      description: {
        he: "צוות עם ניסיון רב בענף הנדל\"ן המשרדי וההשקעות",
        en: "Team with extensive experience in the office real estate and investment industry"
      },
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: {
        he: "שירות אישי",
        en: "Personal Service"
      },
      description: {
        he: "ליווי אישי צמוד לאורך כל תהליך ההשקעה והניהול",
        en: "Close personal guidance throughout the investment and management process"
      },
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: {
        he: "אסטרטגיה מותאמת",
        en: "Tailored Strategy"
      },
      description: {
        he: "פתרונות המותאמים לצרכים הייחודיים של כל לקוח",
        en: "Solutions tailored to the unique needs of each client"
      },
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
        </svg>
      ),
    },
    {
      title: {
        he: "שקיפות מלאה",
        en: "Full Transparency"
      },
      description: {
        he: "תקשורת פתוחה ושקופה עם לקוחותינו בכל שלב",
        en: "Open and transparent communication with our clients at every stage"
      },
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
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
      value: "+200M",
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

  return (
    <PageContainer>
      <Hero
        title={{
          he: "פתרונות נדל\"ן מתקדמים עבור המשקיעים של מחר",
          en: "Advanced Real Estate Solutions for Tomorrow's Investors"
        }}
        subtitle={{
          he: "אנו מתמחים בניהול נכסי משרדים, תיווך והשקעות נדל\"ן בינלאומיות, עם דגש על שירות אישי ומקצועי",
          en: "We specialize in office asset management, brokerage, and international real estate investments, with emphasis on personal and professional service"
        }}
        primaryActionLabel={{
          he: "קבע פגישת ייעוץ",
          en: "Schedule a Consultation"
        }}
        primaryActionHref="/book-meeting"
        secondaryActionLabel={{
          he: "קרא עוד",
          en: "Read More"
        }}
        secondaryActionHref="/about-us"
        imageUrl={IMAGES.hero.home}
      />
      
      <ServicesOverview services={services} />
      
      <WhyChooseUs features={features} imageUrl={IMAGES.sections.whyChooseUs} />
      
      <Metrics metrics={metrics} />
    </PageContainer>
  );
}
