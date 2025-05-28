import { useLanguage } from '@/lib/language-context';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

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
  const [activeIdx, setActiveIdx] = useState(0);
  const [userSelected, setUserSelected] = useState(false);
  const router = useRouter();

  // Auto-rotate logic
  useEffect(() => {
    if (userSelected) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % CLIENTS_SUCCESS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [userSelected]);

  // Resume auto-rotation after 30s of inactivity
  useEffect(() => {
    if (!userSelected) return;
    const timeout = setTimeout(() => setUserSelected(false), 30000);
    return () => clearTimeout(timeout);
  }, [userSelected]);

  // Handle card click (navigate)
  const handleCardClick = (idx: number) => {
    setActiveIdx(idx);
    setUserSelected(true);
    // Navigate to registration/branch page (customize as needed)
    router.push('/register-branch');
  };

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
        {/* Carousel */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-md">
            {CLIENTS_SUCCESS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={activeIdx === idx ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                style={{ display: activeIdx === idx ? 'block' : 'none', cursor: 'pointer' }}
                className={`group relative rounded-3xl shadow-2xl border-2 border-white/30 bg-white/90 dark:bg-backgroundDark/80 p-5 md:p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 hover:shadow-primary/30 overflow-hidden w-full max-w-md mx-auto md:max-w-[90%] ring-4 ring-primary/20`}
                onClick={() => handleCardClick(idx)}
                tabIndex={0}
                role="button"
                aria-label={item.title[language]}
              >
                <div className="mb-6 flex justify-center w-full">
                  <div className="w-24 h-24 relative animate-scale-in mx-auto">
                    <Image
                      src={item.image}
                      alt={item.title[language]}
                      fill
                      className="object-cover rounded-full border-4 border-primary/30 shadow-lg backdrop-blur-xl"
                      sizes="96px"
                    />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-0 text-primary drop-shadow animate-fade-in delay-100 text-center">
                  {item.title[language]}
                </h3>
              </motion.div>
            ))}
            {/* Carousel navigation dots */}
            <div className="flex justify-center gap-2 mt-6">
              {CLIENTS_SUCCESS.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${activeIdx === idx ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}
                  onClick={e => { e.stopPropagation(); setActiveIdx(idx); setUserSelected(true); }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 