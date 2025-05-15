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

export const metadata: Metadata = {
  title: typeof SEO.aboutUs.title === 'object' ? SEO.aboutUs.title.he : SEO.aboutUs.title,
  description: typeof SEO.aboutUs.description === 'object' ? SEO.aboutUs.description.he : SEO.aboutUs.description,
  keywords: typeof SEO.aboutUs.keywords === 'object' ? SEO.aboutUs.keywords.he : SEO.aboutUs.keywords,
  openGraph: {
    images: [SEO.aboutUs.ogImage],
  },
};

export default function AboutUs() {
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

  return (
    <PageContainer>
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

      {/* Our Story Section - זכוכיתי, חצי חצי */}
      <section className="relative py-6 bg-transparent overflow-hidden animate-fade-in" id="our-story">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Side */}
          <div className="glass-card rounded-3xl shadow-2xl p-8 md:p-14 animate-fade-in animate-scale-in min-h-[320px] flex flex-col justify-center" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3 animate-fade-in">Our Story</h2>
            <div className="space-y-2">
              <p className="text-lg text-gray-700 dark:text-textSecondary animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Indexland started as a boutique brokerage in Tel Aviv and evolved into a full-service office concierge and real estate partner—now bridging local precision with global opportunity.
              </p>
            </div>
          </div>
          {/* Image Side */}
          <div className="relative animate-fade-in animate-scale-in min-h-[320px] flex items-center" style={{ animationDelay: '0.3s' }}>
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=800&auto=format"
              alt="Indexland Team Office"
              className="rounded-3xl shadow-2xl object-cover w-full h-[320px] md:h-[420px] glass-card"
              style={{ minHeight: 220 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent rounded-3xl pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <MissionVisionSection />
      </div>

      {/* Our Offer Section */}
      <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <OurOfferSection />
      </div>

      {/* Team Section */}
      <div className="animate-fade-in" style={{ animationDelay: '0.25s' }}>
        <TeamSection title="meet the team" />
      </div>

      {/* Core Values Section */}
      <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <CoreValuesSection />
      </div>

      {/* CTA Section */}
      <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
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
      </div>
    </PageContainer>
  );
} 