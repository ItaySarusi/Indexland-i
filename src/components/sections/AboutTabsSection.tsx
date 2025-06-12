import React, { useState } from 'react';
import Button from '../ui/Button';

const TABS = [
  {
    key: 'story',
    label: 'Our Story',
    content: (
      <>
        <span className="font-bold">Indexland | Commercial Real Estate Advisory.</span><br />
        Established in 1994 and based in Tel Aviv, Indexland is a leading commercial real estate firm providing strategic consulting and brokerage services across Israel and abroad. Our core expertise spans tenant representation, investment sales, and project marketing. With a client-first approach and a reputation for precision, we serve a diverse portfolio of local and international clients, from institutional investors to private stakeholders. Our consistent growth is fueled by a shared DNA—an unwavering commitment to professionalism, personal relationships, and results. At Indexland, we don't just follow market trends—we help shape them.
      </>
    ),
  },
  {
    key: 'vision',
    label: 'Our Vision',
    content: (
      <>Equip businesses with end-to-end real estate and workspace solutions that drive efficiency, satisfaction, and scale.</>
    ),
  },
  {
    key: 'mission',
    label: 'Our Mission',
    content: (
      <>Redefine how companies build, manage, and grow their physical footprint—making every square meter work harder.</>
    ),
  },
];

export default function AboutTabsSection() {
  const [selected, setSelected] = useState('story');

  const selectedTab = TABS.find(tab => tab.key === selected) || TABS[0];

  return (
    <section className="w-full flex flex-col md:flex-row gap-8 py-12 px-4 md:px-0 max-w-5xl mx-auto animate-fade-in animate-scale-in">
      {/* Left menu */}
      <div className="flex md:flex-col gap-2 md:gap-4 md:w-48 mb-4 md:mb-0">
        {TABS.map(tab => (
          <Button
            key={tab.key}
            variant={selected === tab.key ? 'primary' : 'outline'}
            size="md"
            className={`w-full text-left md:text-base ${selected === tab.key ? 'font-bold shadow-lg' : ''}`}
            onClick={() => setSelected(tab.key)}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      {/* Content */}
      <div className="flex-1 bg-white rounded-2xl shadow-xl p-8 min-h-[260px] flex items-center text-gray-800 text-lg leading-relaxed">
        {selectedTab.content}
      </div>
    </section>
  );
} 