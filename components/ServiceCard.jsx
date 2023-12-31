'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ServiceCard = ({ id, imgUrl, title, iconUrl, index, active, handleClick }) => (

  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'xl:flex-[3.5] flex-[10]' : 'xl:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px]
    h-[600px] transition-[flex] duration-[0.8s] z-20
    ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      alt={title}
      width={600}
      height={600}
      className={`absolute w-full h-full object-cover
      rounded-[24px] ${active === id ? 'brightness-100' : 'brightness-50'}`}
    />
    {active !== id ? (
      <h3
        className="font-semibold sm:text-[26px]
        text-[18px] text-white absolute z-20
        xl:rotate-[-90deg]"
      >
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 w-full flex-col bg-[rgba(0,0,0,0.0)] xl:bg-[rgba(0,0,0,0.2)] rounded-b-[24px]">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          <Image
            src={iconUrl}
            alt={iconUrl}
            width={60}
            height={60}
            className="w-1/2 h-1/2 object-contain transition-shadow"
          />
        </div>
        <h2
          className="mt-[24px] font-semibold
        sm:text-[32px] text-[24px] text-white"
        >
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ServiceCard;
