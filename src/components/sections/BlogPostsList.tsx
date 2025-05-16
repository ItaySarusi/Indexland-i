'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types/blog';
import { useLanguage, Language } from '@/lib/language-context';
import { motion } from 'framer-motion';

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
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'anticipate' }}
      className="py-12 bg-white dark:bg-backgroundDark dark:bg-opacity-90 transition-colors duration-200"
    >
      <div className="container">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: 'backOut' }}
            className="mb-4"
          >
            {titleText}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'anticipate' }}
            className="text-lg text-gray-600 dark:text-textSecondary max-w-3xl mx-auto"
          >
            {subtitleText}
          </motion.p>
        </div>
        
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-textSecondary">{t(noPostsText)}</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.map((post, idx) => {
                // Alternate animation per card
                const variants = [
                  { initial: { opacity: 0, y: 60 }, whileInView: { opacity: 1, y: 0 } },
                  { initial: { opacity: 0, scale: 0.9, rotate: -3 }, whileInView: { opacity: 1, scale: 1, rotate: 0 } },
                  { initial: { opacity: 0, x: 60 }, whileInView: { opacity: 1, x: 0 } },
                  { initial: { opacity: 0, rotateY: 90 }, whileInView: { opacity: 1, rotateY: 0 } },
                  { initial: { opacity: 0, y: -60 }, whileInView: { opacity: 1, y: 0 } },
                  { initial: { opacity: 0, scale: 0.9, rotate: 3 }, whileInView: { opacity: 1, scale: 1, rotate: 0 } },
                ];
                const v = variants[idx % variants.length];
                return (
                  <motion.article
                    key={post.id}
                    initial={v.initial}
                    whileInView={v.whileInView}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + idx * 0.12, duration: 0.7, type: 'spring', bounce: 0.2 }}
                    className="glass-card rounded-3xl overflow-hidden shadow-glass-xl border-2 border-white/40 dark:border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-glass group relative"
                    style={{ minHeight: 440 }}
                  >
                    {/* Glass reflection overlay */}
                    <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/50 to-transparent opacity-40 rounded-t-3xl pointer-events-none animate-glass-reflection" />
                    <Link href={`/blog/${post.slug}`}>
                      <motion.div
                        initial={{ scale: 0.92, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.18 + idx * 0.12, duration: 0.5, type: 'spring', stiffness: 180 }}
                      >
                        <Image
                          className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-95"
                          src={post.coverImage}
                          alt={typeof post.title === 'object' ? post.title[language] : post.title}
                          width={400}
                          height={200}
                        />
                      </motion.div>
                    </Link>
                    <div className="p-8 flex flex-col gap-4">
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.22 + idx * 0.12, duration: 0.5 }}
                        className="flex items-center text-sm text-gray-500 dark:text-textSecondary mb-1 font-semibold tracking-wide uppercase"
                      >
                        <time dateTime={post.publishedAt} className="font-semibold">
                          {new Date(post.publishedAt).toLocaleDateString(language === 'he' ? 'he-IL' : 'en-US')}
                        </time>
                        <span className="mx-2">•</span>
                        <span>{post.readingTime} {t(readingTimeText)}</span>
                      </motion.div>
                      <Link href={`/blog/${post.slug}`}>
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.26 + idx * 0.12, duration: 0.5 }}
                          className="text-3xl font-extrabold mb-2 hover:text-primary transition-colors text-balance leading-tight"
                        >
                          {getLocalizedText(post.title)}
                        </motion.h3>
                      </Link>
                      <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.12, duration: 0.5 }}
                        className="mb-2 text-lg line-clamp-3 text-gray-700 dark:text-textSecondary font-light"
                      >
                        {getLocalizedText(post.description)}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.34 + idx * 0.12, duration: 0.5 }}
                        className="flex flex-wrap gap-2 mb-2"
                      >
                        {(Array.isArray(post.tags)
                          ? post.tags
                          : post.tags[language] || []).slice(0, 4).map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full bg-white/60 dark:bg-backgroundDark/40 text-xs font-semibold text-primary/90 dark:text-primary/80 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-sm"
                          >
                            #{tag}
                          </span>
                        ))}
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.38 + idx * 0.12, duration: 0.5 }}
                        className="flex items-center mt-auto pt-2"
                      >
                        <Image 
                          className="w-10 h-10 rounded-full mr-4" 
                          src={post.author.image} 
                          alt={getLocalizedText(post.author.name)} 
                          width={40}
                          height={40}
                        />
                        <div>
                          <p className="text-base font-semibold leading-tight">{getLocalizedText(post.author.name)}</p>
                          <p className="text-xs text-gray-500 dark:text-textSecondary font-medium">{getLocalizedText(post.author.title)}</p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
            
            {showViewAllLink && (
              <div className="text-center mt-12">
                <Link href="/blog" className="inline-flex items-center text-primary hover:opacity-90 font-medium">
                  {t(viewAllText)}
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </motion.section>
  );
} 