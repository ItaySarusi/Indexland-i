'use client';

import PageContainer from "@/components/layout/PageContainer";
import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Metrics from "@/components/sections/Metrics";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeamSection from "@/components/sections/TeamSection";
import CtaSection from "@/components/sections/CtaSection";
import { IMAGES } from "@/constants/site";
import { Language } from "@/lib/language-context";

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
      image: IMAGES?.sections?.services?.officeManagement || ""
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
      image: IMAGES?.sections?.services?.internationalInvestment || ""
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
      image: IMAGES?.sections?.services?.investmentAdvice || ""
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
      
      <TestimonialsSection 
        testimonials={testimonials}
        bgColor="white"
      />
      
      <TeamSection 
        members={teamMembers}
      />
      
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
          en: "Schedule a Meeting"
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
    </PageContainer>
  );
}
