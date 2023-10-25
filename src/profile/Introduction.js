import React from 'react';
import Me from './myImages/myself.jpg';
import Linkedin from './myImages/icons8-linkedin-48.png';

function Introduction() {
  return (
    <div className="intro_section">
      <img src={Me} alt="me" />
      <h1>Richard Sikaonga</h1>
      <h2>Software Developer</h2>
      <div className="link_section">
        <button className="resume" type="button">
          <a href="https://docs.google.com/document/d/1oFkbE3t4cRRN9bvLwj1a__3MGMmj5D4OYIJrtD1v0Ho/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            Get Resume
          </a>
        </button>
        <li className="linkedin">
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="linkedin" />
            Linkedin
          </a>
        </li>
      </div>
    </div>
  );
}
export default Introduction;
