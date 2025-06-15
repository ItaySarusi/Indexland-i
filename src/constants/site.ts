import React from 'react';

export const SITE_NAME = "Indexland";
export const SITE_URL = "https://indexland.com";
export const SITE_DESCRIPTION = {
  he: "Indexland מציעה פתרונות מתקדמים בתחום ניהול נכסי משרדים, תיווך והשקעות נדל\"ן בינלאומיות.",
  en: "Indexland offers advanced solutions in office asset management, brokerage, and international real estate investments."
};

export const CONTACT_EMAIL = "info@indexland.com";
export const CONTACT_PHONE = "*8767";
export const CONTACT_ADDRESS = {
  he: "רחוב הנחושת 10, תל אביב",
  en: "Hanehoshet 10, Tel Aviv"
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
      href: '/services',
      children: [
        {
          name: 'פתרון משרדים וניהול נכסים',
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
      href: '/services',
      children: [
        {
          name: 'Office Solution & Asset management',
          href: '/services/international-investment-brokerage',
          description: 'End-to-end office solutions and large asset management',
        },
        {
          name: 'International Investment & Local Brokerage',
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
    home: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3",
    aboutUs: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3",
    officeAsset: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3",
    international: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3",
    blog: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3",
    bookMeeting: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3",
    properties: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3"
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

// Page Content - Organized by pages for better maintainability
export const PAGES = {
  // Home Page Content
  HOME: {
    hero: {
      title: {
        he: "Indexland: פתרונות מפתח בידיים לצרכי המשרד שלכם",
        en: "Indexland: Turn Key Solutions For Your Office Needs"
      },
      subtitle: {
        he: "פתרונות משרדים מפתח בידיים, ניהול נכסים ושירותי השקעה גלובליים - מקומיים וגלובליים.",
        en: "Turnkey office solutions, asset management, and global investment services — local and global."
      },
      primaryActionLabel: {
        he: "קביעת פגישה",
        en: "Book a Meeting"
      },
      secondaryActionLabel: {
        he: "חקור שירותים",
        en: "Explore Services"
      }
    },
    services: [
      {
        title: {
          he: "פתרונות משרדים",
          en: "Office Solutions"
        },
        description: {
          he: "פתרון מותאם לחברות המחפשות את הבית הבא שלהן.",
          en: "Tailored solution for company seeking their next home."
        }
      },
      {
        title: {
          he: "ניהול גדול",
          en: "Large Management"
        },
        description: {
          he: "אסטרטגיה מקצה לקצה, דיווח ויצירת ערך.",
          en: "End-to-end strategy, reporting & value creation."
        }
      },
      {
        title: {
          he: "השקעות בינלאומיות",
          en: "International Investment"
        },
        description: {
          he: "מיקור מבוסס דובאי, משפטי ותמיכה למשקיעים.",
          en: "Dubai-based sourcing, legal, and investor support."
        }
      },
      {
        title: {
          he: "תיווך מקומי",
          en: "Local Brokerage"
        },
        description: {
          he: "נדל\"ן מסחרי בתל אביב - מכירות, השכרות וייעוץ שוק.",
          en: "Tel Aviv commercial real estate - Sales leases, and market advisory."
        }
      }
    ],
    metrics: [
      {
        value: "+500",
        label: {
          he: "לקוחות מרוצים",
          en: "Satisfied Clients"
        },
        description: {
          he: "לקוחות שבחרו בנו כשותפים לדרך",
          en: "Clients who chose us as partners"
        }
      },
      {
        value: "M+200",
        label: {
          he: "נכסים בניהול",
          en: "Assets Under Management"
        },
        description: {
          he: "שווי נכסים המנוהלים על ידי הצוות שלנו",
          en: "Value of assets managed by our team"
        }
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
        }
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
        }
      }
    ],
    testimonials: [
      {
        quote: {
          he: "Indexland ליוו אותנו בתהליך רכישת נכס בחו\"ל. מהרגע הראשון קיבלנו שירות מקצועי, אדיב ומותאם אישית לצרכים שלנו. אני ממליץ בחום על השירותים שלהם.",
          en: "Indexland accompanied us through the process of purchasing a property overseas. From the first moment, we received professional, courteous, and tailored service to our needs. I highly recommend their services."
        },
        author: {
          he: "יובל כהן",
          en: "Yuval Cohen"
        },
        position: {
          he: "מנכ\"ל",
          en: "CEO"
        },
        company: {
          he: "טק פרו בע\"מ",
          en: "Tech Pro Ltd"
        }
      },
      {
        quote: {
          he: "הליווי של צוות Indexland היה מעל ומעבר למצופה. הם עזרו לנו למצוא את הנכס המושלם עבור המשרדים החדשים שלנו ודאגו לכל הפרטים. התהליך היה חלק ומקצועי.",
          en: "The guidance from the Indexland team was above and beyond our expectations. They helped us find the perfect property for our new offices and took care of all the details. The process was smooth and professional."
        },
        author: {
          he: "מיכל לוי",
          en: "Michal Levy"
        },
        position: {
          he: "סמנכ\"ל תפעול",
          en: "COO"
        },
        company: {
          he: "חברת אלפא אינטרנשיונל",
          en: "Alpha International"
        }
      },
      {
        quote: {
          he: "בתור משקיע מנוסה, אני יכול לומר בוודאות שהשירות שקיבלתי מ-Indexland היה מהטובים שחוויתי. הידע והמקצועיות שלהם עזרו לי להשיג תשואה מצוינת על ההשקעה שלי.",
          en: "As an experienced investor, I can confidently say that the service I received from Indexland was among the best I've experienced. Their knowledge and professionalism helped me achieve an excellent return on my investment."
        },
        author: {
          he: "אייל דגן",
          en: "Eyal Dagan"
        },
        position: {
          he: "משקיע נדל\"ן",
          en: "Real Estate Investor"
        }
      }
    ],
    cta: {
      title: {
        he: "מוכנים להתחיל?",
        en: "Ready to get started?"
      },
      subtitle: {
        he: "צרו איתנו קשר היום לפגישת ייעוץ ללא התחייבות",
        en: "Contact us today for a no-obligation consultation"
      },
      primaryButtonText: {
        he: "תיאום פגישה",
        en: "Book a Meeting"
      },
      secondaryButtonText: {
        he: "קרא עוד על השירותים שלנו",
        en: "Learn More About Our Services"
      }
    },
    servicesAtAGlance: {
      title: {
        he: "מבט מהיר על השירותים שלנו",
        en: "Services at a Glance"
      },
      subtitle: {
        he: "פתרונות מותאמים אישית לניהול נכסים והשקעות בתל אביב ודובאי",
        en: "Tailored solutions for asset management and investments in Tel Aviv and Dubai"
      },
      services: [
        {
          title: {
            he: "פתרונות משרד מוכנים לאכלוס",
            en: "Turn Key Office Solutions"
          },
          description: {
            he: "שירותי קונסיירז' ← התאמת המשרד ← חכירה ← סיור וחיפוש",
            en: "Scouting → Lease → Fit-out → Concierge"
          },
          subServices: [
            { he: "סיור וחיפוש", en: "Scouting" },
            { he: "חכירה", en: "Lease" },
            { he: "התאמת המשרד", en: "Fit-out" },
            { he: "שירותי קונסיירז'", en: "Concierge" }
          ]
        },
        {
          title: {
            he: "ניהול נכסים",
            en: "Asset Management"
          },
          description: {
            he: "פיקוח על תיק השקעות ודיווח",
            en: "Portfolio oversight & reporting"
          },
          subServices: [
            { he: "פיקוח על תיק השקעות", en: "Portfolio oversight" },
            { he: "דיווח", en: "Reporting" }
          ]
        },
        {
          title: {
            he: "השקעות בדובאי",
            en: "Dubai Investment"
          },
          description: {
            he: "כניסה לשוק ← איתור הזדמנויות ← עמידה ברגולציה",
            en: "Market entry → Sourcing → Compliance"
          },
          subServices: [
            { he: "כניסה לשוק", en: "Market entry" },
            { he: "איתור הזדמנויות", en: "Sourcing" },
            { he: "עמידה ברגולציה", en: "Compliance" }
          ]
        },
        {
          title: {
            he: "תיווך מקומי",
            en: "Local Brokerage"
          },
          description: {
            he: "מכירות, השכרה, הערכות שווי",
            en: "Sales, Leasing, Valuations"
          },
          subServices: [
            { he: "מכירות", en: "Sales" },
            { he: "השכרה", en: "Leasing" },
            { he: "הערכות שווי", en: "Valuations" }
          ]
        }
      ]
    }
  },

  // About Us Page Content
  ABOUT_US: {
    hero: {
      title: {
        he: "אודותינו",
        en: "About Us"
      },
      subtitle: {
        he: "פתרונות מקיפים בתחום הנדל\"ן המסחרי, ניהול נכסים והשקעות בינלאומיות",
        en: "Comprehensive solutions in commercial real estate, asset management, and international investments"
      },
      primaryActionLabel: {
        he: "קבע פגישה",
        en: "Book a Meeting"
      },
      secondaryActionLabel: {
        he: "השירותים שלנו",
        en: "Our Services"
      }
    },
    tabs: {
      story: {
        label: {
          he: "הסיפור שלנו",
          en: "Our Story"
        },
        title: {
          he: "Indexland | יעוץ נדל\"ן מסחרי",
          en: "Indexland | Commercial Real Estate Advisory"
        },
        content: {
          he: "נוסדה בשנת 1994 ובסיסה בתל אביב, Indexland היא חברת נדל\"ן מסחרי מובילה המספקת שירותי ייעוץ אסטרטגי ותיווך ברחבי ישראל ובחו\"ל. המומחיות הליבה שלנו משתרעת על ייצוג דיירים, מכירות השקעות ושיווק פרויקטים. עם גישה ממוקדת לקוח ומוניטין של דיוק, אנו משרתים תיק מגוון של לקוחות מקומיים ובינלאומיים, ממשקיעים מוסדיים ועד בעלי עניין פרטיים. הצמיחה העקבית שלנו מונעת על ידי DNA משותף - מחויבות בלתי מתפשרת למקצועיות, יחסים אישיים ותוצאות. ב-Indexland, אנחנו לא רק עוקבים אחר מגמות השוק - אנחנו עוזרים לעצב אותן.",
          en: "Established in 1994 and based in Tel Aviv, Indexland is a leading commercial real estate firm providing strategic consulting and brokerage services across Israel and abroad. Our core expertise spans tenant representation, investment sales, and project marketing. With a client-first approach and a reputation for precision, we serve a diverse portfolio of local and international clients, from institutional investors to private stakeholders. Our consistent growth is fueled by a shared DNA—an unwavering commitment to professionalism, personal relationships, and results. At Indexland, we don't just follow market trends—we help shape them."
        }
      },
      vision: {
        label: {
          he: "החזון שלנו",
          en: "Our Vision"
        },
        title: {
          he: "החזון שלנו",
          en: "Our Vision"
        },
        content: {
          he: "לצייד עסקים בפתרונות נדל\"ן ומרחבי עבודה מקצה לקצה המניעים יעילות, שביעות רצון וצמיחה.",
          en: "Equip businesses with end-to-end real estate and workspace solutions that drive efficiency, satisfaction, and scale."
        }
      },
      mission: {
        label: {
          he: "המשימה שלנו",
          en: "Our Mission"
        },
        title: {
          he: "המשימה שלנו",
          en: "Our Mission"
        },
        content: {
          he: "להגדיר מחדש איך חברות בונות, מנהלות ומגדילות את הטביעה הפיזית שלהן - לגרום לכל מטר רבוע לעבוד חזק יותר.",
          en: "Redefine how companies build, manage, and grow their physical footprint—making every square meter work harder."
        }
      }
    },
    features: [
      {
        title: {
          he: "ניסיון רב שנים",
          en: "Years of Experience"
        },
        description: {
          he: "צוות מנוסה עם מומחיות עמוקה בתחום הנדל\"ן והשקעות",
          en: "Experienced team with deep expertise in real estate and investments"
        },
        icon: React.createElement('svg', {
          className: "w-8 h-8",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, React.createElement('path', {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        }))
      },
      {
        title: {
          he: "גישה אישית",
          en: "Personal Approach"
        },
        description: {
          he: "התאמה אישית לכל לקוח ופתרונות מותאמים לצרכים הספציפיים",
          en: "Personal adaptation for each client and solutions tailored to specific needs"
        },
        icon: React.createElement('svg', {
          className: "w-8 h-8",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, React.createElement('path', {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        }))
      },
      {
        title: {
          he: "רשת בינלאומית",
          en: "International Network"
        },
        description: {
          he: "קשרים עסקיים ברחבי העולם לזיהוי הזדמנויות השקעה מיוחדות",
          en: "Business connections worldwide for identifying special investment opportunities"
        },
        icon: React.createElement('svg', {
          className: "w-8 h-8",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, React.createElement('path', {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        }))
      }
    ],
    team: {
      title: {
        he: "הצוות שלנו",
        en: "Meet the Team"
      },
      subtitle: {
        he: "הכירו את המומחים שמאחורי Indexland",
        en: "Meet The Experts Behind Indexland"
      },
      members: [
        {
          name: {
            he: "נועם",
            en: "Noam"
          },
          role: {
            he: "מייסד",
            en: "Founder"
          },
          bio: {
            he: "נועם, מייסד - מעל 10 שנות ניסיון בנדל\"ן, נועם הוביל את החזון של Indexland מסוכנות בוטיק לייעוץ מקיף.",
            en: "Noam, Founder – Over 10 years in real estate, Noam led Indexland's vision from boutique agency to full-spectrum consultancy."
          },
          image: "/partner2.webp",
          socialLinks: {
            linkedin: "https://www.linkedin.com/in/noam-brender?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            email: "noam@indexland.co.il"
          }
        },
        {
          name: {
            he: "אורי",
            en: "Ori"
          },
          role: {
            he: "שותף מייסד",
            en: "Co-Founder"
          },
          bio: {
            he: "אורי, שותף מייסד - מומחה בניהול נכסים ותפעול לקוחות, אורי הוא הלב התפעולי מאחורי כל פרויקט של Indexland.",
            en: "Ori, Co-Founder – Expert in asset management and client operations, Ori is the operational heart behind every Indexland project."
          },
          image: "/partner1.webp",
          socialLinks: {
            linkedin: "https://www.linkedin.com/in/ori-brender-177534199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            email: "ori@indexland.co.il"
          }
        }
      ]
    },
    clients: {
      title: {
        he: "לקוחות מרוצים",
        en: "Satisfied Clients"
      }
    },
    coreValues: {
      title: {
        he: "ערכים מרכזיים",
        en: "Core Values"
      },
      values: [
        {
          title: {
            he: "מצוינות",
            en: "Excellence"
          },
          description: {
            he: "שום פרט אינו קטן מדי.",
            en: "No detail too small."
          },
          icon: "star"
        },
        {
          title: {
            he: "יושרה",
            en: "Integrity"
          },
          description: {
            he: "תנאים ודיווח שקופים.",
            en: "Transparent terms and reporting."
          },
          icon: "balance"
        },
        {
          title: {
            he: "מקצועיות",
            en: "Professionalism"
          },
          description: {
            he: "תהליכים חכמים מונעי דאטה.",
            en: "Smarter processes powered by data."
          },
          icon: "lightbulb"
        },
        {
          title: {
            he: "קשר",
            en: "Connection"
          },
          description: {
            he: "קשרים מקומיים עמוקים ורשתות גלובליות.",
            en: "Deep local ties and global networks."
          },
          icon: "link"
        }
      ]
    },
    faqs: [
      {
        question: {
          he: "מה מייחד את Indexland מחברות אחרות?",
          en: "What makes Indexland different from other companies?"
        },
        answer: {
          he: "אנו מתמחים בגישה אישית ומקצועית, עם דגש על יצירת קשרים ארוכי טווח עם הלקוחות שלנו. הצוות שלנו בעל ניסיון רב בשווקים בינלאומיים ומציע פתרונות מותאמים אישית.",
          en: "We specialize in a personal and professional approach, focusing on creating long-term relationships with our clients. Our team has extensive experience in international markets and offers customized solutions."
        }
      },
      {
        question: {
          he: "איך אתם בוחרים את הנכסים להשקעה?",
          en: "How do you select properties for investment?"
        },
        answer: {
          he: "אנו מבצעים מחקר מעמיק של השוק, ניתוח פיננסי מקיף, ובדיקת מיקום אסטרטגי. כל נכס נבחן לפי קריטריונים קפדניים של תשואה פוטנציאלית, סיכון, ופוטנציאל צמיחה.",
          en: "We conduct thorough market research, comprehensive financial analysis, and strategic location assessment. Each property is evaluated according to strict criteria of potential return, risk, and growth potential."
        }
      },
      {
        question: {
          he: "האם אתם מציעים שירותי ניהול שוטף?",
          en: "Do you offer ongoing management services?"
        },
        answer: {
          he: "כן, אנו מציעים שירותי ניהול מקיפים הכוללים ניהול דיירים, תחזוקה, גביית שכירות, ודיווח כספי שוטף. המטרה שלנו היא לספק ללקוחות שירות מלא ומקצועי.",
          en: "Yes, we offer comprehensive management services including tenant management, maintenance, rent collection, and ongoing financial reporting. Our goal is to provide clients with complete and professional service."
        }
      }
    ],
    faqTitle: {
      he: "שאלות נפוצות על החברה",
      en: "Frequently Asked Questions About the Company"
    },
    cta: {
      title: {
        he: "מוכנים להכיר אותנו יותר?",
        en: "Ready to Get to Know Us Better?"
      },
      subtitle: {
        he: "בואו נפגש ונדבר על איך נוכל לעזור לכם להשיג את המטרות שלכם",
        en: "Let's meet and discuss how we can help you achieve your goals"
      },
      primaryButtonText: {
        he: "קבע פגישה",
        en: "Book a Meeting"
      },
      secondaryButtonText: {
        he: "השירותים שלנו",
        en: "Our Services"
      }
    }
  },

  // Services Page Content
  SERVICES: {
    hero: {
      title: {
        he: "השירותים שלנו",
        en: "Our Services"
      },
      subtitle: {
        he: "פתרונות מקצועיים לניהול נכסים ויעוץ השקעות",
        en: "Professional solutions for asset management and investment consulting"
      },
      primaryActionLabel: {
        he: "צור קשר לייעוץ",
        en: "Contact for Consultation"
      },
      secondaryActionLabel: {
        he: "קבע פגישה",
        en: "Schedule Meeting"
      }
    },
    services: [
      {
        title: {
          he: "ניהול נכסי משרדים",
          en: "Office Asset Management"
        },
        description: {
          he: "ניהול מקצועי של נכסי משרדים עם דגש על מקסום תשואות והגדלת ערך הנכס",
          en: "Professional management of office assets with focus on maximizing returns and increasing property value"
        },
        href: "/services/office-management",
        svg: "/icons/office-management.svg",
        icon: React.createElement('svg', {
          className: "w-8 h-8",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, React.createElement('path', {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        }))
      },
      {
        title: {
          he: "תיווך השקעות בינלאומי",
          en: "International Investment Brokerage"
        },
        description: {
          he: "שירותי תיווך מקצועיים להשקעות בשווקים בינלאומיים עם ליווי צמוד",
          en: "Professional brokerage services for international market investments with close guidance"
        },
        href: "/services/international-investment",
        svg: "/icons/international-investment.svg",
        icon: React.createElement('svg', {
          className: "w-8 h-8",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, React.createElement('path', {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        }))
      },
      {
        title: {
          he: "ייעוץ השקעות",
          en: "Investment Consulting"
        },
        description: {
          he: "ייעוץ פיננסי מותאם אישית המתמקד באסטרטגיות השקעה בנדל\"ן מסחרי ובניית תיק השקעות מאוזן",
          en: "Personalized financial consulting focusing on commercial real estate investment strategies and building a balanced investment portfolio"
        },
        href: "/services/investment-consulting",
        svg: "/icons/investment-consulting.svg",
        icon: React.createElement('svg', {
          className: "w-8 h-8",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, React.createElement('path', {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        }))
      },
      {
        title: {
          he: "פיתוח וייזום פרויקטים",
          en: "Project Development & Initiation"
        },
        description: {
          he: "ליווי פרויקטים מהקונספט ועד להשלמה, כולל בדיקות היתכנות, תכנון, רישוי וניהול הבנייה",
          en: "Project guidance from concept to completion, including feasibility studies, planning, licensing, and construction management"
        },
        href: "/services/project-development",
        svg: "/icons/project-development.svg",
        icon: React.createElement('svg', {
          className: "w-8 h-8",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, React.createElement('path', {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        }))
      }
    ],
    features: [
      {
        title: {
          he: "גישה רב-תחומית",
          en: "Multi-disciplinary Approach"
        },
        description: {
          he: "צוות מומחים מתחומים שונים לפתרון מקיף",
          en: "Team of experts from different fields for comprehensive solutions"
        },
        icon: React.createElement('svg', {
          className: "w-8 h-8",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, React.createElement('path', {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        }))
      },
      {
        title: {
          he: "ניסיון בינלאומי",
          en: "International Experience"
        },
        description: {
          he: "ניסיון עשיר בשווקים בינלאומיים ובפרויקטים מורכבים",
          en: "Rich experience in international markets and complex projects"
        },
        icon: React.createElement('svg', {
          className: "w-8 h-8",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, React.createElement('path', {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        }))
      },
      {
        title: {
          he: "טכנולוגיה מתקדמת",
          en: "Advanced Technology"
        },
        description: {
          he: "שימוש בכלים טכנולוגיים מתקדמים לניתוח ובקרה",
          en: "Use of advanced technological tools for analysis and control"
        },
        icon: React.createElement('svg', {
          className: "w-8 h-8",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, React.createElement('path', {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        }))
      }
    ],
    metrics: [
      {
        value: "97%",
        label: {
          he: "תפוסה ממוצעת",
          en: "Average Occupancy"
        },
        description: {
          he: "אחוז תפוסה ממוצע בנכסים שבניהולנו",
          en: "Average occupancy rate in properties under our management"
        }
      },
      {
        value: "+25%",
        label: {
          he: "תשואה משופרת",
          en: "Improved Yield"
        },
        description: {
          he: "שיפור ממוצע בתשואת נכסים תחת ניהולנו",
          en: "Average improvement in property yields under our management"
        }
      },
      {
        value: "150+",
        label: {
          he: "עסקאות בינלאומיות",
          en: "International Transactions"
        },
        description: {
          he: "עסקאות מוצלחות שתיווכנו בשווקים בינלאומיים",
          en: "Successful transactions we brokered in international markets"
        }
      },
      {
        value: "10+",
        label: {
          he: "מדינות פעילות",
          en: "Active Countries"
        },
        description: {
          he: "מדינות בהן אנו מנהלים נכסים ועסקאות",
          en: "Countries where we manage properties and transactions"
        }
      }
    ],
    faqs: [
      {
        question: {
          he: "מה היתרונות של ניהול נכסי משרדים מקצועי?",
          en: "What are the advantages of professional office asset management?"
        },
        answer: {
          he: "ניהול מקצועי מבטיח מקסום תשואות, שמירה על איכות הנכס, ניהול יעיל של שוכרים וטיפול בכל הבעיות התפעוליות. אנחנו דואגים לכל הפרטים כך שתוכלו להתמקד בעסק שלכם.",
          en: "Professional management ensures maximum returns, maintaining property quality, efficient tenant management, and handling all operational issues. We take care of all the details so you can focus on your business."
        }
      },
      {
        question: {
          he: "איך אתם עוזרים בהשקעות בינלאומיות?",
          en: "How do you help with international investments?"
        },
        answer: {
          he: "אנחנו מספקים ליווי מלא החל מזיהוי הזדמנויות, ניתוח שוק מעמיק, ליווי משפטי, וניהול כל תהליך הרכישה. יש לנו שותפים מקומיים בשווקים הרלוונטיים שמבטיחים ביצוע חלק ובטוח.",
          en: "We provide full guidance starting from identifying opportunities, in-depth market analysis, legal support, and managing the entire acquisition process. We have local partners in relevant markets ensuring smooth and secure execution."
        }
      },
      {
        question: {
          he: "מה כולל שירות הייעוץ שלכם?",
          en: "What does your consulting service include?"
        },
        answer: {
          he: "שירות הייעוץ שלנו כולל ניתוח פיננסי מעמיק, בניית אסטרטגיית השקעה מותאמת אישית, הערכת סיכונים, ותכנון תיק השקעות מאוזן. אנחנו מלווים אתכם בכל שלב של תהליך ההחלטה.",
          en: "Our consulting service includes in-depth financial analysis, building a personalized investment strategy, risk assessment, and balanced portfolio planning. We accompany you through every step of the decision-making process."
        }
      },
      {
        question: {
          he: "איך אתם מתמחים בפיתוח פרויקטים?",
          en: "How do you specialize in project development?"
        },
        answer: {
          he: "אנחנו מלווים פרויקטים מהרעיון הראשוני ועד למימוש מלא - כולל בדיקות היתכנות, תכנון אדריכלי, השגת רישויים, ניהול קבלנים וביקורת איכות. הצוות שלנו בעל ניסיון עשיר בפרויקטים מורכבים.",
          en: "We accompany projects from initial concept to full realization - including feasibility studies, architectural planning, obtaining permits, contractor management, and quality control. Our team has extensive experience with complex projects."
        }
      },
      {
        question: {
          he: "מה מבדיל אתכם מחברות ניהול אחרות?",
          en: "What sets you apart from other management companies?"
        },
        answer: {
          he: "השילוב הייחודי שלנו של טכנולוגיה מתקדמת, ניסיון בינלאומי, וגישה אישית לכל לקוח. אנחנו לא רק מנהלים נכסים - אנחנו שותפים אסטרטגיים שעובדים להצלחה שלכם לטווח הארוך.",
          en: "Our unique combination of advanced technology, international experience, and personal approach to each client. We don't just manage assets - we're strategic partners working for your long-term success."
        }
      }
    ],
    faqTitle: {
      he: "שאלות נפוצות על השירותים",
      en: "Frequently Asked Questions About Services"
    },
    contact: {
      title: {
        he: "צריכים עזרה נוספת?",
        en: "Need Additional Help?"
      },
      subtitle: {
        he: "צוות המומחים שלנו כאן כדי לעזור לכם",
        en: "Our team of experts is here to help you"
      }
    },
    cta: {
      title: {
        he: "מוכנים להתחיל?",
        en: "Ready to Get Started?"
      },
      subtitle: {
        he: "בואו נדבר על איך נוכל לעזור לכם להשיג את המטרות שלכם",
        en: "Let's discuss how we can help you achieve your goals"
      },
      primaryButtonText: {
        he: "קבע פגישה",
        en: "Book a Meeting"
      },
      secondaryButtonText: {
        he: "צור קשר",
        en: "Contact Us"
      }
    }
  },

  CONTACT: {
    hero: {
      title: {
        he: "צור קשר",
        en: "Contact Us"
      },
      subtitle: {
        he: "נשמח לשמוע מכם ולעזור לכם למצוא את הפתרון המושלם לצרכיכם",
        en: "We'd love to hear from you and help you find the perfect solution for your needs"
      }
    },
    contactSection: {
      title: {
        he: "בואו נתחיל לעבוד יחד",
        en: "Let's Start Working Together"
      },
      subtitle: {
        he: "צרו קשר עמנו היום וגלו איך אנחנו יכולים לעזור לכם להשיג את המטרות שלכם",
        en: "Contact us today and discover how we can help you achieve your goals"
      }
    },
    faq: {
      title: {
        he: "שאלות נפוצות",
        en: "Frequently Asked Questions"
      },
      subtitle: {
        he: "מצאו תשובות לשאלות הנפוצות ביותר שלקוחותינו שואלים",
        en: "Find answers to the most common questions our clients ask"
      }
    },
    faqs: [
      {
        question: {
          he: "איך אני יכול לקבוע פגישת ייעוץ?",
          en: "How can I schedule a consultation meeting?"
        },
        answer: {
          he: "תוכלו לקבוע פגישה דרך הטלפון *8767, לשלוח אימייל ל-info@indexland.com או למלא את הטופס באתר.",
          en: "You can schedule a meeting by calling *8767, sending an email to info@indexland.com, or filling out the form on our website."
        }
      },
      {
        question: {
          he: "מה השירותים העיקריים שאתם מציעים?",
          en: "What are the main services you offer?"
        },
        answer: {
          he: "אנו מתמחים בניהול נכסי משרדים, פתרונות משרדים מפתח בידיים, השקעות נדל\"ן בינלאומיות ותיווך מקומי.",
          en: "We specialize in office asset management, turnkey office solutions, international real estate investments, and local brokerage."
        }
      },
      {
        question: {
          he: "האם אתם עובדים עם לקוחות בינלאומיים?",
          en: "Do you work with international clients?"
        },
        answer: {
          he: "כן, אנו עובדים עם לקוחות מכל העולם ומציעים שירותי השקעות נדל\"ן בינלאומיות עם ליווי מקצועי מלא.",
          en: "Yes, we work with clients from around the world and offer international real estate investment services with full professional guidance."
        }
      },
      {
        question: {
          he: "מה ההבדל בין השירותים השונים שלכם?",
          en: "What's the difference between your various services?"
        },
        answer: {
          he: "ניהול נכסים מתמקד בהשבחת נכסים קיימים, פתרונות משרדים כוללים הקמה מאפס, והשקעות בינלאומיות מתמחות בהזדמנויות מעבר לים.",
          en: "Asset management focuses on enhancing existing properties, office solutions include setup from scratch, and international investments specialize in overseas opportunities."
        }
      },
      {
        question: {
          he: "כמה זמן לוקח תהליך ההשקעה?",
          en: "How long does the investment process take?"
        },
        answer: {
          he: "התהליך משתנה בהתאם לסוג ההשקעה, אך בדרך כלל נע בין 30-90 יום מרגע אישור הפיננסים ועד להשלמת העסקה.",
          en: "The process varies depending on the type of investment, but typically ranges from 30-90 days from financial approval to transaction completion."
        }
      },
      {
        question: {
          he: "האם אתם מציעים ליווי לאחר ההשקעה?",
          en: "Do you offer post-investment support?"
        },
        answer: {
          he: "בהחלט! אנו מציעים ליווי מתמשך, ניהול שוטף של הנכסים, דיווחים תקופתיים ויעוץ אסטרטגי לטווח הארוך.",
          en: "Absolutely! We offer ongoing support, continuous asset management, periodic reports, and long-term strategic consulting."
        }
      }
    ],
    cta: {
      title: {
        he: "מוכנים להתחיל?",
        en: "Ready to Get Started?"
      },
      subtitle: {
        he: "צרו קשר עמנו היום ובואו נתחיל לעבוד יחד על הפרויקט הבא שלכם",
        en: "Contact us today and let's start working together on your next project"
      },
      callButton: {
        he: "התקשרו עכשיו",
        en: "Call Now"
      },
      emailButton: {
        he: "שלחו אימייל",
        en: "Send Email"
      }
    },
    map: {
      title: {
        he: "המיקום שלנו",
        en: "Our Location"
      },
      ariaLabel: {
        he: "מפה המציגה את מיקום משרדי Indexland ברחוב הנחושת 10, תל אביב",
        en: "Map showing the location of Indexland offices at Hanehoshet 10, Tel Aviv"
      }
    }
  },

  NOT_FOUND: {
    title: {
      he: "404 - דף לא נמצא",
      en: "404 - Page Not Found"
    },
    description: {
      he: "מצטערים, הדף שחיפשת לא נמצא.",
      en: "Sorry, the page you're looking for doesn't exist."
    },
    backToHome: {
      he: "חזרה לדף הבית",
      en: "Back to Home"
    }
  },

  OFFICE_ASSET_MANAGEMENT: {
    hero: {
      title: {
        he: "ניהול נכסי משרדים",
        en: "Office Asset Management"
      },
      subtitle: {
        he: "פתרונות מקיפים לניהול והשבחת נכסי המשרדים שלך, עם דגש על מקסום התשואה",
        en: "Comprehensive solutions for managing and enhancing your office assets, with an emphasis on maximizing returns"
      },
      cta: {
        he: "צור קשר עכשיו",
        en: "Contact Us Now"
      }
    },
    features: [
      {
        title: {
          he: "ניהול נכסים מקיף",
          en: "Comprehensive Asset Management"
        },
        description: {
          he: "ניהול מקצועי ושוטף של נכסי המשרדים שלך",
          en: "Professional and ongoing management of your office assets"
        },
        icon: "building"
      },
      {
        title: {
          he: "השבחת נכסים",
          en: "Asset Enhancement"
        },
        description: {
          he: "זיהוי הזדמנויות להשבחת הנכס והגדלת ערכו",
          en: "Identifying opportunities to enhance and increase asset value"
        },
        icon: "chart"
      },
      {
        title: {
          he: "ניהול שוכרים",
          en: "Tenant Management"
        },
        description: {
          he: "ניהול מקצועי של היחסים עם השוכרים וטיפול בצרכיהם",
          en: "Professional management of tenant relations and needs"
        },
        icon: "users"
      },
      {
        title: {
          he: "אסטרטגיית יציאה",
          en: "Exit Strategy"
        },
        description: {
          he: "תכנון אסטרטגיית יציאה יעילה לבעלי הנכסים",
          en: "Planning an effective exit strategy for asset owners"
        },
        icon: "exit"
      }
    ],
    sections: {
      globalReach: {
        title: {
          he: "הגעה גלובלית, מומחיות מקומית",
          en: "Global Reach, Local Mastery"
        },
        subtitle: {
          he: "בין אם אתם נכנסים לשוק הפורח של דובאי או מייעלים החזקות בתל אביב, Indexland מחבר אתכם להזדמנויות הנכונות ולמומחיות",
          en: "Whether you're entering Dubai's boom market or optimizing Tel Aviv holdings, Indexland connects you to the right opportunities and expertise"
        },
        dubaiGuide: {
          he: "הורד מדריך דובאי",
          en: "Download Dubai Guide"
        },
        contactAgent: {
          he: "צור קשר עם סוכן מקומי",
          en: "Contact a Local Agent"
        }
      },
      dubaiInvestment: {
        title: {
          he: "השקעות נדל\"ן בינלאומיות (דובאי)",
          en: "International Real Estate Investment (Dubai)"
        },
        subtitle: {
          he: "נצלו את אחד השווקים הצומחים הכי מהר בעולם",
          en: "Tap into one of the world's fastest-growing markets"
        },
        cards: [
          {
            title: {
              he: "מחקר שוק",
              en: "Market Research"
            },
            description: {
              he: "ניתוח מגזרים, תחזיות תשואה, סקירה רגולטורית",
              en: "Sector analysis, yield projections, regulatory overview"
            }
          },
          {
            title: {
              he: "איתור נכסים",
              en: "Property Sourcing"
            },
            description: {
              he: "נכסים למגורים, מסחריים ושימוש מעורב",
              en: "Residential, commercial, and mixed-use assets"
            }
          },
          {
            title: {
              he: "משפטי ותאימות",
              en: "Legal & Compliance"
            },
            description: {
              he: "ליווי משפטי מלא ותאימות רגולטורית",
              en: "Full legal guidance and regulatory compliance"
            }
          },
          {
            title: {
              he: "ניהול נכסים",
              en: "Asset Management"
            },
            description: {
              he: "ניהול שוטף ומקסום תשואות",
              en: "Ongoing management and yield optimization"
            }
          }
        ]
      }
    }
  },

  INTERNATIONAL_INVESTMENT: {
    hero: {
      title: {
        he: "השקעות נדל\"ן בינלאומיות להשכרה",
        en: "International Real Estate Investments for Rent"
      },
      subtitle: {
        he: "גלו עולם של הזדמנויות השקעה יוקרתיות בנדל\"ן להשכרה במיקומים בינלאומיים מובילים, עם ליווי אישי ומקצועי",
        en: "Discover a world of luxury real estate investment opportunities for rent in leading international locations, with personal and professional guidance"
      },
      cta: {
        he: "לתיאום פגישת ייעוץ",
        en: "Book a Consultation"
      }
    },
    workspaces: {
      title: {
        he: "חללי עבודה חלקים ושליטה בנכסים",
        en: "Seamless Workspaces & Asset Control"
      },
      subtitle: {
        he: "Indexland מטפל בכל שלב של מחזור החיים של המשרד שלכם ותיק הנדל\"ן - כך שתוכלו להתמקד בצמיחת העסק",
        en: "Indexland handles every stage of your office lifecycle and real-estate portfolio—so you can focus on business growth"
      },
      bookMeeting: {
        he: "קבע פגישה",
        en: "Book a Meeting"
      },
      learnMore: {
        he: "למד עוד",
        en: "Learn More"
      }
    },
    features: [
      {
        title: {
          he: "השקעות גלובליות",
          en: "Global Investments"
        },
        description: {
          he: "גישה לשווקים בינלאומיים עם פוטנציאל צמיחה גבוה",
          en: "Access to international markets with high growth potential"
        },
        icon: "globe"
      },
      {
        title: {
          he: "ליווי מקצועי",
          en: "Professional Guidance"
        },
        description: {
          he: "ליווי מקצה לקצה בעסקאות השקעה בינלאומיות",
          en: "End-to-end guidance in international investment deals"
        },
        icon: "guidance"
      },
      {
        title: {
          he: "ניתוח שוק מקיף",
          en: "Comprehensive Market Analysis"
        },
        description: {
          he: "ניתוח מעמיק של שווקים ומגמות להבטחת השקעה חכמה",
          en: "In-depth analysis of markets and trends to ensure smart investment"
        },
        icon: "analysis"
      },
      {
        title: {
          he: "פיזור סיכונים",
          en: "Risk Diversification"
        },
        description: {
          he: "אסטרטגיות לפיזור סיכונים אופטימלי בשווקים גלובליים",
          en: "Strategies for optimal risk diversification in global markets"
        },
        icon: "diversification"
      }
    ],
    dubai: {
      title: {
        he: "השקעות בינלאומיות בדובאי",
        en: "International Investments in Dubai"
      },
      description: {
        he: "דובאי הפכה בשנים האחרונות ליעד השקעה מבוקש למשקיעי נדל\"ן מכל העולם. בזכות רגולציה מתקדמת, תשואות גבוהות, פטור ממס רכישה, ומגוון פרויקטים יוקרתיים – דובאי מציעה שילוב נדיר של ביטחון, חדשנות ורווחיות. אנו מלווים את לקוחותינו בכל שלב – מאיתור הנכס ועד לניהול השוטף והשכרתו.",
        en: "In recent years, Dubai has become a sought-after investment destination for real estate investors worldwide. Thanks to advanced regulation, high returns, purchase tax exemption, and a variety of luxury projects – Dubai offers a rare combination of security, innovation, and profitability. We accompany our clients at every stage – from property sourcing to ongoing management and leasing."
      }
    },
    whyUs: {
      title: {
        he: "למה לעבוד איתנו",
        en: "Why Work With Us"
      }
    },
    cta: {
      title: {
        he: "מעוניינים להשקיע בנדל\"ן בדובאי או בעולם?",
        en: "Interested in investing in real estate in Dubai or worldwide?"
      },
      description: {
        he: "צוות המומחים שלנו ישמח ללוות אותך בכל שלב – מהתכנון ועד לניהול הנכס והשכרתו. פנה אלינו לייעוץ ראשוני ללא התחייבות.",
        en: "Our team of experts will be happy to guide you at every stage – from planning to property management and leasing. Contact us for an initial consultation with no obligation."
      },
      button: {
        he: "לתיאום פגישה",
        en: "Book a Meeting"
      }
    }
  },

  PROPERTIES: {
    metadata: {
      title: {
        he: "הנכסים שלנו | Indexland",
        en: "Our Properties | Indexland"
      },
      description: {
        he: "נכסי נדל\"ן מסחריים ומשרדיים איכותיים עם פוטנציאל תשואה גבוה",
        en: "Quality commercial and office real estate properties with high return potential"
      },
      keywords: {
        he: "נכסי נדל\"ן, השקעות נדל\"ן, משרדים, נכסים מסחריים, תשואה",
        en: "real estate properties, real estate investments, offices, commercial properties, returns"
      }
    },
    hero: {
      title: {
        he: "תיק הנכסים שלנו",
        en: "Our Property Portfolio"
      },
      subtitle: {
        he: "נכסי נדל\"ן איכותיים עם פוטנציאל תשואה גבוה",
        en: "Quality real estate properties with high return potential"
      }
    },
    filters: {
      all: {
        he: "הכל",
        en: "All"
      },
      offices: {
        he: "משרדים",
        en: "Offices"
      },
      commercial: {
        he: "מסחרי",
        en: "Commercial"
      },
      logistics: {
        he: "לוגיסטיקה",
        en: "Logistics"
      },
      residential: {
        he: "מגורים",
        en: "Residential"
      }
    },
    labels: {
      location: {
        he: "מיקום",
        en: "Location"
      },
      price: {
        he: "מחיר",
        en: "Price"
      },
      size: {
        he: "גודל",
        en: "Size"
      },
      type: {
        he: "סוג",
        en: "Type"
      },
      features: {
        he: "מאפיינים",
        en: "Features"
      },
      return: {
        he: "תשואה שנתית",
        en: "Annual Return"
      },
      viewDetails: {
        he: "צפה בפרטים",
        en: "View Details"
      },
      contactUs: {
        he: "צור קשר",
        en: "Contact Us"
      }
    },
    cta: {
      title: {
        he: "מעוניינים בהשקעה?",
        en: "Interested in Investing?"
      },
      subtitle: {
        he: "צוות המומחים שלנו ישמח לסייע לכם למצוא את ההשקעה המושלמת",
        en: "Our team of experts will be happy to help you find the perfect investment"
      },
      button: {
        he: "צור קשר עכשיו",
        en: "Contact Us Now"
      }
    }
  },

  BLOG: {
    metadata: {
      title: {
        he: 'בלוג | Indexland',
        en: 'Blog | Indexland'
      },
      description: {
        he: 'מאמרים ותובנות על השקעות נדל"ן, ניהול נכסים וטרנדים בשוק הנדל"ן הבינלאומי',
        en: 'Articles and insights on real estate investments, property management and international real estate market trends'
      },
      keywords: {
        he: 'בלוג נדל"ן, השקעות נדל"ן, ניהול נכסים, שוק נדל"ן, מאמרים',
        en: 'real estate blog, real estate investments, property management, real estate market, articles'
      }
    },
    hero: {
      title: {
        he: 'הבלוג שלנו',
        en: 'Our Blog'
      },
      subtitle: {
        he: 'תובנות ומאמרים מעולם הנדל"ן',
        en: 'Insights and articles from the real estate world'
      }
    },
    labels: {
      readMore: {
        he: 'קרא עוד',
        en: 'Read More'
      },
      minRead: {
        he: 'דקות קריאה',
        en: 'min read'
      },
      publishedOn: {
        he: 'פורסם ב',
        en: 'Published on'
      },
      tags: {
        he: 'תגיות',
        en: 'Tags'
      },
      author: {
        he: 'כותב',
        en: 'Author'
      },
      by: {
        he: 'מאת',
        en: 'By'
      },
      loading: {
        he: 'טוען מאמרים...',
        en: 'Loading articles...'
      },
      error: {
        he: 'שגיאה בטעינת המאמרים',
        en: 'Error loading articles'
      },
      noArticles: {
        he: 'לא נמצאו מאמרים',
        en: 'No articles found'
      },
      relatedPosts: {
        he: 'מאמרים נוספים שעשויים לעניין אותך',
        en: 'Related articles you might find interesting'
      }
    },
    postNotFound: {
      title: {
        he: 'פוסט לא נמצא',
        en: 'Post Not Found'
      },
      message: {
        he: 'המאמר שחיפשת לא נמצא',
        en: 'The article you are looking for was not found'
      },
      backToBlog: {
        he: 'חזרה לבלוג',
        en: 'Back to Blog'
      }
    }
  },

  BOOK_MEETING: {
    hero: {
      title: {
        he: "קביעת פגישה",
        en: "Book a Meeting"
      },
      subtitle: {
        he: "בואו נתחיל לעבוד יחד - קבעו פגישת ייעוץ ללא התחייבות עם המומחים שלנו",
        en: "Let's start working together - book a no-obligation consultation with our experts"
      }
    },
    form: {
      title: {
        he: "פרטי יצירת קשר",
        en: "Contact Details"
      },
      fields: {
        name: {
          label: {
            he: "שם מלא",
            en: "Full Name"
          },
          placeholder: {
            he: "הכנס את שמך המלא",
            en: "Enter your full name"
          }
        },
        email: {
          label: {
            he: "כתובת אימייל",
            en: "Email Address"
          },
          placeholder: {
            he: "הכנס את כתובת האימייל שלך",
            en: "Enter your email address"
          }
        },
        phone: {
          label: {
            he: "מספר טלפון",
            en: "Phone Number"
          },
          placeholder: {
            he: "הכנס את מספר הטלפון שלך",
            en: "Enter your phone number"
          }
        },
        company: {
          label: {
            he: "שם החברה (אופציונלי)",
            en: "Company Name (Optional)"
          },
          placeholder: {
            he: "הכנס את שם החברה",
            en: "Enter your company name"
          }
        },
        details: {
          label: {
            he: "פרטים נוספים",
            en: "Additional Details"
          },
          placeholder: {
            he: "ספר לנו על הצרכים שלך...",
            en: "Tell us about your needs..."
          }
        }
      },
      calendar: {
        title: {
          he: "בחר תאריך ושעה",
          en: "Select Date and Time"
        },
        description: {
          he: "בחר את התאריך והשעה המועדפים עליך לפגישה",
          en: "Choose your preferred date and time for the meeting"
        }
      },
      submitButton: {
        default: {
          he: "קבע פגישה",
          en: "Book Meeting"
        },
        loading: {
          he: "שולח...",
          en: "Sending..."
        }
      },
      validation: {
        nameRequired: {
          he: "שם מלא הוא שדה חובה",
          en: "Full name is required"
        },
        emailRequired: {
          he: "כתובת אימייל היא שדה חובה",
          en: "Email address is required"
        },
        emailInvalid: {
          he: "כתובת אימייל לא תקינה",
          en: "Invalid email address"
        },
        phoneRequired: {
          he: "מספר טלפון הוא שדה חובה",
          en: "Phone number is required"
        }
      }
    },
    success: {
      title: {
        he: "הפגישה נקבעה בהצלחה!",
        en: "Meeting Booked Successfully!"
      },
      message: {
        he: "תודה שפנית אלינו. נחזור אליך בהקדם לאישור הפגישה.",
        en: "Thank you for contacting us. We'll get back to you soon to confirm the meeting."
      }
    }
  }
};

// Component Content - Organized by components for reusability
export const COMPONENTS = {
  // Common CTA texts
  CTA: {
    common: {
      contactUs: {
        he: "צור קשר",
        en: "Contact Us"
      },
      learnMore: {
        he: "למד עוד",
        en: "Learn More"
      },
      bookMeeting: {
        he: "קבע פגישה",
        en: "Book Meeting"
      },
      getStarted: {
        he: "התחל עכשיו",
        en: "Get Started"
      }
    }
  },

  // Navigation and Footer
  NAVIGATION: {
    toggleLanguage: {
      he: "עברית",
      en: "English"
    }
  },

  FOOTER: {
    copyright: {
      he: "כל הזכויות שמורות",
      en: "All rights reserved"
    },
    quickLinks: {
      title: {
        he: "קישורים מהירים",
        en: "Quick Links"
      }
    },
    contact: {
      title: {
        he: "צור קשר",
        en: "Contact"
      }
    },
    followUs: {
      title: {
        he: "עקבו אחרינו",
        en: "Follow Us"
      }
    }
  },

  // Form texts
  FORMS: {
    common: {
      required: {
        he: "שדה חובה",
        en: "Required field"
      },
      submit: {
        he: "שלח",
        en: "Submit"
      },
      cancel: {
        he: "ביטול",
        en: "Cancel"
      },
      loading: {
        he: "טוען...",
        en: "Loading..."
      },
      success: {
        he: "נשלח בהצלחה!",
        en: "Sent successfully!"
      },
      error: {
        he: "אירעה שגיאה, נסה שוב",
        en: "An error occurred, please try again"
      }
    },
    contact: {
      name: {
        label: {
          he: "שם מלא",
          en: "Full Name"
        },
        placeholder: {
          he: "הכנס את שמך המלא",
          en: "Enter your full name"
        }
      },
      email: {
        label: {
          he: "כתובת אימייל",
          en: "Email Address"
        },
        placeholder: {
          he: "הכנס את כתובת האימייל שלך",
          en: "Enter your email address"
        }
      },
      phone: {
        label: {
          he: "מספר טלפון",
          en: "Phone Number"
        },
        placeholder: {
          he: "הכנס את מספר הטלפון שלך",
          en: "Enter your phone number"
        }
      },
      message: {
        label: {
          he: "הודעה",
          en: "Message"
        },
        placeholder: {
          he: "כתב את הודעתך כאן...",
          en: "Write your message here..."
        }
      }
    }
  }
};

// Team Members Data
export const TEAM_MEMBERS = [
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
      he: "עם ניסיון של למעלה מ-15 שנות ניסיון בתחום הנדל\"ן והשקעות, דן הוביל עסקאות בהיקף של מאות מיליוני דולרים.",
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

// Contact Page Content
export const CONTACT_PAGE = {
  hero: {
    title: {
      he: "צור קשר",
      en: "Contact Us"
    },
    subtitle: {
      he: "נשמח לשמוע מכם ולעזור לכם למצוא את הפתרון המושלם לצרכיכם",
      en: "We'd love to hear from you and help you find the perfect solution for your needs"
    }
  },
  contactSection: {
    title: {
      he: "בואו נתחיל לעבוד יחד",
      en: "Let's Start Working Together"
    },
    subtitle: {
      he: "צרו קשר עמנו היום וגלו איך אנחנו יכולים לעזור לכם להשיג את המטרות שלכם",
      en: "Contact us today and discover how we can help you achieve your goals"
    }
  },
  faq: {
    title: {
      he: "שאלות נפוצות",
      en: "Frequently Asked Questions"
    },
    subtitle: {
      he: "מצאו תשובות לשאלות הנפוצות ביותר שלקוחותינו שואלים",
      en: "Find answers to the most common questions our clients ask"
    }
  },
  faqs: [
    {
      question: {
        he: "איך אני יכול לקבוע פגישת ייעוץ?",
        en: "How can I schedule a consultation meeting?"
      },
      answer: {
        he: "תוכלו לקבוע פגישה דרך הטלפון *8767, לשלוח אימייל ל-info@indexland.com או למלא את הטופס באתר.",
        en: "You can schedule a meeting by calling *8767, sending an email to info@indexland.com, or filling out the form on our website."
      }
    },
    {
      question: {
        he: "מה השירותים העיקריים שאתם מציעים?",
        en: "What are the main services you offer?"
      },
      answer: {
        he: "אנו מתמחים בניהול נכסי משרדים, פתרונות משרדים מפתח בידיים, השקעות נדל\"ן בינלאומיות ותיווך מקומי.",
        en: "We specialize in office asset management, turnkey office solutions, international real estate investments, and local brokerage."
      }
    },
    {
      question: {
        he: "האם אתם עובדים עם לקוחות בינלאומיים?",
        en: "Do you work with international clients?"
      },
      answer: {
        he: "כן, אנו עובדים עם לקוחות מכל העולם ומציעים שירותי השקעות נדל\"ן בינלאומיות עם ליווי מקצועי מלא.",
        en: "Yes, we work with clients from around the world and offer international real estate investment services with full professional guidance."
      }
    },
    {
      question: {
        he: "מה ההבדל בין השירותים השונים שלכם?",
        en: "What's the difference between your various services?"
      },
      answer: {
        he: "ניהול נכסים מתמקד בהשבחת נכסים קיימים, פתרונות משרדים כוללים הקמה מאפס, והשקעות בינלאומיות מתמחות בהזדמנויות מעבר לים.",
        en: "Asset management focuses on enhancing existing properties, office solutions include setup from scratch, and international investments specialize in overseas opportunities."
      }
    },
    {
      question: {
        he: "כמה זמן לוקח תהליך ההשקעה?",
        en: "How long does the investment process take?"
      },
      answer: {
        he: "התהליך משתנה בהתאם לסוג ההשקעה, אך בדרך כלל נע בין 30-90 יום מרגע אישור הפיננסים ועד להשלמת העסקה.",
        en: "The process varies depending on the type of investment, but typically ranges from 30-90 days from financial approval to transaction completion."
      }
    },
    {
      question: {
        he: "האם אתם מציעים ליווי לאחר ההשקעה?",
        en: "Do you offer post-investment support?"
      },
      answer: {
        he: "בהחלט! אנו מציעים ליווי מתמשך, ניהול שוטף של הנכסים, דיווחים תקופתיים ויעוץ אסטרטגי לטווח הארוך.",
        en: "Absolutely! We offer ongoing support, continuous asset management, periodic reports, and long-term strategic consulting."
      }
    }
  ],
  cta: {
    title: {
      he: "מוכנים לצעד הבא?",
      en: "Ready for the Next Step?"
    },
    subtitle: {
      he: "שוחח עם אחד המומחים שלנו עוד היום ונתחיל לעבוד יחד על יעדי ההשקעה שלך.",
      en: "Talk to one of our experts today and let's start working together on your investment goals."
    },
    callButton: {
      he: "התקשרו עכשיו",
      en: "Call Now"
    },
    emailButton: {
      he: "שלחו אימייל",
      en: "Send Email"
    }
  },
  map: {
    title: {
      he: "מפת המיקום שלנו",
      en: "Our Location Map"
    },
    ariaLabel: {
      he: "מפת גוגל המציגה את המיקום של המשרד שלנו",
      en: "Google map showing our office location"
    }
  }
}; 