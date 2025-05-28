'use client';

import React, { useState, useEffect } from 'react';
import BlogPostsList from '@/components/sections/BlogPostsList';
import { useLanguage } from '@/lib/language-context';
import { BlogPost } from '@/types/blog';

// Mock data for fallback - עם תמיכה רב-לשונית
const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: {
      he: 'המדריך המקיף לניהול נכסי משרדים',
      en: 'Complete Guide to Office Property Management'
    },
    description: {
      he: 'כל מה שצריך לדעת על ניהול נכסי משרדים בישראל - מהבסיס ועד לרמה המתקדמת',
      en: 'Everything you need to know about office property management in Israel - from basics to advanced level'
    },
    content: {
      he: 'תוכן המאמר כאן...',
      en: 'Article content here...'
    },
    slug: 'office-management-guide',
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop',
    author: {
      name: {
        he: 'צוות Indexland',
        en: 'Indexland Team'
      },
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3',
      title: {
        he: 'מומחי נדלן',
        en: 'Real Estate Experts'
      },
      bio: {
        he: 'צוות מומחים בתחום הנדלן',
        en: 'Team of real estate experts'
      }
    },
    publishedAt: '2024-01-15',
    tags: {
      he: ['ניהול נכסים', 'משרדים', 'השקעות'],
      en: ['Property Management', 'Offices', 'Investments']
    },
    readingTime: 8
  },
  {
    id: '2',
    title: {
      he: 'טרנדים בשוק הנדלן המסחרי 2024',
      en: 'Commercial Real Estate Market Trends 2024'
    },
    description: {
      he: 'סקירה מקיפה של המגמות החדשות בשוק הנדלן המסחרי והשפעתן על המשקיעים',
      en: 'Comprehensive overview of new trends in commercial real estate market and their impact on investors'
    },
    content: {
      he: 'תוכן המאמר כאן...',
      en: 'Article content here...'
    },
    slug: 'commercial-real-estate-trends-2024',
    coverImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1920&auto=format&fit=crop',
    author: {
      name: {
        he: 'צוות Indexland',
        en: 'Indexland Team'
      },
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3',
      title: {
        he: 'מומחי נדלן',
        en: 'Real Estate Experts'
      },
      bio: {
        he: 'צוות מומחים בתחום הנדלן',
        en: 'Team of real estate experts'
      }
    },
    publishedAt: '2024-01-10',
    tags: {
      he: ['נדלן מסחרי', 'טרנדים', 'שוק'],
      en: ['Commercial Real Estate', 'Trends', 'Market']
    },
    readingTime: 6
  },
  {
    id: '3',
    title: {
      he: 'השקעות נדלן בינלאומיות - מדריך למתחילים',
      en: 'International Real Estate Investment Guide for Beginners'
    },
    description: {
      he: 'איך להתחיל להשקיע בנדלן בחו"ל, מה הסיכונים והיתרונות',
      en: 'How to start investing in international real estate, risks and benefits'
    },
    content: {
      he: 'תוכן המאמר כאן...',
      en: 'Article content here...'
    },
    slug: 'international-real-estate-investment-guide',
    coverImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1920&auto=format&fit=crop',
    author: {
      name: {
        he: 'צוות Indexland',
        en: 'Indexland Team'
      },
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3',
      title: {
        he: 'מומחי נדלן',
        en: 'Real Estate Experts'
      },
      bio: {
        he: 'צוות מומחים בתחום הנדלן',
        en: 'Team of real estate experts'
      }
    },
    publishedAt: '2024-01-05',
    tags: {
      he: ['השקעות', 'נדלן בינלאומי', 'מדריך'],
      en: ['Investments', 'International Real Estate', 'Guide']
    },
    readingTime: 10
  }
];

// Loading component
const BlogPostsLoader = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[1, 2, 3].map((i) => (
      <div key={i} className="animate-pulse">
        <div className="bg-gray-300 dark:bg-gray-700 h-48 rounded-lg mb-4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
      </div>
    ))}
  </div>
);

