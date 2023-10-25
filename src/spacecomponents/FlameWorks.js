import React from 'react';
import Space2 from '../assets/icons8-framework-64.png';
import '../style/programs.css';

function FlameWork() {
  return (
    <div className="programs-container">
      <div className="heading">
        <img src={Space2} alt="cardimage" />
        <h1>FlameWorks</h1>
      </div>
      <div className="programing-card">
        <li>React.js</li>
        <li>Ruby on Rails</li>
        <li>RSpec</li>
        <li>Capybara</li>
        <li>Selenium</li>
      </div>
    </div>
  );
}

export default FlameWork;
