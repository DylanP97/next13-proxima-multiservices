'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col hidden lg:flex`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>
            We can operate anywhere in the world thanks to our agencies and partners abroad
          </>
        )}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="interface/map.png"
          alt="png"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="country-01.png"
            alt="country"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="country-02.png"
            alt="country"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-20 left-[40%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="country-03.png"
            alt="country"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-[24%] right-[25%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="country-04.png"
            alt="country"
            className="w-full h-full"
          />
        </div>
        <div className="absolute bottom-[24%] left-[20%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="country-05.png"
            alt="country"
            className="w-full h-full"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
