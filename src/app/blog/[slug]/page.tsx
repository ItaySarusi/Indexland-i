import { Metadata } from "next";
import PageContainer from "@/components/layout/PageContainer";
// SEO לא בשימוש כרגע, ישמש בהמשך כשנרחיב את הפונקציונליות
// import { SEO } from "@/constants/site";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// התוכן להלן הוא רק תבנית. בהמשך יתווסף קוד שמושך את הנתונים האמיתיים מה-API
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = params;
  
  // בהמשך כאן יהיה קוד שמושך את המידע האמיתי
  const title = `פוסט לדוגמה - ${slug} | Indexland`;
  const description = "תיאור הפוסט יופיע כאן";
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: new Date().toISOString(),
      authors: ['Indexland'],
      images: ['/images/og-blog.jpg'],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  return (
    <PageContainer>
      <article className="max-w-3xl mx-auto py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4">כותרת פוסט לדוגמה - {slug}</h1>
          <div className="flex items-center text-gray-500 mb-4">
            <time dateTime="2023-01-01">1 בינואר, 2023</time>
            <span className="mx-2">•</span>
            <span>5 דקות קריאה</span>
          </div>
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
            <div>
              <p className="text-sm font-medium">שם הכותב</p>
              <p className="text-xs text-gray-500">תפקיד הכותב</p>
            </div>
          </div>
          <div className="w-full h-64 bg-gray-200 rounded-lg mb-6"></div>
        </header>
        
        <div className="prose max-w-none">
          <p>
            זהו תוכן לדוגמה של פוסט בלוג. בעתיד, תוכן זה יוחלף בתוכן אמיתי שיישלף מהמערכת.
          </p>
          <p>
            הפוסט הנוכחי הוא עבור הסלאג: {slug}
          </p>
        </div>
      </article>
    </PageContainer>
  );
} 