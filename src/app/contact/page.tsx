import { Metadata } from "next";
import PageContainer from "@/components/layout/PageContainer";
import Hero from "@/components/sections/Hero";
import ContactSection from "@/components/sections/ContactSection";
import FaqSection from "@/components/sections/FaqSection";
import { SEO, IMAGES } from "@/constants/site";

export const metadata: Metadata = {
  title: typeof SEO.contact.title === 'object' ? SEO.contact.title.he : SEO.contact.title,
  description: typeof SEO.contact.description === 'object' ? SEO.contact.description.he : SEO.contact.description,
  keywords: typeof SEO.contact.keywords === 'object' ? SEO.contact.keywords.he : SEO.contact.keywords,
  openGraph: {
    images: [SEO.contact.ogImage],
  },
};

export default function Contact() {
  // פרטי יצירת קשר
  const contactInfo = {
    email: {
      label: {
        he: "דוא\"ל",
        en: "Email"
      },
      value: "info@indexland.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      )
    },
    phone: {
      label: {
        he: "טלפון",
        en: "Phone"
      },
      value: "+972-3-1234567",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
      )
    },
    address: {
      label: {
        he: "כתובת",
        en: "Address"
      },
      value: {
        he: "רחוב אלנבי 123, תל אביב, ישראל",
        en: "123 Allenby St., Tel Aviv, Israel"
      },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      )
    }
  };
  
  // שאלות נפוצות
  const faqs = [
    {
      question: {
        he: "כמה זמן בדרך כלל לוקח לכם להגיב לפניות?",
        en: "How long does it typically take for you to respond to inquiries?"
      },
      answer: {
        he: "אנו שואפים להגיב לכל הפניות תוך 24 שעות בימי עסקים. במקרים דחופים, אנו ממליצים לציין זאת בשורת הנושא או להתקשר ישירות למספר הטלפון שלנו.",
        en: "We aim to respond to all inquiries within 24 hours on business days. In urgent cases, we recommend noting this in the subject line or calling our phone number directly."
      }
    },
    {
      question: {
        he: "האם אתם מציעים פגישות וירטואליות?",
        en: "Do you offer virtual meetings?"
      },
      answer: {
        he: "כן, אנו מציעים פגישות וירטואליות באמצעות Zoom, Teams או פלטפורמות אחרות לנוחיותכם. ניתן לתאם פגישה וירטואלית באמצעות טופס יצירת הקשר או בהתקשרות ישירה.",
        en: "Yes, we offer virtual meetings via Zoom, Teams, or other platforms for your convenience. You can schedule a virtual meeting through the contact form or by direct contact."
      }
    },
    {
      question: {
        he: "איך אוכל לקבוע פגישת ייעוץ ראשונית?",
        en: "How can I schedule an initial consultation?"
      },
      answer: {
        he: "ניתן לקבוע פגישת ייעוץ ראשונית באמצעות טופס יצירת הקשר באתר, באמצעות שליחת דוא\"ל ישירות או באמצעות שיחת טלפון. נציג שלנו יחזור אליכם כדי לתאם מועד שמתאים לכם.",
        en: "You can schedule an initial consultation through the contact form on the website, by sending an email directly, or by phone call. Our representative will get back to you to arrange a time that suits you."
      }
    },
    {
      question: {
        he: "האם אתם מציעים סיורים בנכסים?",
        en: "Do you offer property tours?"
      },
      answer: {
        he: "כן, אנו מציעים סיורים בנכסים למשקיעים פוטנציאליים. הסיורים מותאמים אישית לפי העדפותיכם והקריטריונים שלכם. ניתן לתאם סיור באמצעות יצירת קשר עם הצוות שלנו.",
        en: "Yes, we offer property tours for potential investors. The tours are customized according to your preferences and criteria. You can schedule a tour by contacting our team."
      }
    }
  ];

  return (
    <PageContainer>
      <Hero
        title={{
          he: "צור קשר",
          en: "Contact Us"
        }}
        subtitle={{
          he: "אנחנו כאן לענות על כל שאלה ולסייע בכל דרך אפשרית",
          en: "We're here to answer any questions and assist in any way possible"
        }}
        variant="centered"
        imageUrl={IMAGES.hero.contact}
      />
      
      <ContactSection 
        title={{
          he: "נשמח לשמוע ממך",
          en: "We'd Love to Hear from You"
        }}
        subtitle={{
          he: "מלא את הטופס ונחזור אליך בהקדם",
          en: "Fill out the form and we'll get back to you shortly"
        }}
        contactInfo={contactInfo}
        bgColor="white"
      />
      
      <FaqSection 
        title={{
          he: "שאלות נפוצות",
          en: "Frequently Asked Questions"
        }}
        subtitle={{
          he: "תשובות לשאלות הנפוצות ביותר על יצירת קשר ופגישות",
          en: "Answers to the most common questions about contacting and meeting with us"
        }}
        faqs={faqs}
        columns={2}
        bgColor="light"
      />
      
      <div className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-700 dark:bg-primary-800 rounded-lg shadow-xl overflow-hidden">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center lg:max-w-3xl">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block" dir="rtl">מוכנים לצעד הבא?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-100" dir="rtl">
                  שוחח עם אחד המומחים שלנו עוד היום ונתחיל לעבוד יחד על יעדי ההשקעה שלך.
                </p>
                <div className="mt-8 flex" dir="rtl">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      href="tel:+97231234567"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50"
                    >
                      התקשר עכשיו
                    </a>
                  </div>
                  <div className="mr-4 inline-flex">
                    <a
                      href="mailto:info@indexland.com"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-800 hover:bg-primary-900"
                    >
                      שלח דוא"ל
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full h-96 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27049.089169843918!2d34.762819874357046!3d32.087888350840274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b8ed2312f3d%3A0xa2aafe806de6c9f4!2sAllenby%20St%2C%20Tel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1700000000000!5m2!1sen!2sil" 
          className="w-full h-full border-0" 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="מפת המיקום שלנו"
          aria-label="מפת גוגל המציגה את המיקום של המשרד שלנו"
        />
      </div>
    </PageContainer>
  );
} 