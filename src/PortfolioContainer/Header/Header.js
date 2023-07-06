import React, { useState } from 'react';
import './Header.css'; // Import the corresponding CSS file

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleResumeClick = () => {
    window.open('Avinash.pdf', '_blank'); // Open the PDF file in a new tab
  };

    const handleProjectClick = () => {
      const projectSection = document.getElementById('project-section');
      projectSection.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSkillsClick = () => {
      const projectSection = document.getElementById('Skills-section');
      projectSection.scrollIntoView({ behavior: 'smooth' });
    };

    const handleContactClick = () => {
      const projectSection = document.getElementById('Contact-section');
      projectSection.scrollIntoView({ behavior: 'smooth' });
    };

    const handleEducationClick = () => {
      const projectSection = document.getElementById('Education-section');
      projectSection.scrollIntoView({ behavior: 'smooth' });
    };

    const handleAboutMeClick = () => {
      const projectSection = document.getElementById('AboutMe-section');
      projectSection.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <header className={`header ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item" onClick={handleAboutMeClick}>About Me</li>
          <li className="nav-item" onClick={handleEducationClick}>Education</li>
          <li className="nav-item" onClick={handleProjectClick}>Projects</li>
          <li className="nav-item" onClick={handleSkillsClick}>Skills</li>
          <li className="nav-item" onClick={handleResumeClick}>Resume</li>
          <li className="nav-item" onClick={handleContactClick}>Contact</li>
        </ul>
      </nav>
      <ul className="nav-item">Hello, thanks to viewing my portfolio.</ul>
      {/* <button className="mode-toggle" onClick={handleModeToggle}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button> */}
    </header>
  );
};

export default Header;
