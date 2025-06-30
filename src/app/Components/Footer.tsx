import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col text-[14px] lg:text-[16px] md:flex-row  justify-center md:justify-around items-center min-h-[15vh] bg-black text-gray-200 p-4 font-poppins text-center 2xl:text-xl">
      <div className="lg:text-left">
        <p>PC 2024</p>
    
      </div>
      <div className="lg:text-right">
        <Link
          href="/pdfs/RODO.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Polityka Prywatności i RODO
        </Link>
       
      </div>
    </footer>
  );
};

export default Footer;
