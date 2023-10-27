import React, { useState } from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import logo from '../assets/RISHÜ -logos.jpeg';
import './Space.css';
import '../profile/profile.css';
import '../style/MobileMenu.css';
import HomePage from './SpaceHome';
import ContactPage from './Contact';
import ProjectPage from './Projects';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
      <div className="particles">
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
      </div>
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
      </nav>
    </header>
  );
}

function Space() {
  return (
    <Router basename="/My-Space">
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
