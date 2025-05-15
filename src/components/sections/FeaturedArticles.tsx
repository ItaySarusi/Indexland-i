import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types/blog';

interface FeaturedArticlesProps {
  posts: BlogPost[];
}

export default function FeaturedArticles({ posts }: FeaturedArticlesProps) {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-6 text-center tracking-tight">Featured Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <article key={post.id} className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-backgroundDark border border-orange-100 dark:border-white/10 transition hover:scale-105 group">
            <Link href={`/blog/${post.slug}`}>
              <Image
                src={post.coverImage}
                alt={typeof post.title === 'string' ? post.title : post.title['he'] || post.title['en']}
                width={600}
                height={320}
                className="w-full h-48 object-cover group-hover:brightness-95 transition"
                loading="lazy"
              />
            </Link>
            <div className="p-5 flex flex-col gap-2">
              <div className="flex items-center text-xs text-gray-500 mb-1">
                <time dateTime={post.publishedAt} className="font-semibold">
                  {new Date(post.publishedAt).toLocaleDateString('he-IL')}
                </time>
              </div>
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-xl font-bold mb-1 hover:text-primary transition-colors line-clamp-2">
                  {typeof post.title === 'string' ? post.title : post.title['he'] || post.title['en']}
                </h3>
              </Link>
              <p className="text-gray-700 dark:text-textSecondary text-sm line-clamp-3 mb-2">
                {typeof post.description === 'string' ? post.description : post.description['he'] || post.description['en']}
              </p>
              <div className="flex items-center gap-2 mt-auto pt-2">
                <Image src={post.author.image} alt={typeof post.author.name === 'string' ? post.author.name : post.author.name['he'] || post.author.name['en']} width={32} height={32} className="rounded-full object-cover" />
                <span className="text-xs font-medium">{typeof post.author.name === 'string' ? post.author.name : post.author.name['he'] || post.author.name['en']}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
} 