import React, { useState, useEffect } from 'react';
import '../style/myWork.css';
import '../style/popup.css';
import asset1 from '../assets/space-hub.png';
import asset2 from '../assets/leaderbord.png';
import asset3 from '../assets/mario-info.png';
import asset4 from '../assets/calculator.png';
import asset5 from '../assets/RIYI-Movies.png';
import 'font-awesome/css/font-awesome.min.css';

function Project() {
  const projects = [
    {
      title: 'project 1',
      description: 'This project has been the most exciting project I have ever created. It takes me back to when I used to create simple projects full of fun.',
      image: asset1,
      language: ['HTML', 'CSS', 'Javascript'],
      live: 'https://github.com/richie1988',
      github: 'https://github.com/richie1988',
    },
    {
      title: 'project 2',
      description: 'This project has been the most exciting project I have ever created. It takes me back to when I used to create simple projects full of fun.',
      image: asset2,
      language: ['HTML', 'CSS', 'React'],
      live: 'https://github.com/richie1988',
      github: 'https://github.com/richie1988',
    },
    {
      title: 'project 3',
      description: 'This project has been the most exciting project I have ever created. It takes me back to when I used to create simple projects full of fun.',
      image: asset3,
      language: ['HTML', 'CSS', 'React'],
      live: 'https://github.com/richie1988',
      github: 'https://github.com/richie1988',
    },
    {
      title: 'project 4',
      description: 'This project has been the most exciting project I have ever created. It takes me back to when I used to create simple projects full of fun.',
      image: asset4,
      language: ['HTML', 'CSS', 'React'],
      live: 'https://github.com/richie1988',
      github: 'https://github.com/richie1988',
    },
    {
      title: 'project 5',
      description: 'This project has been the most exciting project I have ever created. It takes me back to when I used to create simple projects full of fun.',
      image: asset5,
      language: ['HTML', 'CSS', 'React'],
      live: 'https://github.com/richie1988',
      github: 'https://github.com/richie1988',
    },
    {
      title: 'project 6',
      description: 'This project has been the most exciting project I have ever created. It takes me back to when I used to create simple projects full of fun.',
      image: asset2,
      language: ['HTML', 'CSS', 'React'],
      live: 'https://github.com/richie1988',
      github: 'https://github.com/richie1988',
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const closePopup = () => {
    setSelectedProject(null);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (selectedProject && event.target.classList.contains('popup')) {
        closePopup();
      }
    }

    if (selectedProject) {
      window.addEventListener('click', handleClickOutside);
    } else {
      window.removeEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [selectedProject]);

  const showProjectDetails = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="main-container">
      <h2>My Recent Work</h2>
      <div className="work-container">
        {projects.map((project) => (
          <div className="card" key={project.title}>
            <img src={project.image} alt="project" />
            <h3>{project.title}</h3>
            <div className="button-section">
              <p>{project.description}</p>
              <ul>
                {project.language.map((lang) => (
                  <li key={lang}>{lang}</li>
                ))}
              </ul>
              <button onClick={() => showProjectDetails(project)} type="button">See Project</button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="popup">
          <div className="popup-content">
            <h3>{selectedProject.title}</h3>
            <img src={selectedProject.image} alt="project" />
            <p>{selectedProject.description}</p>
            <ul>
              {selectedProject.language.map((lang) => (
                <li key={lang}>{lang}</li>
              ))}

            </ul>
            <div className="link-btn">
              <li>
                <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                  Live
                </a>
              </li>
              <li>
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </div>
            <button onClick={closePopup} type="button">
              <span className="visually-hidden">
                <i className="fa fa-times" aria-hidden="true" />
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
