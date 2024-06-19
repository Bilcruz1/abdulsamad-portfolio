import React from 'react';

import Homee from './Components/Homee';
import Header from './Components/header';
import Portfolio from './Components/Portfolio';
import Certificate from './Components/Certificate';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Media from './Components/Media';

function App() {
  return (
    <div className="bg-[#0A0A0A]">
      <Header />

      <Homee />
      <Portfolio />

      <div className="bg-[#0A0A0A]">
        <Experience />
        <Certificate />
        <Skills />
        <Contact />
        <Media />
      </div>
    </div>
  );
}

export default App;
