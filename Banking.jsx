import React from 'react';
import './Banking.css';
import Bottom from './Bottom';
import personalBankingImage from '../Assets/banking.png';
import Banner from './Banner';

const Banking = () => {
  return (
    <>
      <div className="banking-container">
        <div className="personal-banking">
          <h1>Personal Banking</h1>
          <img src={personalBankingImage} alt="Personal Banking" />
        </div>
        <div className="banking-details">
          <h2>Welcome Aboard</h2>
          <p>
            www.onlinesbi.sbi, the Internet banking portal of our bank, enables its retail banking customers to operate their accounts from anywhere anytime, removing the restrictions imposed by geography and time. It's a platform that enables the customers to carry out their banking activities from their desktop, aided by the power and convenience of the Internet.
          </p>
          <h3>Features</h3>
          <ul>
            <li>Funds transfer between own accounts.</li>
            <li>Third party transfers to accounts maintained at any branch of SBI</li>
            <li>Inter Bank Transfers to accounts with other Banks</li>
            <li>Online standing instructions for periodical transfer for the above</li>
            <li>Credit PPF accounts across branches</li> 
          </ul>
        </div>
      </div> 
      <Banner className='ban' />
      <div className="c1">
      </div>
      <Bottom/>
    </>
  );
};

export default Banking;
