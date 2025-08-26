'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import photo from '../../../assets/skawinawoj/1.jpg'
import photo1 from '../../../assets/skawinawoj/2.jpg'
import photo2 from '../../../assets/skawinawoj/3.jpg'
import photo3 from '../../../assets/skawinawoj/4.jpg'
import photo4 from '../../../assets/skawinawoj/5.jpg'
import photo5 from '../../../assets/skawinawoj/6.jpg'
import photo6 from '../../../assets/skawinawoj/7.jpg'
import photo7 from '../../../assets/skawinawoj/8.jpg'
import photo8 from '../../../assets/skawinawoj/9.jpg'
import photo9 from '../../../assets/skawinawoj/10.jpg'
import photo10 from '../../../assets/skawinawoj/11.jpg'
import photo11 from '../../../assets/skawinawoj/12.jpg'
import photo12 from '../../../assets/skawinawoj/13.jpg'
import photo13 from '../../../assets/skawinawoj/14.jpg'
import photo14 from '../../../assets/skawinawoj/15.jpg'

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

const WojskaPolskiego = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const events = [
    'Pow. użytkowa 106,35m2',
    'Ceny od 1 099 000 zł brutto',
    'Format Premium',
    'Pompa Ciepła',
    '3 miejsca postojowe',
    'Duże ogródki z ekspozycją południową',
    'Termin oddania 1 etapu wrzesień 2025r.'
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
        DOMY W SKAWINIE UL. WOJSKA POLSKIEGO
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
              className="border border-amber-700 rounded-lg w-[315px]"
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

  <h2 className="text-lg lg:text-xl font-bold text-center">
  Nieruchomości Pawłowski prezentuje nową inwestycję na mapie Skawiny kameralne osiedle 6 domów jednorodzinnych w zabudowie bliźniaczej o powierzchni użytkowej 106,35 m² ( pow. po podłogach 112,59 m2) To ciekawe i energooszczędne projekty w doskonałej lokalizacji. Poniżej przedstawiamy Państwu najważniejsze informacje w pigułce, a po więcej zapraszamy do kontaktu!  </h2>


  <section>
    <h3 className="text-md lg:text-lg font-semibold mt-4 mb-2">STANDARD</h3>
    <p>
    Budynki wznoszone są w wysokiej jakości technologii budowlanej, z pomysłem i dbałością o detale, wynikającą z doświadczenia inwestora. Pomieszczenia są jasne, przestronne i doskonale doświetlone przez duże okna. Instalacje są odpowiednio rozplanowane, a ogród ma ekspozycję południową. Budynek składa się z kuchni otwartej na salon i jadalnię, łazienki, pokoju oraz wiatrołapu na parterze, a także 3 sypialni i łazienki na poddaszu. Dodatkowo znajduje się przestronny strych o powierzchni 26 m², gotowy do własnej aranżacji.    </p>

    <p>Domy zostaną wykończone w standardzie deweloperskim, obejmującym m.in.:</p>
    <ul className="list-disc list-inside space-y-1">
      <li>Płyta fundamentowa wraz w wymianą gruntu (80 cm pod płytą)</li>
      <li>Ściany nośne i działowe z pustaka ceramicznego</li>
      <li>Dach pokryty markową płaską dachówką Creaton</li>
      <li>Instalacje elektryczne, wod-kan, światłowód oraz C.O. wraz z pompą ciepła</li>
      <li>Tynki gipsowe Knauf</li>
      <li>Okna PCV trzyszybowe</li>
      <li>Droga wewnętrzna utwardzona</li>
      <li>Zagospodarowanie terenu wraz z ogrodzeniem, bramą na pilota oraz kostką brukową</li>
      <li>Ogrodzenie premium na frocie (Joniec)</li>
      <li>Miejsce na 3 samochody</li>
      <li>Instalacja pod fotowoltaikę</li>
      <li>Powierzchnia netto z poddaszem wynosi 150m2</li>
    </ul>
    <p>
      Budynki zostaną odebrane i przyjęte do użytkowania, a do każdego z nich będą podłączone wodociąg miejski, kanalizacja oraz prąd. Technologia budowlana oraz wykorzystane materiały gwarantują spełnienie wszystkich aktualnych norm jakościowych, akustycznych i cieplnych. Połączenie fotowoltaiki z pompą ciepła to wyjście naprzeciw obecnym trendom i regulacjom.
    </p>
  </section>


  <section>
    <h3 className="text-md lg:text-lg font-semibold mt-4 mb-2">LOKALIZACJA</h3>
    Lokalizacja osiedla to kompromis między życiem w spokojnej okolicy, pośród zabudowy jednorodzinnej, a bliskością infrastruktury społecznej oraz atrakcji zlokalizowanych w Skawinie i Krakowie. W odległości 5 minut jazdy samochodem lub 20 minut pieszo znajduje się cała niezbędna do życia infrastruktura w Skawinie: sklepy, szkoły, przedszkola, park miejski, basen, galerie, siłownie, gabinety lekarskie, przychodnie i wiele innych. W bezpośrednim sąsiedztwie osiedla znajduje się wiele tras spacerowych i rowerowych oraz terenów zielonych. W odległości 500 metrów znajduje się przystanek komunikacji miejskiej, a zaledwie 1 przystanek dzieli nas od Krakowa. Dojazd do centrum Krakowa i Lotniska Balice zajmuje około 20 minut, a do autostrady A4 zaledwie 9 minut. Warto również dodać, że w odległości 1200 metrów znajduje się przystanek PKP (Szybka Kolej Aglomeracyjna) wraz z parkingiem Park and Ride, który pozwala na wygodny dojazd do najpopularniejszych części Krakowa.
    Każdy z domów zlokalizowany jest na niezależnej działce z dostępem do drogi. W sąsiedztwie znajduje się nowa zabudowa jednorodzinna zarówno wolnostojąca, jak i szeregowa. Budynki położone są przy ślepej uliczce, więc ruch ograniczony jest do minimum.
    <div className="flex justify-center mt-6">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d386.89927537681234!2d19.81877106674599!3d49.988439241060966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDU5JzE4LjMiTiAxOcKwNDknMDguMiJF!5e1!3m2!1spl!2spl!4v1747142839537!5m2!1spl!2spl" 
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
    Inwestycja w zależności od budynku zostanie oddana do użytkowania od sierpnia do października 2025 r.. Domy sprzedawane są zgodnie z ustawą deweloperską. Kupujący nie płaci podatku 2% PCC. Źródłem ogrzewania budynków jest pompa ciepła wraz z ogrzewaniem podłogowym.
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
  <div className="relative w-[350px] h-[300px] m-4 overflow-hidden rounded-xl shadow-lg flex flex-wrap">

   <Image 
    src={photo7} 
    alt="logo" 
    fill 
    priority 
    className="object-cover"
  />
  </div>
  <div className="relative w-[350px] h-[300px] m-4 overflow-hidden rounded-xl shadow-lg flex flex-wrap">

   <Image 
    src={photo8} 
    alt="logo" 
    fill 
    priority 
    className="object-cover"
  />
  </div>
  <div className="relative w-[350px] h-[300px] m-4 overflow-hidden rounded-xl shadow-lg flex flex-wrap">

   <Image 
    src={photo9} 
    alt="logo" 
    fill 
    priority 
    className="object-cover"
  />
  </div>
  <div className="relative w-[350px] h-[300px] m-4 overflow-hidden rounded-xl shadow-lg flex flex-wrap">

   <Image 
    src={photo10} 
    alt="logo" 
    fill 
    priority 
    className="object-cover"
  />
  </div>
  <div className="relative w-[350px] h-[300px] m-4 overflow-hidden rounded-xl shadow-lg flex flex-wrap">

   <Image 
    src={photo11} 
    alt="logo" 
    fill 
    priority 
    className="object-cover"
  />
  </div>
  <div className="relative w-[350px] h-[300px] m-4 overflow-hidden rounded-xl shadow-lg flex flex-wrap">

   <Image 
    src={photo12} 
    alt="logo" 
    fill 
    priority 
    className="object-cover"
  />
  </div>
  <div className="relative w-[350px] h-[300px] m-4 overflow-hidden rounded-xl shadow-lg flex flex-wrap">

   <Image 
    src={photo13} 
    alt="logo" 
    fill 
    priority 
    className="object-cover"
  />
  </div>
  <div className="relative w-[350px] h-[300px] m-4 overflow-hidden rounded-xl shadow-lg flex flex-wrap">

   <Image 
    src={photo14} 
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
      <div className="mt-12 px-4 w-full flex flex-col items-center ">
  <h3 className="text-2xl font-semibold mb-4 text-amber-800">Do pobrania</h3>
  <div className="w-full flex items-center p-2 justify-center flex-wrap">
    {[
      { name: 'rzut parter', file: 'parter.pdf' },
      { name: 'rzut poddasze', file: 'poddasze.pdf' },
      { name: 'PZT', file: 'PZT.pdf' },
      { name: 'projekt podziału', file: 'podzial.pdf' }
    ].map(({ name, file }) => (
      <a 
        key={file}
        href={`/pdfs/wojskapolskiego/${file}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-center border border-amber-700 rounded-lg p-4 hover:bg-amber-50 transition-colors duration-300 shadow-md w-[200px] m-4"
      >
        📄 {name}
      </a>
    ))}
  </div>
</div>
    </div>
  );
};

export default WojskaPolskiego