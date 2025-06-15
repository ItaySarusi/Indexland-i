import { Metadata } from "next";
import { SEO, PAGES } from "@/constants/site";
import BlogContent from './BlogContent';

// הכנת ערכי מטה-דאטה
export const metadata: Metadata = {
  title: PAGES.BLOG.metadata.title.he,
  description: PAGES.BLOG.metadata.description.he,
  keywords: PAGES.BLOG.metadata.keywords.he,
  openGraph: {
    images: [SEO.blog.ogImage],
  },
};

export default function Blog() {
  return <BlogContent />;
} 