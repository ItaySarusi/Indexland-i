import { NextResponse } from 'next/server';
import { refreshBlogCache } from '@/lib/notion';

export const dynamic = 'force-dynamic';

export async function POST() {
  try {
    await refreshBlogCache();
    
    return NextResponse.json(
      { message: 'Blog cache refreshed successfully from Notion' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error refreshing blog cache:', error);
    
    return NextResponse.json(
      { error: 'Failed to refresh blog cache from Notion' },
      { status: 500 }
    );
  }
} 