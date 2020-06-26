import React from 'react';
import Header from './Containers/Header/Header';
import Greeting from './Containers/greeting/Greeting';
import Skills from './Containers/Skills/Skills';
import Portfolio from './Containers/Portfolio/Portfolio';
import About from './Containers/About/About';
import Contact from './Containers/Contact/Contact';

const App = () => {
    return(
        <div>
          <Header />
          <Greeting />
          <Skills />
          <Portfolio />
          <About />
          <Contact />
        </div>
        
    );
}

export default App;