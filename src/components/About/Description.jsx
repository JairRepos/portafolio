import React, { useContext } from 'react'

/* React Animations */
import { motion } from "framer-motion"

/* Data */
import datos from '../../db/datos';

/* useContext */
import { LanguageContext } from "../../useContext/LanguageContext";

export const Description = () => {

    const {descripcion} = datos;

    const {language} = useContext(LanguageContext);

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="mb-6 lg:mb-2 xl:mb-12 md:mt-4">
                <h1 className="text-3xl md:text-4xl lg:text-4xl font-light text-pink-500 uppercase"
                    style={{ fontFamily: 'Poppins' }}>{language ? 'Sobre mí' : 'About me'}</h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}

                className="lg:my-5 xl:my-10 md:my-8">
                <p className="text-gray-300 font-light text-justify" style={{ fontFamily: 'Poppins' }}>
                    {language ? descripcion.descES : descripcion.descEN}
                </p>
            </motion.div>
        </>
    )
}
