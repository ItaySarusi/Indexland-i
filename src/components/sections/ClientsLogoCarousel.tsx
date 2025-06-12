import React from 'react';

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

// Duplicate the logos array 6 times for a long seamless loop
const LONG_LOGOS = Array(6).fill(LOGOS).flat();

export default function ClientsLogoCarousel() {
  return (
    <section className="w-full py-16 bg-white flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-8">Our Clients</h2>
      <div className="relative w-full overflow-hidden">
        <div className="carousel-track flex items-center gap-12 animate-carousel-infinite">
          {LONG_LOGOS.map((logo, idx) => (
            <div key={idx} className="flex-shrink-0 w-40 h-24 flex items-center justify-center bg-gray-50 rounded-xl shadow-md">
              <img src={logo.src} alt={logo.alt} className="max-h-16 max-w-[120px] object-contain" />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes carousel-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-83.3333%); }
        }
        .animate-carousel-infinite {
          animation: carousel-infinite 180s linear infinite;
        }
      `}</style>
    </section>
  );
} 