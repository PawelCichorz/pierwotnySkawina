'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import photo from '../../../assets/wola/1.jpg';
import photo1 from '../../../assets/wola/2.jpg';
import photo2 from '../../../assets/wola/3.jpg';
import photo3 from '../../../assets/wola/4.jpg';
import photo4 from '../../../assets/wola/5.jpg';
import photo5 from '../../../assets/wola/6.jpg';

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

const Wola = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const events = [
    '2 projekty do wyboru 85,90m2 lub 126,80 m2',
    'Ceny to 780 000zł brutto i 1 190 000 zł brutto',
    'Możliwość wykończenia pod klucz',
    'Piec gazowy + ogrzewanie podłogowe',
    'Jasne, przestronne wnętrza',
    'Rolety zewnętrzne',
    'Centrum Woli Radziszowskiej',
    'Termin oddania: wrzesień 2025',
    'Bliskość PKP'
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
        DOMY W CENTRUM WOLI RADZISZOWSKIEJ
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
              className="border border-amber-700 rounded-lg w-[300px] p-1"
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
            Kameralne osiedle 6 domów w centrum Woli Radziszowskiej
          </h2>
          <section>
            <h3 className="text-md lg:text-lg font-semibold mt-4 mb-2">STANDARD</h3>
            <p>
              Domy wznoszone w technologii tradycyjnej z pustaka H+H, z dbałością o każdy detal. 
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Powierzchnia użytkowa 85,90 m2 lub 126,80 m2 </li>
              <li>Układ mniejszego domu dwu-kondygnacyjnego: salon ,kuchnia, 3 sypialnie , łazienka, WC , spiżąrnia, kotłownia i wiatrołap</li>
              <li>Układ większego domu partrowego: salon połączony z kuchnią, 3 sypialnie , łazienka, WC , garaż, pralnia i wiatrołap</li>
              <li>Piec gazowy + ogrzewanie podłogowe</li>
              <li>Rolety</li>
              <li>Tereny ogrodzony z bramą ba pilota</li>
              <li>Okna PCV trzyszybowe</li>
              <li>Dachówka płaska Braas</li>
              <li>Ogród z ekspozycją południową</li>
              <li>Ocieplenie styropianem 20 cm</li>
              <li>Tynki Gipsowe</li>
            </ul>
          </section>
          <section>
  <h3 className="text-md lg:text-lg font-semibold mt-4 mb-2">LOKALIZACJA</h3>
  <p>
    Domy zlokalizowane są w bardzo dobrej lokalizacji, łączącej zalety mieszkania blisko miasta z urokami ciszy i otaczającej zieleni. 
  </p>
  <p>
    W odległości 100 metrów znajduje się przystanek komunikacji miejskiej, kościół oraz centrum handlowe. 400 metrów dzieli osiedle od szkoły podstawowej i przedszkola, a 650 metrów od stacji szybkiej kolejki aglomeracyjnej.
  </p>
  <p>
    Doskonały dojazd do Skawiny (9 km) oraz Krakowa (25 km do centrum). Na południe Krakowa można również dotrzeć Zakopianką. 
  </p>
  <div className="flex justify-center mt-6">
  <iframe
src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d731.6055806251518!2d19.783973264158853!3d49.906931355756896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDU0JzI1LjQiTiAxOcKwNDcnMDQuMCJF!5e1!3m2!1spl!2spl!4v1747143530764!5m2!1spl!2spl"     style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full max-w-4xl h-[450px] rounded-xl shadow-lg"
  ></iframe>
</div>
</section>



<p>
  Mieszkania sprzedawane są z podatkiem VAT, dzięki czemu Kupujący zwolniony jest z podatku PCC (2%). Nabycie nieruchomości objęte jest 5-letnią rękojmią. Odbiór budynków: do kwietnia 2025 r.
</p>
<p className="font-semibold mt-4 text-center">Zapraszamy do kontaktu celem uzyskania większej ilości szczegółów!</p>

        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center"
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5 }}
        viewport={{ once: true }}
      >
        {[photo, photo1, photo2, photo3, photo4,photo5].map((img, i) => (
          <div key={i} className="relative w-[350px] h-[300px] m-4 overflow-hidden rounded-xl shadow-lg">
            <Image src={img} alt={`domy wola-${i}`} fill priority className="object-cover" />
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
  <div className="flex flex-wrap   max-w-4xl">
    {[
      { name: 'parterowy rzut', file: 'parterowy.pdf' },
   { name: 'maly_parter rzut', file: 'maly_parter.pdf' },
   { name: 'maly_pietro rzut', file: 'maly_pietro.pdf' },
   
      
    ].map(({ name, file }) => (
      <a
        key={file}
        href={`/pdfs/wola/${file}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-center border m-4 border-amber-700 rounded-lg p-4 hover:bg-amber-50 transition-colors duration-300 shadow-md"
      >
        📄 {name}
      </a>
    ))}
  </div>
</div>


    </div>
  );
};

export default Wola;

