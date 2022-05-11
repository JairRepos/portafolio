import React, { useContext } from 'react'

/* Components */
import { Description } from './Description'
import { InfoAbout } from './InfoAbout'

/* Photo Portfolio */
import Jair from '../../assets/images/jair_cayahua.jpeg'

/* React Animations */
import { motion } from "framer-motion"

/* Data */
import datos from '../../db/datos';

/* useContext */
import { LanguageContext } from "../../useContext/LanguageContext";

export const ContentAbout = () => {

    const {frase} = datos;

    const {language} = useContext(LanguageContext);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 flex h-screen justify-center absolute mt-28 mx-12 content-start                       
                        lg:w-11/12 lg:justify-center lg:content-center lg:mt-0 lg:-mx-4
                        xl:w-3/4 xl:mx-40
                        "
        >
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
                className="md:col-span-1 lg:col-span-1 lg:mx-auto lg:my-auto lg:mt-24 xl:mt-10">
                <img src={Jair} alt="jair-cayahua"
                    className="mx-auto sm:mx-auto md:mx-auto w-60 md:w-96 lg:w-9/12 xl:w-7/12 lg:mx-auto" style={{ boxShadow: '10px 10px 5px #131313' }}
                ></img>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}

                className="mt-10 text-center md:col-span-1 lg:col-span-1  lg:text-left lg:mt-10 lg:py-2">

                <Description />
                <InfoAbout />

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.1, duration: 1 }}
                    className="text-white mt-4 md:mt-10 lg:mt-7 xl:mt-8 text-5xl md:text-6xl text-center" style={{ fontFamily: 'southland', color: '#ffee00' }}>
                    {language ? frase.fraseES : frase.fraseEN }
                </motion.h1>
            </motion.div>

        </div>
    )
}
