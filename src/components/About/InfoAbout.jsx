import React, { useContext } from 'react'

/* React Animations */
import { motion } from "framer-motion"

/* Iconos */
import { FaBirthdayCake } from 'react-icons/fa'
import { AiFillPhone } from 'react-icons/ai'
import { MdPlace } from 'react-icons/md'
import { RiKakaoTalkFill } from 'react-icons/ri'

/* useContext */
import { LanguageContext } from "../../useContext/LanguageContext";

export const InfoAbout = () => {

    const {language} = useContext(LanguageContext);
    

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-4 flex justify-center mt-7 md:mt-10 mb-8 md:mb-5">

            <motion.div initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="grid grid-cols-4 col-span-1 gap-x-1 effect">
                <div className="p-3 col-span-1 text-center text-white" style={{ backgroundColor: '#131313', fontFamily: 'Poppins' }}>
                    <RiKakaoTalkFill className="text-md mx-auto " />
                </div>
                <div className="text-white p-3 col-span-3 text-left text-sm"
                    style={{ backgroundColor: '#131313', fontFamily: 'Poppins' }}>{language ? 'Inglés básico' : 'Basic english'}
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 1 }}

                className="grid grid-cols-4 col-span-1 gap-x-1 effect">
                <div className="p-3 col-span-1 text-center text-white" style={{ backgroundColor: '#131313', fontFamily: 'Poppins' }}>
                    <AiFillPhone className="text-xl mx-auto" />
                </div>
                <div className="text-white p-3 col-span-3 text-left text-sm"
                    style={{ backgroundColor: '#131313', fontFamily: 'Poppins' }}>+51 933873978
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 1 }}

                className="grid grid-cols-4 col-span-1 gap-x-1 effect">
                <div className="p-3 col-span-1 text-center text-red-800" style={{ backgroundColor: '#131313', fontFamily: 'Poppins' }}>
                    <MdPlace className="text-xl mx-auto animate-bounce" />
                </div>
                <div className="text-white p-3 col-span-3 text-left text-sm"
                    style={{ backgroundColor: '#131313', fontFamily: 'Poppins' }}>{language ? 'Lima, Perú' : 'Lima, Peru'}
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9, duration: 1 }}

                className="grid grid-cols-4 col-span-1 gap-x-1 effect">
                <div className="p-3 col-span-1 text-center text-white" style={{ backgroundColor: '#131313', fontFamily: 'Poppins' }}>
                    <FaBirthdayCake className="text-lg mx-auto" />
                </div>
                <div className="text-white p-3 col-span-3 text-left text-sm"
                    style={{ backgroundColor: '#131313', fontFamily: 'Poppins' }}>{language ? '16-02-1996' : '1996-02-16'}
                </div>
            </motion.div>
        </div>


    )
}
