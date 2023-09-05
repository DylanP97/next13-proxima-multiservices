'use client';

import Carousel from 'react-multi-carousel';
import { motion } from 'framer-motion';
import 'react-multi-carousel/lib/styles.css';
import styles from '../styles';

import ClientCard from '../components/ClientCard';
import { customersLogos } from '../constants/index';
import { TitleText, TypingText } from '../components';
import { staggerContainer } from '../utils/motion';

const Clients = () => {
  const responsive = {
    largeDesktop: {
      breakpoint: { max: 6000, min: 992 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 992, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className={`${styles.paddings}`} id="clients">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Nos Clients" textStyles="text-center" />
        <TitleText title={<>Ils nous ont fait confiance</>} textStyles="text-center" />
        <Carousel
          transitionDuration={0}
          autoPlaySpeed={1000}
          rtl
          autoPlay
          responsive={responsive}
          infinite
          className="flex min-h-[60vh] gap-5"
        >
          {
            customersLogos.map((image, index) => <ClientCard key={`customercard${index}`} src={image.src} height={image.height} width={image.width} />)
          }
        </Carousel>
      </motion.div>
    </section>
  );
};

export default Clients;
