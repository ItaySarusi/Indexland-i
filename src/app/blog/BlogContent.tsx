'use client';

import React from 'react';
import PageContainer from "@/components/layout/PageContainer";
import Hero from "@/components/sections/Hero";
import BlogPostsList from "@/components/sections/BlogPostsList";
import { BlogPost } from '@/types/blog';
import { IMAGES } from '@/constants/site';

export default function BlogContent() {
  // מידע מדמה (mock) לפוסטים של הבלוג
  const posts: BlogPost[] = [
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
    },
    {
      id: "blog006",
      slug: "esg-commercial-real-estate",
      title: {
        he: "ESG בנדל\"ן מסחרי: יותר מאשר טרנד",
        en: "ESG in Commercial Real Estate: More than Just a Trend"
      },
      description: {
        he: "כיצד שיקולי סביבה, חברה וממשל תאגידי משנים את שוק הנדל\"ן המסחרי ומשפיעים על החלטות השקעה",
        en: "How environmental, social and corporate governance considerations are changing the commercial real estate market and influencing investment decisions"
      },
      content: {
        he: `ESG בנדל\"ן מסחרי: יותר מאשר טרנד...`,
        en: `ESG in Commercial Real Estate: More than Just a Trend...`
      },
      coverImage: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1000&auto=format",
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
      publishedAt: "2024-03-05T09:15:00Z",
      tags: {
        he: ["ESG", "נדל\"ן מסחרי", "קיימות", "השקעות"],
        en: ["ESG", "Commercial Real Estate", "Sustainability", "Investments"]
      },
      readingTime: 11
    },
    {
      id: "blog007",
      slug: "choose-property-manager",
      title: {
        he: "כיצד לבחור מנהל נכסים: המדריך המלא",
        en: "How to Choose a Property Manager: The Complete Guide"
      },
      description: {
        he: "המדריך המקיף לבחירת מנהל נכסים מקצועי שיבטיח תשואה מקסימלית על נכסי המשרדים שלך",
        en: "The comprehensive guide to selecting a professional property manager who will ensure maximum returns on your office assets"
      },
      content: {
        he: `כיצד לבחור מנהל נכסים: המדריך המלא...`,
        en: `How to Choose a Property Manager: The Complete Guide...`
      },
      coverImage: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1000&auto=format",
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
      publishedAt: "2024-03-22T10:45:00Z",
      tags: {
        he: ["ניהול נכסים", "משרדים", "השקעות", "תשואה"],
        en: ["Property Management", "Offices", "Investments", "Returns"]
      },
      readingTime: 8
    },
    {
      id: "blog008",
      slug: "risk-management-real-estate",
      title: {
        he: "ניהול סיכונים בהשקעות נדל\"ן: אסטרטגיות למשקיעים מתקדמים",
        en: "Risk Management in Real Estate Investments: Strategies for Advanced Investors"
      },
      description: {
        he: "כיצד לזהות, לנהל ולהפחית סיכונים בתיק השקעות הנדל\"ן שלך - מדריך מקיף למשקיעים מנוסים",
        en: "How to identify, manage and mitigate risks in your real estate investment portfolio - a comprehensive guide for experienced investors"
      },
      content: {
        he: `ניהול סיכונים בהשקעות נדל\"ן: אסטרטגיות למשקיעים מתקדמים...`,
        en: `Risk Management in Real Estate Investments: Strategies for Advanced Investors...`
      },
      coverImage: "https://images.unsplash.com/photo-1523287562758-66c507cdb8c1?q=80&w=1000&auto=format",
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
      publishedAt: "2024-04-10T11:30:00Z",
      tags: {
        he: ["ניהול סיכונים", "השקעות נדל\"ן", "אסטרטגיה", "משקיעים מתקדמים"],
        en: ["Risk Management", "Real Estate Investments", "Strategy", "Advanced Investors"]
      },
      readingTime: 13
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
        he: `מגמות השקעה מובילות בנדל\"ן משרדי לשנת 2023...`,
        en: `Leading Office Real Estate Investment Trends for 2023...`
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
    }
  ];
  
  return (
    <PageContainer>
      <Hero
        title={{
          he: "הבלוג שלנו",
          en: "Our Blog"
        }}
        subtitle={{
          he: "מאמרים, ניתוחים ותובנות בתחום הנדל\"ן המשרדי וההשקעות הבינלאומיות",
          en: "Articles, analysis and insights in the field of office real estate and international investments"
        }}
        primaryActionLabel={{
          he: "קרא עוד",
          en: "Read More"
        }}
        primaryActionHref="/blog"
        secondaryActionLabel={{
          he: "קרא עוד",
          en: "Read More"
        }}
        secondaryActionHref="/blog"
        imageUrl={IMAGES.hero.blog}
        variant="default"
        className="pt-20 md:pt-20"
      />
          {/* Divider */}
        <div className="container mx-auto my-12">
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full opacity-30 animate-fade-in" />
        </div>
        <BlogPostsList posts={posts.slice(0, 9)} />
    </PageContainer>
  );
} 