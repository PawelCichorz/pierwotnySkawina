'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import photo from '../../../assets/jurczyce/1.jpg'
import photo1 from '../../../assets/jurczyce/2.jpg'
import photo2 from '../../../assets/jurczyce/3.jpg'
import photo3 from '../../../assets/jurczyce/4.jpg'
import photo4 from '../../../assets/jurczyce/5.jpg'
import photo5 from '../../../assets/jurczyce/6.jpg'
import photo6 from '../../../assets/jurczyce/7.jpg'

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

const Jurczyce = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const events = [
    'Pow. użytkowa 77m2',
    '815 000 zł brutto',
    'Fotowoltaika',
    'Pompa Ciepła',
    'Rekuperacja',
    'Ogródki z ekspozycją południową',
    'Termin oddania marzec 2026'
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
        DOMY W JURCZYCACH
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
      

      <motion.div
  className="p-6 border border-amber-800 rounded-lg shadow-lg transition-transform w-4/5 text-black space-y-6 text-sm lg:text-base"
>
  {/* Tytuł główny */}
  <h2 className="text-lg lg:text-xl font-bold text-center">
    Nieruchomości Pawłowski prezentuje nową inwestycję na mapie Skawiny – kameralne osiedle 8 domów jednorodzinnych wolnostojących o powierzchni użytkowej 77,02 m². To ciekawe i energooszczędne projekty w doskonałej lokalizacji. Poniżej przedstawiamy Państwu najważniejsze informacje w pigułce, a po więcej zapraszamy do kontaktu!
  </h2>

  {/* Sekcja: STANDARD */}
  <section>
    <h3 className="text-md lg:text-lg font-semibold mt-4 mb-2">STANDARD</h3>
    <p>
      Budynki wznoszone są w wysokiej jakości technologii budowlanej, z pomysłem i dbałością o detale, wynikającą z doświadczenia inwestora. Pomieszczenia są jasne i przestronne. Instalacje są odpowiednio rozplanowane, a ogród ma ekspozycję południową.
    </p>
    <p>
      Budynek składa się z kuchni otwartej na salon i jadalnię, łazienki, 3 sypialni i pomieszczenia gospodarczego. Dodatkowo na strychu znajduje się powierzchnia gospodarcza około 10m².
    </p>
    <p>Domy zostaną wykończone w standardzie deweloperskim, obejmującym m.in.:</p>
    <ul className="list-disc list-inside space-y-1">
      <li>Izolację przeciwwilgociową poziomą i pionową fundamentów</li>
      <li>Ściany nośne i działowe z betonu komórkowego</li>
      <li>Dach pokryty blachą na rąbek</li>
      <li>Instalacje elektryczne, wod-kan, światłowód oraz C.O. wraz z pompą ciepła</li>
      <li>Tynki gipsowe</li>
      <li>Okna PCV trzyszybowe</li>
      <li>Droga wewnętrzna utwardzona</li>
      <li>Zagospodarowanie terenu wraz z ogrodzeniem, bramą na pilota oraz kostką brukową</li>
      <li>Miejsce na 2 samochody</li>
      <li>Rekuperacja</li>
      <li>Fotowoltaika na dachu 5 kW</li>
    </ul>
    <p>
      Budynki zostaną odebrane i przyjęte do użytkowania, a do każdego z nich będą podłączone wodociąg miejski, kanalizacja oraz prąd. Technologia budowlana oraz wykorzystane materiały gwarantują spełnienie wszystkich aktualnych norm jakościowych, akustycznych i cieplnych. Połączenie fotowoltaiki z pompą ciepła to wyjście naprzeciw obecnym trendom i regulacjom.
    </p>
  </section>

  {/* Sekcja: LOKALIZACJA */}
  <section>
    <h3 className="text-md lg:text-lg font-semibold mt-4 mb-2">LOKALIZACJA</h3>
    <p>
      Lokalizacja osiedla to kompromis między życiem w spokojnej okolicy, pośród zabudowy jednorodzinnej, a bliskością infrastruktury społecznej oraz atrakcji zlokalizowanych w Skawinie i Krakowie.
    </p>
    <p>
      W odległości 10–15 minut jazdy samochodem znajduje się cała niezbędna do życia infrastruktura w Skawinie: sklepy, szkoły, przedszkola, park miejski, basen, galerie, siłownie, gabinety lekarskie, przychodnie i wiele innych. W bezpośrednim sąsiedztwie osiedla znajduje się wiele terenów zielonych.
    </p>
    <p>
      W odległości 300 metrów znajduje się przystanek komunikacji miejskiej, a 2 km dalej – dworzec szybkiej kolejki aglomeracyjnej. Dojazd do centrum Krakowa i Lotniska Balice zajmuje około 30 minut, a do autostrady A4 zaledwie 20 minut.
    </p>
    <p>
      Każdy z domów zlokalizowany jest na niezależnej działce z dostępem do drogi. Budynki położone są przy ślepej uliczce, więc ruch ograniczony jest do minimum.
    </p>
    <div className="flex justify-center mt-6">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d921.1835491993512!2d19.791613627520316!3d49.937365217141874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDU2JzE0LjUiTiAxOcKwNDcnMzMuMSJF!5e1!3m2!1spl!2spl!4v1747141049855!5m2!1spl!2spl" 
    height="450"
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full max-w-4xl h-[450px] rounded-xl shadow-lg"
  ></iframe>
</div>
  </section>

  {/* Zakończenie */}
  <p>
    Inwestycja zostanie zakończona do końca marca 2026 r. Domy sprzedawane są zgodnie z ustawą deweloperską. Kupujący nie płaci podatku 2% PCC. Źródłem ogrzewania budynków jest pompa ciepła wraz z ogrzewaniem podłogowym.
  </p>

  <p className="font-semibold mt-4 text-center">Zapraszamy do prezentacji!</p>
</motion.div>

      </motion.div>
      <motion.div  className="flex flex-wrap justify-center" initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5 }}
        viewport={{ once: true }}>
              
            <div className="relative w-[350px] h-[300px] m-4 overflow-hidden rounded-xl shadow-lg flex flex-wrap">
  <Image 
    src={photo} 
    alt="logo" 
    fill 
    priority 
    className="object-cover"
  />
  </div>
  <div className="relative w-[350px] h-[300px] m-4 overflow-hidden rounded-xl shadow-lg flex flex-wrap">

   <Image 
    src={photo1} 
    alt="logo" 
    fill 
    priority 
    className="object-cover"
  />
  </div>            
  <div className="relative w-[350px] h-[300px] m-4 overflow-hidden rounded-xl shadow-lg flex flex-wrap">

    <Image 
    src={photo2} 
    alt="logo" 
    fill 
    priority 
    className="object-cover"
  />
  </div>
  <div className="relative w-[350px] h-[300px] m-4 overflow-hidden rounded-xl shadow-lg flex flex-wrap">

   <Image 
    src={photo3} 
    alt="logo" 
    fill 
    priority 
    className="object-cover"
  />
  </div>
  <div className="relative w-[350px] h-[300px] m-4 overflow-hidden rounded-xl shadow-lg flex flex-wrap">

    <Image 
    src={photo4} 
    alt="logo" 
    fill 
    priority 
    className="object-cover"
  />
  </div>            <div className="relative w-[350px] h-[300px] m-4 overflow-hidden rounded-xl shadow-lg flex flex-wrap">

   <Image 
    src={photo5} 
    alt="logo" 
    fill 
    priority 
    className="object-cover"
  />
  </div>
  <div className="relative w-[350px] h-[300px] m-4 overflow-hidden rounded-xl shadow-lg flex flex-wrap">

    <Image 
    src={photo6} 
    alt="logo" 
    fill 
    priority 
    className="object-cover"
  />

  
  </div>
  </motion.div>
      
      <Link href="/" className="top-5 left-5 fixed z-50 ">
        <div className="w-[40px] h-[25px] flex items-center justify-center cursor-pointer border-2 border-amber-700  animate-fade-in animate-bounce ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#b45309"
            className="w-full h-full transform"
            width="50"
            height="50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 6l-6 6 6 6"
            />
          </svg>
        </div>
      </Link>

      {/* Sekcja: Do pobrania */}
<div className="mt-12 px-4 w-full flex flex-col items-center">
  <h3 className="text-2xl font-semibold mb-4 text-amber-800">Do pobrania</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
    {[
      { name: 'Rzut B', file: 'rzut B.pdf' },
      { name: 'Projekt podziału', file: 'podzial.pdf' },
      { name: 'PZT', file: 'PZT.pdf' },
    ].map(({ name, file }) => (
      <a
        key={file}
        href={`/pdfs/jurczyce/${file}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-center border border-amber-700 rounded-lg p-4 hover:bg-amber-50 transition-colors duration-300 shadow-md"
      >
        📄 {name}
      </a>
    ))}
  </div>
</div>

    </div>
  );
};

export default Jurczyce
