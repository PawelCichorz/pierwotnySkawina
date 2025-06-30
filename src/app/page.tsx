import Image from 'next/image';
import Navbar from "./Components/Navbar"; 
import main from "../../assets/cam2AL.jpg"
import logo from '../../assets/Nieruchomości Pawłowski (4).png'
import Offers from './Components/Offers';
import Contact from './Components/Contact';
import Sell from './Components/Sell';
import SocialIcons from './Components/SocialIcons';

export default function Home() {
  return (
    <>
    <div className="relative h-screen w-full">
      <div className="absolute inset-0">
        <Image
          src={main} 
          alt="Tło strony"
          layout="fill" 
          objectFit="cover" 
          objectPosition="center" 
        />
        <Image
          src={logo} 
          alt=''
          width={300}
            layout="intrinsic"
            placeholder="blur"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  opacity-70 z-10 "
        />
      </div>
      <Navbar />
      <SocialIcons/>
      
    </div>
    <Offers/>
    <Sell/>
    <Contact/>
    </>
  );
}