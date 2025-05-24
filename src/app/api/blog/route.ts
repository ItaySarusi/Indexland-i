import { NextResponse } from 'next/server';
import { BlogListResponse, BlogPost } from '@/types/blog';
import { fetchBlogsFromNotion, getBlogBySlug } from '@/lib/notion';

// זה API דוגמה - בהמשך יתחבר ל-DB וכו'
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    
    if (slug) {
      // Search for specific post by slug
      const post = await getBlogBySlug(slug);
      
      if (!post) {
        return NextResponse.json(null, { status: 404 });
      }
      
      // Fetch all posts to get related posts
      const allPosts = await fetchBlogsFromNotion();
      
      // Add related posts
      const relatedPosts = allPosts
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
      // Fetch all posts from Notion
      const allPosts = await fetchBlogsFromNotion();
      
      // Return all posts with pagination
      const pageSize = parseInt(searchParams.get('pageSize') || '10', 10);
      const page = parseInt(searchParams.get('page') || '1', 10);
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      
      const paginatedPosts = allPosts.slice(startIndex, endIndex);
      const total = allPosts.length;
      const totalPages = Math.ceil(total / pageSize);
      
      const response: BlogListResponse = {
        posts: paginatedPosts,
        total,
        page,
        pageSize,
        totalPages
      };
      
      return NextResponse.json(response);
    }
  } catch (error) {
    console.error('Error in blog API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}

// בהמשך יתווספו כאן פונקציות נוספות 