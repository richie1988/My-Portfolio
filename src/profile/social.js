import React from 'react';
import Twitter from './myImages/twitter.svg';
import Facebook from './myImages/facebook.svg';
import Instagram from './myImages/instagram.svg';
import Github from './myImages/github.svg';

function Interest() {
  return (
    <div className="social-container">
      <div className="social_media">
        <li>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
            <img src={Twitter} alt=" twitter" />
          </a>
        </li>
        <li>
          <a href="https://web.facebook.com/profile.php?id=100092164841273" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} alt=" facebook" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/richiesik/" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="instagram" />
          </a>
        </li>
        <li>
          <a href="https://github.com/richie1988" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt=" github" />
          </a>
        </li>
      </div>
    </div>
  );
}

export default Interest;
