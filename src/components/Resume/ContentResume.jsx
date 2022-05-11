import React, { useState } from 'react'

/* Components */
import { Languages } from './Languages'
import { Estudios } from './Estudios';
import { Opciones } from './Opciones';
import { Experiencia } from './Experiencia';

/* React Animations */
import { motion } from "framer-motion"

export const ContentResume = () => {

    const [show, setShow] = useState('1');

    return (
        <>

            <motion.div

                className="h-screen absolute w-full mx-auto justify-center  content-center     
                sm:w-full sm:mx-auto sm:px-16                  
                md:w-full md:mx-auto
                lg:w-full lg:mx-auto lg:px-12 lg:-my-10
                xl:px-40"
            >

                <div className="grid grid-cols-1 w-full mx-auto px-8 mt-24
                                sm:mx-auto sm:pb-5 
                                md:mx-auto                                                      
                                lg:grid-cols-5 lg:mt-64 lg:gap-x-2">

                    <Opciones setShow={setShow} show={show} />

                    <div className="col-span-1 lg:col-span-4 ml-0 md:ml-5">

                        {show === '1' ? <Languages /> : show === '2' ? <Estudios /> : <Experiencia />}

                    </div>
                </div>

            </motion.div>
        </>
    )
}
