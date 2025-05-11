import { Metadata } from "next";
import PageContainer from "@/components/layout/PageContainer";
import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { SEO } from "@/constants/site";

export const metadata: Metadata = {
  title: SEO.internationalInvestmentBrokerage.title,
  description: SEO.internationalInvestmentBrokerage.description,
  keywords: SEO.internationalInvestmentBrokerage.keywords,
  openGraph: {
    images: [SEO.internationalInvestmentBrokerage.ogImage],
  },
};

export default function InternationalInvestmentBrokerage() {
  // יתרונות השירות
  const features = [
    {
      title: "השקעות גלובליות",
      description: "גישה לשווקים בינלאומיים עם פוטנציאל צמיחה גבוה",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: "ליווי מקצועי",
      description: "ליווי מקצה לקצה בעסקאות השקעה בינלאומיות",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: "ניתוח שוק מקיף",
      description: "ניתוח מעמיק של שווקים ומגמות להבטחת השקעה חכמה",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: "פיזור סיכונים",
      description: "אסטרטגיות לפיזור סיכונים אופטימלי בשווקים גלובליים",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"></path>
        </svg>
      ),
    },
  ];

  return (
    <PageContainer>
      <Hero
        title="תיווך השקעות בינלאומיות"
        subtitle="פתרונות השקעה גלובליים עם ליווי מקצועי ומותאם אישית לכל משקיע"
        primaryActionLabel="לתיאום פגישת ייעוץ"
        primaryActionHref="/book-meeting"
        variant="image-right"
      />
      
      <WhyChooseUs 
        title="היתרונות שלנו"
        subtitle="אנו מציעים שירותי תיווך מקצועיים להשקעות נדל&quot;ן בינלאומיות"
        features={features} 
      />
    </PageContainer>
  );
} 