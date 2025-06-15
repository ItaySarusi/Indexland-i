import React from 'react';
import { PAGES } from '@/constants/site';
import { useLanguage } from '@/lib/language-context';

const LOGOS = [
  { src: '/LOGOs/razorlabs.png', alt: 'Razorlabs' },
  { src: '/LOGOs/synamedia.png', alt: 'Synamedia' },
  { src: '/LOGOs/modtronic.png', alt: 'Modtronic' },
  { src: '/LOGOs/mobileye.png', alt: 'Mobileye' },
  { src: '/LOGOs/nice.png', alt: 'Nice' },
  { src: '/LOGOs/worthy.png', alt: 'Worthy' },
  { src: '/LOGOs/parallel.png', alt: 'Parallel' },
  { src: '/LOGOs/via.png', alt: 'Via' },
  { src: '/LOGOs/rad.png', alt: 'Rad' },
  { src: '/LOGOs/vonage.png', alt: 'Vonage' },
  { src: '/LOGOs/gilat.png', alt: 'Gilat' },
  { src: '/LOGOs/Panaya.png', alt: 'Panaya' },
];

export default function ClientsLogoCarousel() {
  const { t, language } = useLanguage();
  const isRTL = language === 'he';
  
  return (
    <section className="w-full py-16 bg-white flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-8">
        {t(PAGES.ABOUT_US.clients.title)}
      </h2>
      <div className="relative w-full overflow-hidden">
        <div className={`carousel-track flex items-center gap-12 ${isRTL ? 'animate-carousel-infinite-rtl' : 'animate-carousel-infinite-ltr'}`}>
          {/* First set of logos */}
          {LOGOS.map((logo, idx) => (
            <div key={`first-${idx}`} className="flex-shrink-0 w-40 h-24 flex items-center justify-center bg-white rounded-xl">
              <img src={logo.src} alt={logo.alt} className="max-h-16 max-w-[120px] object-contain" />
            </div>
          ))}
          {/* Second set of logos for seamless loop */}
          {LOGOS.map((logo, idx) => (
            <div key={`second-${idx}`} className="flex-shrink-0 w-40 h-24 flex items-center justify-center bg-white rounded-xl">
              <img src={logo.src} alt={logo.alt} className="max-h-16 max-w-[120px] object-contain" />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .carousel-track {
          width: calc(208px * ${LOGOS.length * 2}); /* 208px = 160px width + 48px gap */
        }
        
        /* LTR Animation - moves from right to left */
        @keyframes carousel-infinite-ltr {
          0% { 
            transform: translateX(0); 
          }
          100% { 
            transform: translateX(calc(-208px * ${LOGOS.length})); 
          }
        }
        
        /* RTL Animation - moves from left to right */
        @keyframes carousel-infinite-rtl {
          0% { 
            transform: translateX(0); 
          }
          100% { 
            transform: translateX(calc(208px * ${LOGOS.length})); 
          }
        }
        
        .animate-carousel-infinite-ltr {
          animation: carousel-infinite-ltr 30s linear infinite;
        }
        
        .animate-carousel-infinite-rtl {
          animation: carousel-infinite-rtl 30s linear infinite;
        }
      `}</style>
    </section>
  );
} 