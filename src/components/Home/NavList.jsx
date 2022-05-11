import React, { useContext } from 'react'

/* DATA */
import datos from '../../db/datos'

/* useContext */
import { LanguageContext } from "../../useContext/LanguageContext";

/* Rutas */
import { Link } from 'react-router-dom'

export const NavList = () => {

    const { menu } = datos;

    const { language } = useContext(LanguageContext);

    return (
        <div id='menu' className="w-full block hidden pb-4" style={{ backgroundColor: '#1a1a1a' }}>
            <div className="text-lg grid grid-cols-1 md:grid-cols-2">
                {menu.map(item => (
                    <div key={item.indice} className="grid grid-cols-4 gap-2 lg:hidden flex align-center">
                        <h1 className="text-xl text-white col-span-1 
                                        ml-3 mt-4 text-center px-2 py-1"
                            style={{ fontFamily: 'varsity', backgroundColor: '#131313' }}
                        >{item.indice}</h1>
                        <Link to={item.ruta}
                            className=" mt-4 lg:inline-block lg:mt-0 text-white mr-4 text-left col-span-3 bg-blue-500 px-2 py-1 font-medium"
                            style={{ fontFamily: 'Poppins', backgroundColor: '#131313' }}
                        >{language ? item.opcion : item.opcionEN}</Link>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-6 p-2" style={{ backgroundColor: '#131313' }}>
                <a href="https://www.linkedin.com/in/jair-cayahua-elescano-747354208/" className="px-1">
                    <img src="http://www.premiereactors.com/wp-content/uploads/2014/08/LinkedIn_logo_initials.png" className="w-8 h-8" alt="linkedin-jair"></img>
                </a>
                <a href="https://www.linkedin.com/in/jair-cayahua-elescano-747354208/" className="px-1">
                    <img src="https://www.sferalabs.cc/wp-content/uploads/github-logo-white.png" className="w-12 h-8 rounded" alt="linkedin-jair"></img>
                </a>
            </div>
        </div>
    )
}
