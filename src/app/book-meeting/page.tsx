import { Metadata } from "next";
import PageContainer from "@/components/layout/PageContainer";
import Hero from "@/components/sections/Hero";
import { SEO } from "@/constants/site";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import { useLanguage } from "@/lib/language-context";

// הכנת ערכי מטה-דאטה
const metadataTitle = "קביעת פגישה | Indexland";
const metadataDescription = "קבעו פגישת ייעוץ עם המומחים שלנו";
const metadataKeywords = "פגישה, ייעוץ, נדל\"ן, השקעות, ליווי";

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  keywords: metadataKeywords,
  openGraph: {
    images: [SEO.bookMeeting.ogImage],
  },
};

export default function BookMeeting() {
  const { language, t } = useLanguage();
  
  const heroTitle = {
    he: "קביעת פגישת ייעוץ",
    en: "Book a Consultation"
  };
  
  const heroSubtitle = {
    he: "מלאו את הפרטים ונחזור אליכם בהקדם לתיאום פגישה עם אחד המומחים שלנו",
    en: "Fill in the details and we will get back to you as soon as possible to schedule a meeting with one of our experts"
  };
  
  const serviceOptions = {
    he: [
      { value: "office-asset-management", label: "ניהול נכסי משרדים" },
      { value: "international-investment", label: "תיווך השקעות בינלאומיות" },
      { value: "investment-advice", label: "ייעוץ השקעות" },
      { value: "other", label: "אחר" },
    ],
    en: [
      { value: "office-asset-management", label: "Office Asset Management" },
      { value: "international-investment", label: "International Investments" },
      { value: "investment-advice", label: "Investment Consulting" },
      { value: "other", label: "Other" },
    ]
  };
  
  const formLabels = {
    fullName: {
      he: "שם מלא",
      en: "Full Name"
    },
    phone: {
      he: "טלפון",
      en: "Phone"
    },
    email: {
      he: "דוא״ל",
      en: "Email"
    },
    meetingTopic: {
      he: "נושא הפגישה",
      en: "Meeting Topic"
    },
    additionalDetails: {
      he: "פרטים נוספים",
      en: "Additional Details"
    },
    sendRequest: {
      he: "שלח בקשה לפגישה",
      en: "Send Meeting Request"
    },
    responseTime: {
      he: "אנו מתחייבים לחזור אליך תוך 24 שעות בימי עסקים",
      en: "We commit to get back to you within 24 hours on business days"
    }
  };
  
  const placeholders = {
    fullName: {
      he: "הכנס את שמך המלא",
      en: "Enter your full name"
    },
    phone: {
      he: "הכנס את מספר הטלפון שלך",
      en: "Enter your phone number"
    },
    email: {
      he: "הכנס את כתובת הדוא״ל שלך",
      en: "Enter your email address"
    },
    meetingTopic: {
      he: "בחר את נושא הפגישה",
      en: "Select the meeting topic"
    },
    additionalDetails: {
      he: "ספר לנו קצת על הצרכים שלך",
      en: "Tell us a bit about your needs"
    }
  };

  return (
    <PageContainer>
      <Hero
        title={heroTitle}
        subtitle={heroSubtitle}
        variant="centered"
      />
      
      <div className="max-w-2xl mx-auto my-12 p-8 bg-white rounded-lg shadow-md">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input 
              label={t(formLabels.fullName)}
              placeholder={t(placeholders.fullName)}
              required
              fullWidth
            />
            <Input 
              label={t(formLabels.phone)}
              type="tel"
              placeholder={t(placeholders.phone)}
              required
              fullWidth
            />
          </div>
          
          <Input 
            label={t(formLabels.email)}
            type="email"
            placeholder={t(placeholders.email)}
            required
            fullWidth
          />
          
          <Select 
            label={t(formLabels.meetingTopic)}
            options={serviceOptions[language]}
            placeholder={t(placeholders.meetingTopic)}
            required
            fullWidth
          />
          
          <Textarea 
            label={t(formLabels.additionalDetails)}
            placeholder={t(placeholders.additionalDetails)}
            rows={4}
            fullWidth
          />
          
          <div className="flex justify-center">
            <Button type="submit" size="lg">
              {t(formLabels.sendRequest)}
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 text-center mt-4">
            {t(formLabels.responseTime)}
          </p>
        </form>
      </div>
    </PageContainer>
  );
} 