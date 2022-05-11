import React from "react";

/* Components */
import { Background } from "../Home/Background";

import Image404 from "../../assets/images/erro404.png";

/* Writter Machine */
import Typical from "react-typical";

/* React Icons */
import { IoRocketSharp } from "react-icons/io5";

/* React-router-Dom */
import { Link } from "react-router-dom";

/* React Animations */
import { motion } from "framer-motion";

const transitionValues = {
  duration: 2,
  yoyo: Infinity,
  ease: "easeOut",
};

const Error404 = () => {
  return (
    <>
      <Background />
      <div
        className="flex flex-col h-screen justify-center items-center"
        style={{ fontFamily: "Poppins" }}
      >
        <div
          style={{
            letterSpacing: "5px",
            textShadow: "0px 3px 8px rgb(255,255,255)",
          }}
        >
          <Typical
            steps={["¡Hola, veo que estás perdido!", 6000]}
            loop={Infinity}
            className="text-sm md:text-2xl text-yellow-400 font-normal uppercase"
          />
        </div>

        {/* <h3 className="text-yellow-400 text-3xl">¡Hola, veo que estás perdido!</h3> */}
        <motion.img
          transition={{
            y: transitionValues,
            height: transitionValues,
          }}
          animate={{
            y: ["3em", "1em"],
            height: ["10em", "10em"],
          }}
          className="w-64 my-5"
          src={Image404}
          alt="image-error404"
        ></motion.img>
        {/* <img className="w-64 my-5 transition animate-pulse duration-1000 ease-in-out" ></img> */}
        <div style={{ color: "#ffee00", letterSpacing: "5px" }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 2 }}
            className="text-white text-center text-sm md:text-lg mt-2 mt-10"
          >
            ¡Vuelve al mundo de Jair con un click!
          </motion.p>
        </div>

        <Link to="/">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            type="submit"
            className="rounded-xl tracking-widest bg-pink-600 mt-8 uppercase text-lg hover:bg-pink-800 w-48 md:w-48 text-white p-2 mb-10 transform duration-700 hover:-translate-y-1 flex justify-center items-center"
          >
            {" "}
            <IoRocketSharp className="mx-2" /> <p>Volver</p>
          </motion.button>
        </Link>
      </div>
    </>
  );
};

export default Error404;
