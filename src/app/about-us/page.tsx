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
import CoreValuesSection from "@/components/sections/CoreValuesSection";
import { useLanguage } from '@/lib/language-context';
import { motion } from 'framer-motion';

export default function AboutUs() {
  const { t, language, dir } = useLanguage();
  // יתרונות לדוגמה
  // const features = [
  //   {
  //     title: {
  //       he: "ניסיון מקצועי",
  //       en: "Professional Experience"
  //     },
  //     description: {
  //       he: "צוות עם ניסיון רב בענף הנדל\"ן המשרדי וההשקעות",
  //       en: "Team with extensive experience in the office real estate and investment industry"
  //     },
  //     icon: (
  //       <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  //         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
  //       </svg>
  //     ),
  //   },
  //   {
  //     title: {
  //       he: "שירות אישי",
  //       en: "Personal Service"
  //     },
  //     description: {
  //       he: "ליווי אישי צמוד לאורך כל תהליך ההשקעה והניהול",
  //       en: "Close personal guidance throughout the investment and management process"
  //     },
  //     icon: (
  //       <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  //         <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
  //       </svg>
  //     ),
  //   },
  //   {
  //     title: {
  //       he: "אסטרטגיה מותאמת",
  //       en: "Tailored Strategy"
  //     },
  //     description: {
  //       he: "פתרונות המותאמים לצרכים הייחודיים של כל לקוח",
  //       en: "Solutions tailored to the unique needs of each client"
  //     },
  //     icon: (
  //       <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  //         <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
  //         <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
  //       </svg>
  //     ),
  //   },
  //   {
  //     title: {
  //       he: "שקיפות מלאה",
  //       en: "Full Transparency"
  //     },
  //     description: {
  //       he: "תקשורת פתוחה ושקופה עם לקוחותינו בכל שלב",
  //       en: "Open and transparent communication with our clients at every stage"
  //     },
  //     icon: (
  //       <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  //         <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
  //       </svg>
  //     ),
  //   },
  // ];
  
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
        he: "מהם השירותים העיקריים שאתם מציעים?",
        en: "What are the main services you offer?"
      },
      answer: {
        he: "אנו מציעים שירותי ניהול נכסי משרדים, תיווך השקעות בינלאומיות וייעוץ השקעות. אנו מתמחים בליווי אישי ומקצועי של לקוחותינו בכל שלבי העסקה, מהיעוץ הראשוני ועד לביצוע בפועל.",
        en: "We offer office asset management services, international investment brokerage, and investment consulting. We specialize in personal and professional guidance for our clients throughout all stages of the transaction, from initial consultation to actual execution."
      }
    },
    {
      question: {
        he: "באילו אזורים אתם פועלים?",
        en: "In which areas do you operate?"
      },
      answer: {
        he: "אנו פועלים בעיקר בישראל, אירופה וארה\"ב. יש לנו ניסיון רב גם בשווקים מתפתחים נוספים בהתאם לצרכי הלקוחות.",
        en: "We operate primarily in Israel, Europe, and the US. We also have extensive experience in additional emerging markets according to client needs."
      }
    },
    {
      question: {
        he: "מהו תהליך העבודה שלכם עם לקוחות חדשים?",
        en: "What is your work process with new clients?"
      },
      answer: {
        he: "תהליך העבודה מתחיל בפגישת היכרות והבנת הצרכים, לאחר מכן אנו בונים אסטרטגיה מותאמת אישית, מציגים אפשרויות ולבסוף מלווים את הלקוח עד להשלמת העסקה ולאחריה.",
        en: "The work process begins with an introductory meeting and understanding needs, then we build a personalized strategy, present options, and finally accompany the client until the completion of the transaction and beyond."
      }
    },
    {
      question: {
        he: "אילו סוגי נכסים אתם מנהלים?",
        en: "What types of properties do you manage?"
      },
      answer: {
        he: "אנו מתמחים בניהול נכסי משרדים, מבני מסחר, מרכזי לוגיסטיקה ונכסים מניבים נוספים. התיק שלנו מגוון ומותאם לפרופיל הסיכון והתשואה הרצוי ללקוח.",
        en: "We specialize in managing office properties, commercial buildings, logistics centers, and additional income-producing properties. Our portfolio is diverse and adapted to the client's desired risk and return profile."
      }
    },
    {
      question: {
        he: "מהי ההשקעה המינימלית הנדרשת?",
        en: "What is the minimum investment required?"
      },
      answer: {
        he: "ההשקעה המינימלית משתנה בהתאם לסוג הנכס והשוק. אנו עובדים עם לקוחות פרטיים בסכומים החל מ-$100,000 ועד להשקעות מוסדיות במיליוני דולרים.",
        en: "The minimum investment varies according to the type of property and market. We work with private clients on amounts starting from $100,000 up to institutional investments in millions of dollars."
      }
    },
    {
      question: {
        he: "האם אתם מעניקים שירותי ניהול שוטף לנכסים?",
        en: "Do you provide ongoing property management services?"
      },
      answer: {
        he: "כן, אנו מציעים שירותי ניהול נכסים הכוללים טיפול בכל ההיבטים התפעוליים, כספיים ואדמיניסטרטיביים של הנכס, כולל גביית שכר דירה, תחזוקה שוטפת וניהול יחסי שוכרים.",
        en: "Yes, we offer property management services that include handling all operational, financial, and administrative aspects of the property, including rent collection, ongoing maintenance, and tenant relationship management."
      }
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
        en: "Real-time dashboards. Smarter decisions."
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
        en: "Tel Aviv roots with deep local access."
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
        he: "שער חלק לשוק של דובאי.",
        en: "Smooth gateway into Dubai's market."
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <PageContainer>
      <motion.div initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <Hero 
          title={{
            he: 'הסיפור שלנו - מי אנחנו ולמה אנחנו כאן',
            en: 'Our Story - Who We Are and Why We\'re Here'
          }}
          subtitle={{
            he: 'צוות המומחים שלנו מחויב להוביל את לקוחותינו להצלחה בעולם הנדל"ן, תוך שמירה על ערכי מקצועיות, יושרה ושירות אישי',
            en: "Our team of experts is committed to leading our clients to success in the real estate world, while maintaining values of professionalism, integrity and personal service"
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

      {/* WhyChooseUs - pop in & scale */}
      <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'backOut' }}
          >
            <WhyChooseUs features={features} imageUrl={IMAGES.sections.whyChooseUs} bgColor="bg-gray-50 dark:bg-backgroundDark/80" />
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
        <FaqSection faqs={faqs} />
      </motion.div>
    </PageContainer>
  );
} 