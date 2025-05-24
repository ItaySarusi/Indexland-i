'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPostDetail } from '@/types/blog';
import { useLanguage, Language } from '@/lib/language-context';

interface BlogPostClientProps {
  post: BlogPostDetail;
}

// פונקציה לפרמוט תאריך
function formatDate(dateString: string, language: Language = 'he'): string {
  const date = new Date(dateString);
  
  if (language === 'he') {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('he-IL', options);
  } else {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
}

// פונקציה לקבלת טקסט מותאם לשפה
function getLocalizedText(text: string | Record<Language, string> | undefined, language: Language = 'he'): string {
  if (!text) return '';
  if (typeof text === 'string') {
    return text;
  }
  return text[language] || '';
}

// פונקציה להמרת טקסט לHTML מעוצב
function formatContent(content: string): string {
  if (!content) return '';
  
  // המרת שורות חדשות לפסקאות
  const paragraphs = content.split('\n\n').filter(p => p.trim());
  
  return paragraphs.map(paragraph => {
    // טיפול בכותרות (שורות שמתחילות ב-#)
    if (paragraph.startsWith('# ')) {
      return `<h1 class="text-4xl font-bold mb-8 mt-12 text-gray-900 dark:text-white">${paragraph.substring(2)}</h1>`;
    }
    if (paragraph.startsWith('## ')) {
      return `<h2 class="text-3xl font-bold mb-6 mt-10 text-gray-900 dark:text-white">${paragraph.substring(3)}</h2>`;
    }
    if (paragraph.startsWith('### ')) {
      return `<h3 class="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-white">${paragraph.substring(4)}</h3>`;
    }
    
    // טיפול ברשימות
    if (paragraph.includes('\n- ') || paragraph.startsWith('- ')) {
      const items = paragraph.split('\n- ').map(item => item.replace(/^- /, ''));
      const listItems = items.map(item => `<li class="mb-3 text-gray-700 dark:text-gray-300">${item}</li>`).join('');
      return `<ul class="list-disc list-inside mb-6 space-y-2 pl-4">${listItems}</ul>`;
    }
    
    // טיפול ברשימות ממוספרות
    if (paragraph.match(/^\d+\. /)) {
      const items = paragraph.split(/\n\d+\. /).filter(item => item.trim());
      const listItems = items.map(item => `<li class="mb-3 text-gray-700 dark:text-gray-300">${item}</li>`).join('');
      return `<ol class="list-decimal list-inside mb-6 space-y-2 pl-4">${listItems}</ol>`;
    }
    
    // טיפול בטקסט מודגש
    let formattedParagraph = paragraph
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900 dark:text-white">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic text-gray-800 dark:text-gray-200">$1</em>');
    
    return `<p class="mb-6 leading-relaxed text-lg text-gray-700 dark:text-gray-300">${formattedParagraph}</p>`;
  }).join('');
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const { language, t } = useLanguage();
  
  const title = getLocalizedText(post.title, language);
  const content = getLocalizedText(post.content, language);
  const authorName = getLocalizedText(post.author?.name, language);
  const authorTitle = getLocalizedText(post.author?.title, language);
  const authorBio = getLocalizedText(post.author?.bio, language);
  const publishedDate = formatDate(post.publishedAt, language);
  
  // תמונות דיפולטיביות
  const defaultCoverImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop';
  const defaultAuthorImage = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3';
  
  const texts = {
    readingTime: {
      he: 'דקות קריאה',
      en: 'min read'
    },
    relatedPosts: {
      he: 'מאמרים נוספים שעשויים לעניין אותך',
      en: 'Related articles you might find interesting'
    },
    backToBlog: {
      he: 'חזרה לבלוג',
      en: 'Back to Blog'
    },
    publishedOn: {
      he: 'פורסם ב',
      en: 'Published on'
    },
    by: {
      he: 'מאת',
      en: 'By'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* כפתור חזרה */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center px-4 py-2 text-primary hover:text-primary/80 transition-colors bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t(texts.backToBlog)}
          </Link>
        </div>

        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* תמונת כיסוי */}
          <div className="relative">
            <Image 
              className="w-full h-64 md:h-96 object-cover"
              src={post.coverImage || defaultCoverImage}
              alt={title}
              width={1200}
              height={600}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          <div className="p-8 md:p-12">
            {/* כותרת ומטא-דאטה */}
            <header className="mb-12">
              {/* תגיות */}
              {post.tags && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {(Array.isArray(post.tags) ? post.tags : post.tags[language] || []).slice(0, 5).map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-orange-600/10 text-primary border border-primary/20 text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* כותרת */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {title}
              </h1>
              
              {/* מידע על המאמר */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-8 p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">{t(texts.publishedOn)}</span>
                  <time dateTime={post.publishedAt} className="font-semibold">
                    {publishedDate}
                  </time>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{post.readingTime} {t(texts.readingTime)}</span>
                </div>
              </div>
              
              {/* מידע על הכותב */}
              <div className="flex items-start p-6 bg-gradient-to-r from-primary/5 to-orange-600/5 rounded-xl border border-primary/10">
                <Image 
                  className="w-16 h-16 rounded-full mr-6 object-cover border-2 border-white shadow-lg"
                  src={post.author?.image || defaultAuthorImage}
                  alt={authorName}
                  width={64}
                  height={64}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{t(texts.by)}</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{authorName}</h3>
                  </div>
                  <p className="text-primary font-medium mb-2">{authorTitle}</p>
                  {authorBio && (
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{authorBio}</p>
                  )}
                </div>
              </div>
            </header>
            
            {/* תוכן המאמר */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div 
                className="text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: formatContent(content) }} 
              />
            </div>
          </div>
          
          {/* מאמרים קשורים */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div className="mt-16 p-8 md:p-12 bg-gray-50 dark:bg-gray-700/30">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">{t(texts.relatedPosts)}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {post.relatedPosts.slice(0, 2).map((relatedPost) => (
                  <div key={relatedPost.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <Image 
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" 
                        src={relatedPost.coverImage || defaultCoverImage} 
                        alt={getLocalizedText(relatedPost.title, language)}
                        width={400}
                        height={200}
                      />
                    </Link>
                    <div className="p-6">
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <h3 className="font-bold text-xl mb-3 hover:text-primary transition-colors line-clamp-2 text-gray-900 dark:text-white">
                          {getLocalizedText(relatedPost.title, language)}
                        </h3>
                      </Link>
                      <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                        {getLocalizedText(relatedPost.description, language)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
} 