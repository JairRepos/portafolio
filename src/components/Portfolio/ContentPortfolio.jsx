import React, { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow } from "swiper";

import { FcGlobe } from 'react-icons/fc';

// Import Swiper styles
import "swiper/swiper.scss";

import "../../App.css";

import './Portfolio.scss';

/* Data */
import datos from "../../db/datos";

/* useContext */
import { LanguageContext } from "../../useContext/LanguageContext";

/* React Animations */
import { motion } from "framer-motion";

SwiperCore.use([EffectCoverflow]);


export const ContentPortfolio = () => {

  const { portafolio } = datos;

  const { language } = useContext(LanguageContext);

  return (
    <>
      <div
        className="h-screen absolute w-full flex flex-col justify-start items-center"
        style={{ fontFamily: "Poppins" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="mt-28 mb-4 lg:mt-22 lg:mb-0"
        >
          <span
            className="text-gray-500 text-md"
            style={{ fontFamily: "Poppins" }}
          >
            {language ? 'Echa un vistazo a mi' : 'Take a look at my'}
          </span>
          <h2
            className="text-white mt-3 uppercase text-2xl tracking-widest"
            style={{ fontFamily: "Poppins" }}
          >
            {language ? 'Portafolio' : 'Portfolio'}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="w-11/12 md:w-3/4 xl:w-1/2"
        >
          <Swiper
            effect="coverflow"
            spaceBetween={1}
            slidesPerView={2}
            grabCursor={true}
            centeredSlides={true}
          >
            {portafolio.map(({ id, imgSrc, altImg, linkWeb }) => (

              <SwiperSlide key={id}>

                <div className="-mx-8 sm:mx-0 lg:mx-12 mt-8 lg:mt-4 card-border mb-14 md:mb-2 relative" style={{ fontFamily: 'Poppins' }}>
                  <img
                    className="w-full mx-auto"
                    src={imgSrc}
                    alt={altImg}
                  />
                  <div class="containerr">
                    <div class="overlay absolute top-0 w-full h-full">
                      <div className="flex justify-center items-center">
                        <a href={linkWeb} alt={altImg} target="_blank" rel="noreferrer" className="link-portfolio hover:bg-pink-700 transition delay-400 duration-300 font-semibold uppercase flex justify-center items-center">
                          {language ? 'Visitar web' : 'Visit web'} <FcGlobe className="text-2xl ml-3"></FcGlobe></a>

                      </div>
                    </div>
                  </div>
                </div>

              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </>
  );
};
