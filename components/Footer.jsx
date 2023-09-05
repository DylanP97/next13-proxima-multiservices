'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <img
            src="/interface/proxima-logo.png"
            width={400}
            height={400}
          />
          {/* <h4 className="font-extrabold text-[24px] text-black">Proxima Multiservices</h4> */}
          <div className="flex flex-col md:flex-row gap-4">
            <p className="font-normal text-[14px] text-black opacity-80">01-57-19-52-78</p>
            <p className="font-normal text-[14px] text-black opacity-80">proxima.multiservices@gmail.com</p>
            <p className="font-normal text-[14px] text-black opacity-80">66 Rue Mirabeau, 92160 Antony</p>
          </div>
        </div>
      </div>
      <div className="h-[2px] bg-black opacity-10" />
      <div className="flex items-end flex-col justify-center">
        <p className="font-normal text-[14px] text-black opacity-50">Tous droits réservés</p>
        <div className="flex items-center justify-end flex-wrap gap-[4px]">
          <p className="font-normal text-[14px] text-black opacity-50">Vous aimez ce site ?</p>
          <p className="font-normal text-[14px] text-black opacity-50">
            <span onClick={() => { window.open('https://dylanp97.com/', '_blank').focus(); }} className="cursor-pointer font-normal text-[14px] text-black opacity-50">dylanp97.com</span>
          </p>
        </div>
      </div>

    </div>
  </motion.footer>
);

export default Footer;
