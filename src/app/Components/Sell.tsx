'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Sell = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-20 bg-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className=" text-xl lg:text-2xl font-semibold text-black text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Chcesz sprzedać nieruchomość z rynku pierwotnego w gminie Skawina?
      </motion.h2>

      <motion.div
        className="flex gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        <Link
          href="https://m.me/100054462819881"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 text-red-600 text-2xl font-medium border border-red-600 rounded animate-pulse hover:animate-none transition-all duration-300"
        >
          Messenger
        </Link>

        <a
          href="tel:519053331"
          className="px-6 py-2 text-red-600 text-2xl font-medium border border-red-600 rounded animate-pulse hover:animate-none transition-all duration-300"
        >
          519 053 331
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Sell;
