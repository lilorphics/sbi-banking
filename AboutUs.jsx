import React from 'react';
import './AboutUs.css'; 
import Bottom from './Bottom';
import cust from "../Assets/customercare.avif";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';

const AboutUs = () => {
    const openLink = (url) => {
      window.open(url, '_blank');
    };

    const handleSubmit = () => {
      // Logic to handle form submission
      alert('Complaint submitted successfully!');
      // Add your submission logic here
    };

  return (
    <>
    <div className="about-us-page">
      <div className="content-container">
        <div className="icon-container">
          {/* Big icon */}
          <img src={cust} alt="customercare" className="customercare" />
        </div>
        <div className="text-container">
          {/* Customer Request and Complaint */}
          <h2>Customer Request and Complaint</h2>
          {/* Input box for account number */}
          <div className="input-container">
            <label htmlFor="accountNumber">Account Number:</label>
            <input type="text" id="accountNumber" maxLength="16" />
          </div>
          {/* Your Complaint */}
          <div className="input-container">
            <label htmlFor="complaint">Your Complaint:</label>
            <textarea id="complaint" maxLength="200"></textarea>
          </div>
          {/* Submit Button */}
          <button className="submit-button" onClick={handleSubmit}>Submit</button>
          {/* Customer Care Number */}
          <p>Customer Care Number: 9999991122</p>
          <p>For More Contact Us on - </p>
          {/* Social Media Icons */}
          <div className="social-media-icons">
            <button className="link-button" onClick={() => openLink('https://www.instagram.com')}><FontAwesomeIcon icon={faInstagram} /></button>
            <button className="link-button" onClick={() => openLink('https://www.linkedin.com')}><FontAwesomeIcon icon={faLinkedin} /></button>
            <button className="link-button" onClick={() => openLink('https://github.com')}><FontAwesomeIcon icon={faGithub} /></button>
            <button className="link-button" onClick={() => openLink('https://www.facebook.com')}><FontAwesomeIcon icon={faFacebook} /></button>
            <button className="link-button" onClick={() => openLink('https://twitter.com')}><FontAwesomeIcon icon={faTwitter} /></button>
          </div>
        </div>
      </div>
    </div>
    <Bottom/>
    </>
  );
};

export default AboutUs;
