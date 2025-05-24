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
      he: 'בלוג Indexland',
      en: 'Indexland Blog'
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
        <div className="text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
            {t(texts.title)}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t(texts.subtitle)}
          </p>
          {usingFallback && (
            <p className="text-sm text-orange-600 dark:text-orange-400 mt-2">
              {t(texts.fallbackMessage)}
            </p>
          )}
        </div>

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
      </div>
    </div>
  );
} 