'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section id="apropos" className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col z-20`}
    >
      <TypingText title="| À Propos" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center z-20"
      >
        <span className="font-extrabold text-black z-20">Proxima Multiservices</span> est une société de nettoyage courant de bâtiment sur Paris et Île de France. Nous sommes une une entreprise spécialisée dans le <span className="font-extrabold text-black">nettoyage et l&apos;entretien</span> de bureaux d'entreprises. Nous assurons le nettoyage des locaux de votre société <span className="font-extrabold text-black">par une équipe compétente</span> dans le domaine.
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="interface/cleaning.png"
        alt="arrow down"
        className="w-[54px] h-[54px] object-contain mt-[28px] cursor-pointer"
        onClick={() => {
          window.location.href = '#services';
        }}
      />
    </motion.div>
  </section>
);

export default About;
