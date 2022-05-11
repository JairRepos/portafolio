import React from 'react'

/* Components */
import { NavBar } from '../Home/NavBar'
import { NavSide } from '../Home/NavSide'
import ContentServices from './ContentServices'

const Services = () => {
    return (
        <>
            <NavBar />
            <ContentServices />
            <NavSide />   
        </>
    )
}

export default Services
