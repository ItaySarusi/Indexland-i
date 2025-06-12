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

export default function AboutUs() {
  const { t, language, dir } = useLanguage();
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
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: {
        he: "Data-First.",
        en: "Data-First."
      },
      description: {
        he: "דשבורדים בזמן אמת. החלטות חכמות יותר.",
        en: "Local expert negotiation, exclusive assets, with  years  of experience in the local market."
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: {
        he: "On the Ground.",
        en: "On the Ground."
      },
      description: {
        he: "שורשים בתל אביב עם גישה מקומית עמוקה.",
        en: "Expert team that finds the perfect client for the perfect property."
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: {
        he: "Go Global.",
        en: "Go Global."
      },
      description: {
        he: "שער חלק לשוק של דובאי. שותפים מקומיים בדובאי להצלחה בטוחה.",
        en: "Smooth gateway into Dubai's market. Local partners in Dubai for secure success."
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
    },
    {
      name: {
        he: "אורית לוי",
        en: "Orit Levy"
      },
      role: {
        he: "מנהלת שיווק ומכירות",
        en: "Marketing & Sales Director"
      },
      bio: {
        he: "אורית מביאה ניסיון עשיר בשיווק ומכירות בתחום הנדל\"ן, עם מומחיות ביצירת אסטרטגיות שיווק יעילות.",
        en: "Orit brings rich experience in real estate marketing and sales, with expertise in creating effective marketing strategies."
      },
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format",
      socialLinks: {
        linkedin: "https://linkedin.com/",
        email: "orit@indexland.com"
      }
    },
    {
      name: {
        he: "אלון שרון",
        en: "Alon Sharon"
      },
      role: {
        he: "מנהל פיתוח עסקי",
        en: "Business Development Manager"
      },
      bio: {
        he: "אלון מתמחה ביצירת שותפויות אסטרטגיות ובזיהוי הזדמנויות עסקיות חדשות.",
        en: "Alon specializes in creating strategic partnerships and identifying new business opportunities."
      },
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format",
      socialLinks: {
        linkedin: "https://linkedin.com/",
        email: "alon@indexland.com"
      }
    },
    {
      name: {
        he: "שירה כהן",
        en: "Shira Cohen"
      },
      role: {
        he: "יועצת משפטית",
        en: "Legal Advisor"
      },
      bio: {
        he: "עם ניסיון במשפט מסחרי ונדל\"ן, שירה מלווה את כל העסקאות בחברה ומוודאת רמה גבוהה של ביטחון משפטי ללקוחותינו.",
        en: "With experience in commercial and real estate law, Shira accompanies all transactions in the company and ensures a high level of legal security for our clients."
      },
      image: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=400&auto=format",
      socialLinks: {
        linkedin: "https://linkedin.com/",
        email: "shira@indexland.com"
      }
    }
  ];
  
  // שאלות נפוצות
  const faqs = [
    {
      question: {
        he: "מה מייחד את Indexland מפלטפורמות אחרות לחיפוש משרדים?",
        en: "What makes Indexland different from other office space search platforms?"
      },
      answer: {
        he: "Indexland משלבת טכנולוגיה מתקדמת עם מומחיות תעשייתית מעשית. הפלטפורמה שלנו לא רק מציגה חללים זמינים אלא גם מספקת תמיכה אישית, תובנות שוק מקומיות והדרכה מקצועית - עוזרת לך לקבל את ההחלטה הטובה ביותר לעסק שלך, במהירות ובביטחון.",
        en: "Indexland combines advanced technology with hands-on industry expertise. Our platform not only shows available spaces but also provides personalized support, local market insights, and expert guidance—helping you make the best decision for your business, quickly and confidently."
      }
    },
    {
      question: {
        he: "איך Indexland יכולה לעזור לי למקסם תשואות על הנכס המסחרי שלי?",
        en: "How can Indexland help me maximize returns on my commercial property?"
      },
      answer: {
        he: "לבעלי נכסים, Indexland מציעה כלי רישום חכמים, אנליטיקת שוק וחשיפה לשוכרים איכותיים. אנחנו מייעלים את תהליך ההשכרה, מקלים על מילוי משרות פנויות ומייעלים את ביצועי הנכס שלך.",
        en: "For property owners, Indexland offers smart listing tools, market analytics, and exposure to high-quality tenants. We streamline the leasing process, making it easier to fill vacancies and optimize your property's performance."
      }
    },
    {
      question: {
        he: "האם Indexland מיועדת רק לחברות גדולות או שגם עסקים קטנים יכולים להשתמש בה?",
        en: "Is Indexland only for large companies or can small businesses use it too?"
      },
      answer: {
        he: "Indexland מיועדת לכל גדלי העסקים - מסטארט-אפים ועד ארגונים גדולים. בין אם אתה צריך חלל עבודה קטן וגמיש או מטה משרדים גדול, הפלטפורמה שלנו מחברת אותך לאפשרויות המותאמות לצרכים ולתקציב שלך.",
        en: "Indexland is designed for all business sizes—from startups to large enterprises. Whether you need a small flexible workspace or a large office headquarters, our platform connects you with options tailored to your needs and budget."
      }
    },
    {
      question: {
        he: "האם אני יכול לקבל עזרה מקצועית או שאני צריך לעשות הכל בעצמי?",
        en: "Can I get expert help or do I have to do everything myself?"
      },
      answer: {
        he: "אתה אף פעם לא צריך להתמודד לבד עם Indexland. הצוות שלנו של אנשי מקצוע מנוסים בנדל\"ן מסחרי זמין להדריך אותך בכל שלב - מרישום חללים ועד משא ומתן וסגירה. פשוט פנה לתמיכה בכל עת.",
        en: "You never have to go it alone with Indexland. Our team of experienced commercial real estate professionals is available to guide you through every step—from shortlisting spaces to negotiation and closing. Just reach out for support at any time."
      }
    },
    {
      question: {
        he: "איך אני יודע שהרישומים ב-Indexland מדויקים ומעודכנים?",
        en: "How do I know the listings on Indexland are accurate and up to date?"
      },
      answer: {
        he: "כל הרישומים ב-Indexland נבדקים ומעודכנים באופן קבוע על ידי הצוות הפנימי שלנו וסוכנים מקומיים מהימנים. אנחנו עובדים ישירות עם בעלי נכסים ומנהלים כדי להבטיח שמה שאתה רואה זמין עכשיו, עם נתוני שוק בזמן אמת שאתה יכול לסמוך עליהם.",
        en: "All Indexland listings are regularly verified and updated by our in-house team and trusted local agents. We work directly with property owners and managers to ensure that what you see is available now, with real-time market data you can trust."
      }
    }
  ];

  return (
    <PageContainer>
      <motion.div initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <Hero 
          title={{
            he: 'למה לבחור ב-Indexland?',
            en: 'Why Choose Indexland?'
          }}
          subtitle={{
            he: 'אנחנו מחויבים להוביל את לקוחותינו להצלחה בעולם הנדל"ן, תוך שמירה על ערכי מקצועיות, יושרה ושירות אישי',
            en: 'We are committed to lead our clients on their path to Success committed to leading our clients to success in the real estate world, while maintaining values of professionalism, integrity and personal service'
          }}
          primaryActionLabel={{
            he: 'צור קשר עכשיו',
            en: "Contact Us Now"
          }}
          primaryActionHref="/book-meeting"
          secondaryActionLabel={{
            he: 'למידע נוסף על החזון שלנו',
            en: "Learn More About Our Vision"
          }}
          secondaryActionHref="#mission-vision"
          imageUrl={IMAGES.hero.aboutUs}
          variant="background-image"
        />
      </motion.div>

      {/* Our Story Section */}
      <motion.section id="our-story" className="relative py-6 px-2 bg-transparent overflow-hidden" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
        <AboutTabsSection />
      </motion.section>

      {/* Our Clients Logo Carousel Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
        <ClientsLogoCarousel />
      </motion.section>

      {/* WhyChooseUs - pop in & scale */}
      <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'backOut' }}
          >
          <WhyChooseUs 
            features={features} 
            imageUrl={IMAGES.sections.whyChooseUs} 
            bgColor="bg-gray-50 dark:bg-backgroundDark/80" 
          />
        </motion.div>

      {/* Team Section */}
      <motion.div initial={{ opacity: 0, rotateY: 90 }} whileInView={{ opacity: 1, rotateY: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
        <TeamSection title="meet the team" />
      </motion.div>

      {/* Core Values Section */}
      <motion.div initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1.05 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4, type: 'spring', bounce: 0.4 }}>
        <CoreValuesSection />
      </motion.div>

      {/* CTA Section */}
      <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.5 }}>
        <CtaSection 
          title={{
            he: "נשמח לדבר איתך",
            en: "We'd Love to Talk"
          }}
          subtitle={{
            he: "יש לך שאלות? צור קשר עם הצוות שלנו",
            en: "Got questions? Get in touch with our team"
          }}
          primaryButtonText={{
            he: "תיאום פגישה",
            en: "Schedule a Meeting"
          }}
          primaryButtonHref="/book-meeting"
          variant="centered"
        />
      </motion.div>

      {/* FAQ Section */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.6 }}>
        <FaqSection 
          faqs={faqs} 
          title="Indexland FAQ – SEO & Trust-Building"
        />
      </motion.div>
    </PageContainer>
  );
} 