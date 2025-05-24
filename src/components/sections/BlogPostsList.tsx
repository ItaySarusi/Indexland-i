'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types/blog';
import { useLanguage, Language } from '@/lib/language-context';

interface BlogPostsListProps {
  title?: string | Record<Language, string>;
  subtitle?: string | Record<Language, string>;
  posts: BlogPost[];
  showViewAllLink?: boolean;
}

export default function BlogPostsList({
  title,
  subtitle,
  posts = [],
  showViewAllLink = true
}: BlogPostsListProps) {
  const { language, t } = useLanguage();
  
  // תמונות דיפולטיביות
  const defaultCoverImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop';
  const defaultAuthorImage = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3';
  
  // Function to get localized text
  const getLocalizedText = (text: string | Record<Language, string> | undefined): string => {
    if (!text) return '';
    if (typeof text === 'string') {
      return text;
    }
    return t(text);
  };
  
  const defaultTitle = {
    he: "המאמרים האחרונים",
    en: "Latest Articles"
  };
  
  const defaultSubtitle = {
    he: "עדכונים, חדשות ומידע מקצועי בתחום הנדל\"ן וההשקעות",
    en: "Updates, news, and professional information in the field of real estate and investments"
  };
  
  const noPostsText = {
    he: "אין מאמרים להצגה כרגע.",
    en: "No articles to display at the moment."
  };
  
  const readingTimeText = {
    he: "דקות קריאה",
    en: "min read"
  };
  
  const viewAllText = {
    he: "לכל המאמרים",
    en: "View All Articles"
  };
  
  const titleText = getLocalizedText(title) || t(defaultTitle);
  const subtitleText = getLocalizedText(subtitle) || t(defaultSubtitle);

  return (
    <section className="py-12 bg-white dark:bg-backgroundDark dark:bg-opacity-90 transition-colors duration-200">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
            {titleText}
          </h2>
          <p className="text-lg text-gray-600 dark:text-textSecondary max-w-3xl mx-auto">
            {subtitleText}
          </p>
        </div>
        
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-textSecondary">{t(noPostsText)}</p>
          </div>
        ) : (
          <>
            <div className="px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                  style={{ minHeight: 440 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div>
                      <Image
                        className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-95"
                        src={post.coverImage || defaultCoverImage}
                        alt={typeof post.title === 'object' ? post.title[language] : post.title}
                        width={400}
                        height={200}
                      />
                    </div>
                  </Link>
                  <div className="p-8 flex flex-col gap-4">
                    <div className="flex items-center text-sm text-gray-500 dark:text-textSecondary mb-1 font-semibold tracking-wide uppercase">
                      <time dateTime={post.publishedAt} className="font-semibold">
                        {new Date(post.publishedAt).toLocaleDateString(language === 'he' ? 'he-IL' : 'en-US')}
                      </time>
                      <span className="mx-2">•</span>
                      <span>{post.readingTime} {t(readingTimeText)}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-2xl font-bold mb-2 hover:text-primary transition-colors text-balance leading-tight">
                        {getLocalizedText(post.title)}
                      </h3>
                    </Link>
                    <p className="mb-2 text-lg line-clamp-3 text-gray-700 dark:text-textSecondary">
                      {getLocalizedText(post.description)}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {(Array.isArray(post.tags)
                        ? post.tags
                        : post.tags[language] || []).slice(0, 4).map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-primary/10 text-xs font-semibold text-primary"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center mt-auto pt-2">
                      <Image 
                        className="w-10 h-10 rounded-full mr-4" 
                        src={post.author?.image || defaultAuthorImage} 
                        alt={getLocalizedText(post.author.name)} 
                        width={40}
                        height={40}
                      />
                      <div>
                        <p className="text-base font-semibold leading-tight">{getLocalizedText(post.author.name)}</p>
                        <p className="text-xs text-gray-500 dark:text-textSecondary font-medium">{getLocalizedText(post.author.title)}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {showViewAllLink && (
              <div className="text-center mt-12">
                <Link href="/blog" className="inline-flex items-center text-primary hover:opacity-90 font-medium">
                  {t(viewAllText)}
                  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
} 