import { NextResponse } from 'next/server';
import { BlogListResponse, BlogPost } from '@/types/blog';

// זה רק API דוגמה - בהמשך יתחבר לDBוכו'
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const pageSize = parseInt(searchParams.get('pageSize') || '10', 10);
  // למטרות עתידיות - לפילטור לפי תגיות
  // const tag = searchParams.get('tag');
  
  // בהמשך כאן יהיה חיבור למסד נתונים או שירות חיצוני

  const mockPosts: BlogPost[] = [];
  
  // בונה תשובת API
  const response: BlogListResponse = {
    posts: mockPosts,
    total: 0,
    page,
    pageSize,
    totalPages: 0
  };

  return NextResponse.json(response);
}

// בהמשך יתווספו כאן פונקציות נוספות 