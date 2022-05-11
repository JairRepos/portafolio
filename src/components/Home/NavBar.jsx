import React from 'react'

/* Components */
import { NavDesktop } from './NavDesktop';
import { NavResponsive } from './NavResponsive';

export const NavBar = () => {

    return (
        <>
            {/* Desktop Menu */}
            <NavDesktop />

            {/* Responsive Menu */}
            <NavResponsive />
        </>
    )
}
