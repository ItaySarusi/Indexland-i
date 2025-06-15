'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { PAGES } from '@/constants/site';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">{t(PAGES.NOT_FOUND.title)}</h1>
      <p className="mb-6">{t(PAGES.NOT_FOUND.description)}</p>
      <Link 
        href="/" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {t(PAGES.NOT_FOUND.backToHome)}
      </Link>
    </div>
  );
} 