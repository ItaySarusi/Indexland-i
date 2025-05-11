import { Metadata } from "next";
import PageContainer from "@/components/layout/PageContainer";
import Hero from "@/components/sections/Hero";
import CtaSection from "@/components/sections/CtaSection";
import { SEO, IMAGES } from "@/constants/site";
import Image from "next/image";

export const metadata: Metadata = {
  title: typeof SEO.properties.title === 'object' ? SEO.properties.title.he : SEO.properties.title,
  description: typeof SEO.properties.description === 'object' ? SEO.properties.description.he : SEO.properties.description,
  keywords: typeof SEO.properties.keywords === 'object' ? SEO.properties.keywords.he : SEO.properties.keywords,
  openGraph: {
    images: [SEO.properties.ogImage],
  },
};

export default function Properties() {
  // רשימת הנכסים
  const properties = [
    {
      id: "prop1",
      title: {
        he: "מגדל משרדים פרימיום",
        en: "Premium Office Tower"
      },
      location: {
        he: "תל אביב, ישראל",
        en: "Tel Aviv, Israel"
      },
      price: {
        he: "₪ 25,000,000",
        en: "$7,000,000"
      },
      size: {
        he: "2,500 מ\"ר",
        en: "2,500 sqm"
      },
      type: {
        he: "משרדים",
        en: "Offices"
      },
      description: {
        he: "מגדל משרדים יוקרתי במיקום מרכזי בתל אביב. הנכס כולל קומות משרדים גמישות, שטחי מסחר בקומת הקרקע, חניון תת-קרקעי, ומערכות בניין חכם.",
        en: "Prestigious office tower in a central location in Tel Aviv. The property includes flexible office floors, commercial areas on the ground floor, underground parking, and smart building systems."
      },
      features: [
        {
          he: "מיקום מרכזי",
          en: "Central Location"
        },
        {
          he: "חניון תת-קרקעי",
          en: "Underground Parking"
        },
        {
          he: "לובי מפואר",
          en: "Luxurious Lobby"
        },
        {
          he: "מערכות בניין חכם",
          en: "Smart Building Systems"
        },
        {
          he: "תקרה גבוהה",
          en: "High Ceiling"
        }
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format",
      return: {
        he: "תשואה שנתית: 7.5%",
        en: "Annual Return: 7.5%"
      }
    },
    {
      id: "prop2",
      title: {
        he: "מרכז לוגיסטי",
        en: "Logistics Center"
      },
      location: {
        he: "מודיעין, ישראל",
        en: "Modi'in, Israel"
      },
      price: {
        he: "₪ 18,000,000",
        en: "$5,000,000"
      },
      size: {
        he: "5,000 מ\"ר",
        en: "5,000 sqm"
      },
      type: {
        he: "לוגיסטיקה",
        en: "Logistics"
      },
      description: {
        he: "מרכז לוגיסטי מודרני עם גישה נוחה לכבישים ראשיים. הנכס כולל אזורי אחסון גדולים, רמפות העמסה, ומשרדים נלווים. מושכר לטווח ארוך לחברת שילוח בינלאומית.",
        en: "Modern logistics center with convenient access to major highways. The property includes large storage areas, loading docks, and accompanying offices. Long-term leased to an international shipping company."
      },
      features: [
        {
          he: "גישה מהירה לכבישים ראשיים",
          en: "Quick Access to Major Highways"
        },
        {
          he: "רמפות העמסה מרובות",
          en: "Multiple Loading Docks"
        },
        {
          he: "שטח אחסון גדול",
          en: "Large Storage Area"
        },
        {
          he: "תקרה גבוהה",
          en: "High Ceiling"
        },
        {
          he: "שוכר איכותי לטווח ארוך",
          en: "Quality Long-term Tenant"
        }
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format",
      return: {
        he: "תשואה שנתית: 8.2%",
        en: "Annual Return: 8.2%"
      }
    },
    {
      id: "prop3",
      title: {
        he: "מרכז מסחרי",
        en: "Commercial Center"
      },
      location: {
        he: "חיפה, ישראל",
        en: "Haifa, Israel"
      },
      price: {
        he: "₪ 35,000,000",
        en: "$9,800,000"
      },
      size: {
        he: "4,200 מ\"ר",
        en: "4,200 sqm"
      },
      type: {
        he: "מסחרי",
        en: "Commercial"
      },
      description: {
        he: "מרכז מסחרי פעיל בלב שכונת מגורים צומחת. הנכס כולל חנויות מגוונות, מסעדות, וסופרמרקט עוגן. תפוסה גבוהה ותנועת לקוחות ערה.",
        en: "Active commercial center in the heart of a growing residential neighborhood. The property includes diverse stores, restaurants, and an anchor supermarket. High occupancy and lively customer traffic."
      },
      features: [
        {
          he: "שוכרים מגוונים",
          en: "Diverse Tenants"
        },
        {
          he: "תפוסה גבוהה",
          en: "High Occupancy"
        },
        {
          he: "חניון גדול",
          en: "Large Parking Lot"
        },
        {
          he: "הזדמנות להרחבה",
          en: "Expansion Opportunity"
        },
        {
          he: "תנועת לקוחות ערה",
          en: "Lively Customer Traffic"
        }
      ],
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format",
      return: {
        he: "תשואה שנתית: 7.8%",
        en: "Annual Return: 7.8%"
      }
    },
    {
      id: "prop4",
      title: {
        he: "בניין משרדים בוטיק",
        en: "Boutique Office Building"
      },
      location: {
        he: "ירושלים, ישראל",
        en: "Jerusalem, Israel"
      },
      price: {
        he: "₪ 14,500,000",
        en: "$4,050,000"
      },
      size: {
        he: "1,800 מ\"ר",
        en: "1,800 sqm"
      },
      type: {
        he: "משרדים",
        en: "Offices"
      },
      description: {
        he: "בניין משרדים בוטיק משופץ באזור עסקי מתפתח בירושלים. הנכס כולל משרדים מודרניים, חללי עבודה משותפים, ומרפסות גג. עיצוב פנים ברמה גבוהה.",
        en: "Renovated boutique office building in a developing business area in Jerusalem. The property includes modern offices, shared workspaces, and roof terraces. High-level interior design."
      },
      features: [
        {
          he: "משופץ לחלוטין",
          en: "Completely Renovated"
        },
        {
          he: "עיצוב מודרני",
          en: "Modern Design"
        },
        {
          he: "חללי עבודה משותפים",
          en: "Shared Workspaces"
        },
        {
          he: "מרפסות גג",
          en: "Roof Terraces"
        },
        {
          he: "חסכוני באנרגיה",
          en: "Energy Efficient"
        }
      ],
      image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=800&auto=format",
      return: {
        he: "תשואה שנתית: 6.9%",
        en: "Annual Return: 6.9%"
      }
    },
    {
      id: "prop5",
      title: {
        he: "פארק משרדים ירוק",
        en: "Green Office Park"
      },
      location: {
        he: "הרצליה פיתוח, ישראל",
        en: "Herzliya Pituach, Israel"
      },
      price: {
        he: "₪ 55,000,000",
        en: "$15,400,000"
      },
      size: {
        he: "7,500 מ\"ר",
        en: "7,500 sqm"
      },
      type: {
        he: "קמפוס משרדים",
        en: "Office Campus"
      },
      description: {
        he: "קמפוס משרדים ירוק בהרצליה פיתוח, הכולל מספר בניינים מוקפים בגינות מטופחות. הנכס מאופיין בבנייה ירוקה עם תקן LEED, ומושכר לחברות היי-טק מובילות.",
        en: "Green office campus in Herzliya Pituach, including several buildings surrounded by landscaped gardens. The property is characterized by green building with LEED certification, and is leased to leading high-tech companies."
      },
      features: [
        {
          he: "בנייה ירוקה",
          en: "Green Building"
        },
        {
          he: "תקן LEED",
          en: "LEED Certification"
        },
        {
          he: "שטחים ירוקים",
          en: "Green Spaces"
        },
        {
          he: "מיקום פרימיום",
          en: "Premium Location"
        },
        {
          he: "שוכרים איכותיים",
          en: "Quality Tenants"
        }
      ],
      image: "https://images.unsplash.com/photo-1556156653-e5a7c69cc263?q=80&w=800&auto=format",
      return: {
        he: "תשואה שנתית: 6.5%",
        en: "Annual Return: 6.5%"
      }
    },
    {
      id: "prop6",
      title: {
        he: "מבנה תעשייה קלה",
        en: "Light Industrial Building"
      },
      location: {
        he: "נתניה, ישראל",
        en: "Netanya, Israel"
      },
      price: {
        he: "₪ 12,800,000",
        en: "$3,580,000"
      },
      size: {
        he: "3,200 מ\"ר",
        en: "3,200 sqm"
      },
      type: {
        he: "תעשייה",
        en: "Industrial"
      },
      description: {
        he: "מבנה תעשייה קלה באזור התעשייה של נתניה. הנכס כולל שטחי ייצור, אחסון ומשרדים. גישה נוחה לכבישים ראשיים ותשתיות מודרניות.",
        en: "Light industrial building in Netanya's industrial zone. The property includes production areas, storage, and offices. Convenient access to major highways and modern infrastructure."
      },
      features: [
        {
          he: "גישה לכבישים ראשיים",
          en: "Access to Major Highways"
        },
        {
          he: "גובה תקרה גבוה",
          en: "High Ceiling Height"
        },
        {
          he: "תשתית חשמל מתקדמת",
          en: "Advanced Electrical Infrastructure"
        },
        {
          he: "רצפת בטון מחוזקת",
          en: "Reinforced Concrete Floor"
        },
        {
          he: "אפשרויות שימוש מגוונות",
          en: "Diverse Use Options"
        }
      ],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format",
      return: {
        he: "תשואה שנתית: 8.5%",
        en: "Annual Return: 8.5%"
      }
    }
  ];

  return (
    <PageContainer>
      <Hero
        title={{
          he: "נכסים זמינים",
          en: "Available Properties"
        }}
        subtitle={{
          he: "גלה את מגוון הנכסים המסחריים שלנו להשקעה",
          en: "Discover our range of commercial properties for investment"
        }}
        variant="centered"
        imageUrl={IMAGES.hero.properties}
      />
      
      <div className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              <span className="block" dir="rtl">נכסים פרימיום להשקעה</span>
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto" dir="rtl">
              אנו מתמחים באיתור נכסים איכותיים עם פוטנציאל השבחה ותשואה אטרקטיבית
            </p>
          </div>
          
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-w-4 aspect-h-3 bg-gray-200 group-hover:opacity-90 transition-opacity">
                    <Image
                      src={property.image}
                      alt={typeof property.title === 'object' ? property.title.he : property.title}
                      width={800}
                      height={600}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 end-4 px-3 py-1.5 bg-primary-600 text-white text-sm font-medium rounded-md">
                      {typeof property.type === 'object' ? property.type.he : property.type}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div dir="rtl">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {typeof property.title === 'object' ? property.title.he : property.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 flex items-center">
                        <svg className="h-4 w-4 flex-shrink-0 ms-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                        </svg>
                        {typeof property.location === 'object' ? property.location.he : property.location}
                      </p>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded" dir="rtl">
                        <span className="text-sm text-gray-500 dark:text-gray-400">גודל</span>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {typeof property.size === 'object' ? property.size.he : property.size}
                        </p>
                      </div>
                      <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded" dir="rtl">
                        <span className="text-sm text-gray-500 dark:text-gray-400">מחיר</span>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {typeof property.price === 'object' ? property.price.he : property.price}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-primary-600 dark:text-primary-400 font-semibold text-center" dir="rtl">
                      {typeof property.return === 'object' ? property.return.he : property.return}
                    </div>
                    
                    <div className="mt-6" dir="rtl">
                      <h4 className="font-medium text-gray-900 dark:text-white">מאפיינים</h4>
                      <ul className="mt-2 grid grid-cols-1 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
                        {property.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <svg className="h-4 w-4 flex-shrink-0 me-1.5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                            {typeof feature === 'object' ? feature.he : feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-6">
                      <a
                        href={`/properties/${property.id}`}
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
                        dir="rtl"
                      >
                        פרטים נוספים
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl" dir="rtl">
              תהליך ההשקעה שלנו
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto" dir="rtl">
              הגישה המובנית שלנו מבטיחה שכל השקעה עוברת תהליך קפדני של סינון והערכה
            </p>
          </div>
          
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
              <div className="relative text-center" dir="rtl">
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-primary-600 rounded-full text-white">
                  1
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">בחינה ראשונית</h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  סינון קפדני של נכסים פוטנציאליים לפי קריטריונים מוגדרים מראש
                </p>
              </div>
              
              <div className="relative text-center" dir="rtl">
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-primary-600 rounded-full text-white">
                  2
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">בדיקת נאותות</h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  ניתוח מעמיק של היבטים משפטיים, פיננסיים וטכניים של הנכס
                </p>
              </div>
              
              <div className="relative text-center" dir="rtl">
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-primary-600 rounded-full text-white">
                  3
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">הצעת השקעה</h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  הכנת מבנה עסקה אופטימלי והצגת הזדמנות ההשקעה ללקוחות
                </p>
              </div>
              
              <div className="relative text-center" dir="rtl">
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-primary-600 rounded-full text-white">
                  4
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">ניהול ומעקב</h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  ניהול מקצועי של הנכס ודיווח שוטף למשקיעים על ביצועים
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CtaSection 
        title={{
          he: "מעוניינים בהשקעה?",
          en: "Interested in Investing?"
        }}
        subtitle={{
          he: "צוות המומחים שלנו ישמח לייעץ לך ולענות על כל שאלה",
          en: "Our team of experts would be happy to advise you and answer any questions"
        }}
        primaryButtonText={{
          he: "קבע פגישת ייעוץ",
          en: "Schedule a Consultation"
        }}
        primaryButtonHref="/contact"
        secondaryButtonText={{
          he: "מידע נוסף",
          en: "More Information"
        }}
        secondaryButtonHref="/services"
        variant="highlight"
        bgColor="primary"
      />
    </PageContainer>
  );
} 