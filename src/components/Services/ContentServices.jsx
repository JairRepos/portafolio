import React, { useContext } from 'react'

/* React Icons */
import { RiComputerLine } from 'react-icons/ri'
import { DiResponsive } from 'react-icons/di'
import { ImMobile } from 'react-icons/im'
import { FaUserCheck } from 'react-icons/fa'

/* useContext */
import { LanguageContext } from "../../useContext/LanguageContext";

/* React Animations */
import { motion } from "framer-motion"


import './Services.scss';

const ContentServices = () => {

    const { language } = useContext(LanguageContext);

    return (
        <div className="w-screen h-screen flex justify-center items-center" style={{ fontStyle: 'Poppins' }}>
            <div className="w-11/12 h-full">
                <motion.div initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeOut", duration: 2 }}

                    className="pt-28 text-center">
                    <span className="text-gray-500 text-md uppercase">{language ? 'Lo que hago' : 'What I Do'}</span>
                    <h2 className="text-white text-4xl uppercase mt-3">{language ? 'Servicios' : 'Services'}</h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-4 w-full mx-auto py-14 px-0
                                sm:grid-cols-2
                                md:w-11/12 md:grid-cols-2 md:gap-4
                                lg:w-10/12 lg:px-12
                                xl:px-24
                                ">

                    <motion.div initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1.5 }}

                        className="flex justify-center items-center w-full backdiv">
                        <div className="relative w-full h-48 md:h-52 service-box">
                            <span class="number pointer-events-none text-white">01</span>
                            <div className="text-center text-white my-5">
                                <RiComputerLine className="mx-auto" style={{ color: '#cacaca', fontSize: '70px' }} />
                            </div>
                            <h2 class="text-md font-semibold text-white uppercase select-none type-service">{language ? 'Desarrollo Web' : 'Web Development'}</h2>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1.5 }}

                        className="flex justify-center items-center w-full backdiv">
                        <div className="relative w-full h-48 md:h-52 service-box">
                            <span class="number pointer-events-none text-white">02</span>
                            <div className="text-center text-white my-5">
                                <ImMobile className="mx-auto" style={{ color: '#cacaca', fontSize: '70px' }} />
                            </div>
                            <h2 class="text-md font-semibold text-white uppercase select-none text-center type-service">{language ? 'Aplicaciones móviles' : 'mobile apps'}</h2>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 1.5 }}

                        className="flex justify-center items-center w-full backdiv">
                        <div className="relative w-full h-48 md:h-52 service-box">
                            <span class="number pointer-events-none text-white">03</span>
                            <div className="text-center text-white my-5">
                                <FaUserCheck className="mx-auto" style={{ color: '#cacaca', fontSize: '70px' }} />
                            </div>
                            <h2 class="text-md font-semibold text-white uppercase select-none type-service">{language ? 'Servicio UI/UX' : 'Service UI/UX'}</h2>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 1.5 }}

                        className="flex justify-center items-center w-full backdiv">
                        <div className="relative w-full h-48 md:h-52 service-box">
                            <span class="number pointer-events-none text-white">04</span>
                            <div className="text-center text-white my-5">
                                <DiResponsive className="mx-auto" style={{ color: '#cacaca', fontSize: '70px' }} />
                            </div>
                            <h2 class="text-md font-semibold text-white uppercase select-none type-service">{language ? 'Diseño Responsivo' : 'Responsive Design'}</h2>
                        </div>
                    </motion.div>

                </div>

            </div>
        </div>
    )
}

export default ContentServices
