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

export default function AboutUs() {
  const { t, language, dir } = useLanguage();
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
        en: "What makes Indexland different from other office space search platforms?"
      },
      answer: {
        en: "Indexland combines advanced technology with hands-on industry expertise. Our platform not only shows available spaces but also provides personalized support, local market insights, and expert guidance—helping you make the best decision for your business, quickly and confidently."
      }
    },
    {
      question: {
        en: "How can Indexland help me maximize returns on my commercial property?"
      },
      answer: {
        en: "For property owners, Indexland offers smart listing tools, market analytics, and exposure to high-quality tenants. We streamline the leasing process, making it easier to fill vacancies and optimize your property's performance."
      }
    },
    {
      question: {
        en: "Is Indexland only for large companies or can small businesses use it too?"
      },
      answer: {
        en: "Indexland is designed for all business sizes—from startups to large enterprises. Whether you need a small flexible workspace or a large office headquarters, our platform connects you with options tailored to your needs and budget."
      }
    },
    {
      question: {
        en: "Can I get expert help or do I have to do everything myself?"
      },
      answer: {
        en: "You never have to go it alone with Indexland. Our team of experienced commercial real estate professionals is available to guide you through every step—from shortlisting spaces to negotiation and closing. Just reach out for support at any time."
      }
    },
    {
      question: {
        en: "How do I know the listings on Indexland are accurate and up to date?"
      },
      answer: {
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
      <motion.section id="our-story" className="relative py-6 px-12 bg-transparent overflow-hidden" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div className="glass-card rounded-3xl shadow-2xl p-8 md:p-14 animate-fade-in animate-scale-in min-h-[320px] flex flex-col justify-center" style={{ animationDelay: '0.1s' }} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
            <motion.h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3 animate-fade-in animate-scale-in" style={{ animationDelay: '0.3s' }} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>Our Story</motion.h2>
            <motion.div className="space-y-2 animate-fade-in animate-scale-in" style={{ animationDelay: '0.4s' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <p className="text-lg text-gray-700 dark:text-textSecondary">
                Indexland started as a boutique brokerage in Tel Aviv and evolved into a full-service office concierge and real estate partner—now bridging local precision with global opportunity.
              </p>
            </motion.div>
          </motion.div>
          <motion.div className="relative animate-fade-in animate-scale-in min-h-[320px] flex items-center" style={{ animationDelay: '0.3s' }} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=800&auto=format"
              alt="Indexland Team Office"
              className="rounded-3xl shadow-2xl object-cover w-full h-[320px] md:h-[420px] glass-card"
              style={{ minHeight: 220 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent rounded-3xl pointer-events-none" />
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
        <MissionVisionSection />
      </motion.div>

      {/* Our Offer Section */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}>
        <OurOfferSection />
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