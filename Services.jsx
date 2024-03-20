import React from 'react';
import Banner from './Banner';
import './Services.css';
import Bottom from './Bottom';
import HowToApplyVideo from '../Assets/howtoapplyvideo.mp4';

const Services = () => {
  return (
    <>
    <div className='hel1'>
    </div>
    <Banner />
      <div className="services-container">
        <div className="product-details">
          <h1>Home Loan</h1>
          <p>SBI Home Loans is the largest Mortgage Lender in India, which has helped over 30 lakh families to achieve the dream of owning a home.</p>
          <p><strong>Rate of Interest:</strong> 7.00% - 7.50%</p>
          <button className='butt1'> Apply Now </button>
          <div className="downloads">
            <p>Downloads:</p>
            <ul>
              <li><button onClick={() => window.open('https://example.com/home-loan-application-form', '_blank')}>Click here to download "Home Loans Application Form"</button></li>
              <li><button onClick={() => window.open('https://example.com/terms-and-conditions', '_blank')}>Click here to download "Terms and Conditions"</button></li>
              <li><button onClick={() => window.open('https://example.com/nri-home-loans-contact', '_blank')}>Interested in NRI Home Loans? Click here for contact list.</button></li>
              <li><button onClick={() => window.open('https://example.com/home-loan-agreement', '_blank')}>Click here to download "Home Loan Agreement"</button></li>
            </ul>
          </div>
        </div>
        <div className="video-tutorial">
          <h2>Video Tutorial</h2>
          <p>HOW TO APPLY FOR HOME LOAN</p>
          <div className="video-box">
            <video controls>
              <source src={HowToApplyVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <Bottom />
    </>
  );
};

export default Services;