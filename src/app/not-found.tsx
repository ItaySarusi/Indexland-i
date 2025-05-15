import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">404 - דף לא נמצא</h1>
      <p className="mb-6">מצטערים, הדף שחיפשת לא נמצא.</p>
      <Link 
        href="/" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        חזרה לדף הבית
      </Link>
    </div>
  );
} 