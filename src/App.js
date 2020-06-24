import React from 'react';
import Header from './Containers/Header/Header';
import Greeting from './Containers/greeting/Greeting';
import Skills from './Containers/Skills/Skills';
import Portfolio from './Containers/Portfolio/Portfolio';

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