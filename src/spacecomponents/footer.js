import React from 'react';
import '../style/footer.css';
import github from '../assets/icons8-github-90.png';
import Microverse from '../assets/microverse.png';
import freecode from '../assets/freecodecamp.png';

export default function Footer() {
  return (
    <div className="footer-container">
      <h2>Sponsors</h2>
      <footer className="footer">
        <ul>
          <li><img src={github} alt="microvere" /></li>
          <li><img src={Microverse} alt="github" /></li>
          <li><img src={freecode} alt="freeCodeCamp" /></li>

        </ul>
        <p> © 2023 | Richard Sikaonga | All rights reserved. Email: richiessikaonga@outlook.com</p>
      </footer>
    </div>
  );
}
