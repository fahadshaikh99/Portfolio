import React from 'react';
import Header from './Containers/Header/Header';
import Greeting from './Containers/greeting/Greeting';
import Portfolio from './Containers/Portfolio/Portfolio';
import About from './Containers/About/About';
import Contact from './Containers/Contact/Contact';
import MySkills from './Containers/MySkills/MySkills';


const App = () => {
    return(
        <div>
          <Header />
          <Greeting />
          <MySkills />
          <Portfolio />
          <About />
          <Contact />
         
        </div>
        
    );
}

export default App;