import React from 'react';
import Space2 from '../assets/icons8-programming-64.png';
import '../style/programs.css';

function Language() {
  return (
    <div className="programs-container">
      <div className="heading">
        <img src={Space2} alt="cardimage" />
        <h1>Languages</h1>
      </div>
      <div className="programing-card">
        <li>JavaScript</li>
        <li>Ruby</li>
        <li>HTML</li>
        <li>CSS</li>
      </div>
    </div>
  );
}

export default Language;
