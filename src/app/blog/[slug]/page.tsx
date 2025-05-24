import { Metadata } from "next";
import PageContainer from "@/components/layout/PageContainer";
import Image from "next/image";
import Link from "next/link";
import { BlogPostDetail, BlogPost } from "@/types/blog";
import { notFound } from "next/navigation";
import { Language } from "@/lib/language-context";
import BlogPostClient from "./BlogPostClient";

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
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    return {
      title: "פוסט לא נמצא | Indexland",
      description: "הפוסט המבוקש לא נמצא",
    };
  }
  
  const title = typeof post.title === 'object' ? post.title.he : post.title;
  const description = typeof post.description === 'object' ? post.description.he : post.description;
  const authorName = typeof post.author?.name === 'object' ? post.author.name.he : (post.author?.name || '');
  
  return {
    title: `${title} | Indexland`,
    description,
    openGraph: {
      title: `${title} | Indexland`,
      description,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [authorName],
      images: [post.coverImage],
    },
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

export default async function BlogPostPage(
  { params }: BlogPostPageProps
) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  // אם הפוסט לא נמצא, נחזיר דף 404
  if (!post) {
    notFound();
  }
  
  return (
    <PageContainer>
      <BlogPostClient post={post} />
    </PageContainer>
  );
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