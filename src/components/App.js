import React from 'react';
import Header from './Header/Header';
import Greeting from './greeting/Greeting';
import Skills from './Skills/Skills';
import Portfolio from './Portfolio/Portfolio';

const App = () => {
    return(
        <div>
          <Header />
          <Greeting />
          <Skills />
          <Portfolio />
        </div>
        
    );
}

export default App;