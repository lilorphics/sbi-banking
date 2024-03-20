import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Bottom.css';

const Bottom = () => {
    const openLink = (url) => {
        window.open(url, '_blank');
      };
    
  return (
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
  )
}

export default Bottom
