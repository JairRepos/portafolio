import React from 'react'

/* Components */
import { NavBar } from '../Home/NavBar'
import { NavSide } from '../Home/NavSide'
import { ContentPortfolio } from './ContentPortfolio'

const Portfolio = () => {
    return (
        <>
            <NavBar />
            <ContentPortfolio />
            <NavSide />
        </>
    )
}

export default Portfolio
