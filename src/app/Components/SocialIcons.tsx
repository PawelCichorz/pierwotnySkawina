// src/Components/SocialIcons.tsx
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const SocialIcons: React.FC = () => {
  return (
    <div className="fixed right-5 top-28 bg-blue-800/90 rounded-lg shadow-lg p-2 z-50 2xl:py-6 ">
      <a
        href="https://www.facebook.com/profile.php?id=100054462819881"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="block text-white hover:text-blue-600 transition duration-300 pb-4"
      >
        <FaFacebook size={33} />
      </a>
      <a
        href="https://www.instagram.com/pawlowski_nieruchomosci/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="block text-white hover:text-pink-600 transition duration-300"
      >
        <FaInstagram size={33} />
      </a>
    </div>
  );
};

export default SocialIcons;
