import { Client } from '@notionhq/client';
import { BlogPost, Author } from '@/types/blog';

/**
 * Notion Database Structure for Blog Posts:
 * 
 * Required Properties in your Notion Database:
 * 
 * 1. id (Title) - Unique identifier for the blog post
 * 2. slug (Rich Text) - URL-friendly version of the title
 * 3. title_he (Rich Text) - Hebrew title
 * 4. title_en (Rich Text) - English title
 * 5. description_he (Rich Text) - Hebrew description
 * 6. description_en (Rich Text) - English description
 * 7. content_he (Rich Text) - Hebrew content (markdown supported)
 * 8. content_en (Rich Text) - English content (markdown supported)
 * 9. coverImage (URL) - URL to cover image
 * 10. author_name_he (Rich Text) - Hebrew author name
 * 11. author_name_en (Rich Text) - English author name
 * 12. author_image (URL) - URL to author image
 * 13. author_title_he (Rich Text) - Hebrew author title
 * 14. author_title_en (Rich Text) - English author title
 * 15. author_bio_he (Rich Text) - Hebrew author bio
 * 16. author_bio_en (Rich Text) - English author bio
 * 17. publishedAt (Date) - Publication date
 * 18. updatedAt (Date) - Update date (optional)
 * 19. tags_he (Multi-select) - Hebrew tags
 * 20. tags_en (Multi-select) - English tags
 * 21. readingTime (Number) - Reading time in minutes
 */

interface NotionConfig {
  databaseId: string;
  token: string;
}

const getNotionConfig = (): NotionConfig => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const token = process.env.NOTION_TOKEN;

  if (!databaseId || !token) {
    throw new Error('Missing Notion configuration. Please check environment variables.');
  }

  return {
    databaseId,
    token,
  };
};

const createNotionClient = () => {
  const config = getNotionConfig();
  
  return new Client({
    auth: config.token,
  });
};

const extractRichText = (richText: any[]): string => {
  console.log('richText', richText);
  if (!richText || !Array.isArray(richText)) return '';
  return richText.map(text => text.plain_text).join('');
};

const extractMultiSelect = (multiSelect: any[]): string[] => {
  if (!multiSelect || !Array.isArray(multiSelect)) return [];
  return multiSelect.map(item => item.name);
};

const parseNotionPageToBlogPost = (page: any): BlogPost | null => {
  try {
    const properties = page.properties;

    // Extract basic fields
    const id = extractRichText(properties.id?.title || []);
    const slug = extractRichText(properties.slug?.rich_text || []);
    const titleHe = extractRichText(properties.title_he?.rich_text || []);
    const titleEn = extractRichText(properties.title_en?.rich_text || []);

    // Skip posts without required fields
    if (!id || !slug || !titleHe || !titleEn) {
      return null;
    }

    // Extract content fields
    const descriptionHe = extractRichText(properties.description_he?.rich_text || []);
    const descriptionEn = extractRichText(properties.description_en?.rich_text || []);
    const contentHe = extractRichText(properties.content_he?.rich_text || []);
    const contentEn = extractRichText(properties.content_en?.rich_text || []);
    const coverImage = properties.coverImage?.url || '';

    // Extract author fields
    const authorNameHe = extractRichText(properties.author_name_he?.rich_text || []);
    const authorNameEn = extractRichText(properties.author_name_en?.rich_text || []);
    const authorImage = properties.author_image?.url || '';
    const authorTitleHe = extractRichText(properties.author_title_he?.rich_text || []);
    const authorTitleEn = extractRichText(properties.author_title_en?.rich_text || []);
    const authorBioHe = extractRichText(properties.author_bio_he?.rich_text || []);
    const authorBioEn = extractRichText(properties.author_bio_en?.rich_text || []);

    // Extract dates
    const publishedAt = properties.publishedAt?.date?.start || new Date().toISOString();
    const updatedAt = properties.updatedAt?.date?.start || undefined;

    // Extract tags
    const tagsHe = extractMultiSelect(properties.tags_he?.multi_select || []);
    const tagsEn = extractMultiSelect(properties.tags_en?.multi_select || []);

    // Extract reading time
    const readingTime = properties.readingTime?.number || 5;

    const author: Author = {
      name: {
        he: authorNameHe,
        en: authorNameEn,
      },
      image: authorImage,
      title: {
        he: authorTitleHe,
        en: authorTitleEn,
      },
      bio: {
        he: authorBioHe,
        en: authorBioEn,
      },
    };

    const blogPost: BlogPost = {
      id,
      slug,
      title: {
        he: titleHe,
        en: titleEn,
      },
      description: {
        he: descriptionHe,
        en: descriptionEn,
      },
      content: {
        he: contentHe,
        en: contentEn,
      },
      coverImage,
      author,
      publishedAt,
      updatedAt,
      tags: {
        he: tagsHe,
        en: tagsEn,
      },
      readingTime,
    };

    return blogPost;

  } catch (error) {
    console.error('Error parsing Notion page:', error);
    return null;
  }
};

export const fetchBlogsFromNotion = async (): Promise<BlogPost[]> => {
  try {
    const config = getNotionConfig();
    const notion = createNotionClient();

    const response = await notion.databases.query({
      database_id: config.databaseId,
      sorts: [
        {
          property: 'publishedAt',
          direction: 'descending',
        },
      ],
    });

    const blogPosts: BlogPost[] = [];

    for (const page of response.results) {
      const blogPost = parseNotionPageToBlogPost(page);
      if (blogPost) {
        blogPosts.push(blogPost);
      }
    }

    console.log(`Successfully fetched ${blogPosts.length} blog posts from Notion`);
    return blogPosts;

  } catch (error) {
    console.error('Error fetching blogs from Notion:', error);
    throw new Error('Failed to fetch blogs from Notion');
  }
};

export const refreshBlogCache = async (): Promise<void> => {
  try {
    const blogs = await fetchBlogsFromNotion();
    // Here you can implement caching logic if needed
    // For example, save to a JSON file or database
    console.log(`Cache refreshed with ${blogs.length} blog posts`);
  } catch (error) {
    console.error('Error refreshing blog cache:', error);
    throw error;
  }
};

export const getBlogBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const config = getNotionConfig();
    const notion = createNotionClient();

    const response = await notion.databases.query({
      database_id: config.databaseId,
      filter: {
        property: 'slug',
        rich_text: {
          equals: slug,
        },
      },
    });

    if (response.results.length === 0) {
      return null;
    }

    const blogPost = parseNotionPageToBlogPost(response.results[0]);
    return blogPost;

  } catch (error) {
    console.error('Error fetching blog by slug from Notion:', error);
    return null;
  }
}; 