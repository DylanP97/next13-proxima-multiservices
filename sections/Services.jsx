'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { ServiceCard, TitleText, TypingText } from '../components';
import { ServiceFields } from '../constants';

const Services = () => {
  const [active, setActive] = useState('prestation-1');

  return (
    <section className={`z-20 ${styles.paddings}`} id="services">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col z-20`}
      >
        <TypingText title="| Nos Prestations" textStyles="text-center" />
        <TitleText
          title={
            (
              <>
                Faîtes confiance en notre<br className="z-20 md:block hidden" />
                {' '} expertise
              </>
            )
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex xl:flex-row flex-col min-h-[70vh] gap-5">
          {ServiceFields.map((prestation, index) => (
            <ServiceCard
              key={prestation.id}
              {...prestation}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
