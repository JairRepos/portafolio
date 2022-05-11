import React, { useContext } from 'react'

/* Rutas */
import { Link } from 'react-router-dom'
import { LanguageContext } from '../../useContext/LanguageContext'

/* Icons */
import iconEN from '../../assets/images/ee_uu.png';
import iconES from '../../assets/images/espana.png';

/* CSS */
import './Home.css'

export const NavDesktop = () => {

    const {setLanguage, language} = useContext(LanguageContext);
    
    const handleLanguage = () =>{
        setLanguage(state => !state);
    }    

    console.log(language);

    return (
        <div className="w-10/12 mx-32 hidden xs:hidden sm:hidden md:hidden lg:inline-flex absolute flex justify-between px-12 py-4" style={{ zIndex: 100 }}>
            <div className="flex text-white">
                {/* <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg> */}
                <Link to="/" className="font-light text-2xl tracking-normal" style={{ fontFamily: 'Poppins' }}>JAIR CAEL</Link>
            </div>
            <div className="flex">
                {/* <button className="text-white mx-2 bg-red-300" onClick={handleLanguage}>Español</button>
                <button className="text-white mx-2 bg-red-300" onClick={handleLanguageEN}>Inglés</button> */}
                
                <input type="checkbox" className="checkbox" id="checkbox" onChange={handleLanguage} />
                <label htmlFor="checkbox" className="label">                        
                    <img src={iconES} className="icon" alt="spanish"></img>
                    <img src={iconEN} className="icon" alt="english"></img>
                    {language ? 
                    <div className="ball absolute rounded-full top-0.5" style={{height:'22px', width: '22px', left: '3px', transform: 'translateX(0px)', backgroundColor:'#131313' }}></div>
                    : <div className="ball absolute rounded-full top-0.5" style={{height:'22px', width: '22px', left: '3px', transform: 'translateX(22px)', backgroundColor:'#131313' }}></div>
                    }
                </label>
                

                {/* <a href="https://www.linkedin.com/in/jair-cayahua-elescano-747354208/" target="_blank" rel="noreferrer" className="px-1">
                    <img src="http://www.premiereactors.com/wp-content/uploads/2014/08/LinkedIn_logo_initials.png" className="w-7 h-7" alt="linkedin-jair"></img>
                </a>
                <a href="https://www.linkedin.com/in/jair-cayahua-elescano-747354208/" target="_blank" rel="noreferrer" className="px-1">
                    <img src="https://www.sferalabs.cc/wp-content/uploads/github-logo-white.png" className="w-11 h-7" alt="linkedin-jair"></img>
                </a> */}
            </div>
        </div>
    )
}
