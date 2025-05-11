import { Metadata } from "next";
import PageContainer from "@/components/layout/PageContainer";
import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { SEO } from "@/constants/site";

export const metadata: Metadata = {
  title: 'ייעוץ נדל"ן מקומי',
  description: SEO.officeAssetManagement.description,
  keywords: SEO.officeAssetManagement.keywords,
  openGraph: {
    images: [SEO.officeAssetManagement.ogImage],
  },
};

export default function OfficeAssetManagement() {
  // יתרונות השירות
  const features = [
    {
      title: "ניהול נכסים מקיף",
      description: "ניהול מקצועי ושוטף של נכסי המשרדים שלך",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm8 8v2h1v1H4v-1h1v-2H4v-1h16v1h-1z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      title: "השבחת נכסים",
      description: "זיהוי הזדמנויות להשבחת הנכס והגדלת ערכו",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
        </svg>
      ),
    },
    {
      title: "ניהול שוכרים",
      description: "ניהול מקצועי של היחסים עם השוכרים וטיפול בצרכיהם",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
        </svg>
      ),
    },
    {
      title: "אסטרטגיית יציאה",
      description: "תכנון אסטרטגיית יציאה יעילה לבעלי הנכסים",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
      ),
    },
  ];

  return (
    <PageContainer>
      {/* Hero Section - Glassy luxury style */}
      <section className="relative py-20 bg-white/0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 pointer-events-none" />
        <div className="container z-10 relative">
          <div className="max-w-3xl mx-auto glass-card animate-fade-in text-center py-16 px-6 md:px-16 rounded-3xl shadow-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-primary drop-shadow-xl mb-6">
              ייעוץ נדל"ן מקומי
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-textSecondary font-light mb-2">
              פתרונות מקיפים לניהול והשבחת נכסי המשרדים שלך, עם דגש על מקסום התשואה
            </p>
            <a href="/book-meeting" className="mt-8 inline-block px-8 py-3 rounded-full bg-primary text-white font-semibold shadow-lg hover:bg-primary-700 transition-all duration-200">
              צור קשר עכשיו
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-gradient-to-t from-white/60 to-transparent rounded-b-3xl blur-lg opacity-60 pointer-events-none" />
      </section>

      {/* Divider */}
      <div className="container mx-auto my-12">
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full opacity-30" />
      </div>

      {/* Why Choose Us - Glassy cards with slide-in animation */}
      <section className="relative py-16 overflow-visible">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-10 animate-fade-in">
            השירותים שלנו
          </h2>
          <p className="text-lg text-gray-600 dark:text-textSecondary text-center mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            אנו מציעים מגוון שירותים בתחום ניהול נכסי המשרדים
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl shadow-xl p-8 flex flex-col items-center text-center animate-slide-in-up"
                style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
              >
                {feature.icon}
                <h3 className="text-xl font-bold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700 dark:text-textSecondary text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
} 