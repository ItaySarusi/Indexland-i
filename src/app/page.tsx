'use client';

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

export default function Home() {
  // שירותים לדוגמה
  const services = [
    {
      title: "Turnkey Office Solutions",
      description: "From scouting and lease to daily concierge.",
      icon: (
        <svg className="w-12 h-12 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" fill="#fff" stroke="#FF9800"/><path d="M16 3v4M8 3v4" stroke="#FF9800" strokeWidth="2" strokeLinecap="round"/><rect x="9" y="12" width="6" height="5" rx="1" fill="#FF9800"/></svg>
      ),
      href: "/services/turnkey-office-solutions",
      svg: "/files/svg/metrics.svg"
    },
    {
      title: "Large Asset Management",
      description: "End-to-end strategy, reporting & value creation.",
      icon: (
        <svg className="w-12 h-12 animate-pulse" fill="none" stroke="#2196F3" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="13" width="4" height="8" rx="1" fill="#2196F3"/><rect x="9" y="9" width="4" height="12" rx="1" fill="#90CAF9"/><rect x="15" y="5" width="4" height="16" rx="1" fill="#2196F3"/></svg>
      ),
      href: "/services/large-asset-management",
      svg: "/files/svg/real-time-analytics.svg"
    },
    {
      title: "International Investment",
      description: "Dubai-based sourcing, legal, and investor support.",
      icon: (
        <svg className="w-12 h-12 animate-spin-slow" fill="none" stroke="#43A047" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#43A047" strokeWidth="2" fill="#C8E6C9"/><path d="M12 6v6l4 2" stroke="#388E3C" strokeWidth="2" strokeLinecap="round"/></svg>
      ),
      href: "/services/international-investment",
      svg: "/files/svg/bull-market.svg"
    },
    {
      title: "Local Brokerage",
      description: "Tel Aviv deals—sales, leases, and market advisory.",
      icon: (
        <svg className="w-12 h-12 animate-wiggle" fill="none" stroke="#9C27B0" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="10" rx="2" fill="#E1BEE7"/><path d="M12 2v8" stroke="#9C27B0" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="6" r="2" fill="#9C27B0"/></svg>
      ),
      href: "/services/local-brokerage",
      svg: "/files/svg/handshake.svg"
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
        <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="7" width="18" height="13" rx="3" fill="#fff" stroke="#FF9800" strokeWidth="2"/><path d="M8 3h8v4" stroke="#FF9800" strokeWidth="2" strokeLinecap="round"/><rect x="10" y="13" width="4" height="5" rx="1" fill="#FF9800"/></svg>
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
        <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="13" width="4" height="8" rx="1" fill="#2196F3"/><rect x="9" y="9" width="4" height="12" rx="1" fill="#90CAF9"/><rect x="15" y="5" width="4" height="16" rx="1" fill="#2196F3"/></svg>
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
        <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" fill="#fff" stroke="#4CAF50" strokeWidth="2"/><path d="M12 8v4l3 3" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/></svg>
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
        <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z" fill="#673AB7"/></svg>
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
    <PageContainer glass>
      <Hero
        variant="background-image"
        title="Indexland: Your A–Z Office & Real Estate Partner"
        subtitle="Turnkey workspace solutions, asset management, and investment services—local and global."
        primaryActionLabel="Book a Meeting"
        primaryActionHref="/book-meeting"
        secondaryActionLabel="Explore Services"
        secondaryActionHref="/services"
        imageUrl={IMAGES.hero.home}
      />

      <ServicesOverview services={services} />
      
      <WhyChooseUs features={features} imageUrl={IMAGES.sections.whyChooseUs} bgColor="bg-gray-50 dark:bg-backgroundDark/80" />
      
      <ServicesAtAGlance />
      
      <Metrics metrics={metrics} />

      <TestimonialsSection 
        testimonials={testimonials}
        bgColor="white"
        autoPlay={true}
        autoPlayInterval={6000}
      />
      
      <ClientsSuccessSection />
      
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
