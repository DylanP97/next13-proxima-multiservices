'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { TitleText, TypingText, SubTitleText } from '../components';

const Contact = () => (
  <section id="contact" className={`${styles.yPaddings} sm:px-16 px-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Remplissez le formulaire" />
        <TitleText title={<>Contactez-nous</>} />
        <SubTitleText title={<> en quelques clics</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          <form
            className="bg-gray-100 p-6 rounded-lg shadow-ld w-full max-w-xl"
            action="https://formsubmit.co/proxima.multiservices@gmail.com"
            method="POST"
          >
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">Nom</label>
              <input className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-indigo-200" required type="text" id="name" name="name" placeholder="Nom" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="société">Société</label>
              <input className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-indigo-200" required type="text" id="société" name="société" placeholder="Société" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
              <input className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-indigo-200" required type="email" id="email" name="email" placeholder="Email" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="tel">Téléphone</label>
              <input className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-indigo-200" required type="tel" id="tel" name="tel" placeholder="Téléphone" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="objet">
                Objet
              </label>
              <select
                required
                id="objet"
                name="objet"
                className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-indigo-200"
              >
                <option value="information">Demande d'informations</option>
                <option value="devis">Demande de devis</option>
                <option value="other">Autre type de demande</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                required
                id="message"
                name="message"
                placeholder="Écrivez un message..."
                className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-indigo-200"
              />
            </div>
            {/* <input type="hidden" name="_next" value="https://localhost:3000/merci"/> */}
            <input type="hidden" name="_autoresponse" value="Nous avons bien reçu votre message" />
            <input type="hidden" name="_subject" value="Nouveau email depuis le site" />
            <input className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 cursor-pointer" type="submit" value="Envoyez" />
          </form>
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="interface/3dimages8.webp"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Contact;
