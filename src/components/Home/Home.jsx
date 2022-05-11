import React from 'react'

/* Components */
import { NavBar } from './NavBar';
import { Background } from './Background';
import { Presentacion } from './Presentacion';
import { NavSide } from './NavSide';

import { motion } from "framer-motion"

const Home = () => {

    return (
        <>
            <NavBar />
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                <Background />
            </motion.div>
            <Presentacion />
            <NavSide />
        </>
    )
}

export default Home;