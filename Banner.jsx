import React, { useState, useEffect, useCallback } from 'react';
import './Banner.css';
import banner5 from '../Assets/banner5.jpg';
import banner6 from '../Assets/banner6.jpg';
import banner36 from '../Assets/banner36.jpg';
import banner42 from '../Assets/banner42.jpg';
import banner33 from '../Assets/banner33.jpg';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const banners = [banner5, banner6, banner36, banner42, banner33];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
  };

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1));
  }, [banners.length]); // Include banners.length in the dependency array

  useEffect(() => {
    const interval = setInterval(goToNext, 2000); 

    return () => clearInterval(interval);
  }, [goToNext]); // Include goToNext in the dependency array

  return (
    <div className="banner-container">
      <button className="prev-arrow" onClick={goToPrevious}>
        Previous
      </button>
      <img src={banners[currentIndex]} alt={`Banner ${currentIndex + 1}`} />
      <button className="next-arrow" onClick={goToNext}>
        Next
      </button>
    </div>
  );
};

export default Banner;
