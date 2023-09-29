'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = ({ hourGiven }) => {
  const imgParisEarlyMorning = '/interface/paris-earlymorning.jpg';
  const imgParisMorning = '/interface/paris-morning.jpg';
  const imgParisNoon = '/interface/paris-noon.jpg';
  const imgParisAfternoon = '/interface/paris-afternoon.jpg';
  const imgParisLateAfternoon = '/interface/paris-lateafternoon.jpg';
  const imgParisEvening = '/interface/paris-evening.jpg';
  const imgParisLateEvening = '/interface/paris-lateevening.jpg';
  const imgParisNight = '/interface/paris-night.jpg';
  const imgParisDefault = '/interface/paris-default.jpg';

  function getImageDynamically(hour) {
    if (hour >= 0 && hour < 6) {
      return imgParisNight;
    }
    if (hour >= 6 && hour < 9) {
      return imgParisEarlyMorning;
    }
    if (hour >= 9 && hour < 12) {
      return imgParisMorning;
    }
    if (hour >= 12 && hour < 14) {
      return imgParisNoon;
    }
    if (hour >= 14 && hour < 16) {
      return imgParisAfternoon;
    }
    if (hour >= 16 && hour < 19) {
      return imgParisLateAfternoon;
    }
    if (hour >= 19 && hour < 21) {
      return imgParisEvening;
    }
    if (hour >= 21 && hour <= 23) {
      return imgParisLateEvening;
    }
    return imgParisDefault;
  }

  function getTextDynamically(hour) {
    if (hour >= 0 && hour < 6) {
      return 'Bonne nuit.';
    }
    if (hour >= 6 && hour < 9) {
      return 'Prêt pour commencer la journée ?';
    }
    if (hour >= 9 && hour < 12) {
      return 'Comment se passe votre matinée ?';
    }
    if (hour >= 12 && hour < 14) {
      return 'Bon appétit !';
    }
    if (hour >= 14 && hour < 16) {
      return 'Comment se passe votre après-midi ?';
    }
    if (hour >= 16 && hour < 19) {
      return 'La journée touche à sa fin.';
    }
    if (hour >= 19 && hour < 21) {
      return 'Belle soirée.';
    }
    if (hour >= 21 && hour <= 23) {
      return 'À demain !';
    }
    return 'Bienvenue';
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
        <div className="flex justify-center items-end flex-col relative z-10 bottom-[50px]">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Proxima Multiservices
          </motion.h1>
        </div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px] overflow-hidden"
        >
          <Image
            src={getImageDynamically(hourGiven)}
            alt="cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
            height={1080}
            width={1920}
          />
          <p className="absolute font-extrabold text-white bg-blue-800 px-2 top-[30px] right-[30px] z-20">
            {getTextDynamically(hourGiven)}
          </p>
          <a href="#services">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
              <Image
                src="/interface/stamp3.png"
                alt="stamp"
                className="sm:w-[170px] w-[100px] sm:h[170px] h-[100px] object-contain"
                width={200}
                height={200}
              />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
