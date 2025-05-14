import { useLanguage } from '@/lib/language-context';
import Image from 'next/image';
import { useState } from 'react';

const CLIENTS_SUCCESS = [
  {
    title: {
      he: 'השבחת נכס משרדי בתל אביב',
      en: 'Office Asset Enhancement in Tel Aviv',
    },
    description: {
      he: 'ליווינו חברת הייטק בתהליך השבחת נכס משרדי, שהוביל לעלייה של 30% בשווי הנכס תוך שנה.',
      en: 'We guided a hi-tech company through the enhancement of their office property, resulting in a 30% value increase within a year.',
    },
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=400&auto=format',
  },
  {
    title: {
      he: 'השקעה מניבה בברלין',
      en: 'Profitable Investment in Berlin',
    },
    description: {
      he: 'משקיע פרטי רכש נכס מסחרי בברלין בליווי Indexland, והשיג תשואה שנתית של 8%.',
      en: "A private investor purchased a commercial property in Berlin with Indexland's guidance, achieving an 8% annual return.",
    },
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format',
  },
  {
    title: {
      he: 'איתור משרדים לחברת סטארט-אפ',
      en: 'Office Location for Startup',
    },
    description: {
      he: 'עזרנו לסטארט-אפ ישראלי למצוא משרדים חדשים בלונדון, כולל ניהול מו"מ מוצלח.',
      en: 'Helped an Israeli startup find new offices in London, including successful negotiation management.',
    },
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=400&auto=format',
  },
];

export default function ClientsSuccessSection() {
  const { language, t } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-cyan-100 to-primary/10 dark:from-secondary/20 dark:via-primary/10 dark:to-backgroundDark transition-colors duration-200 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 pointer-events-none opacity-40" />
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold text-primary">
            {t({ he: 'הצלחות של לקוחותינו', en: "Our Clients' Success Stories" })}
          </h2>
          <p className="text-lg text-gray-600 dark:text-textSecondary max-w-2xl mx-auto">
            {t({
              he: 'לקוחותינו נהנים מהצלחות מוכחות בארץ ובעולם, בזכות ליווי אישי ומקצועי.',
              en: 'Our clients enjoy proven success in Israel and abroad, thanks to our personal and professional guidance.',
            })}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {CLIENTS_SUCCESS.map((item, idx) => (
            <div
              key={idx}
              className={
                `group relative rounded-3xl shadow-2xl border-2 border-white/30 bg-white/90 dark:bg-backgroundDark/80 p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-primary/30 overflow-hidden` +
                (openIdx === idx ? ' ring-4 ring-primary/20' : '')
              }
              style={{ animationDelay: `${0.1 + idx * 0.12}s` }}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <div className="mb-6 w-28 h-28 relative animate-scale-in">
                <Image
                  src={item.image}
                  alt={item.title[language]}
                  fill
                  className="object-cover rounded-full border-4 border-primary/30 shadow-lg backdrop-blur-xl"
                  sizes="112px"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-primary drop-shadow animate-fade-in delay-100">
                {item.title[language]}
              </h3>
              <div className="h-2 w-10 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full mb-4" />
              <div className="relative w-full">
                <p className="text-gray-600 dark:text-textSecondary animate-fade-in delay-200 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {item.description[language]}
                </p>
                {/* Accordion: show more on click */}
                <div className={`transition-all duration-400 overflow-hidden ${openIdx === idx ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-gray-700 dark:text-textSecondary shadow-inner text-base">
                    {t({
                      he: 'למידע נוסף על תהליך הליווי וההצלחה, צרו קשר עם הצוות שלנו.',
                      en: 'For more details about the process and success, contact our team.'
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 