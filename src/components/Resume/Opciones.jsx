import React, { useContext, useEffect } from 'react'

/* Data */
import datos from '../../db/datos';

/* React Animations */
import { motion } from "framer-motion"

/* useContext */
import { LanguageContext } from "../../useContext/LanguageContext";


/* App CSS */
import '../../App.css'

export const Opciones = ({ show, setShow }) => {
    
    const { links } = datos
    const {language} = useContext(LanguageContext);

    useEffect(() => {
        if (show === '1') {
            let bg1 = document.getElementById('1');
            let bg2 = document.getElementById('2');
            let bg3 = document.getElementById('3');
            bg1.style.background = 'linear-gradient(to right, #ed2a4a, #ff1ba6)';
            bg2.style.background = '#131313';
            bg3.style.background = '#131313';
        } else if (show === '2') {
            let bg1 = document.getElementById('1');
            let bg2 = document.getElementById('2');
            let bg3 = document.getElementById('3');
            bg1.style.background = '#131313';
            bg2.style.background = 'linear-gradient(to right, #ed2a4a, #ff1ba6)';
            bg3.style.background = '#131313';
        } else {
            let bg1 = document.getElementById('1');
            let bg2 = document.getElementById('2');
            let bg3 = document.getElementById('3');
            bg1.style.background = '#131313';
            bg2.style.background = '#131313';
            bg3.style.background = 'linear-gradient(to right, #ed2a4a, #ff1ba6)';
        }
    }, [show])

    return (
        <div className="col-span-1 grid gap-y-1 flex justify-center items-center
                        sm:mr-2
                        md:mr-0
                        lg:gap-y-3 lg:pb-0 lg:h-64 lg:mt-8">

            <div><motion.p initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 2 }}
                className="text-gray-500 text-xs md:text-sm mt-0 sm:mt-0 pb-5 lg:pb-2" style={{ fontFamily: 'Poppins' }}>{language ? 'MI RESUMEN' : 'MY RESUME'}</motion.p>
            </div>

            <div><motion.p initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ease: "easeOut", duration: 2 }}
                className="text-white text-2xl text-center md:text-left sm:text-2xl lg:text-2xl mb-5 " style={{ fontFamily: 'Poppins' }}>{language ? 'MI EXPERIENCIA' : 'MY EXPERIENCE'}</motion.p>
            </div>

            {links.map(link => (

                <motion.label initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.03, textShadow: '0px 0px 8px rgb(255,255,255)' }}

                    id={link.id} key={link.id} className="text-gray-200 font-medium text-center text-sm p-2 w-48 lg:py-3 mt-2 uppercase
                        bg-red-500 cursor-pointer lg:effect2"
                    onClick={() => setShow(link.id)} style={{ backgroundColor: '#131313', fontFamily: 'Poppins' }}
                >
                    {language ? link.nombre : link.nombreEN}
                </motion.label>
            ))
            }

        </div >
    )
}
