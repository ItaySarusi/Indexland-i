import { Metadata } from "next";
import { SEO, IMAGES, CONTACT_PHONE, CONTACT_ADDRESS } from "@/constants/site";
import PageContainer from "@/components/layout/PageContainer";
import Hero from "@/components/sections/Hero";
import ContactSection from "@/components/sections/ContactSection";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "צור קשר | Indexland",
  description: "צרו קשר עם Indexland לקבלת מידע נוסף על שירותי ניהול נכסים והשקעות נדל\"ן",
  keywords: "צור קשר, אודות, נדל\"ן, השקעות",
  openGraph: {
    images: ["/images/og-contact.jpg"],
  },
};

export default function Contact() {
  // שאלות נפוצות
  const faqs = [
    {
      question: {
        he: "איך אוכל לקבוע פגישת ייעוץ?",
        en: "How can I schedule a consultation?"
      },
      answer: {
        he: "ניתן לקבוע פגישת ייעוץ דרך דף 'קביעת פגישה' באתר, בטלפון, או באמצעות טופס יצירת הקשר.",
        en: "You can schedule a consultation through our 'Book a Meeting' page, by phone, or through our contact form."
      }
    },
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
    },
    {
      question: {
        he: "האם אתם מספקים שירותים גם למשקיעים פרטיים?",
        en: "Do you provide services for private investors as well?"
      },
      answer: {
        he: "כן, אנחנו מלווים משקיעים פרטיים ומוסדיים כאחד. הצוות שלנו מותאם לצרכים הספציפיים של כל לקוח.",
        en: "Yes, we support both private and institutional investors. Our team adapts to the specific needs of each client."
      }
    },
    {
      question: {
        he: "האם אתם עובדים עם ספקי משכנתאות?",
        en: "Do you work with mortgage providers?"
      },
      answer: {
        he: "כן, יש לנו שיתופי פעולה עם מספר בנקים וספקי משכנתאות מובילים שיכולים להציע תנאים מועדפים ללקוחותינו.",
        en: "Yes, we have partnerships with several leading banks and mortgage providers that can offer preferred terms for our clients."
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
          he: "אנחנו כאן כדי לענות על כל שאלה ולסייע לך בכל צורך",
          en: "We're here to answer any questions and assist you with your needs"
        }}
        variant="centered"
      />
      
      <ContactSection
        title={{ 
          he: "צרו איתנו קשר",
          en: "Contact Us"
        }}
        subtitle={{ 
          he: "נשמח לשמוע ממך ולענות על כל שאלה. מלא את הטופס ונחזור אליך בהקדם.",
          en: "We'd love to hear from you and answer any questions. Fill out the form and we'll get back to you soon."
        }}
        officeLocations={[
          {
            city: { he: "תל אביב", en: "Tel Aviv" },
            address: CONTACT_ADDRESS,
            email: "info@indexland.com",
            phone: CONTACT_PHONE,
            hours: { he: "א׳-ה׳, 9:00-18:00", en: "Sun-Thu, 9:00-18:00" }
          },
          // ... existing code ...
        ]}
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
                      href={`tel:${CONTACT_PHONE}`}
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