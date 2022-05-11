import React, { useContext } from 'react'

/* Components */
import { NavList } from './NavList';

/* Rutas */
import { Link } from 'react-router-dom';

/* Icons */
import iconEN from '../../assets/images/ee_uu.png';
import iconES from '../../assets/images/espana.png';

/* useContext */
import { LanguageContext } from '../../useContext/LanguageContext';

/* CSS */
import './Home.css'


export const NavResponsive = () => {

    const handleClick = () => {
        const menu = document.querySelector('#menu');
        menu.classList.toggle('hidden');
    }

    const {setLanguage, language} = useContext(LanguageContext);
    
    const handleLanguage = () =>{
        setLanguage(state => !state);
    }    

    console.log(language);

    return (

        <nav className="flex items-center justify-between flex-wrap p-6 absolute w-full lg:hidden" style={{ zIndex: 100 }}>
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                {/* <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg> */}
                <Link to="/"><span className="font-normal text-xl lg:text-3xl tracking-tight">JAIR CAEL</span></Link>
            </div>
            
            
                
        
            <div className="block lg:hidden flex items-center">
                <input type="checkbox" className="checkbox" id="checkbox" onChange={handleLanguage} />
                <label htmlFor="checkbox" className="label">                        
                    <img src={iconES} className="icon" alt="spanish"></img>
                    <img src={iconEN} className="icon" alt="english"></img>
                    {language ? 
                    <div className="ball absolute rounded-full top-0.5" style={{height:'22px', width: '22px', left: '3px', transform: 'translateX(0px)', backgroundColor:'#131313' }}></div>
                    : <div className="ball absolute rounded-full top-0.5" style={{height:'22px', width: '22px', left: '3px', transform: 'translateX(22px)', backgroundColor:'#131313' }}></div>
                }
                </label>

                <button id='boton' className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 text-white ml-2" onClick={handleClick}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <NavList />
        </nav>
    )
}
