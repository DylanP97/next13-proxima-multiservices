'use client';

import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import { useState } from 'react';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      exit="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className={`${styles.innerWidth} mx-auto flex justify-start gap-14`}>
        <img
          src="interface/menu.png"
          alt="menu"
          className="w-[24px] h-24px object-contain ml-auto hover:cursor-pointer md:hidden"
          onClick={toggleMobileNav}
        />
        <div className="hidden md:flex justify-start gap-14">
          {/* Use <a> tags with href attributes pointing to the respective IDs */}
          <a href="#apropos" className="hover:cursor-pointer underline-animation font-extrabold text-[20px] leading-[24px] text-black">À Propos</a>
          <a href="#services" className="hover:cursor-pointer underline-animation font-extrabold text-[20px] leading-[24px] text-black">Nos Prestations</a>
          <a href="#clients" className="hover:cursor-pointer underline-animation font-extrabold text-[20px] leading-[24px] text-black">Ils nous font confiance</a>
          <a href="#contact" className="hover:cursor-pointer underline-animation font-extrabold text-[20px] leading-[24px] text-black">Contact</a>
        </div>
      </div>
      <AnimatePresence>
        {isMobileNavOpen && (
          <motion.div
            className="md:hidden flex flex-col mt-4 gap-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {/* Use <a> tags with href attributes pointing to the respective IDs */}
            <a href="#apropos" className="hover:cursor-pointer underline-animation font-extrabold text-[20px] leading-[24px] text-black">À Propos</a>
            <a href="#services" className="hover:cursor-pointer underline-animation font-extrabold text-[20px] leading-[24px] text-black">Nos Prestations</a>
            <a href="#trust" className="hover:cursor-pointer underline-animation font-extrabold text-[20px] leading-[24px] text-black">Ils nous font confiance</a>
            <a href="#contact" className="hover:cursor-pointer underline-animation font-extrabold text-[20px] leading-[24px] text-black">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
