export const SITE_NAME = "Indexland";
export const SITE_URL = "https://indexland.com";
export const SITE_DESCRIPTION = {
  he: "Indexland מציעה פתרונות מתקדמים בתחום ניהול נכסי משרדים, תיווך והשקעות נדל\"ן בינלאומיות.",
  en: "Indexland offers advanced solutions in office asset management, brokerage, and international real estate investments."
};

export const CONTACT_EMAIL = "info@indexland.com";
export const CONTACT_PHONE = "+972-3-0000000";
export const CONTACT_ADDRESS = {
  he: "רוטשילד 100, תל אביב",
  en: "100 Rothschild Blvd, Tel Aviv"
};

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/indexland",
  instagram: "https://instagram.com/indexland",
  linkedin: "https://linkedin.com/company/indexland",
  twitter: "https://twitter.com/indexland",
};

export const NAV_LINKS = {
  he: [
    { name: 'בית', href: '/' },
    { name: 'אודות', href: '/about-us' },
    {
      name: 'שירותים',
      href: '#',
      children: [
        {
          name: 'Turnkey Office Solutions & Large Asset Management',
          href: '/services/international-investment-brokerage',
          description: 'שירותי משרדים מקצה לקצה וניהול נכסים גדולים',
        },
        {
          name: 'ניהול נכסי משרדים',
          href: '/services/office-asset-management',
          description: 'ניהול מקצועי של נכסי משרדים עם דגש על השבחה והשאת תשואה',
        },
      ],
    },
    { name: 'בלוג', href: '/blog' },
    { name: 'לקביעת פגישה', href: '/book-meeting', isButton: true },
  ],
  en: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about-us' },
    {
      name: 'Services',
      href: '#',
      children: [
        {
          name: 'Turnkey Office Solutions & Large Asset Management',
          href: '/services/international-investment-brokerage',
          description: 'End-to-end office solutions and large asset management',
        },
        {
          name: 'International Real Estate Investment & Local Brokerage',
          href: '/services/office-asset-management',
          description: 'Professional management of office assets, international investment, and local brokerage',
        },
      ],
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Book a Meeting', href: '/book-meeting', isButton: true },
  ]
};

// Unsplash Images URLs
export const IMAGES = {
  hero: {
    home: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format",
    aboutUs: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920&auto=format",
    officeAsset: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1920&auto=format",
    international: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format",
    blog: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1920&auto=format",
    bookMeeting: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1920&auto=format"
  },
  sections: {
    whyChooseUs: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1920&auto=format",
    services: {
      officeManagement: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1920&auto=format",
      internationalInvestment: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1920&auto=format",
      investmentAdvice: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1920&auto=format"
    },
    testimonials: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1920&auto=format",
    team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format"
  },
  placeholders: {
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format",
    blogPost: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format"
  }
};

export const SEO = {
  home: {
    title: {
      he: "Indexland | פתרונות נדל\"ן מתקדמים",
      en: "Indexland | Advanced Real Estate Solutions"
    },
    description: {
      he: SITE_DESCRIPTION.he,
      en: SITE_DESCRIPTION.en
    },
    keywords: {
      he: "נדל\"ן, משרדים, השקעות, תיווך, נכסים",
      en: "real estate, offices, investments, brokerage, assets"
    },
    ogImage: IMAGES.hero.home,
  },
  aboutUs: {
    title: {
      he: "אודות Indexland | מי אנחנו",
      en: "About Indexland | Who We Are"
    },
    description: {
      he: "הכירו את הצוות המקצועי שלנו וגלו את הערכים המנחים אותנו",
      en: "Meet our professional team and discover the values that guide us"
    },
    keywords: {
      he: "אודות, צוות, מקצועיות, נדל\"ן, ניסיון",
      en: "about, team, professionalism, real estate, experience"
    },
    ogImage: IMAGES.hero.aboutUs,
  },
  officeAssetManagement: {
    title: {
      he: "ניהול נכסי משרדים | Indexland",
      en: "Office Asset Management | Indexland"
    },
    description: {
      he: "ניהול מקצועי של נכסי משרדים עם דגש על השבחה והשאת תשואה",
      en: "Professional management of office assets with emphasis on enhancement and yield maximization"
    },
    keywords: {
      he: "ניהול נכסים, משרדים, השבחה, תשואה, נדל\"ן מסחרי",
      en: "asset management, offices, enhancement, yield, commercial real estate"
    },
    ogImage: IMAGES.hero.officeAsset,
  },
  internationalInvestmentBrokerage: {
    title: {
      he: "תיווך השקעות בינלאומיות | Indexland",
      en: "International Investment Brokerage | Indexland"
    },
    description: {
      he: "ליווי אישי בתהליך ההשקעה בנכסי נדל\"ן בינלאומיים",
      en: "Personal guidance in the process of investing in international real estate assets"
    },
    keywords: {
      he: "השקעות בינלאומיות, תיווך, נדל\"ן, השקעה, חו\"ל",
      en: "international investments, brokerage, real estate, investment, abroad"
    },
    ogImage: IMAGES.hero.international,
  },
  blog: {
    title: {
      he: "בלוג Indexland | מאמרים וחדשות",
      en: "Indexland Blog | Articles and News"
    },
    description: {
      he: "מאמרים, עדכונים וטיפים בתחום הנדל\"ן, ההשקעות והמשרדים",
      en: "Articles, updates, and tips in the field of real estate, investments, and offices"
    },
    keywords: {
      he: "בלוג, מאמרים, נדל\"ן, השקעות, טיפים",
      en: "blog, articles, real estate, investments, tips"
    },
    ogImage: IMAGES.hero.blog,
  },
  bookMeeting: {
    title: {
      he: "קביעת פגישה | Indexland",
      en: "Book a Meeting | Indexland"
    },
    description: {
      he: "קבעו פגישת ייעוץ עם המומחים שלנו",
      en: "Schedule a consultation meeting with our experts"
    },
    keywords: {
      he: "פגישה, ייעוץ, נדל\"ן, השקעות, ליווי",
      en: "meeting, consultation, real estate, investments, guidance"
    },
    ogImage: IMAGES.hero.bookMeeting,
  },
}; 