import React from 'react'

/* Components */
import { NavBar } from '../Home/NavBar'
import { NavSide } from '../Home/NavSide';
import { ContentAbout } from './ContentAbout';

const About = () => {
    return (
        <>
            <NavBar />
            <ContentAbout />
            <NavSide />
        </>
    )
}

export default About;
