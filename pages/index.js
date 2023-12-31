import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Footer, Navbar } from '../components';
import {
  About,
  Services,
  GetStarted,
  Hero,
  Clients,
  Contact,
} from '../sections';

const Page = () => {
  const [currentHour, setCurrentHour] = useState(new Date().getUTCHours() + 2);

  function getTimeOfDayInParis() {
    setCurrentHour(new Date().getUTCHours() + 2);
  }

  useEffect(() => {
    getTimeOfDayInParis();
  });

  return (
    <div className="bg-primary-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden"
      >
        <Navbar />
        <Hero hourGiven={currentHour} />
      </motion.div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative overflow-hidden"
        >
          <About />
          <div className="gradient-03 z-0 overflow-hidden" />
          <Services />
          <GetStarted />
          <div className="gradient-04 z-0 overflow-hidden" />
          <Contact />
        </motion.div>
      </AnimatePresence>
      <Clients />
      <Footer />
    </div>
  );
};

export default Page;
