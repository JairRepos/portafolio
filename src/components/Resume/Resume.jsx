import React from 'react'

/* Components */
import { NavBar } from '../Home/NavBar'
import { NavSide } from '../Home/NavSide'
import { ContentResume } from './ContentResume'


const Resume = () => {
    return (
        <>
            <NavBar />
            <ContentResume />
            <NavSide />
        </>
    )
}

export default Resume
