import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGlobe, faVideo, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState('normal');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Apply dark mode to the entire page
    document.body.classList.toggle('dark-mode');
  };

  const increaseFontSize = () => {
    setFontSize('large');
    // Increase font size of the entire page
    document.body.classList.add('large-font');
    document.body.classList.remove('small-font');
  };

  const decreaseFontSize = () => {
    setFontSize('small');
    // Decrease font size of the entire page
    document.body.classList.add('small-font');
    document.body.classList.remove('large-font');
  };

  const resetFontSize = () => {
    setFontSize('normal');
    // Reset font size of the entire page
    document.body.classList.remove('small-font', 'large-font');
  };

  const changeLanguage = () => {
    // Implement logic to change the language to Hindi
  };

  const startScreenReader = () => {
    // Implement logic to start screen reader
  };
  return (
    <header className={`header ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="logo">
        <Link to="/"> SBI </Link>
      </div>
      <nav className="nav-links">
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/login"> Login </Link></li>
          <li><Link to="/aboutus"> Customer Care </Link></li>
          <li><button onClick={toggleDarkMode} title="Toggle Dark Mode">
            {isDarkMode ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </button></li>
          <li><button onClick={increaseFontSize} title="Increase Font Size"> A+ </button></li>
          <li><button onClick={decreaseFontSize} title="Decrease Font Size"> A- </button></li>
          <li><button onClick={resetFontSize} title="Reset Font Size">A</button></li>
          <li><button onClick={changeLanguage} title="Change Language"><FontAwesomeIcon icon={faGlobe} /></button></li>
          <li><button onClick={startScreenReader} title="Start Screen Reader"><FontAwesomeIcon icon={faVideo} /></button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
