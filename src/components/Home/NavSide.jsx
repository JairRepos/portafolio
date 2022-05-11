import React, { useContext } from 'react'

/* React Icons */
import { FaUserCircle } from 'react-icons/fa';
import { IoIosBookmarks } from 'react-icons/io';
import { AiTwotoneContainer } from 'react-icons/ai';
import { HiPuzzle } from 'react-icons/hi';
import { MdContactMail } from 'react-icons/md';
import { ImHome } from 'react-icons/im';

/* React Tooltip */
import ReactTooltip from 'react-tooltip';

/* Rutas */
import { Link } from 'react-router-dom';

/* App CSS */
import '../../App.css';

/* useContext */
import { LanguageContext } from "../../useContext/LanguageContext";

export const NavSide = () => {

    const { language } = useContext(LanguageContext);

    return (
        <div className="hidden lg:block fixed right-5 ml-4 top-64 flex flex-col items-end justify-center bg-gray-600 rounded p-3 y-2" style={{ background: '#131313' }}>

            <Link to="/" data-tip data-for="inicio"><ImHome color="white" className="mb-6 text-xl" /></Link>
            <ReactTooltip id="inicio" place="left" effect="solid" type="error" delayShow={300} offset={{ left: '10' }}
                className="tooltip-edit1" backgroundColor="#be185d"><span style={{ fontFamily: 'Poppins', fontWeight: 400, textTransform: 'uppercase' }}>{language ? 'Inicio' : 'Home'}</span></ReactTooltip>

            <Link to="/about" data-tip data-for="conoceme"><FaUserCircle color="white" className="mb-6 text-xl" /></Link>
            <ReactTooltip id="conoceme" place="left" effect="solid" type="error" delayShow={300} offset={{ left: '10' }}
                className="tooltip-edit" backgroundColor="#be185d"><span style={{ fontFamily: 'Poppins', fontWeight: 400, textTransform: 'uppercase' }}>{language ? 'Sobre Mí' : 'About'}</span></ReactTooltip>

            <Link to="/resume" data-tip data-for="resume"><AiTwotoneContainer color="white" className="mb-6 text-xl" /></Link>
            <ReactTooltip id="resume" place="left" effect="solid" type="error" delayShow={300} offset={{ left: '10' }}
                className="tooltip-edit" backgroundColor="#be185d"><span style={{ fontFamily: 'Poppins', fontWeight: 400, textTransform: 'uppercase' }}>{language ? 'Resumen' : 'Resume'}</span></ReactTooltip>

            <Link to="/services" data-tip data-for="services"><HiPuzzle color="white" className="mb-6 text-xl" /></Link>
            <ReactTooltip id="services" place="left" effect="solid" type="error" delayShow={300} offset={{ left: '10' }}
                className="tooltip-edit" backgroundColor="#be185d"><span style={{ fontFamily: 'Poppins', fontWeight: 400, textTransform: 'uppercase' }}>{language ? 'Servicios' : 'Services'}</span></ReactTooltip>

            <Link to="/portfolio" data-tip data-for="portafolio"><IoIosBookmarks color="white" className="mb-6 text-xl" /></Link>
            <ReactTooltip id="portafolio" place="left" effect="solid" type="error" delayShow={300} offset={{ left: '10' }}
                className="tooltip-edit" backgroundColor="#be185d"><span style={{ fontFamily: 'Poppins', fontWeight: 400, textTransform: 'uppercase' }}>{language ? 'Portafolio' : 'Portfolio'}</span></ReactTooltip>

            <Link to="/contact" data-tip data-for="contactame"><MdContactMail color="white" className="mb-1 text-xl" /></Link>
            <ReactTooltip id="contactame" place="left" effect="solid" type="error" delayShow={300} offset={{ left: '10' }}
                className="tooltip-edit" backgroundColor="#be185d" ><span style={{ fontFamily: 'Poppins', fontWeight: 400, textTransform: 'uppercase' }}>{language ? 'Contáctame' : 'Contact me'}</span></ReactTooltip>

        </div>
    )
}
