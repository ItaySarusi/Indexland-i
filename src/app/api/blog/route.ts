import { NextResponse } from 'next/server';
import { BlogListResponse, BlogPost } from '@/types/blog';
import { Language } from '@/lib/language-context';

// מידע מדמה (mock) לפוסטים של הבלוג
const mockPosts: BlogPost[] = [
  {
    id: "blog001",
    slug: "investment-trends-2023",
    title: {
      he: "מגמות השקעה מובילות בנדל\"ן משרדי לשנת 2023",
      en: "Leading Office Real Estate Investment Trends for 2023"
    },
    description: {
      he: "ניתוח מעמיק של המגמות המובילות בשוק הנדל\"ן המשרדי בשנת 2023 והזדמנויות ההשקעה הטובות ביותר",
      en: "An in-depth analysis of the leading trends in the office real estate market in 2023 and the best investment opportunities"
    },
    content: {
      he: `
# מגמות השקעה מובילות בנדל\"ן משרדי לשנת 2023

שוק הנדל\"ן המשרדי עובר שינויים משמעותיים בשנים האחרונות, בעיקר בעקבות המגפה העולמית והשינויים בדפוסי העבודה. בעוד שרבים חששו מקריסה בשוק המשרדים, בפועל אנו עדים למגמות חדשות ומרתקות.

## 1. מרחבי עבודה גמישים

אחת המגמות הבולטות ביותר היא הדרישה הגוברת למרחבי עבודה גמישים. חברות רבות מחפשות אפשרויות לשכירת משרדים לטווח קצר עד בינוני, עם אפשרות להרחבה או צמצום בהתאם לצרכים העסקיים.

## 2. משרדים ירוקים וברי-קיימא

משקיעים ושוכרים כאחד מגלים עניין גובר במשרדים שתוכננו עם דגש על קיימות וחיסכון באנרגיה. בניינים עם תקני LEED או BREEAM זוכים לביקוש גבוה ומצליחים להשיג מחירי שכירות גבוהים יותר.

## 3. טכנולוגיה מתקדמת במשרדים

בניינים חכמים המשלבים טכנולוגיות מתקדמות כמו מערכות ניהול בניין (BMS), שליטה דיגיטלית במערכות, וטכנולוגיות לשמירה על בריאות העובדים הפכו למבוקשים במיוחד.

## 4. מיקומים פרימיום בערים מרכזיות

למרות החששות מנטישת משרדים במרכזי הערים, אנו רואים דווקא התחזקות בביקוש למשרדים במיקומי פרימיום בערים מרכזיות. חברות מעוניינות לשמור על נוכחות במרכזי הערים כדי לשמר את תרבות החברה ולמשוך כישרונות.

## סיכום

שוק הנדל\"ן המשרדי אמנם משתנה, אך מציע הזדמנויות רבות למשקיעים המבינים את המגמות החדשות. בIndexland אנו עוקבים אחר התפתחויות אלו ומסייעים ללקוחותינו לזהות את ההזדמנויות הטובות ביותר בשוק.
      `,
      en: `
# Leading Office Real Estate Investment Trends for 2023

The office real estate market has been undergoing significant changes in recent years, primarily due to the global pandemic and changes in work patterns. While many feared a collapse in the office market, we are actually witnessing new and fascinating trends.

## 1. Flexible Workspaces

One of the most prominent trends is the growing demand for flexible workspaces. Many companies are looking for options to rent offices for short to medium terms, with the option to expand or reduce according to business needs.

## 2. Green and Sustainable Offices

Both investors and tenants are showing increasing interest in offices designed with a focus on sustainability and energy efficiency. Buildings with LEED or BREEAM standards are in high demand and manage to achieve higher rental prices.

## 3. Advanced Technology in Offices

Smart buildings that incorporate advanced technologies such as Building Management Systems (BMS), digital control systems, and technologies for maintaining employee health have become particularly sought after.

## 4. Premium Locations in Central Cities

Despite concerns about office abandonment in city centers, we are actually seeing an increase in demand for offices in premium locations in central cities. Companies are interested in maintaining a presence in city centers to preserve company culture and attract talent.

## Summary

The office real estate market is indeed changing, but offers many opportunities for investors who understand the new trends. At Indexland, we follow these developments and help our clients identify the best opportunities in the market.
      `
    },
    coverImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000&auto=format",
    author: {
      name: {
        he: "דן ישראלי",
        en: "Dan Israeli"
      },
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format",
      title: {
        he: "מייסד ומנכ\"ל",
        en: "Founder & CEO"
      }
    },
    publishedAt: "2023-05-15T09:00:00Z",
    tags: {
      he: ["נדל\"ן משרדי", "השקעות", "מגמות שוק", "2023"],
      en: ["Office Real Estate", "Investments", "Market Trends", "2023"]
    },
    readingTime: 8
  },
  {
    id: "blog002",
    slug: "international-investments-guide",
    title: {
      he: "המדריך המקיף להשקעות נדל\"ן בינלאומיות: על מה חשוב לשים לב",
      en: "The Comprehensive Guide to International Real Estate Investments: What to Watch For"
    },
    description: {
      he: "כל מה שצריך לדעת לפני שמשקיעים בנדל\"ן מעבר לים: סיכונים, הזדמנויות, וטיפים מניסיוננו",
      en: "Everything you need to know before investing in overseas real estate: risks, opportunities, and tips from our experience"
    },
    content: {
      he: `
# המדריך המקיף להשקעות נדל\"ן בינלאומיות

השקעות נדל\"ן בינלאומיות מציעות הזדמנויות מרתקות לגיוון תיק ההשקעות ולהשגת תשואות אטרקטיביות, אך הן גם מלוות באתגרים ייחודיים. במאמר זה נסקור את הנקודות החשובות ביותר שיש לקחת בחשבון.

## בחירת שוק: היכן כדאי להשקיע?

בחירת השוק הנכון היא אחד הגורמים המשפיעים ביותר על הצלחת ההשקעה. יש לבחון:

- יציבות פוליטית וכלכלית
- מערכת משפטית אמינה
- מגמות דמוגרפיות וכלכליות
- נזילות השוק והיכולת לממש את ההשקעה בעתיד

## אספקטים משפטיים ומיסויים

השקעה בחו\"ל מחייבת הבנה של:

- חוקי הרכישה והבעלות במדינת היעד
- השלכות מס הן במדינת היעד והן בישראל
- אמנות מס בינלאומיות והשפעתן
- מגבלות על משקיעים זרים

## ניהול הנכס מרחוק

אחד האתגרים המשמעותיים בהשקעות בינלאומיות הוא ניהול הנכס:

- התקשרות עם חברת ניהול מקומית אמינה
- מערכות דיווח ובקרה
- התמודדות עם הפרשי שעות ותרבות עסקית שונה

## מימון ומינוף

אפשרויות המימון להשקעות בינלאומיות כוללות:

- מימון מקומי במדינת היעד
- מימון מבנקים ישראליים
- שיקולי מטבע וגידור סיכוני מט\"ח

## סיכום

השקעות נדל\"ן בינלאומיות יכולות להיות רווחיות מאוד, אך מחייבות הכנה יסודית והבנה מעמיקה של השוק המקומי. בIndexland אנו מלווים משקיעים לאורך כל התהליך, מזיהוי ההזדמנות ועד לניהול השוטף של הנכס.
      `,
      en: `
# The Comprehensive Guide to International Real Estate Investments

International real estate investments offer fascinating opportunities to diversify your investment portfolio and achieve attractive returns, but they also come with unique challenges. In this article, we'll review the most important points to consider.

## Market Selection: Where to Invest?

Choosing the right market is one of the most influential factors in the success of the investment. Consider:

- Political and economic stability
- Reliable legal system
- Demographic and economic trends
- Market liquidity and the ability to realize the investment in the future

## Legal and Tax Aspects

Investing abroad requires an understanding of:

- Purchase and ownership laws in the destination country
- Tax implications both in the destination country and in Israel
- International tax treaties and their impact
- Restrictions on foreign investors

## Remote Property Management

One of the significant challenges in international investments is property management:

- Engaging with a reliable local management company
- Reporting and control systems
- Dealing with time differences and different business cultures

## Financing and Leverage

Financing options for international investments include:

- Local financing in the destination country
- Financing from Israeli banks
- Currency considerations and hedging foreign exchange risks

## Summary

International real estate investments can be very profitable, but require thorough preparation and a deep understanding of the local market. At Indexland, we accompany investors throughout the process, from identifying the opportunity to the ongoing management of the property.
      `
    },
    coverImage: "https://images.unsplash.com/photo-1451153378752-16ef2b36ad05?q=80&w=1000&auto=format",
    author: {
      name: {
        he: "מיכל ברק",
        en: "Michal Barak"
      },
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format",
      title: {
        he: "סמנכ\"לית השקעות בינלאומיות",
        en: "VP of International Investments"
      }
    },
    publishedAt: "2023-06-22T10:30:00Z",
    tags: {
      he: ["השקעות בינלאומיות", "נדל\"ן", "מדריך", "סיכונים"],
      en: ["International Investments", "Real Estate", "Guide", "Risks"]
    },
    readingTime: 12
  },
  {
    id: "blog003",
    slug: "office-assets-optimization",
    title: {
      he: "5 אסטרטגיות להשבחת נכסי משרדים בשוק תחרותי",
      en: "5 Strategies for Optimizing Office Assets in a Competitive Market"
    },
    description: {
      he: "איך להשביח נכסי משרדים ולהגדיל את התשואה בשוק התחרותי של היום? 5 אסטרטגיות מנצחות מהמומחים שלנו",
      en: "How to enhance office assets and increase returns in today's competitive market? 5 winning strategies from our experts"
    },
    content: {
      he: `
# 5 אסטרטגיות להשבחת נכסי משרדים בשוק תחרותי

בעולם הנדל\"ן המשרדי של היום, השבחת נכסים היא מרכיב קריטי בהשאת התשואה למשקיעים. להלן חמש אסטרטגיות מוכחות שאנו מיישמים ב-Indexland:

## 1. שדרוג חללים משותפים

אחת הדרכים היעילות ביותר להשביח נכס משרדי היא השקעה בשדרוג החללים המשותפים. לובי מרשים, חדרי ישיבות מודרניים, ואזורי מנוחה אטרקטיביים יכולים להעלות משמעותית את ערך הנכס כולו.

השקעה ממוקדת בחללים אלו מספקת תמורה גבוהה להשקעה, שכן היא משפיעה על חווית כל השוכרים בבניין.

## 2. התייעלות אנרגטית

השקעה במערכות חסכוניות באנרגיה מספקת תועלת כפולה:
- הורדת עלויות התפעול השוטפות
- שיפור האטרקטיביות של הנכס לשוכרים מודעי סביבה

שדרוגים כמו תאורת LED, מערכות מיזוג חכמות, ובידוד משופר מחזירים את ההשקעה תוך זמן קצר.

## 3. אימוץ טכנולוגיות חכמות

הפיכת המשרד ל\"משרד חכם\" באמצעות טכנולוגיות מתקדמות:
- מערכות גישה ואבטחה דיגיטליות
- ניטור ושליטה מרחוק על מערכות הבניין
- קישוריות אינטרנט מהירה ואמינה

נכסים עם תשתית טכנולוגית מתקדמת מושכים שוכרים איכותיים ומאפשרים גביית שכר דירה גבוה יותר.

## 4. חלוקה מחדש של החלל

לעתים, שינוי באופן חלוקת החלל יכול להגדיל משמעותית את הערך:
- התאמה לדרישות השוק העכשוויות
- יצירת יחידות בגדלים מגוונים
- תכנון גמיש המאפשר התאמה לצרכים משתנים

## 5. שיפור חוויית המשתמש

בסופו של דבר, איכות חוויית המשתמש היא המפתח לשימור שוכרים ולהשאת ערך:
- שירותי בניין ברמה גבוהה
- אזורים ירוקים ומרחבי עבודה חיצוניים
- שירותים נלווים כמו חדרי כושר, קפיטריות ואזורי מנוחה

## סיכום

השבחת נכסי משרדים דורשת הבנה מעמיקה של צרכי השוק וראייה ארוכת טווח. ב-Indexland, אנו מתמחים באיתור הזדמנויות השבחה וביישום אסטרטגיות מותאמות אישית לכל נכס.
      `,
      en: `
# 5 Strategies for Optimizing Office Assets in a Competitive Market

In today's office real estate world, asset enhancement is a critical component in maximizing returns for investors. Here are five proven strategies we implement at Indexland:

## 1. Upgrading Common Areas

One of the most effective ways to enhance an office asset is investing in upgrading common areas. An impressive lobby, modern meeting rooms, and attractive rest areas can significantly increase the value of the entire property.

Focused investment in these spaces provides high return on investment, as it affects the experience of all tenants in the building.

## 2. Energy Efficiency

Investing in energy-efficient systems provides a dual benefit:
- Reducing ongoing operating costs
- Improving the attractiveness of the property to environmentally conscious tenants

Upgrades such as LED lighting, smart HVAC systems, and improved insulation return the investment within a short time.

## 3. Adopting Smart Technologies

Turning the office into a "smart office" using advanced technologies:
- Digital access and security systems
- Remote monitoring and control of building systems
- Fast and reliable internet connectivity

Properties with advanced technological infrastructure attract quality tenants and allow for higher rent collection.

## 4. Space Redistribution

Sometimes, a change in how space is divided can significantly increase value:
- Adaptation to current market demands
- Creating units of various sizes
- Flexible planning that allows adaptation to changing needs

## 5. Improving User Experience

Ultimately, the quality of the user experience is the key to tenant retention and value maximization:
- High-level building services
- Green areas and outdoor work spaces
- Ancillary services such as gyms, cafeterias, and rest areas

## Summary

Enhancing office assets requires a deep understanding of market needs and a long-term vision. At Indexland, we specialize in identifying enhancement opportunities and implementing customized strategies for each property.
      `
    },
    coverImage: "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=1000&auto=format",
    author: {
      name: {
        he: "יונתן כהן",
        en: "Jonathan Cohen"
      },
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format",
      title: {
        he: "מנהל נכסים בכיר",
        en: "Senior Asset Manager"
      }
    },
    publishedAt: "2023-07-10T08:15:00Z",
    tags: {
      he: ["נכסי משרדים", "השבחה", "אסטרטגיה", "נדל\"ן מניב"],
      en: ["Office Assets", "Enhancement", "Strategy", "Income-Producing Real Estate"]
    },
    readingTime: 10
  }
];

