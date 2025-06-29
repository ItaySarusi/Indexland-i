import { BlogPost } from '@/types/blog';

// מידע מדמה (mock) לפוסטים של הבלוג
export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: {
      en: 'The Future of Office Spaces in Tel Aviv',
      he: 'עתיד המשרדים בתל אביב'
    },
    description: {
      en: 'Exploring the evolving landscape of commercial real estate in Israel\'s business capital.',
      he: 'חקירת הנוף המתפתח של הנדלן המסחרי בבירת העסקים של ישראל.'
    },
    content: {
      en: 'Tel Aviv continues to be at the forefront of innovation...',
      he: 'תל אביב ממשיכה להיות בחזית החדשנות...'
    },
    slug: 'future-office-spaces-tel-aviv',
    publishedAt: '2024-01-15T09:00:00Z',
    author: {
      name: 'Sarah Cohen',
      image: '/images/placeholder-avatar.png',
      title: 'Market Analyst'
    },
    tags: ['office-spaces', 'tel-aviv', 'commercial-real-estate'],
    readingTime: 5,
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop'
  },
  // Add more mock posts as needed
]; 