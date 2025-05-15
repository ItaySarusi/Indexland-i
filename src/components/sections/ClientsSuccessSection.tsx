import { useLanguage } from '@/lib/language-context';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CLIENTS_SUCCESS = [
  {
    title: {
      he: 'השבחת נכס משרדי בתל אביב',
      en: 'Office Asset Enhancement in Tel Aviv',
    },
    short: {
      he: 'ליווינו חברת הייטק בתהליך השבחת נכס משרדי, שהוביל לעלייה של 30% בשווי הנכס תוך שנה.',
      en: 'We guided a hi-tech company through the enhancement of their office property, resulting in a 30% value increase within a year.',
    },
    details: {
      he: 'הצוות שלנו ניהל את כל התהליך: ניתוח שוק, תכנון שיפוץ ואופטימיזציה של ערך, להבטחת חוויה חלקה ללקוח.',
      en: 'Our team managed the full process: market analysis, renovation planning, and value optimization, ensuring a seamless experience for the client.',
    },
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=400&auto=format',
  },
  {
    title: {
      he: 'השקעה מניבה בברלין',
      en: 'Profitable Investment in Berlin',
    },
    short: {
      he: 'משקיע פרטי רכש נכס מסחרי בברלין בליווי Indexland, והשיג תשואה שנתית של 8%.',
      en: "A private investor purchased a commercial property in Berlin with Indexland's guidance, achieving an 8% annual return.",
    },
    details: {
      he: 'סיפקנו ליווי מקצה לקצה: איתור נכס, בדיקות נאותות, וניהול שוטף למקסום התשואה.',
      en: 'We provided end-to-end support: property search, due diligence, and ongoing management, maximizing returns for the investor.',
    },
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format',
  },
  {
    title: {
      he: 'איתור משרדים לחברת סטארט-אפ',
      en: 'Office Location for Startup',
    },
    short: {
      he: 'עזרנו לסטארט-אפ ישראלי למצוא משרדים חדשים בלונדון, כולל ניהול מו"מ מוצלח.',
      en: 'Helped an Israeli startup find new offices in London, including successful negotiation management.',
    },
    details: {
      he: 'מהאיתור ועד החתימה, ניהלנו מו"מ ולוגיסטיקה, כדי לאפשר לסטארט-אפ להתמקד בצמיחה.',
      en: 'From scouting to contract signing, we handled negotiations and logistics, allowing the startup to focus on growth.',
    },
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=400&auto=format',
  },
];

export default function ClientsSuccessSection() {
  const { language, t } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const handleToggle = (idx: number) => setOpenIdx(openIdx === idx ? null : idx);
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/10 via-primary/10 to-primary/10 dark:from-secondary/20 dark:via-primary/10 dark:to-backgroundDark transition-colors duration-200 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 pointer-events-none opacity-40" />
      <div className="container px-2 md:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-4xl md:text-5xl font-extrabold tracking-tight text-primary drop-shadow-xl animate-fade-in">
            {t({ he: 'הצלחות של לקוחותינו', en: "Our Clients' Success Stories" })}
          </h2>
          <p className="text-lg text-gray-600 dark:text-textSecondary max-w-2xl mx-auto">
            {t({
              he: 'לקוחותינו נהנים מהצלחות מוכחות בארץ ובעולם, בזכות ליווי אישי ומקצועי.',
              en: 'Our clients enjoy proven success in Israel and abroad, thanks to our personal and professional guidance.',
            })}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 px-2 md:px-8">
          {CLIENTS_SUCCESS.map((item, idx) => (
            <div
              key={idx}
              className={`group relative rounded-3xl shadow-2xl border-2 border-white/30 bg-white/90 dark:bg-backgroundDark/80 p-5 md:p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-primary/30 overflow-hidden w-full max-w-xs mx-auto md:max-w-[90%] ${openIdx === idx ? 'ring-4 ring-primary/20' : ''}`}
              style={{ animationDelay: `${0.1 + idx * 0.12}s` }}
            >
              <div className="mb-4 w-20 h-20 md:w-24 md:h-24 relative animate-scale-in">
                <Image
                  src={item.image}
                  alt={item.title[language]}
                  fill
                  className="object-cover rounded-full border-4 border-primary/30 shadow-lg backdrop-blur-xl"
                  sizes="96px"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-primary drop-shadow animate-fade-in delay-100">
                {item.title[language]}
              </h3>
              <button
                className="mb-2 px-5 py-2 rounded-full bg-primary text-white font-semibold shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200"
                onClick={() => handleToggle(idx)}
                aria-expanded={openIdx === idx}
                aria-controls={`client-details-${idx}`}
              >
                {openIdx === idx ? t({he: 'פחות מידע', en: 'Less Info'}) : t({he: 'עוד מידע', en: 'More Info'})}
              </button>
              <AnimatePresence initial={false}>
                {openIdx === idx && (
                  <motion.div
                    id={`client-details-${idx}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden w-full"
                  >
                    <p className="mt-3 text-gray-600 dark:text-textSecondary text-base md:text-lg leading-relaxed">
                      {item.short[language]}
                    </p>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm md:text-base">
                      {item.details[language]}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 