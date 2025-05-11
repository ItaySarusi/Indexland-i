import { Language } from '@/lib/language-context';

export interface Author {
  name: string | Record<Language, string>;
  image: string;
  title: string | Record<Language, string>;
  bio?: string | Record<Language, string>;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string | Record<Language, string>;
  description: string | Record<Language, string>;
  content: string | Record<Language, string>;
  coverImage: string;
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  tags: string[] | Record<Language, string[]>;
  readingTime: number;
}

export interface BlogListResponse {
  posts: BlogPost[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface BlogPostDetail extends BlogPost {
  relatedPosts: BlogPost[];
}

export interface BlogCategory {
  id: string;
  name: string | Record<Language, string>;
  slug: string;
  description?: string | Record<Language, string>;
  postCount: number;
} 