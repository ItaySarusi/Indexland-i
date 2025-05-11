import { BlogPost } from '@/types/blog';
import { Language } from '@/lib/language-context';

// מידע מדמה (mock) לפוסטים של הבלוג
export const mockPosts: BlogPost[] = [
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
      he: `המדריך המקיף להשקעות נדל\"ן בינלאומיות...`,
      en: `The Comprehensive Guide to International Real Estate Investments...`
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
      he: `5 אסטרטגיות להשבחת נכסי משרדים בשוק תחרותי...`,
      en: `5 Strategies for Optimizing Office Assets in a Competitive Market...`
    },
    coverImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000&auto=format",
    author: {
      name: {
        he: "יונתן לוי",
        en: "Jonathan Levy"
      },
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400&auto=format",
      title: {
        he: "מנהל השבחת נכסים",
        en: "Asset Enhancement Manager"
      }
    },
    publishedAt: "2023-07-10T11:00:00Z",
    tags: {
      he: ["נכסי משרדים", "השבחה", "אסטרטגיה", "תשואה"],
      en: ["Office Assets", "Enhancement", "Strategy", "Returns"]
    },
    readingTime: 10
  },
  {
    id: "blog004",
    slug: "key-office-trends-2024",
    title: {
      he: "מגמות מפתח בשוק המשרדים לשנת 2024",
      en: "Key Office Market Trends for 2024"
    },
    description: {
      he: "סקירה מקיפה של המגמות המובילות שישפיעו על שוק המשרדים בשנת 2024",
      en: "A comprehensive review of the leading trends that will influence the office market in 2024"
    },
    content: {
      he: `מגמות מפתח בשוק המשרדים לשנת 2024...`,
      en: `Key Office Market Trends for 2024...`
    },
    coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format",
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
    publishedAt: "2024-01-08T09:30:00Z",
    tags: {
      he: ["2024", "שוק המשרדים", "מגמות", "תחזית"],
      en: ["2024", "Office Market", "Trends", "Forecast"]
    },
    readingTime: 9
  },
  {
    id: "blog005",
    slug: "intl-real-estate-guide",
    title: {
      he: "מדריך הזהב להשקעות נדל\"ן בינלאומיות",
      en: "The Golden Guide to International Real Estate Investments"
    },
    description: {
      he: "טיפים, אסטרטגיות וכלים מעשיים להצלחה בהשקעות נדל\"ן מעבר לים",
      en: "Tips, strategies and practical tools for success in overseas real estate investments"
    },
    content: {
      he: `מדריך הזהב להשקעות נדל\"ן בינלאומיות...`,
      en: `The Golden Guide to International Real Estate Investments...`
    },
    coverImage: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format",
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
    publishedAt: "2024-02-15T10:00:00Z",
    tags: {
      he: ["השקעות בינלאומיות", "נדל\"ן", "מדריך", "אסטרטגיה"],
      en: ["International Investments", "Real Estate", "Guide", "Strategy"]
    },
    readingTime: 14
  }
]; 