import React, { useContext } from "react";

/* React Animations */
import { motion } from "framer-motion";

/* Writter Machine */
import Typewriter from 'typewriter-effect';

/* useContext */
import { LanguageContext } from "../../useContext/LanguageContext";

const transitionValues = {
  duration: 1.5,
  yoyo: Infinity,
  ease: "easeOut",
};

export const Presentacion = () => {

  const {language} = useContext(LanguageContext);

  const primeraPalabra = language ? 'Desarrollador Frontend' : 'Frontend Developer';
  const segundaPalabra = language ? 'Desarrollador Backend' : 'Backend Developer';
  const terceraPalabra = language ? 'Diseñador UI/UX' : 'UI/UX Designer';

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -250 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="grid col-span-1 row-span-3 flex h-screen justify-center content-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -250 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="mb-10 text-center sm:mt-14"
        >
          <motion.p
            transition={{
              y: transitionValues,
              height: transitionValues,
            }}
            animate={{
              y: ["1rem", "1.2rem"],
              height: ["3rem", "2rem"],
            }}
            className="text-white text-2xl md:text-4xl select-none"
          >
            {language ? 'Hola' : 'Hello'} &#128075;{" "}
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="mb-10 text-center"
        >
          <motion.p
            transition={{
              y: transitionValues,
              height: transitionValues,
            }}
            animate={{
              y: ["1rem", "1.2rem"],
              height: ["6rem", "5rem"],
            }}
            className="text-white text-4xl sm:text-4xl  md:text-6xl uppercase font-semibold select-none"
            style={{ fontFamily: "Poppins" }}
          >
            <span
              className="text-pink-600 text-4xl sm:text-4xl md:text-6xl uppercase font-light select-none"
              style={{ fontFamily: "prisma" }}
            >
              {language ? 'Soy' : "I'm"}
            </span>{" "}
              Jair Cayahua
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 250 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="mb-10 text-center"
          style={{
            fontFamily: "Poppins",
            color: "#ffee00",
            letterSpacing: "5px",
            textShadow: "0px 3px 8px rgb(12,200,255)",
            fontSize: '15px',
            textTransform: 'uppercase',
            userSelect: 'none'
          }}
        >
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 70,
              deleteSpeed: 70,
              strings: [
                primeraPalabra,
                segundaPalabra,
                terceraPalabra
              ],
            }}
          />
        </motion.div>
      </motion.div>
    </>
  );
};
