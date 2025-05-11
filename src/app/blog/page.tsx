import { Metadata } from "next";
import PageContainer from "@/components/layout/PageContainer";
import Hero from "@/components/sections/Hero";
import BlogPostsList from "@/components/sections/BlogPostsList";
import { SEO } from "@/constants/site";

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
  // בשלב זה אין פוסטים בבלוג, בהמשך יתווספו
  const posts = [];
  
  const heroTitle = {
    he: "הבלוג שלנו",
    en: "Our Blog"
  };
  
  const heroSubtitle = {
    he: "מאמרים, טיפים וחדשות על נדל\"ן, השקעות ומשרדים",
    en: "Articles, tips, and news about real estate, investments, and offices"
  };

  return (
    <PageContainer>
      <Hero
        title={heroTitle}
        subtitle={heroSubtitle}
        variant="centered"
      />
      
      <BlogPostsList 
        posts={posts} 
        showViewAllLink={false}
      />
    </PageContainer>
  );
} 