import React from 'react';
import './Cards.css';
import Bottom from './Bottom';
import card1Image from '../Assets/card1.png';
import card2Image from '../Assets/card2.png';
import card3Image from '../Assets/card3.png';
import card4Image from '../Assets/card4.png';
import card5Image from '../Assets/card5.png';

const Cards = () => {
  return (
    <>
    <div className="cards-container">
      <h1 className="heading">Cards</h1>
      <p className="sub-heading">Enjoy premium benefits and luxury</p>
      <div className="cards-wrapper">
        {/* Card 1 */}
        <div className="card">
          <img src={card1Image} alt="SBI Card ELITE" className="card-image" />
          <h2>SBI Card ELITE</h2>
          <p>Get free movie tickets worth Rs. 6,000 every year</p>
          <button>APPLY NOW</button>
        </div>
        {/* Card 2 */}
        <div className="card">
          <img src={card2Image} alt="SBI Card PULSE" className="card-image" />
          <h2>SBI Card PULSE</h2>
          <p>Get a Noise ColorFit Pulse Smart Watch worth Rs. 5,999</p>
          <button>APPLY NOW</button>
        </div>
        {/* Card 3 */}
        <div className="card">
          <img src={card3Image} alt="CASHBACK SBI Card" className="card-image" />
          <h2>CASHBACK SBI Card</h2>
          <p>It keeps giving back</p>
          <button>APPLY NOW</button>
        </div>
        {/* Card 4 */}
        <div className="card">
          <img src={card4Image} alt="SBI Card PRIME" className="card-image" />
          <h2>SBI Card PRIME</h2>
          <p>Because you deserve more than what you get</p>
          <button>APPLY NOW</button>
        </div>
        {/* Card 5 */}
        <div className="card">
          <img src={card5Image} alt="SBI Card BPCL" className="card-image" />
          <h2>BPCL SBI Card OCTANE</h2>
          <p>Because you deserve more than what you get</p>
          <button>APPLY NOW</button>
        </div>
      </div>
    </div>
    <Bottom />
    </>
  );
};

export default Cards;
