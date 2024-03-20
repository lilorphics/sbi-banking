import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './VerificationPage.css';

import Logo from "../Assets/sbilogowhite.jpeg";

const VerificationPage = () => {
  const [otp, setOtp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () => {
    // Perform validation logic for OTP
    if (!/^\d{6}$/.test(otp)) {
      setErrorMessage('Invalid OTP. Please enter a 6-digit number.');
    } else {
      // Logic to handle successful OTP verification
      setErrorMessage('');
      alert('OTP verified successfully!'); // For demonstration, replace with actual logic

      // Redirect to homepage
      // You can replace '/' with the actual path to the homepage
      window.location.href = '/';
    }
  };

  return (
    <>
    <div className="verification-page">
      <Link to="/" className="sbi-logo-link">
        <img src={Logo} alt="Logo" className="sbi-logo" />
      </Link>
      <div className="verification-container">
        <h2>Login Second Factor Authentication</h2>
        <div className="otp-input-container">
          <p>Enter the One Time Password sent to your mobile phone</p>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6}
            required
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
        <p>If you did not receive the High Security Password on SMS, you can <Link to="#">Click here</Link> to resend the OTP.</p>
      </div>
    </div>
    
    </>
  );
};

export default VerificationPage;
