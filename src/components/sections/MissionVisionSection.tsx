import { useLanguage } from '@/lib/language-context';
import { FaRegLightbulb, FaRegCompass } from 'react-icons/fa';

export default function MissionVisionSection() {
  const { language, t } = useLanguage();
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="glass-card rounded-2xl shadow-xl p-8 animate-fade-in mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <FaRegLightbulb className="text-primary text-4xl mr-3 rtl:ml-3 rtl:mr-0" />
              <h2 className="text-2xl font-bold text-primary">
                {t({ he: 'המשימה שלנו', en: 'Our Mission' })}
              </h2>
            </div>
            <p className="text-gray-700 dark:text-textSecondary text-lg">
              {t({
                he: 'להוביל את תחום הנדל"ן המשרדי וההשקעות הבינלאומיות בישראל ובעולם, תוך שמירה על מקצועיות, שקיפות וחדשנות.',
                en: 'To lead the field of office real estate and international investments in Israel and worldwide, while maintaining professionalism, transparency, and innovation.'
              })}
            </p>
          </div>
          <div className="glass-card rounded-2xl shadow-xl p-8 animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <div className="flex items-center mb-4">
              <FaRegCompass className="text-primary text-4xl mr-3 rtl:ml-3 rtl:mr-0" />
              <h2 className="text-2xl font-bold text-primary">
                {t({ he: 'החזון שלנו', en: 'Our Vision' })}
              </h2>
            </div>
            <p className="text-gray-700 dark:text-textSecondary text-lg">
              {t({
                he: 'ליצור ערך אמיתי וארוך טווח ללקוחותינו באמצעות פתרונות יצירתיים, ליווי אישי ומקצועי, והובלה טכנולוגית.',
                en: 'To create real, long-term value for our clients through creative solutions, personal and professional guidance, and technological leadership.'
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 