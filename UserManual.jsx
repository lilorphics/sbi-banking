import React from 'react';
import './UserManual.css'; 

const UserManual = () => {
  return (
    <div className="user-manual-container"> {/* Apply styling container */}
      <h1>User Manuals for SBI</h1>
      <p>Welcome to the user manuals section for SBI. Below, you'll find guides and manuals to help you navigate through various services provided by SBI.</p>
      <h2>Personal Banking</h2>
      <ul>
        <li><a href="#">How to Open a Savings Account</a></li>
        <li><a href="#">How to Apply for a Personal Loan</a></li>
        <li><a href="#">Using Internet Banking Services</a></li>
        {/* Add more personal banking manuals */}
      </ul>
      <h2>Corporate Banking</h2>
      <ul>
        <li><a href="#">How to Open a Corporate Account</a></li>
        <li><a href="#">How to Apply for a Business Loan</a></li>
        <li><a href="#">Using Cash Management Services</a></li>
        {/* Add more corporate banking manuals */}
      </ul>
    </div>
  );
};

export default UserManual;
