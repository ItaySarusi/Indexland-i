import React, { useState } from 'react';
import Button from '../ui/Button';

const TABS = [
  {
    key: 'story',
    label: 'Our Story',
    content: (
      <>
        <h3 className="text-2xl md:text-3xl font-extrabold text-primary text-center mb-4">Indexland | Commercial Real Estate Advisory.</h3>
        <p>
          Established in 1994 and based in Tel Aviv, Indexland is a leading commercial real estate firm providing strategic consulting and brokerage services across Israel and abroad. Our core expertise spans tenant representation, investment sales, and project marketing. With a client-first approach and a reputation for precision, we serve a diverse portfolio of local and international clients, from institutional investors to private stakeholders. Our consistent growth is fueled by a shared DNA—an unwavering commitment to professionalism, personal relationships, and results. At Indexland, we don't just follow market trends—we help shape them.
        </p>
      </>
    ),
  },
  {
    key: 'vision',
    label: 'Our Vision',
    content: (
      <>
        <h3 className="text-2xl md:text-3xl font-extrabold text-primary text-center mb-4">Our Vision</h3>
        <p>Equip businesses with end-to-end real estate and workspace solutions that drive efficiency, satisfaction, and scale.</p>
      </>
    ),
  },
  {
    key: 'mission',
    label: 'Our Mission',
    content: (
      <>
        <h3 className="text-2xl md:text-3xl font-extrabold text-primary text-center mb-4">Our Mission</h3>
        <p>Redefine how companies build, manage, and grow their physical footprint—making every square meter work harder.</p>
      </>
    ),
  },
];

export default function AboutTabsSection() {
  const [selected, setSelected] = useState('story');

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