import { NextRequest, NextResponse } from 'next/server';
import { mockBlogPosts } from './mockData';

// זה API דוגמה - בהמשך יתחבר ל-DB וכו'
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const pageSize = parseInt(searchParams.get('pageSize') || '10');
  const category = searchParams.get('category');
  const tag = searchParams.get('tag');
  const search = searchParams.get('search');

  let filteredPosts = [...mockBlogPosts];

  // Apply filters
  if (category) {
    // Filter by category if needed
  }

  if (tag) {
    filteredPosts = filteredPosts.filter(post => 
      Array.isArray(post.tags) ? post.tags.includes(tag) : false
    );
  }

  if (search) {
    filteredPosts = filteredPosts.filter(post => {
      const title = typeof post.title === 'string' ? post.title : post.title.en;
      const description = typeof post.description === 'string' ? post.description : post.description.en;
      return title.toLowerCase().includes(search.toLowerCase()) ||
             description.toLowerCase().includes(search.toLowerCase());
    });
  }

  // Pagination
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  return NextResponse.json({
    posts: paginatedPosts,
    total: filteredPosts.length,
    page,
    pageSize,
    totalPages: Math.ceil(filteredPosts.length / pageSize)
  });
}

// בהמשך יתווספו כאן פונקציות נוספות 