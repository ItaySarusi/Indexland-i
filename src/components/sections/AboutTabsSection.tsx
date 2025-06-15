import React, { useState } from 'react';
import Button from '../ui/Button';
import { useLanguage } from '@/lib/language-context';
import { PAGES } from '@/constants/site';

export default function AboutTabsSection() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState('story');

  const TABS = [
    {
      key: 'story',
      label: t(PAGES.ABOUT_US.tabs.story.label),
      content: (
        <>
          <h3 className="text-2xl md:text-3xl font-extrabold text-primary text-center mb-4">{t(PAGES.ABOUT_US.tabs.story.title)}</h3>
          <p>
            {t(PAGES.ABOUT_US.tabs.story.content)}
          </p>
        </>
      ),
    },
    {
      key: 'vision',
      label: t(PAGES.ABOUT_US.tabs.vision.label),
      content: (
        <>
          <h3 className="text-2xl md:text-3xl font-extrabold text-primary text-center mb-4">{t(PAGES.ABOUT_US.tabs.vision.title)}</h3>
          <p>{t(PAGES.ABOUT_US.tabs.vision.content)}</p>
        </>
      ),
    },
    {
      key: 'mission',
      label: t(PAGES.ABOUT_US.tabs.mission.label),
      content: (
        <>
          <h3 className="text-2xl md:text-3xl font-extrabold text-primary text-center mb-4">{t(PAGES.ABOUT_US.tabs.mission.title)}</h3>
          <p>{t(PAGES.ABOUT_US.tabs.mission.content)}</p>
        </>
      ),
    },
  ];

  const selectedTab = TABS.find(tab => tab.key === selected) || TABS[0];

  return (
    <section className="w-full flex flex-col md:flex-row gap-8 py-12 px-4 md:px-0 max-w-5xl mx-auto animate-fade-in animate-scale-in">
      {/* Left menu */}
      <div className="flex md:flex-col gap-4 md:gap-6 md:w-56 mb-4 md:mb-0 justify-center">
        {TABS.map(tab => (
          <button
            key={tab.key}
            className={`transition-all duration-300 px-7 py-3 rounded-full text-lg font-semibold shadow-lg border-2
              ${selected === tab.key
                ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white border-orange-500 scale-105 drop-shadow-xl'
                : 'bg-white/60 text-primary border-gray-200 hover:bg-orange-50 hover:border-orange-400 hover:text-orange-500'}
              `}
            style={{letterSpacing: '0.01em'}}
            onClick={() => setSelected(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Content */}
      <div className="flex-1 glass-card bg-white/70 dark:bg-backgroundDark/80 rounded-3xl shadow-2xl p-10 min-h-[320px] flex flex-col justify-center items-center text-gray-800 text-lg leading-relaxed backdrop-blur-md border border-orange-100">
        {selectedTab.content}
      </div>
    </section>
  );
} 