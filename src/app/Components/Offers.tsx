'use client';
import Image from "next/image";
import Link from 'next/link';
import photo from '../../../assets/cam2AL.jpg'
import photo2 from '../../../assets/14.jpg'
import photo3 from '../../../assets/2.jpg'
import photo4 from '../../../assets/1.jpg'
import photo5 from '../../../assets/22.jpg'
import photo6 from '../../../assets/11.jpg'
import { motion } from 'framer-motion';


const Offers = () => {
 
    
    return (

        
        <motion.div id="offers" className="flex flex-wrap justify-center" initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5 }}
        viewport={{ once: true }}>
               <Link href="/jurczyce">
            <div className="relative w-[350px] h-[300px] m-4 overflow-hidden rounded-xl shadow-lg hover:scale-105 transition  duration-700 ease-in-out cursor-pointer">
  <Image 
    src={photo} 
    alt="logo" 
    fill 
    priority 
    className="object-cover"
  />

 
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

  
  <div className="absolute inset-0 z-20 flex flex-col justify-between p-4 text-white">
    <h3 className="text-xl font-bold text-center ">Energooszczędne Domy Jurczyce</h3>
    <p className="text-sm text-center">
   Energooszczędne domy w Jurczycach to osiedle parterowych domków z pompą ciepła, fotowoltaiką i rekuperacją w pięknej okolicy.

    </p>
  </div>
</div>
</Link>
<Link href="/wojskapolskiego">
<div className="relative w-[350px] h-[300px] m-4 overflow-hidden rounded-xl shadow-lg hover:scale-105 transition  duration-700 ease-in-out cursor-pointer">
  <Image 
    src={photo2} 
    alt="logo" 
    fill 
    priority 
    className="object-cover"
  />

 
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

  
  <div className="absolute inset-0 z-20 flex flex-col justify-between p-4 text-white">
    <h3 className="text-xl font-bold text-center ">Nowoczesne Domy w Skawine</h3>
    <p className="text-sm text-center">
      To budynki w zabudowie bliźniaczej w Skawinie - wysoki stanard, energooszczędność i przemyślane rozwiązania 
      zadowolą nawet najbardziej wymagającego klienta
    </p>
  </div>
</div>
</Link>
<Link href="/wojskaapartamenty">

<div className="relative w-[350px] h-[300px] m-4 overflow-hidden rounded-xl shadow-lg hover:scale-105 transition  duration-700 ease-in-out cursor-pointer">
  <Image 
    src={photo3} 
    alt="logo" 
    fill 
    priority 
    className="object-cover"
  />

 
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

  
  <div className="absolute inset-0 z-20 flex flex-col justify-between p-4 text-white">
    <h3 className="text-xl font-bold text-center ">Apartamenty ul. Wojska Polskiego</h3>
    <p className="text-sm text-center">
      Sprawdź duwpoziomiowe mieszkania w Skawinie o pow 71,92m2 - 3 pokoje, salon , kuchnia i 2 łazienki
      zaspokoją potrzeby nawet większej rodziny
    </p>
  </div>
</div>
</Link>
<Link href="/osiedleradziszow">

<div className="relative w-[350px] h-[300px] m-4 overflow-hidden rounded-xl shadow-lg hover:scale-105 transition  duration-700 ease-in-out cursor-pointer">
  <Image 
    src={photo4} 
    alt="logo" 
    fill 
    priority 
    className="object-cover"
  />

 
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

  
  <div className="absolute inset-0 z-20 flex flex-col justify-between p-4 text-white">
    <h3 className="text-xl font-bold text-center ">Osiedle Radziszów</h3>
    <p className="text-sm text-center">
    Przytulne domy dwukondygnacyjne o pow. 89,11 m2 - wyposażone w ogrzewanie gazowe i fotowoltaike w Radziszowie.
    Cisza i spokój gwarantowane
    </p>
  </div>
</div>
</Link >

<Link href="/wola">
<div className="relative w-[350px] h-[300px] m-4 overflow-hidden rounded-xl shadow-lg hover:scale-105 transition  duration-700 ease-in-out cursor-pointer">
  <Image 
    src={photo6} 
    alt="logo" 
    fill 
    priority 
    className="object-cover"
  />

 
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

  
  <div className="absolute inset-0 z-20 flex flex-col justify-between p-4 text-white">
    <h3 className="text-xl font-bold text-center ">Domy w centrum Woli Radziszowskiej</h3>
    <p className="text-sm text-center">
     Nowoczesne domy w dwóch projektach do wyboru w doskonałej lokalizacji. Możesz wybrać stan deweloperski
     lub wykończenie pod klucz
    </p>
  </div>
</div>
</Link>
<Link href="/sosnowice">
<div className="relative w-[350px] h-[300px] m-4 overflow-hidden rounded-xl shadow-lg hover:scale-105 transition  duration-700 ease-in-out cursor-pointer">
  <Image 
    src={photo5} 
    alt="logo" 
    fill 
    priority 
    className="object-cover"
  />

 
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

  
  <div className="absolute inset-0 z-20 flex flex-col justify-between p-4 text-white">
    <h3 className="text-xl font-bold text-center ">Domy W Sosnowicach</h3>
    <p className="text-sm text-center">
      Doskonała lokalizacja, dobre doświetlenie,nowoczesne rozwiązania, ogromne ogrody i blisko stacji PKP w Wielkich Drogach.
      Poznaj domy w zabudowie bliźniaczej w Sosnowicach.
    </p>
  </div>
</div>
</Link>



        </motion.div>
    )
}
  export default Offers;