import React from 'react';
import projectData from '../context/project.json';
import '../styles/project.css';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="underline"></div>

      {projectData.map((project, index) => (
        <React.Fragment key={project.id}>
          <div className={`project-row ${index % 2 !== 0 ? 'reverse' : ''}`}>
            <div className="project-image-container">
              <img src={project.image} alt={project.name} className="project-image" />
            </div>
            <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <button
                className="project-btn"
                onClick={() => navigate(`/single_project/${project.id}`)}
              >
                Visit My Project
              </button>
            </div>
          </div>

          {index < projectData.length - 1 && <hr className="project-divider" />}
        </React.Fragment>
      ))}
    </section>
  );
};

export default Projects;
