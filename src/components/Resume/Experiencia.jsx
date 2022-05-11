import React, { useContext } from 'react'

/* Data */
import datos from '../../db/datos'

/* useContext */
import { LanguageContext } from "../../useContext/LanguageContext";

/* React Animations */
import { motion } from "framer-motion"

export const Experiencia = () => {

    const { experiencia } = datos;

    const {language} = useContext(LanguageContext);

    return (
        <div className="grid grid-cols-1 mt-10 lg:-mt-12 mb-3">

        {experiencia.map(item => (

                <motion.div initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 1 }}

                key={item.id} className="grid grid-cols-1 mt-1 py-5" style={{backgroundColor: '#131313'}}>
                <div className="grid grid-cols-1 md:grid-cols-5 flex justify-between item-center py-2 md:py-5">
                    <div className="col-span-1 text-white flex justify-start md:justify-center items-center text-center px-4 md:px-4">
                    <motion.h1 initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeOut", duration: 1 }}
                        className="mb-2 text-gray-400 font-semibold" style={{ fontFamily: 'Poppins' }}>{language ? item.empresa : item.empresaEN}</motion.h1>
                    </div>
                    <motion.div initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeOut", duration: 1 }}className="col-span-3 text-white flex justify-center items-start flex flex-col px-4 md:px-0">
                        <h1 className="mt-2 pb-2 font-medium lg:mt-0 text-white" style={{ fontFamily: 'Poppins' }}>{language ? item.cargo : item.cargoEN}</h1>
                        <p className="mt-2 text-gray-500 text-sm" style={{ fontFamily: 'Poppins' }}>{language ? item.desc : item.descEN}</p>
                    </motion.div>
                    <div className="col-span-1 text-white flex justify-start md:justify-center items-center px-4 md:px-0 mt-5 md:mt-0">
                    <motion.span initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeOut", duration: 1 }}
                        className="bg-white font-semibold rounded px-1 text-xs lg:-ml-12"
                        style={{ fontFamily: 'Poppins', color: '#131313' }}>{language ? item.duracion : item.duracionEN}</motion.span>
                    </div>
                </div>
            </motion.div>

        ))}

        </div>
    )
}
