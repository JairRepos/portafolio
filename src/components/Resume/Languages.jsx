import React, { useContext } from 'react'

/* Data */
import datos from '../../db/datos'

/* React Animations */
import { motion } from "framer-motion"

/* useContext */
import { LanguageContext } from "../../useContext/LanguageContext";

export const Languages = () => {

    const { langFrontend, langBackend } = datos;

    const {language} = useContext(LanguageContext);

    return (

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 lg:gap-x-2">

            <motion.div initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}

                className="grid col-span-1 md:col-span-2 lg:col-span-2 p-2 mt-10 lg:mt-5 mb-2">

                <h1 className="text-white text-xl font-semibold"
                    style={{ fontFamily: 'Poppins' }}
                >{language ? 'Experiencia Frontend:' : 'Frontend Experience:'}</h1>

                {langFrontend.map(language => (
                    <div key={language.id}>
                        <div className="text-white text-sm mt-6 mb-1" style={{ fontFamily: 'Poppins', textShadow: '0px 0px 8px rgb(255,255,255)' }}>{language.nombre}</div>
                        <div className="shadow w-full bg-gray-700">
                            <div className="text-xs leading-none py-0 text-center text-white"
                                style={{
                                    width: language.progress, fontFamily: 'Poppins', height: '3px',
                                    background: 'linear-gradient(to right, #ed2a4a, #ff1ba6)'
                                }}>
                            </div>
                        </div>
                    </div>
                ))}

            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}

                className="grid col-span-1 md:col-span-2 lg:col-span-2 p-2 mt-10 lg:mt-5 mb-4 md:mb-2">
                <h1 className="text-white text-xl font-semibold"
                    style={{ fontFamily: 'Poppins' }}
                >{language ? 'Experiencia Backend:' : 'Backend Experience:'}</h1>

                {langBackend.map(language => (
                    <div key={language.id}>
                        <div className="text-white text-sm mt-6 mb-1" style={{ fontFamily: 'Poppins', textShadow: '0px 0px 8px rgb(255,255,255)' }}>{language.nombre}</div>
                        <div className="shadow w-full bg-gray-700">
                            <div className="text-xs leading-none py-0 text-center text-white"
                                style={{
                                    width: language.progress, fontFamily: 'Poppins', height: '3px',
                                    background: 'linear-gradient(to right, #ed2a4a, #ff1ba6)'
                                }}>
                            </div>
                        </div>
                    </div>
                ))}

            </motion.div>

        </div>

    )
}
