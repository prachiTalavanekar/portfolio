import React from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../context/project.json';
import '../styles/singleproject.css';

const SingleProject = () => {
  const { project } = useParams(); // `project` is the param name used in App.jsx
  const selectedProject = projectData.find(p => p.id.toString() === project);

  if (!selectedProject) {
    return <div className="not-found">Project not found</div>;
  }

  return (
    <section className="single-project-section">
      <h2>{selectedProject.name}</h2>
      <div className="underline"></div>
      <div className="single-project-content">
        <img src={selectedProject.image} alt={selectedProject.name} className="project-image" />
        <p>{selectedProject.description}</p>
        <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
          <button className="project-btn">View Live</button>
        </a>
      </div>
    </section>
  );
};

export default SingleProject;
