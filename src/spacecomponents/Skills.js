import React from 'react';
import Space2 from '../assets/icons8-skills-64.png';
import '../style/programs.css';

function Skills() {
  return (
    <div>
      <div className="second-card">
        <div className="heading">
          <img src={Space2} alt="cardimage" />
          <h1>Skills</h1>
        </div>
        <div className="programing-card">
          <li>Database Management</li>
          <li>Version Control</li>
          <li>CLI</li>
          <li>API Design</li>
          <li>Web Development</li>
        </div>
      </div>
    </div>
  );
}

export default Skills;
