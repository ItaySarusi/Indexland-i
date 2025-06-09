import React from 'react';
import { BlogPost } from '@/types/blog';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Image from 'next/image';

interface BlogSidebarProps {
  posts: BlogPost[];
}

function getAllTags(posts: BlogPost[]): string[] {
  const tags = posts.flatMap(post => Array.isArray(post.tags) ? post.tags : Object.values(post.tags).flat());
  return Array.from(new Set(tags));
}

export default function BlogSidebar({ posts }: BlogSidebarProps) {
  const tags = getAllTags(posts);
  return (
    <aside className="flex flex-col gap-8">
      {/* Search Bar */}
      <div className="glass-card rounded-xl p-4 shadow border border-white/30 dark:border-white/10">
        <form className="flex gap-2">
          <Input type="text" placeholder="Search articles..." className="flex-1" />
          <Button type="submit" className="bg-primary text-white px-4">🔍</Button>
        </form>
      </div>
      {/* Categories/Tags */}
      <div className="glass-card rounded-xl p-4 shadow border border-white/30 dark:border-white/10">
        <h4 className="font-bold text-primary mb-2">Categories / Tags</h4>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1 rounded-full bg-orange-100 text-primary text-xs font-semibold cursor-pointer hover:bg-primary hover:text-white transition">
              #{tag}
            </span>
          ))}
        </div>
      </div>
      {/* Newsletter Signup */}
      <div className="glass-card rounded-xl p-4 shadow border border-white/30 dark:border-white/10">
        <h4 className="font-bold text-primary mb-2">Subscribe to Our Newsletter</h4>
        <p className="text-xs text-gray-600 mb-2">Get the latest updates and exclusive insights delivered to your inbox.</p>
        <form className="flex gap-2">
          <Input type="email" placeholder="Your email" className="flex-1" />
          <Button type="submit" className="bg-primary text-white px-4">Subscribe</Button>
        </form>
      </div>
      {/* Popular Posts (אופציונלי) */}
      <div className="glass-card rounded-xl p-4 shadow border border-white/30 dark:border-white/10">
        <h4 className="font-bold text-primary mb-2">Popular Posts</h4>
        <ul className="flex flex-col gap-2">
          {posts.slice(0, 3).map(post => (
            <li key={post.id}>
              <a href={`/blog/${post.slug}`} className="flex items-center gap-2 hover:text-primary">
                <Image src={post.coverImage} alt={post.title as string} width={40} height={40} className="rounded-md object-cover" />
                <span className="text-sm font-medium line-clamp-2">{typeof post.title === 'string' ? post.title : post.title['he'] || post.title['en']}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Author Bios (אופציונלי) */}
      <div className="glass-card rounded-xl p-4 shadow border border-white/30 dark:border-white/10">
        <h4 className="font-bold text-primary mb-2">Author Bios</h4>
        <div className="flex flex-col gap-3">
          {Array.from(new Set(posts.map(p => p.author.name as string))).map((name, i) => {
            const author = posts.find(p => (p.author.name as string) === name)?.author;
            if (!author) return null;
            return (
              <div key={i} className="flex items-center gap-3">
                <Image src={author.image} alt={name} width={32} height={32} className="rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold">{name}</div>
                  <div className="text-xs text-gray-500">{typeof author.title === 'string' ? author.title : author.title['he'] || author.title['en']}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
} 