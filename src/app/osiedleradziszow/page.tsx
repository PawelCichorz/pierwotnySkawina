'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import photo from '../../../assets/radziszow/1.jpg'
import photo1 from '../../../assets/radziszow/2.jpg'
import photo2 from '../../../assets/radziszow/3.jpg'
import photo3 from '../../../assets/radziszow/4.jpg'
import photo4 from '../../../assets/radziszow/5.jpg'


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

const Radziszów = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const events = [
    'Pow. użytkowa 89,11m2',
    '850 000 zł brutto',
    'Fotowoltaika',
    'Ogrzewanie gazowe',
    'Instalacja pod klimatyzację',
    'Ogródki z ekspozycją zachodnią',
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
        DOMY W RADZISZOWIE
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
  Nieruchomości Pawłowski prezentuje nową inwestycję mieszkaniową zlokalizowaną w Radziszowie, zaledwie 5 km od Skawiny. 
Inwestycja składa się z 5 nowoczesnych i energooszczędnych domów jednorodzinnych o powierzchniach 89,11 m² położonych na działkach o powierzchniach od 226 m² do 476 m². 
  </h2>

  {/* Sekcja: STANDARD */}
  <section>
    <h3 className="text-md lg:text-lg font-semibold mt-4 mb-2">STANDARD</h3>
    <p>
      Budynki wznoszone są w wysokiej jakości technologii budowlanej, z pomysłem i dbałością o detale, wynikającą z doświadczenia inwestora. Pomieszczenia są jasne i przestronne. 
    </p>
    <p>
    Na parterze przestronny salon otwarty na kuchnię i jadalnię z oknem o szerokości 4,4 m wychodzącym na zachód, gdzie zlokalizowany jest ogródek; łazienka z prysznicem, kotłownia z częścią gospodarczą oraz wiatrołap.
    Na piętrze znajdują się trzy sypialnie o powierzchniach 8,99 m², 10,78 m² oraz 10,01 m² z prywatną garderobą; ponadto na piętrze znajduje się łazienka z miejscem na wannę. 
    </p>
    <p>Domy zostaną wykończone w standardzie deweloperskim, obejmującym m.in.:</p>
    <ul className="list-disc list-inside space-y-1">
      <li>Technologia tradycyjna – pustak ceramiczny wysokiej jakości</li>
      <li>Dach pokryty czarną dachówką cementową</li>
      <li>Ogrzewanie podłogowe w całym domu – zasilane piecem gazowym</li>
      <li>Instalacje elektryczne, wod-kan, instalacje teletechniczne</li>
      <li>Tynki gipsowe</li>
      <li>Okna PCV trzyszybowe</li>
      <li>Droga wewnętrzna utwardzona</li>
      <li>Miejsce na 2 samochody</li>
      <li>Fotowoltaika na dachu 5 kW</li>
    </ul>
    <p>
      Budynki zostaną odebrane i przyjęte do użytkowania, a do każdego z nich będą podłączone wodociąg miejski, kanalizacja,gaz oraz prąd. Technologia budowlana oraz wykorzystane materiały gwarantują spełnienie wszystkich aktualnych norm jakościowych, akustycznych i cieplnych. Połączenie fotowoltaiki z pompą ciepła to wyjście naprzeciw obecnym trendom i regulacjom.
    </p>
  </section>

  {/* Sekcja: LOKALIZACJA */}
  <section>
  <h3 className="text-md lg:text-lg font-semibold mt-4 mb-2">LOKALIZACJA</h3>
  <p>
    Radziszów to spokojna, podkrakowska miejscowość położona w otoczeniu zieleni, w której życie toczy się z dala od miejskiego zgiełku, a jednocześnie w zasięgu pełnej infrastruktury. Bezpośrednie sąsiedztwo inwestycji stanowi zabudowa jednorodzinna oraz tereny zielone wzdłuż rzeki Skawinki.
  </p>
  <p>
    W odległości zaledwie 2 km znajduje się centrum miejscowości z podstawową infrastrukturą: szkołą, przedszkolem, ośrodkiem zdrowia, sklepami i restauracją. Z kolei w 10 minut dojedziemy do centrum Skawiny, gdzie dostępna jest pełna oferta handlowo-usługowa, edukacyjna oraz rekreacyjna – m.in. galeria, park, basen i hipermarkety.
  </p>
  <p>
    Przystanek komunikacji miejskiej znajduje się w odległości 800 metrów, a 2,5 km dalej zlokalizowany jest przystanek kolejowy na trasie Kraków–Skawina–Kalwaria Zebrzydowska. Dojazd do centrum Krakowa zajmuje około 30 minut, do autostrady A4 – 15 minut, a do Zakopianki – 8 minut.
  </p>
  <p>
    Każdy z domów znajduje się na niezależnej działce z dostępem do wewnętrznej drogi dojazdowej
  </p>
  <div className="flex justify-center mt-6">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d460.7187006288884!2d19.81904326957381!3d49.92408586162467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDU1JzI2LjciTiAxOcKwNDknMTAuOSJF!5e1!3m2!1spl!2spl!4v1747143077053!5m2!1spl!2spl"     height="450"
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
    Inwestycja zostanie zakończona do końca marca 2026 r. Domy sprzedawane są zgodnie z ustawą deweloperską. Kupujący nie płaci podatku 2% PCC. 
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
  <div className="flex flex-wrap   max-w-4xl">
    {[
      { name: 'Rzut1', file: 'rzut1.png' },
   { name: 'Rzut2', file: 'rzut2.png' },
   
      { name: 'Stanard Wykończenia', file: 'standard.docx' },
    ].map(({ name, file }) => (
      <a
        key={file}
        href={`/pdfs/radziszow/${file}`}
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

export default Radziszów
