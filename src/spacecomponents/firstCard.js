import React from 'react';
import space from '../assets/space image.png';
import Css from '../assets/css.png';
import Html from '../assets/html.png';
import Javascript from '../assets/javscript.png';
import Ruby from '../assets/ruby.png';
import Rect from '../assets/icons8-react-48.png';

function FirstCard() {
  return (
    <div className="first-Card">
      <div className="tech-image"><img src={space} alt="tech" /></div>
      <section className="left-card">
        <h2>
          Most used languages and flameworks i never stop learning.
        </h2>
        <ul className="my-stack">
          <li>
            <img src={Html} alt="css" />
            CSS
          </li>
          <li>
            <img src={Css} alt="css" />
            HTML
          </li>
          <li>
            <img src={Javascript} alt="css" />
            Javascript
          </li>
          <li>
            <img src={Rect} alt="css" />
            React
          </li>
          <li>
            <img src={Ruby} alt="css" />
            Ruby on Rails
          </li>
        </ul>
      </section>
    </div>
  );
}

export default FirstCard;
