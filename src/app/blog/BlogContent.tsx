'use client';

import React from 'react';
import PageContainer from "@/components/layout/PageContainer";
import Hero from "@/components/sections/Hero";
import BlogPostsList from "@/components/sections/BlogPostsList";

export default function BlogContent() {
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