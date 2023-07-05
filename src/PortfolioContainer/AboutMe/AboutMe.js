// AboutMe.js

import React from 'react';
import './AboutMe.css'; // Import the corresponding CSS file
import myImage from './myImage.jpg'; // Import your own image

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className="section-heading">About Me</h2>
      <h3 className="sub-heading">Why Choose Me</h3>
      <div className="divider1"></div>
      <div className="content">
        <div className="left-column">
          <img src={myImage} alt="My Image" className="my-image" />
        </div>
        <div className="right-column">
          <p className="description">
          I am a passionate and motivated individual who recently graduated with a B. Tech in Information Technology. As a fresher, I bring a fresh perspective and a strong desire to embark on a successful career in the IT sector.
          </p>
          <p className="description">
          Throughout my academic journey, I have acquired a comprehensive understanding of various aspects of Information Technology, including programming languages, database management, network security, and software development. I am well-versed in the latest industry trends and possess a solid foundation in the field.
          </p>
          <ul className="highlights">
            <li>Full Stack web</li>
            <li>Interactive Front End</li>
            <li>Database Management</li>
          </ul>
          <div className="buttons">
            <button className="button">Hire me</button>
            <button className="button">
                <a href="CVavi.pdf" target="_blank" className='button'>
                    Get Curriculum Vitae
                </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
