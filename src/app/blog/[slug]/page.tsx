import { Metadata } from "next";
import PageContainer from "@/components/layout/PageContainer";
import Image from "next/image";
import Link from "next/link";
import { BlogPostDetail } from "@/types/blog";
import { notFound } from "next/navigation";
import { Language } from "@/lib/language-context";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// פונקציה לקבלת נתוני הפוסט מה-API
async function getBlogPost(slug: string): Promise<BlogPostDetail | null> {
  try {
    // יוצר URL מותאם לסביבה (פיתוח או ייצור)
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
    const host = process.env.VERCEL_URL || 'localhost:3000';
    const url = `${protocol}://${host}/api/blog?slug=${slug}`;
    
    const response = await fetch(url, { next: { revalidate: 3600 } }); // רענון כל שעה
    
    if (!response.ok) {
      return null;
    }
    
    return await response.json();
  } catch (error) {
    console.error(`שגיאה בטעינת פוסט: ${slug}`, error);
    return null;
  }
}

// פונקציה להכנת מטה-דאטה דינמית לדף
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    return {
      title: "פוסט לא נמצא | Indexland",
      description: "הפוסט המבוקש לא נמצא",
    };
  }
  
  const title = typeof post.title === 'object' ? post.title.he : post.title;
  const description = typeof post.description === 'object' ? post.description.he : post.description;
  const authorName = typeof post.author.name === 'object' ? post.author.name.he : post.author.name;
  
  return {
    title: `${title} | Indexland`,
    description,
    openGraph: {
      title: `${title} | Indexland`,
      description,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [authorName],
      images: [post.coverImage],
    },
  };
}

// פונקציה לפרמוט תאריך
function formatDate(dateString: string, language: Language = 'he'): string {
  const date = new Date(dateString);
  
  if (language === 'he') {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('he-IL', options);
  } else {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
}

// פונקציה לקבלת טקסט מותאם לשפה
function getLocalizedText(text: string | Record<Language, string>, language: Language = 'he'): string {
  if (typeof text === 'string') {
    return text;
  }
  return text[language];
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const post = await getBlogPost(slug);
  
  // אם הפוסט לא נמצא, נחזיר דף 404
  if (!post) {
    notFound();
  }
  
  // כדי להקל על התצוגה, נכין את התוכן בעברית
  const title = getLocalizedText(post.title);
  const content = getLocalizedText(post.content);
  const authorName = getLocalizedText(post.author.name);
  const authorTitle = getLocalizedText(post.author.title);
  const publishedDate = formatDate(post.publishedAt);
  
  return (
    <PageContainer>
      <article className="max-w-3xl mx-auto py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <div className="flex items-center text-gray-500 mb-4">
            <time dateTime={post.publishedAt}>{publishedDate}</time>
            <span className="mx-2">•</span>
            <span>{post.readingTime} דקות קריאה</span>
          </div>
          <div className="flex items-center mb-6">
            <Image 
              className="w-10 h-10 rounded-full mr-3"
              src={post.author.image}
              alt={authorName}
              width={40}
              height={40}
            />
            <div>
              <p className="text-sm font-medium">{authorName}</p>
              <p className="text-xs text-gray-500">{authorTitle}</p>
            </div>
          </div>
          <Image 
            className="w-full h-64 object-cover rounded-lg mb-6"
            src={post.coverImage}
            alt={title}
            width={1200}
            height={400}
            priority
          />
        </header>
        
        <div className="prose max-w-none">
          {/* כאן נדרש להמיר את קובץ ה-Markdown לHTML - בינתיים נציג טקסט פשוט */}
          <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br>') }} />
        </div>
        
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <div className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-bold mb-6">מאמרים נוספים שעשויים לעניין אותך</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {post.relatedPosts.slice(0, 2).map((relatedPost) => (
                <div key={relatedPost.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <Image 
                      className="w-full h-40 object-cover" 
                      src={relatedPost.coverImage} 
                      alt={getLocalizedText(relatedPost.title)}
                      width={400}
                      height={200}
                    />
                  </Link>
                  <div className="p-4">
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <h3 className="font-bold text-lg mb-2 hover:text-primary">
                        {getLocalizedText(relatedPost.title)}
                      </h3>
                    </Link>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {getLocalizedText(relatedPost.description)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </PageContainer>
  );
}

export function generateStaticParams() {
  return [
    { slug: 'key-office-trends-2024' },
    { slug: 'intl-real-estate-guide' },
    { slug: 'choose-property-manager' },
    { slug: 'esg-commercial-real-estate' },
    { slug: 'risk-management-real-estate' }
  ];
} 