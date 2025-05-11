import { Metadata } from "next";
import PageContainer from "@/components/layout/PageContainer";
import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Metrics from "@/components/sections/Metrics";
import { SEO } from "@/constants/site";

export const metadata: Metadata = {
  title: SEO.aboutUs.title,
  description: SEO.aboutUs.description,
  keywords: SEO.aboutUs.keywords,
  openGraph: {
    images: [SEO.aboutUs.ogImage],
  },
};

export default function AboutUs() {
  // יתרונות לדוגמה
  const features = [
    {
      title: "ניסיון מקצועי",
      description: "צוות עם ניסיון רב בענף הנדל\"ן המשרדי וההשקעות",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: "שירות אישי",
      description: "ליווי אישי צמוד לאורך כל תהליך ההשקעה והניהול",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: "אסטרטגיה מותאמת",
      description: "פתרונות המותאמים לצרכים הייחודיים של כל לקוח",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
        </svg>
      ),
    },
    {
      title: "שקיפות מלאה",
      description: "תקשורת פתוחה ושקופה עם לקוחותינו בכל שלב",
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
      label: "לקוחות מרוצים",
      description: "לקוחות שבחרו בנו כשותפים לדרך",
    },
    {
      value: "+200M",
      label: "נכסים בניהול",
      description: "שווי נכסים המנוהלים על ידי הצוות שלנו",
    },
    {
      value: "15",
      label: "שנות ניסיון",
      description: "ניסיון מצטבר בתחום הנדל\"ן וההשקעות",
    },
    {
      value: "98%",
      label: "שביעות רצון",
      description: "אחוז הלקוחות שממליצים על שירותינו",
    },
  ];

  return (
    <PageContainer>
      <Hero
        title="אודות Indexland"
        subtitle="אנו מובילים פתרונות נדל&quot;ן חדשניים עם דגש על מקצועיות, שקיפות ושירות אישי"
        variant="centered"
      />
      
      <WhyChooseUs 
        title="הסיפור שלנו"
        subtitle="Indexland נוסדה בשנת 2009 במטרה לספק פתרונות ייחודיים בעולם הנדל&quot;ן המשרדי וההשקעות הבינלאומיות"
        features={features} 
      />
      
      <Metrics 
        title="במספרים"
        subtitle="ההישגים שלנו מדברים בעד עצמם"
        metrics={metrics} 
      />
    </PageContainer>
  );
} 