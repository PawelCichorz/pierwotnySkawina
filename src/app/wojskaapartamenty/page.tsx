'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import photo from '../../../assets/wojskaapartamenty/1.jpg'
import photo1 from '../../../assets/wojskaapartamenty/2.jpg'
import photo2 from '../../../assets/wojskaapartamenty/3.jpg'
import photo3 from '../../../assets/wojskaapartamenty/4.jpg'


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
    'Pow. użytkowa 71,92m2',
    'Ceny od 650 000 zł brutto',
    'Mieszkania dwukondygnacyjne',
    'Piec gazowy + podłogówka',
    '1 miejsca postojowe w cenie',
    'Ogródek do każdego mieszkania',
    'Termin oddania marzec 2026 r.'
  ];

  return (
    <div className="min-h-screen py-10 font-poppins">
      <motion.h1
        className="lg:text-4xl font-bold text-center mb-6 text-xl"
        initial="hidden"
        animate="visible"
        variants={dropInVariants}
        custom={0}
      >
        Apartementy ul. Wojska Polskiego
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

  <h2 className="text-lg lg:text-xl font-bold text-center">
  Do sprzedania  dwupoziomowe apartamenty o użytkowej powierzchni 72 m2 + 12 m2 poddasza do aranżacji! Lokale  znajdują się na kameralnym osiedlu 8 apartamentów oddalonych 2,5 kilometra od centrum Skawiny [ ul. Wojska Polskiego ] Ta inwestycja dla osób szukających przestronnych wnętrz, wysokiego standardu i energooszczędności.  To alternatywa dla gęsto zaludnionych bloków mieszkalnych bez miejsc postojowych.  </h2>


  <section>
    <h3 className="text-md lg:text-lg font-semibold mt-4 mb-2">STANDARD</h3>
    <p>
    Budynki wznoszone są w tradycyjnej technologii budowlanej. Płyta fundamentowa i ściany fundamentowe z pustaka szalunkowego. Ściany z z betonu komórkowego H+H 24 cm  , okna PCV 3 szybowe, tynki gipsowe, instalacje: wod -kan , instalacja C.O. gazowe z ogrzewaniem podłogowym i piecem, instalacja elektryczna, instalacja Internet/ Zagospodarowany zostanie teren na zewnątrz gdzie znajdują się , podejścia do budynków, podjazdy , miejsca postojowe i tarasy. </p>
    <p>Domy zostaną wykończone w standardzie deweloperskim, obejmującym m.in.:</p>
    <ul className="list-disc list-inside space-y-1">
      
      <li>Ściany nośne i działowe z betonu komórkowego</li>
      <li>Dach pokryty markową  dachówką betonową Creaton</li>
      <li>Instalacje elektryczne, wod-kan, światłowód oraz C.O. z piecem gazowym</li>
      <li>Tynki gipsowe </li>
      <li>Okna PCV trzyszybowe</li>
      <li>Droga wewnętrzna utwardzona</li>
      <li>Zagospodarowanie terenu wraz z ogrodzeniem i tarasem z kostki brukowej</li>
      <li>Miejsce na 1 samochód</li>
      <li>Powierzchnia netto z poddaszem wynosi 83m2</li>
    </ul>
    <p>
      Budynki zostaną odebrane i przyjęte do użytkowania, a do każdego z nich będą podłączone wodociąg miejski, kanalizacja , prąd i gaz. Technologia budowlana oraz wykorzystane materiały gwarantują spełnienie wszystkich aktualnych norm jakościowych, akustycznych i cieplnych. Połączenie fotowoltaiki z pompą ciepła to wyjście naprzeciw obecnym trendom i regulacjom.
    </p>
  </section>


  <section>
    <h3 className="text-md lg:text-lg font-semibold mt-4 mb-2">LOKALIZACJA</h3>
  
    <li>W odległości 2 kilometrów od inwestycji znajduje się stacja Szybkiej kolei aglomeracyjnej ze stacji Skawina PKP z parkingiem Park and Ride W 27 minut możesz się znaleźć w centrum Krakowa,  nie tracąc czasu na stanie w Korkach.</li>
    <li> W odległości 500 metrów znajduje się przystanek komunikacji miejskiej autobusu 203</li>
    <li>kilka alternatywnych tras samochodem do różnych części Krakowa w zależności od potrzeb i pory dnia wjazd na północ Krakowa od ul. Tynieckiej, na południe Krakowa od ul. Petrażyckiego lub do centrum Krakowa ul. Krakowską lub obwodnicą Skawiny </li>
    <div className="flex justify-center mt-6">
  <iframe
   src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d325.3429524403118!2d19.817856008046306!3d49.98833003442729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spl!2spl!4v1747142934971!5m2!1spl!2spl" 
    height="450"
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full max-w-4xl h-[450px] rounded-xl shadow-lg"
  ></iframe>
</div>
  </section>



  <p>
    Inwestycja zostanie oddana do użytkowania do marca 2026 r. Apartamenty sprzedawane są zgodnie z ustawą deweloperską. Kupujący nie płaci podatku 2% PCC. 
  </p>

  <p className="font-semibold mt-4 text-center">Zapraszamy do prezentacji!</p>
</motion.div>

      </motion.div>
      <motion.div  className="flex flex-wrap justify-center" initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5 }}
        viewport={{ once: true }}>
              
            <div className="relative w-[340px] h-[300px] m-4 overflow-hidden rounded-xl shadow-lg flex flex-wrap">
  <Image 
    src={photo} 
    alt="logo" 
    fill 
    priority 
    className="object-cover"
  />
  </div>
  <div className="relative w-[330px] h-[300px] m-4 overflow-hidden rounded-xl shadow-lg flex flex-wrap">

   <Image 
    src={photo1} 
    alt="logo" 
  fill
    priority 
    className="object-cover"
  />
  </div>            
  <div className="relative w-[330px] h-[300px] m-4 overflow-hidden rounded-xl shadow-lg flex flex-wrap">

    <Image 
    src={photo2} 
    alt="logo" 
    fill 
    priority 
    className="object-cover"
  />
  </div>
  <div className="relative w-[330px] h-[300px] m-4 overflow-hidden rounded-xl shadow-lg flex flex-wrap">

   <Image 
    src={photo3} 
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
  <div className="flex flex-wrap   ">
    {[
      { name: 'Rzuty', file: 'rzuty.pdf' },
   
      { name: 'PZT', file: 'pzt.pdf' },
    ].map(({ name, file }) => (
      <a
        key={file}
        href={`/pdfs/apartamentywoj/${file}`}
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

export default WojskaPolskiego