import React, { useState } from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import logo from '../assets/My-Logo.png';
import './Space.css';
import '../profile/profile.css';
import '../style/MobileMenu.css';
import HomePage from './SpaceHome';
import ContactPage from './Contact';
import ProjectPage from './Projects';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isButtonOnRight, setIsButtonOnRight] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleButtonPosition = () => {
    setIsButtonOnRight(!isButtonOnRight);

    // Change background and text color when clicking the button
    if (isButtonOnRight) {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      toggleMenu();
    }
  };

  return (
    <header className="nav-container">
      <li>
        <Link className="Space-logo" to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </li>
      <nav className="nav-bar">
        <div
          className={`mobile-menu-icon ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          onKeyPress={handleKeyPress}
          role="button"
          tabIndex={0}
        >
          <i className={`fa ${menuOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true" />
        </div>
        <div className={`mobile-menu ${menuOpen ? 'open' : 'close'}`}>
          <Link className="item" to="/Contact" onClick={toggleMenu}>
            Contact
          </Link>
          <Link className="item project" to="/Project" onClick={toggleMenu}>
            Project
          </Link>
        </div>
        <span className="mobile-item">
          <Link className="item" to="/Contact">
            Contact
          </Link>
          <Link className="item project" to="/Project">
            Project
          </Link>
        </span>
        <div className="button-container">
          <button
            className={`move-button ${isButtonOnRight ? 'right' : 'left'}`}
            type="button"
            onClick={toggleButtonPosition}
          >
            <span className="button-icon">→</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

function Space() {
  return (
    <Router basename="/My-Portfolio">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Project" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

export default Space;
