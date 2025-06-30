'use client';
import React, { useState, useEffect } from 'react';
import ButtonNavbar from './ButtonNavbar';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenOffer, setIsOpenOffer] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsOpenOffer(false);
  };
  const toggleOffers = () => {
    setIsOpenOffer(!isOpenOffer);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed flex md:justify-center md:items-center justify-end z-40 w-full font-poppins text-xl lg:text-[27px]  2xl:text-[40px] py-4   `}
      >
        <ul className="hidden md:flex space-x-20 md:justify-center md:items-center text-black ">
          <li>
            <Link href="/" className="hover:text-amber-600 ">
              Home
            </Link>
          </li>
         
          <li onClick={toggleOffers} className="relative">
            <ScrollLink   to="offers"
              smooth={true}
              offset={-65}
              duration={1200} className="hover:text-amber-600 cursor-pointer">Oferta</ScrollLink>

          </li>
          
          
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              offset={-50}
              duration={1200}
              className="hover:text-amber-600 cursor-pointer"
            >
              Kontakt
            </ScrollLink>
          </li>
        </ul>

        <ButtonNavbar isOpen={isOpen} toggleMenu={toggleMenu} />

        {isOpen && (
          <ul className="fixed inset-0 flex flex-col items-center justify-center font-poppins  text-[40px] bg-black/60 text-[#F1FAEE] ">
            
                <li className="mt-10 p-4 ">
                  <Link
                    href="/"
                    className="hover:underline"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className="mt-10 p-4">
                  <ScrollLink
                    onClick={toggleMenu}
                    to="offers"
                    smooth={true}
                    offset={-50}
                    duration={1200}
                    className="hover:underline "
                  >
                    Oferta
                  </ScrollLink>
                </li>
              
                <li className="mt-10 p-4">
                  <ScrollLink
                    onClick={toggleMenu}
                    to="contact"
                    smooth={true}
                    offset={-50}
                    duration={1200}
                    className="hover:underline "
                  >
                    Kontakt
                  </ScrollLink>
                </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
