import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

/* Components */
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

/* Spinner */
import GridLoader from "react-spinners/GridLoader";

/* Framer Motion */
import { motion } from "framer-motion"

import './App.css'
/* import Error404 from './components/Error404/Error404'; */

import { LanguageContext } from './useContext/LanguageContext';


function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  const [language, setLanguage] = useState(true);

  console.log(language);

  return (

    <>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Router>
          <Switch>
            {loading
              ? <motion.div initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 3 }}

                className="preloader"><GridLoader color={"#DB2777"} loading={loading} size={25} /></motion.div>

              : <Route exact path="/" component={Home}></Route>
            }

            <Route exact path="/about" component={About}></Route>
            <Route exact path="/resume" component={Resume}></Route>
            <Route exact path="/services" component={Services}></Route>
            <Route exact path="/portfolio" component={Portfolio}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </Router>
      </LanguageContext.Provider>
    </>
  );
}

export default App;
