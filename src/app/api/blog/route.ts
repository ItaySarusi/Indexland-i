import { NextResponse } from 'next/server';
import { BlogListResponse, BlogPost } from '@/types/blog';
import { mockPosts } from './mockData';

// זה API דוגמה - בהמשך יתחבר ל-DB וכו'
export const dynamic = 'force-static';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  
  if (slug) {
    // חיפוש פוסט ספציפי לפי ה-slug
    const post = mockPosts.find(post => post.slug === slug);
    
    if (!post) {
      return NextResponse.json(null, { status: 404 });
    }
    
    // הוספת פוסטים קשורים
    const relatedPosts = mockPosts
      .filter(p => p.id !== post.id)
      .slice(0, 2)
      .map(p => ({
        id: p.id,
        slug: p.slug,
        title: p.title,
        description: p.description,
        coverImage: p.coverImage
      }));
    
    const postWithRelated = {
      ...post,
      relatedPosts
    };
    
    return NextResponse.json(postWithRelated);
  } else {
    // החזרת כל הפוסטים כולל כל השדות הנדרשים
    const pageSize = 10; // גודל דף ברירת מחדל
    const page = parseInt(searchParams.get('page') || '1', 10);
    const total = mockPosts.length;
    const totalPages = Math.ceil(total / pageSize);
    
    const response: BlogListResponse = {
      posts: mockPosts,
      total,
      page,
      pageSize,
      totalPages
    };
    
    return NextResponse.json(response);
  }
}

// בהמשך יתווספו כאן פונקציות נוספות 