'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import photo from '../../../assets/sosnowice/1.jpg';
import photo1 from '../../../assets/sosnowice/2.jpg';
import photo2 from '../../../assets/sosnowice/3.jpg';
import photo3 from '../../../assets/sosnowice/4.jpg';
import photo4 from '../../../assets/sosnowice/5.jpg';
import photo5 from '../../../assets/sosnowice/6.jpg';
import photo6 from '../../../assets/sosnowice/7.jpg';

const dropInVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.6,
      type: 'spring',
    },
  }),
};

const Sosnowice = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const events = [
    'Pow. użytkowa 105,60 m²',
    'Ceny od 835 000 zł brutto',
    'Fotowoltaika 3 kW',
    'Pompa Ciepła + ogrzewanie podłogowe',
    'Jasne, przestronne wnętrza',
    'Instalacja pod klimatyzację',
    'Ogródki z ekspozycją południową',
    'Termin oddania: grudzień 2025',
  ];

  return (
    <div className="min-h-screen py-10 font-poppins">
      <motion.h1
        className="lg:text-4xl font-bold text-center mb-6 text-2xl"
        initial="hidden"
        animate="visible"
        variants={dropInVariants}
        custom={0}
      >
        DOMY SOSNOWICE / WIELKIE DROGI
      </motion.h1>

      <div className="text-center lg:mb-12 space-y-4 lg:text-2xl text-xl text-gray-700 flex items-center flex-col">
        {showText &&
          events.map((event, index) => (
            <motion.div
              key={event}
              custom={index + 1}
              initial="hidden"
              animate="visible"
              variants={dropInVariants}
              className="border border-amber-700 rounded-lg w-[300px]"
            >
              {event}
            </motion.div>
          ))}
      </div>

      <motion.div
        className="flex flex-col items-center md:flex-row md:justify-center md:space-x-8 mt-10"
        initial="hidden"
        animate="visible"
        variants={dropInVariants}
        custom={events.length + 2}
      >
        <motion.div className="p-6 border border-amber-800 rounded-lg shadow-lg transition-transform w-4/5 text-black space-y-6 text-sm lg:text-base">
          <h2 className="text-lg lg:text-xl font-bold text-center">
            Kameralne osiedle 4 domów bliźniaczych – nowoczesność i komfort na granicy Sosnowic i Wielkich Dróg
          </h2>
          <section>
            <h3 className="text-md lg:text-lg font-semibold mt-4 mb-2">STANDARD</h3>
            <p>
              Domy wznoszone w technologii tradycyjnej z pustaka ceramicznego, z dbałością o każdy detal. Duże przeszklenia zapewniają świetne doświetlenie wnętrz, a nowoczesne instalacje gwarantują wysoki komfort użytkowania.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Powierzchnia użytkowa: 105,60 m² / po podłodze: 118,82 m²</li>
              <li>Układ: salon z kuchnią, łazienka i pokój na parterze; 3 sypialnie i łazienka na poddaszu; dodatkowy strych</li>
              <li>Pompa ciepła + ogrzewanie podłogowe</li>
              <li>Fotowoltaika 3 kW</li>
              <li>Instalacja pod 2 jednostki klimatyzacji</li>
              <li>Okna PCV trzyszybowe</li>
              <li>Dachówka płaska Braas</li>
              <li>Zagospodarowanie terenu: ogrodzenie, brama, kostka brukowa</li>
              <li>Premium ogrodzenie frontowe</li>
              <li>Ogród z ekspozycją południową</li>
            </ul>
          </section>
          <section>
            <h3 className="text-md lg:text-lg font-semibold mt-4 mb-2">LOKALIZACJA</h3>
            <p>
              Spokojna okolica z nową zabudową jednorodzinną, z doskonałym dojazdem do Skawiny, Krakowa i Brzeźnicy. Tylko 100 m od przystanku komunikacji miejskiej oraz 400 m od stacji kolejowej (szybka kolej aglomeracyjna).
            </p>
            <p>
              W zasięgu 15 minut: sklepy, szkoły, przedszkola, parki, baseny, siłownie i galerie. Do centrum Krakowa i lotniska w Balicach dojazd w 30–40 minut, a do A4 – w ok. 10–15 minut.
            </p>
            <div className="flex justify-center mt-6">
  <iframe
src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d547.5083213707182!2d19.70981883950427!3d49.95765597633799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDU3JzI3LjMiTiAxOcKwNDInMzQuMyJF!5e1!3m2!1spl!2spl!4v1747143306996!5m2!1spl!2spl" 
height="450"
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full max-w-4xl h-[450px] rounded-xl shadow-lg"
  ></iframe>
</div>


          </section>
          <p>Odbiór budynków: grudzień 2025 r. – sprzedaż zgodna z ustawą deweloperską. Kupujący zwolniony z podatku 2% PCC.</p>
          <p className="font-semibold mt-4 text-center">Zapraszamy do prezentacji!</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center"
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5 }}
        viewport={{ once: true }}
      >
        {[photo, photo1, photo2, photo3, photo4,photo6,photo5].map((img, i) => (
          <div key={i} className="relative w-[350px] h-[300px] m-4 overflow-hidden rounded-xl shadow-lg">
            <Image src={img} alt={`sosnowice-${i}`} fill priority className="object-cover" />
          </div>
        ))}
      </motion.div>

      <Link href="/" className="top-5 left-5 fixed z-50">
        <div className="w-[40px] h-[25px] flex items-center justify-center cursor-pointer border-2 border-amber-700 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#b45309"
            className="w-full h-full transform"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
          </svg>
        </div>
      </Link>


<div className="mt-12 px-4 w-full flex flex-col items-center">
  <h3 className="text-2xl font-semibold mb-4 text-amber-800">Do pobrania</h3>
  <div className="flex flex-wrap   ">
    {[
      { name: 'stanard', file: 'standard.docx' },
   { name: 'rzut_parter', file: 'rzut_parter.pdf' },
   { name: 'rzut_pietro ', file: 'rzut_pietro.pdf' },
     { name: 'PZT ', file: 'pzt.pdf' }
      
    ].map(({ name, file }) => (
      <a
        key={file}
        href={`/pdfs/wola/${file}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-center border m-4 border-amber-700 rounded-lg p-4 hover:bg-amber-50 transition-colors duration-300 shadow-md w-[200px]"
      >
        📄 {name}
      </a>
    ))}
  </div>
</div>


    </div>
  );
};

export default Sosnowice;

