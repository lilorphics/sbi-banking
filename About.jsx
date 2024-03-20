import React, { useState, useEffect } from 'react';
import './About.css';
import Bottom from './Bottom';
import bankPicture from '../Assets/bank-picture.jpeg';

const About = () => {
  const [reviews, setReviews] = useState([
    { id: 1, content: "Great bank, excellent service!" },
    { id: 2, content: "I've been banking with them for years, never had any issues." },
    { id: 3, content: "Not satisfied with their customer service." }
  ]);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [reviews]);

  return (
    <>
    <div className="about-page">
      <div className="content-container">
        <div className="bank-details">
          <img
            src={bankPicture}
            alt="Bank Picture"
            className="bank-picture"
          />
        </div>
        <div className="bank-description">
          <h2> Our Bank </h2>
          <p>
            State Bank of India (SBI) a Fortune 500 company, is an Indian Multinational, Public Sector Banking and Financial services statutory body headquartered in Mumbai. The rich heritage and legacy of over 200 years, accredits SBI as the most trusted Bank by Indians through generations.
          </p>
          <p>
            SBI, the largest Indian Bank with 1/4th market share, serves over 48 crore customers through its vast network of over 22,405 branches, 65,627 ATMs/ADWMs, 76,089 BC outlets, with an undeterred focus on innovation, and customer centricity, which stems from the core values of the Bank - Service, Transparency, Ethics, Politeness and Sustainability.
          </p>
          <p>
            The Bank has successfully diversified businesses through its various subsidiaries i.e SBI General Insurance, SBI Life Insurance, SBI Mutual Fund, SBI Card, etc. It has spread its presence globally and operates across time zones through 235 offices in 29 foreign countries.
          </p>
          <p>
            Growing with times, SBI continues to redefine banking in India, as it aims to offer responsible and sustainable Banking solutions.
          </p>
        </div>
      </div>
      <div className="reviews-container">
        <h2>Customer Reviews</h2>
        <div className="review">
          {reviews.length > 0 && (
            <p>{reviews[currentReviewIndex].content}</p>
          )}
        </div>
      </div>
    </div>
    <div className='hep1'> 
    </div>
    <Bottom />
    </>
  );
};

export default About;