// זה API דוגמה - בהמשך יתחבר ל-DB וכו'
export const dynamic = 'force-static';

export async function GET() {
  // דוגמה לנתונים של פוסטים בבלוג
  const posts = [
    {
      id: 1,
      title: {
        he: "מגמות עיקריות בשוק המשרדים ב-2024",
        en: "Key Office Market Trends in 2024"
      },
      excerpt: {
        he: "סקירה של המגמות המובילות בשוק נכסי המשרדים לשנת 2024, כולל השפעות העבודה ההיברידית והטכנולוגיות החדשות.",
        en: "A review of the leading trends in the office property market for 2024, including the effects of hybrid work and new technologies."
      },
      publishDate: "2024-05-10",
      author: "יעל לוי",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format",
      slug: "key-office-trends-2024"
    },
    {
      id: 2,
      title: {
        he: "מדריך למשקיעים: השקעות נדל\"ן בינלאומיות",
        en: "Investor's Guide: International Real Estate Investments"
      },
      excerpt: {
        he: "כל מה שצריך לדעת לפני השקעה בנדל\"ן מעבר לים: שיקולים משפטיים, פיננסיים ואסטרטגיים.",
        en: "Everything you need to know before investing in overseas real estate: legal, financial, and strategic considerations."
      },
      publishDate: "2024-04-22",
      author: "דוד כהן",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=800&auto=format",
      slug: "intl-real-estate-guide"
    },
    {
      id: 3,
      title: {
        he: "איך בוחרים מנהל נכסים אידיאלי?",
        en: "How to Choose the Ideal Property Manager?"
      },
      excerpt: {
        he: "מדריך מקיף לבחירת מנהל נכסים מקצועי שיבטיח את תחזוקת הנכס ומקסום התשואה.",
        en: "A comprehensive guide to choosing a professional property manager who will ensure property maintenance and return maximization."
      },
      publishDate: "2024-03-15",
      author: "מיכל רוזן",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format",
      slug: "choose-property-manager"
    },
    {
      id: 4,
      title: {
        he: "ESG בנדל\"ן מסחרי: היתרונות העסקיים",
        en: "ESG in Commercial Real Estate: The Business Benefits"
      },
      excerpt: {
        he: "כיצד אימוץ עקרונות ESG (סביבה, חברה, ממשל) בנכסים מסחריים משפר את הביצועים העסקיים והפיננסיים.",
        en: "How adopting ESG (Environmental, Social, Governance) principles in commercial properties improves business and financial performance."
      },
      publishDate: "2024-02-28",
      author: "נועה שטרן",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format",
      slug: "esg-commercial-real-estate"
    },
    {
      id: 5,
      title: {
        he: "אסטרטגיות לניהול סיכונים בהשקעות נדל\"ן",
        en: "Risk Management Strategies in Real Estate Investments"
      },
      excerpt: {
        he: "הדרכים היעילות ביותר להפחתת סיכונים ולהבטחת השקעות נדל\"ן יציבות ורווחיות לאורך זמן.",
        en: "The most effective ways to reduce risks and ensure stable and profitable real estate investments over time."
      },
      publishDate: "2024-01-19",
      author: "אלון גולדשטיין",
      image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=800&auto=format",
      slug: "risk-management-real-estate"
    }
  ];

  return NextResponse.json(posts);
}

// בהמשך יתווספו כאן פונקציות נוספות 