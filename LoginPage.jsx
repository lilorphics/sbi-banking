import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import Bottom from './Bottom';
import Logo from "../Assets/sbilogowhite.jpeg";
import VerificationPage from './VerificationPage';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showVerification, setShowVerification] = useState(false);

  const handleLogin = () => {
    if (username.match(/^[a-zA-Z0-9]+$/) && password.length >= 8) {
      setIsLoggedIn(true);
      setErrorMessage('');
      setShowVerification(true);
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <>
    <div className="login-page">
      <Link to="/" className="sbi-logo-link">
        <img src={Logo} alt="Logo" className='sbi-logo'/>
      </Link>
      <div className="login-container">
        {!isLoggedIn && !showVerification ? (
          <>
            <h2> LOGIN </h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Login</button>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
            <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
          </>
        ) : (
          showVerification && <VerificationPage />
        )}
      </div>
      <div className="create-account">
        <p>New account? <Link to="/signup"> SIGN UP</Link></p>
      </div>
    </div>
    <Bottom />
    </>
  );
};

export default LoginPage;
