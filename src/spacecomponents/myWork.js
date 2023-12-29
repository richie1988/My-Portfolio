import React, { useState, useEffect } from 'react';
import '../style/myWork.css';
import '../style/popup.css';
import asset1 from '../assets/space-hub.png';
import asset2 from '../assets/leaderbord.png';
import asset3 from '../assets/mario-info.png';
import asset4 from '../assets/calculator.png';
import asset5 from '../assets/RIYI-Movies.png';
import asset6 from '../assets/employeesWeb.png';

function Project() {
  const projects = [
    {
      title: 'project 1',
      description: 'The Space traveler App is the project site by space-x that allows people to reserve the spaces and be able to see the information of the reservationa dn spaceships and dragons',
      image: asset1,
      language: ['HTML', 'CSS', 'React.js'],
      live: 'https://richie1988.github.io/SpaceTravelers-Hub/',
      github: 'https://github.com/richie1988/SpaceTravelers-Hub',
    },
    {
      title: 'project 2',
      description: 'This is the leaderboard website it makes sports lovers to recorad the scores from each teams sides Its Mobile vision app and Desktop as well',
      image: asset2,
      language: ['HTML', 'CSS', 'React'],
      live: 'https://richard-leaderboard-3833aa.netlify.app/',
      github: 'https://github.com/richie1988/Leader-Board',
    },
    {
      title: 'project 3',
      description: 'This the Website App for Super Mario you will get to know more about this Character in details the The release date and Game information',
      image: asset3,
      language: ['HTML', 'CSS', 'React.js'],
      live: 'https://github.com/richie1988/SuperMario',
      github: 'https://richardmarioinfo.onrender.com/',
    },
    {
      title: 'project 4',
      description: 'The Math App is the Mathematics Calculator you will be able to calculate all your Math operation.',
      image: asset4,
      language: ['HTML', 'CSS', 'React.js'],
      live: 'https://richard-math-app.onrender.com/',
      github: 'https://github.com/richie1988/Math-App',
    },
    {
      title: 'project 5',
      description: 'The movies App it will bring you into the world of movies list and series what are the trending movies or series its simple and usefull.',
      image: asset5,
      language: ['HTML', 'CSS', 'React.js'],
      live: 'https://github.com/richie1988/RiyaMovies',
      github: 'https://github.com/richie1988',
    },
    {
      title: 'project 6',
      description: 'This is the Employers App allowas the Employer to look for employees and Employee found there work collegue Essy to use and to navigate.',
      image: asset6,
      language: ['HTML', 'CSS', 'Ruby on rails'],
      live: 'https://github.com/richie1988/Yees_App',
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
