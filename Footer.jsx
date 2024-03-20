import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Loans</h3>
          <ul>
            <li><a href="#">Personal Loans</a></li>
            <li><a href="#">Home Loans</a></li>
            <li><a href="#">Auto Loans</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Cards</h3>
          <ul>
            <li><a href="#">Credit Cards</a></li>
            <li><a href="#">Debit Cards</a></li>
            <li><a href="#">Prepaid Cards</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Investments</h3>
          <ul>
            <li><a href="#">Savings Accounts</a></li>
            <li><a href="#">Mutual Funds</a></li>
            <li><a href="#">Stocks</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li><a href="#">Company Overview</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Important Links</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-disclaimer">
        <h3>Important Note-</h3>
        <p>State Bank Of India never asks for your Pin No./ User Id / Passwords through Phone call/ SMS / e-mails. Any such request could be an attempt to withdraw money from your account. NEVER share your details with anyone. We want you to be secure.</p>
      </div>
      <div className="footer-bottom">
        <div className="copyright">
          &copy; {new Date().getFullYear()} State Bank Of India. All rights reserved.
        </div>
        <div className="social-media">
          <button className="link-button" onClick={() => openLink('https://www.instagram.com')}><FontAwesomeIcon icon={faInstagram} /></button>
          <button className="link-button" onClick={() => openLink('https://www.linkedin.com')}><FontAwesomeIcon icon={faLinkedin} /></button>
          <button className="link-button" onClick={() => openLink('https://github.com')}><FontAwesomeIcon icon={faGithub} /></button>
          <button className="link-button" onClick={() => openLink('https://www.facebook.com')}><FontAwesomeIcon icon={faFacebook} /></button>
          <button className="link-button" onClick={() => openLink('https://twitter.com')}><FontAwesomeIcon icon={faTwitter} /></button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
