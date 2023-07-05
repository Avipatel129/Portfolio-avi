import React from 'react';
import './Projects.css'
const Projects = () => {
  const projectsData = [
    {
      name: 'Student Information System',
      link: 'https://github.com/Avipatel129/Student-information-sytsterm',
      completed: 'June 2022',
      description: 'Helps to store student information, update details and search student details.',
    },
    {
      name: 'Health-Care Chatbot',
      link: 'https://github.com/Avipatel129/Healthcae_chatbot',
      completed: 'March 2023',
      description: 'User can check their symptoms, search Doctor detail, hospital detair nearby and Chatbot that helps used to get information of their diagnosis and reloacate to web page.',
    },
    // Add more project objects as needed
  ];

  return (
    <section className="projects-section">
      <h2 className="section-heading1">Projects</h2>
      <div className="divider1"></div>
      {projectsData.map((project, index) => (
        <div className="project" key={index}>
          <h3>{project.name}</h3>
          <p>
            <strong>Project Link:</strong> <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
          </p>
          <p>
            <strong>Completed:</strong> {project.completed}
          </p>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;
