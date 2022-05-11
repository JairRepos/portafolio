
/* Imágenes de Portafolio */

import proyecto01 from '../assets/images/proyecto01.jpg';
import proyecto02 from '../assets/images/proyecto02.jpg';
import proyecto03 from '../assets/images/proyecto03.jpg';

/* -----> DATA <----- */

/* About me */

const menu = [
    { indice: '01', opcion: 'Inicio', opcionEN: 'Home', ruta: '/' },
    { indice: '02', opcion: 'Conóceme', opcionEN: 'About', ruta: '/about' },
    { indice: '03', opcion: 'Resumen', opcionEN: 'Resume', ruta: '/resume' },
    { indice: '04', opcion: 'Servicios', opcionEN: 'Services', ruta: '/services' },
    { indice: '05', opcion: 'Portafolio', opcionEN: 'Portfolio', ruta: '/portfolio' },
    { indice: '06', opcion: 'Contáctame', opcionEN: 'Contact me', ruta: '/contact' }
]

const descripcion =
{
    descES: 'Desarrollador Web (Frontend) con años de experiencia. Gracias a eso puedo adaptarme a los problemas propuestos de la empresa para así contribuir con su crecimiento, tanto de la empresa como el mío en el ámbito profesional. Adoro los retos y estoy en busca de ellos.',
    descEN: 'Web Developer (Frontend) with years of experience. Thanks to this, I can adapt to the proposed problems of the company in order to contribute to its growth, both for the company and mine in the professional field. I love challenges and I am looking for them.'
}

const frase =
{
    fraseES: '“Cambia tus pensamientos y cambiarás tu mundo.”',
    fraseEN: '“Change your thoughts and you will change your world.”'
}

/* About me - END */


/* ---------- Skills --------- */


/* Languages */

const links = [
    { id: '1', nombre: 'Mis Skills', nombreEN: 'My Skills' },
    { id: '2', nombre: 'Mi Educación', nombreEN: 'My Education' },
    { id: '3', nombre: 'Mis Trabajos', nombreEN: 'My Jobs' }
]

const langFrontend = [
    { id: '1', nombre: 'HTML 5', progress: '90%' },
    { id: '2', nombre: 'Javascript', progress: '85%' },
    { id: '3', nombre: 'React', progress: '80%' },
    { id: '4', nombre: 'CSS', progress: '85%' },
    { id: '5', nombre: 'Tailwind CSS', progress: '88%' },
]

const langBackend = [
    { id: '1', nombre: 'Node.js', progress: '85%' },
    { id: '2', nombre: 'MongoDB', progress: '75%' },
    { id: '3', nombre: 'Java', progress: '85%' },
    { id: '4', nombre: 'MySQL', progress: '80%' },
    { id: '5', nombre: 'Express', progress: '75%' },
]

/* Languages - END */


/* Estudios */

const estudios = [
    {
        id: '1', centro: 'Cibertec', curso: 'Computación e Informática', cursoEN: 'Computer and Information Technology', duracion: '2018 - 2021',
        desc: 'Estudios paralizados por el tema del Covid-19. A solo 2 ciclos de terminar la carrera.',
        descEN: 'Studies paralyzed by the issue of Covid-19. Only 2 cycles to finish the race.'
    },
    {
        id: '2', centro: 'Udemy', curso: 'React: De cero a experto (Hooks y MERN)', cursoEN: 'React: De cero a experto (Hooks y MERN)', duracion: '2021',
        desc: 'En proceso de aprendizaje. Decidido a dominar este maravilloso framework.',
        descEN: 'In the learning process. Determined to master this wonderful framework.'
    },
    {
        id: '3', centro: 'Udemy', curso: 'Node: De cero a experto', cursoEN: 'Node: De cero a experto', duracion: '2021',
        desc: 'Complementar mi educación con backend y ser fullstack MERN.',
        descEN: 'Complement my education with backend and be a fullstack MERN.'
    },
    {
        id: '4', centro: 'Platzi', curso: 'Inglés', cursoEN: 'English', duracion: '2021',
        desc: 'Una de mis metas a futuro es aprender inglés porque soy consciente que este idioma domina el mundo.',
        descEN: 'One of my future goals is to learn English because I am aware that it is the language that dominates the world.'
    }
]

/* Estudios - END */


/* Experience */

const experiencia = [
    {
        id: '1', empresa: 'MRG', empresaEN: 'MRG', cargo: 'Desarrollador Frontend y Backend', cargoEN: 'Frontend and Backend Developer', duracion: '2021 - Actual', duracionEN: '2021 - Current',
        desc: 'Maquetar la web y desarrollar funcionalidades en base a sus requerimientos.',
        descEN: 'Layout the website and develop functionalities based on your requirements.'
    },
    {
        id: '2', empresa: 'The Match Club', empresaEN: 'The Match Club', cargo: 'Desarrollador Frontend', cargoEN: 'Frontend Developer', duracion: '2020 - 2021', duracionEN: '2020 - 2021',
        desc: 'Desarrollo del sitio web y encargado de estrategias publicitarias.',
        descEN: 'Web site development and advertising strategy manager.'
    },
    {
        id: '3', empresa: '*Empresa*', empresaEN: '*Company*', cargo: '*Cargo*', cargoEN: '*Role*', duracion: '*Inicio - Fin*', duracionEN: '*Start - End*', desc: '*Descripción*', descEN: '*Description*'
    }
]

/* Experience - END */

/* ------------ Skills --------- END */


/* ------------ Portfolio ---------- */



const portafolio = [
    {
        id: '01', imgSrc: proyecto01, altImg: 'linktree-clone', titulo: 'Linktree-Clone',
        desc: 'Esta web permite unificar todas las redes sociales en un solo link.',
        linkWeb: 'https://linktree-clone-jaircael.netlify.app/'
    },
    {
        id: '02', imgSrc: proyecto02, altImg: 'portafolio-jaircael', titulo: 'Mi portafolio',
        desc: 'Desarrollé mi web desde cero para poder mostrar mis skills.',
        linkWeb: 'https://jaircael.netlify.app/'
    },
    {
        id: '03', imgSrc: proyecto03, altImg: 'app-gastos', titulo: 'App Gastos',
        desc: 'Esta app permite administrar mejor tus gastos y no despilfarrar el dinero.',
        linkWeb: 'https://presupuestoapp-jaircael.netlify.app/'
    }/* ,
    {
        id: '04', imgSrc:'../../assets/images/proyecto04.png', altImg: 'app-gastos', titulo: 'App Gastos', 
        desc: 'Esta app permite administrar mejor tus gastos y no despilfarrar el dinero.', 
        linkWeb: 'https://presupuestoapp-jaircael.netlify.app/'  
    } */
]

// eslint-disable-next-line
export default {
    descripcion,
    frase,
    menu,
    links,
    estudios,
    langFrontend,
    langBackend,
    experiencia,
    portafolio
}