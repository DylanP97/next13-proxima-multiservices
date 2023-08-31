'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => {
  function getTimeOfDayInParis() {
    const now = new Date();
    const currentHour = now.getUTCHours() + 2;

    if (currentHour >= 22 || currentHour < 6) {
      return 'interface/paris-night.jpg';
    } if (currentHour >= 6 && currentHour < 12) {
      return 'interface/paris-morning.jpg';
    } if (currentHour >= 12 && currentHour < 18) {
      return 'interface/paris-afternoon.jpg';
    } if (currentHour >= 18 && currentHour < 22) {
      return 'interface/paris-evening.jpg';
    }
    return 'interface/paris-default.jpg';
  }

  return (
    <section className={`${styles.yPaddings} sm:px-16 px-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-end flex-col relative z-10 bottom-[20px]">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Proxima
          </motion.h1>
          <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading2}`}>
            Multiservices
          </motion.h1>
        </div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          {/* <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] top-[30px]" /> */}
          <img
            src={getTimeOfDayInParis()}
            alt="cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />

          <a href="#services">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
              <img
                src="interface/stamp3.png"
                alt="stamp"
                className="sm:w-[170px] w-[100px] sm:h[170px] h-[100px] object-contain"
              />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
