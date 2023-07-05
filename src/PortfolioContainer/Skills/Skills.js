import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    { name: 'HTML', level: 'Advanced' },
    { name: 'CSS', level: 'Advanced' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'React', level: 'Intermediate' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'SQL', level: 'Intermediate' },
    { name: 'C/C++', level: 'Intermediate' },
    { name: 'Python', level: 'Beginner' },
  ];

  return (
    <section className="skills-section">
      <h2 className="section-heading">Skills</h2>
      <div className="divider"></div>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div className="skill" key={index}>
            <span className="skill-name">{skill.name}</span>
            <span className="skill-level">{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
