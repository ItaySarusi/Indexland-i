import { useLanguage } from '@/lib/language-context';
import Image from 'next/image';

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
  return (
    <section className="py-16 bg-gray-50 dark:bg-backgroundDark dark:bg-opacity-90 transition-colors duration-200">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CLIENTS_SUCCESS.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-backgroundDark dark:bg-opacity-80 rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-all hover:shadow-xl">
              <div className="mb-4 w-24 h-24 relative">
                <Image
                  src={item.image}
                  alt={item.title[language]}
                  fill
                  className="object-cover rounded-full border-2 border-primary"
                  sizes="96px"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">{item.title[language]}</h3>
              <p className="text-gray-600 dark:text-textSecondary">{item.description[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 