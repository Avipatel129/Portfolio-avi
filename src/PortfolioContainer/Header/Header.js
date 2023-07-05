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

  return (
    <header className={`header ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">About Me</li>
          <li className="nav-item">Education</li>
          <li className="nav-item">Projects</li>
          <li className="nav-item">Skills</li>
          <li className="nav-item" onClick={handleResumeClick}>Resume</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
      <li className="nav-item">I Need a Job Urgently. Ignore if any button donot work. Resume and CV button working sucessful</li>
      {/* <button className="mode-toggle" onClick={handleModeToggle}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button> */}
    </header>
  );
};

export default Header;