export default function BlogContent() {
  const { language, t } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usingFallback, setUsingFallback] = useState(false);

  // תמונה דיפולטיבית למאמרים
  const defaultCoverImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop';
  const defaultAuthorImage = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3';

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/api/blog');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data && Array.isArray(data.posts) && data.posts.length > 0) {
          // הוספת תמונות דיפולטיביות למאמרים שלא קיימות להם תמונות
          const postsWithDefaults = data.posts.map((post: BlogPost) => ({
            ...post,
            coverImage: post.coverImage || defaultCoverImage,
            author: {
              ...post.author,
              image: post.author?.image || defaultAuthorImage
            }
          }));
          setPosts(postsWithDefaults);
          setUsingFallback(false);
        } else {
          ('BlogContent: No posts found, using fallback data');
          setPosts(mockPosts);
          setUsingFallback(true);
        }
      } catch (error) {
        console.error('BlogContent: Error fetching posts:', error);
        setError(error instanceof Error ? error.message : 'Unknown error');
        setPosts(mockPosts);
        setUsingFallback(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // טקסטים רב-לשוניים
  const texts = {
    title: {
      he: 'ניוזלטר חודשי של Indexland',
      en: 'Indexland Monthly News letter'
    },
    subtitle: {
      he: 'מאמרים, עדכונים וטיפים בתחום הנדלן, ההשקעות והמשרדים',
      en: 'Articles, updates and tips in real estate, investments and offices'
    },
    postsTitle: {
      he: 'המאמרים שלנו',
      en: 'Our Articles'
    },
    postsSubtitle: {
      he: 'תובנות ועדכונים מעולם הנדלן והמשרדים',
      en: 'Insights and updates from the world of real estate and offices'
    },
    fallbackMessage: {
      he: 'מציג נתונים לדוגמה - מנסה להתחבר לשרת...',
      en: 'Showing sample data - trying to connect to server...'
    },
    errorMessage: {
      he: 'שגיאה בטעינת המאמרים:',
      en: 'Error loading articles:'
    }
  };

  return (
    <div className="min-h-screen bg-backgroundLight dark:bg-backgroundDark transition-colors duration-200">
      <div className="container relative z-10">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-white via-orange-50/30 to-white pb-10 mb-2">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 py-20 md:py-28">
            {/* Left: Title, Subtitle, Buttons */}
            <div className="flex-1 flex flex-col items-start justify-center max-w-xl w-full md:pr-8">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight">
                Indexland Monthly<br className="hidden md:block" /> News letter
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-lg">
                Articles, analysis and insights in the field of office real estate<br />
                and international investments
              </p>
              <div className="flex gap-4">
                <a href="#posts" className="px-7 py-3 rounded-lg bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition text-lg">Read More</a>
                <a href="#posts" className="px-7 py-3 rounded-lg border-2 border-gray-300 text-gray-800 dark:text-white font-semibold bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-gray-900 transition text-lg">Read More</a>
              </div>
            </div>
            {/* Right: Image */}
            <div className="flex-1 flex items-center justify-center w-full max-w-lg">
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=800&auto=format"
                alt="Office desk with coffee and papers"
                className="rounded-2xl shadow-2xl object-cover w-full h-72 md:h-96 border border-gray-200"
                style={{ minWidth: '320px', maxWidth: '440px' }}
              />
            </div>
          </div>
          <div className="h-2 w-full bg-gradient-to-r from-orange-100/0 via-orange-200/60 to-orange-100/0 rounded-full mt-2 mb-2" />
        </section>

        {/* Loading State */}
        {loading && (
          <div className="mb-8">
            <BlogPostsLoader />
          </div>
        )}

        {/* Posts List */}
        {!loading && (
          <BlogPostsList 
            posts={posts}
            title={t(texts.postsTitle)}
            subtitle={t(texts.postsSubtitle)}
          />
        )}

        {/* Error Message */}
        {error && !usingFallback && (
          <div className="text-center py-8">
            <p className="text-red-600 dark:text-red-400">
              {t(texts.errorMessage)} {error}
            </p>
          </div>
        )}

        {/* FAQ Section */}
        <section className="w-full max-w-3xl mx-auto mt-24 mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="group border border-orange-200 rounded-xl bg-white shadow-sm p-6 transition-all">
              <summary className="font-semibold text-lg cursor-pointer flex items-center justify-between group-open:text-orange-600">
                What is Indexland Monthly Newsletter about?
                <span className="ml-2 text-orange-500 group-open:rotate-90 transition-transform">▶</span>
              </summary>
              <div className="mt-3 text-gray-700">
                Our newsletter brings you the latest insights, trends, and tips in office real estate and international investments, curated by our experts.
              </div>
            </details>
            {/* FAQ 2 */}
            <details className="group border border-orange-200 rounded-xl bg-white shadow-sm p-6 transition-all">
              <summary className="font-semibold text-lg cursor-pointer flex items-center justify-between group-open:text-orange-600">
                How often is the newsletter published?
                <span className="ml-2 text-orange-500 group-open:rotate-90 transition-transform">▶</span>
              </summary>
              <div className="mt-3 text-gray-700">
                The Indexland Monthly Newsletter is published once a month and includes exclusive articles, market analysis, and company updates.
              </div>
            </details>
            {/* FAQ 3 */}
            <details className="group border border-orange-200 rounded-xl bg-white shadow-sm p-6 transition-all">
              <summary className="font-semibold text-lg cursor-pointer flex items-center justify-between group-open:text-orange-600">
                Can I contribute or suggest topics for the newsletter?
                <span className="ml-2 text-orange-500 group-open:rotate-90 transition-transform">▶</span>
              </summary>
              <div className="mt-3 text-gray-700">
                Absolutely! We welcome suggestions and contributions. Please contact our editorial team via the contact form.
              </div>
            </details>
            {/* FAQ 4 */}
            <details className="group border border-orange-200 rounded-xl bg-white shadow-sm p-6 transition-all">
              <summary className="font-semibold text-lg cursor-pointer flex items-center justify-between group-open:text-orange-600">
                How do I subscribe to the newsletter?
                <span className="ml-2 text-orange-500 group-open:rotate-90 transition-transform">▶</span>
              </summary>
              <div className="mt-3 text-gray-700">
                Simply enter your email in the subscription box at the top of the page or contact us directly to be added to our mailing list.
              </div>
            </details>
          </div>
        </section>
      </div>
    </div>
  );
} 