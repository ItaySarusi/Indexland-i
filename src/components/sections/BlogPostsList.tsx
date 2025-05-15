'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types/blog';
import { useLanguage, Language } from '@/lib/language-context';

interface BlogPostsListProps {
  title?: string | Record<Language, string>;
  subtitle?: string | Record<Language, string>;
  posts: BlogPost[];
  showViewAllLink?: boolean;
  enablePagination?: boolean;
  pageSize?: number;
}

export default function BlogPostsList({
  title,
  subtitle,
  posts = [],
  showViewAllLink = true,
  enablePagination = false,
  pageSize = 8
}: BlogPostsListProps) {
  const { language, t } = useLanguage();
  const [page, setPage] = useState(1);
  const totalPages = enablePagination ? Math.ceil(posts.length / pageSize) : 1;
  const paginatedPosts = enablePagination ? posts.slice((page-1)*pageSize, page*pageSize) : posts;
  
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
    <section className="py-8 md:py-12 bg-white dark:bg-backgroundDark dark:bg-opacity-90 transition-colors duration-200">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="mb-2 text-2xl md:text-3xl font-extrabold text-primary tracking-tight">{titleText}</h2>
          <p className="text-lg text-gray-600 dark:text-textSecondary max-w-3xl mx-auto">
            {subtitleText}
          </p>
        </div>
        {paginatedPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-textSecondary">{t(noPostsText)}</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {paginatedPosts.map((post, idx) => (
                <article
                  key={post.id}
                  className="rounded-xl overflow-hidden shadow border border-orange-100 dark:border-white/10 bg-white dark:bg-backgroundDark transition hover:scale-105 group relative animate-fade-in animate-scale-in"
                  style={{ minHeight: 340, animationDelay: `${0.1 + idx * 0.10}s` }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <Image
                      className="w-full h-32 object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-95"
                      src={post.coverImage}
                      alt={typeof post.title === 'object' ? post.title[language] : post.title}
                      width={400}
                      height={160}
                      loading="lazy"
                    />
                  </Link>
                  <div className="p-4 flex flex-col gap-2">
                    <div className="flex items-center text-xs text-gray-500 mb-1">
                      <time dateTime={post.publishedAt} className="font-semibold">
                        {new Date(post.publishedAt).toLocaleDateString(language === 'he' ? 'he-IL' : 'en-US')}
                      </time>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-lg font-bold mb-1 hover:text-primary transition-colors line-clamp-2">
                        {getLocalizedText(post.title)}
                      </h3>
                    </Link>
                    <p className="text-gray-700 dark:text-textSecondary text-sm line-clamp-2 mb-1">
                      {getLocalizedText(post.description)}
                    </p>
                    <div className="flex items-center gap-2 mt-auto pt-2">
                      <Image 
                        className="w-7 h-7 rounded-full" 
                        src={post.author.image} 
                        alt={getLocalizedText(post.author.name)} 
                        width={28}
                        height={28}
                      />
                      <span className="text-xs font-medium">{getLocalizedText(post.author.name)}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            {/* Pagination */}
            {enablePagination && totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <button onClick={() => setPage(p => Math.max(1, p-1))} disabled={page === 1} className="px-3 py-1 rounded bg-orange-100 text-primary font-bold disabled:opacity-40">←</button>
                <span className="text-sm font-medium">Page {page} of {totalPages}</span>
                <button onClick={() => setPage(p => Math.min(totalPages, p+1))} disabled={page === totalPages} className="px-3 py-1 rounded bg-orange-100 text-primary font-bold disabled:opacity-40">→</button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
} 