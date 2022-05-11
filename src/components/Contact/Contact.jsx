import React from 'react'

/* Components */
import { NavBar } from '../Home/NavBar'
import { NavSide } from '../Home/NavSide'
import { ContentContact } from './ContentContact'

const Contact = () => {
    return (
        <>
            <NavBar />
            <ContentContact />
            <NavSide />
        </>
    )
}

export default Contact
