import React from 'react';
import Header from './PortfolioContainer/Header/Header';
import Profile from './PortfolioContainer/Profile/Profile';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Education from './PortfolioContainer/Education/Education';
import Projects from './PortfolioContainer/Projects/Projects';
import Skills from './PortfolioContainer/Skills/Skills';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <div className="section-gap" id='AboutMe-section'></div> {/* Add a div with a class for the gap */}
      <AboutMe />
      <div className="section-gap" id='Education-section'></div> {/* Add a div with a class for the gap */}
      <Education />
      <div className="section-gap" id="project-section"></div> {/* Add a div with a class for the gap */}
      <Projects />
      <div className="section-gap" id='Skills-section'></div>
      <Skills />
      <div className="section-gap" id='Contact-section'></div>
      <ContactMe />
    </div>
  );
}

export default App;


// import Header from './PortfolioContainer/Header/Header'
// import Profile from './PortfolioContainer/Profile/Profile'
// import AboutMe from './PortfolioContainer/AboutMe/AboutMe'
// import Education from './PortfolioContainer/Education/Education';
// import Projects from './PortfolioContainer/Projects/Projects';
// import './App.css';


// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Profile />
//       <AboutMe />
//       <Education />
//       <Projects />
//     </div>
//   );
// }

// export default App;
