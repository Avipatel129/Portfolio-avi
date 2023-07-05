import React from 'react';
import './Education.css'; // Import the corresponding CSS file

const Education = () => {
  return (
    <section className="education-section">
      <h2 className="section-heading">Education</h2>
      <div className="divider1"></div>
      <div className="education-box">
        <div className="school-name">
          <h3 className='name'>Sikkim Manipal Institute of Technology, Sikkim</h3>
          <p className="date">June 2019 - July 2023</p>
        </div>
        <div className="description">
          <li>Bachelor of Technology in Information Technology</li>
        </div>
      </div>
      <div className="education-box">
        <div className="school-name">
          <h3 className='name'>Nalanda Academy, Rajasthan</h3>
          <p className="date">July 2016 - June 2019</p>
        </div>
        <div className="description">
          <li>Senior Secondary Schools</li>
        </div>
      </div>
      <div className="education-box">
        <div className="school-name">
          <h3 className='name'>Vikash the concept school, Odisha</h3>
          <p className="date">March 2014 - June 2016</p>
        </div>
        <div className="description">
          <li>High school</li>
        </div>
      </div>
    </section>
  );
};

export default Education;
