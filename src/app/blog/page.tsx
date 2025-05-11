import { Metadata } from "next";
import { SEO } from "@/constants/site";
import BlogContent from './BlogContent';

// הכנת ערכי מטה-דאטה
const metadataTitle = "בלוג Indexland | מאמרים וחדשות";
const metadataDescription = "מאמרים, עדכונים וטיפים בתחום הנדל\"ן, ההשקעות והמשרדים";
const metadataKeywords = "בלוג, מאמרים, נדל\"ן, השקעות, טיפים";

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  keywords: metadataKeywords,
  openGraph: {
    images: [SEO.blog.ogImage],
  },
};

export default function Blog() {
  return <BlogContent />;
} 