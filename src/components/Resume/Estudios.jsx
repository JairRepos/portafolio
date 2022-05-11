import React, { useContext } from 'react'

/* Data */
import datos from '../../db/datos'

/* useContext */
import { LanguageContext } from "../../useContext/LanguageContext";

/* React Animations */
import { motion } from "framer-motion"

export const Estudios = () => {

    const { estudios } = datos;

    const { language } = useContext(LanguageContext);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-4 lg:gap-y-2 mt-10 lg:-mt-12">

            {estudios.map(item => (
                <motion.div initial={{ opacity: 0, }}
                    animate={{ opacity: 1, }}
                    transition={{ ease: "easeOut", duration: 2 }}

                    key={item.id} className="mb-4 lg:mb-0 lg:mt-2 lg:grid lg:col-span-1 p-6" style={{ backgroundColor: '#131313' }}>

                    <motion.h2 initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeOut", duration: 2 }}
                        className="text-white text-md lg:text-lg font-semibold uppercase" style={{ fontFamily: 'Poppins' }}>{item.centro}</motion.h2>
                    <motion.p initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeOut", duration: 2 }}
                        className="text-white text-sm lg:text-md font-medium mt-2" style={{ fontFamily: 'Poppins' }}>{language ? item.curso : item.cursoEN}</motion.p>


                    <motion.div initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeOut", duration: 2 }}
                        className="mt-2"><span className="bg-white font-semibold rounded px-1 text-xs"
                            style={{ fontFamily: 'Poppins', color: '#131313' }}>{item.duracion}</span>
                    </motion.div>

                    <motion.p initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeOut", duration: 2 }}
                        className="mt-5 text-gray-400 text-sm leading-6" style={{ fontFamily: 'Poppins' }}>
                        {language ? item.desc : item.descEN}
                    </motion.p>
                </motion.div>
            ))}

        </div>
    )
}
