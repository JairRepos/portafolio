import React, { useContext } from 'react'

/* useContext */
import { LanguageContext } from "../../useContext/LanguageContext";

/* React Animations */
import { motion } from "framer-motion"

export const ContactTitle = () => {

    const {language} = useContext(LanguageContext);

    return (
        <div className="col-span-1 flex flex-col justify-center items-left
                            sm:mr-2
                            md:mr-0
                            lg:gap-y-3 lg:pb-0 lg:h-64 lg:mt-8" style={{ fontFamily: 'Poppins' }}>

            <motion.span initial={{ opacity: 0, }}
                animate={{ opacity: 1, }}
                transition={{ duration: 2 }}
                className="text-gray-500 text-left mt-8 lg:mt-14">{language ? 'Envía un mensaje y' : 'Send a message and'}</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 2 }}
                className="text-white text-3xl mt-3 sm:mt-2 lg:mt-0 font-medium uppercase">{language ? 'Contáctame' : 'Contact me'}</motion.h2>
        </div>
    )
}
