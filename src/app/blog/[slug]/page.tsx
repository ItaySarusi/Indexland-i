import { Metadata } from "next";
import PageContainer from "@/components/layout/PageContainer";
import Image from "next/image";
import Link from "next/link";
import { BlogPostDetail, BlogPost } from "@/types/blog";
import { notFound } from "next/navigation";
import { Language } from "@/lib/language-context";
import BlogPostClient from './BlogPostClient';
import { PAGES } from "@/constants/site";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// פונקציה לקבלת נתוני הפוסט
async function getBlogPost(slug: string): Promise<BlogPostDetail | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/blog?slug=${slug}`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      return null;
    }
    
    const post = await response.json();
    return post;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// פונקציה להכנת מטה-דאטה דינמית לדף
export async function generateMetadata(
  { params }: BlogPostPageProps
): Promise<Metadata> {
  // Try to fetch the post to get its title
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/blog/${params.slug}`);
    if (response.ok) {
      const post = await response.json();
      return {
        title: `${post.title?.he || post.title} | Indexland`,
        description: post.description?.he || post.description,
      };
    }
  } catch (error) {
    console.error('Error fetching post metadata:', error);
  }

  // Fallback metadata
  return {
    title: PAGES.BLOG.postNotFound.title.he,
    description: PAGES.BLOG.postNotFound.message.he,
  };
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

export default function BlogPost({ params }: BlogPostPageProps) {
  return <BlogPostClient slug={params.slug} />;
}

export async function generateStaticParams() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/blog`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      return [];
    }
    
    const data = await response.json();
    return data.posts.map((post: BlogPost) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
} 