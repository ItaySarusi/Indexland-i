'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useLanguage, Language } from '@/lib/language-context';

interface HeroProps {
  title: string | Record<Language, string>;
  subtitle: string | Record<Language, string>;
  primaryActionLabel?: string | Record<Language, string>;
  primaryActionHref?: string;
  secondaryActionLabel?: string | Record<Language, string>;
  secondaryActionHref?: string;
  imageUrl?: string;
  variant?: 'default' | 'centered' | 'image-right';
}

export default function Hero({
  title,
  subtitle,
  primaryActionLabel,
  primaryActionHref,
  secondaryActionLabel,
  secondaryActionHref,
  imageUrl,
  variant = 'default'
}: HeroProps) {
  const { language, t } = useLanguage();
  
  // קבלת הטקסט בשפה הנכונה
  const getLocalizedText = (text: string | Record<Language, string>): string => {
    if (typeof text === 'string') {
      return text;
    }
    return t(text);
  };
  
  const titleText = getLocalizedText(title);
  const subtitleText = getLocalizedText(subtitle);
  const primaryLabel = primaryActionLabel ? getLocalizedText(primaryActionLabel) : '';
  const secondaryLabel = secondaryActionLabel ? getLocalizedText(secondaryActionLabel) : '';

  const renderContent = () => (
    <div className="max-w-xl">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
        {titleText}
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-700 lg:text-xl">
        {subtitleText}
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
        {primaryActionLabel && primaryActionHref && (
          <Button href={primaryActionHref} size="lg">
            {primaryLabel}
          </Button>
        )}
        {secondaryActionLabel && secondaryActionHref && (
          <Button href={secondaryActionHref} variant="outline" size="lg">
            {secondaryLabel}
          </Button>
        )}
      </div>
    </div>
  );

  if (variant === 'centered') {
    return (
      <section className="bg-white py-16 md:py-24">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
            {titleText}
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 lg:px-48">
            {subtitleText}
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            {primaryActionLabel && primaryActionHref && (
              <Button href={primaryActionHref} size="lg">
                {primaryLabel}
              </Button>
            )}
            {secondaryActionLabel && secondaryActionHref && (
              <Button href={secondaryActionHref} variant="outline" size="lg">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'image-right') {
    return (
      <section className="bg-white">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            {renderContent()}
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            {imageUrl && (
              <Image 
                src={imageUrl} 
                alt={typeof title === 'string' ? title : title[language]} 
                className="rounded-lg shadow-xl object-cover"
                width={500}
                height={350}
                priority
              />
            )}
          </div>
        </div>
      </section>
    );
  }

  // Default variant
  return (
    <section className="bg-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          {renderContent()}
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          {imageUrl && (
            <Image 
              src={imageUrl} 
              alt={typeof title === 'string' ? title : title[language]} 
              className="rounded-lg shadow-xl object-cover"
              width={500}
              height={350}
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
} 