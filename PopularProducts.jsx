import React from 'react';
import { Link } from 'react-router-dom';
import './PopularProducts.css'; 
import product1 from '../Assets/product1.jpeg';
import product2 from '../Assets/product2.jpeg';
import product3 from '../Assets/product3.jpeg';
import product4 from '../Assets/product4.jpeg';


const PopularProducts = () => {
  return (
    <div className="popular-products-container">
      <h1>OUR POPULAR PRODUCTS</h1>
      <hr className='l1'/>
      
      <div className="products-wrapper">
        {/* Product 01 */}
        <div className="product">
          <div className="product-details">
            <h3>STATE HOME LOAN</h3>
            <p>ROI 8.3% p.a. onwards</p>
            <p>Provide loans for construction of Houses, Buildings and much more at a very less interest and high time returns ......</p>
            <div className="learn-more">
              <span><Link to="/services"> LEARN MORE → </Link></span>
            </div>
          </div>
          <div className="product-image">
            <img src={product1} alt="Product 01" width="250" height="200" />
          </div>
        </div>
        
        {/* Product 02 */}
        <div className="product">
          <div className="product-details">
            <h3>GOLD LOAN</h3>
            <p>ROI 7.5% p.a. onwards</p>
            <p>Gold loan is one of the most important yet one of the easiest loan to benefit from...</p>
            <div className="learn-more">
            <span><Link to="/services"> LEARN MORE → </Link></span>
            </div>
          </div>
          <div className="product-image">
            <img src={product2} alt="Product 02" width="250" height="200" />
          </div>
        </div>
        
        {/* Product 03 */}
        <div className="product">
          <div className="product-details">
            <h3>EDUCATION LOAN</h3>
            <p>ROI 6.3% p.a. onwards</p>
            <p>We provide Education loan for students who are in need of urgent admission ......</p>
            <div className="learn-more">
            <span><Link to="/services"> LEARN MORE → </Link></span>
            </div>
          </div>
          <div className="product-image">
            <img src={product3} alt="Product 03" width="250" height="200" />
          </div>
        </div>
        
        {/* Product 04 */}
        <div className="product">
          <div className="product-details">
            <h3>PERSONAL LOAN</h3>
            <p>ROI 9.2% p.a. onwards</p>
            <p>Personal loan is one of the most important yet one of the easiest loan to benefit from...</p>
            <div className="learn-more">
            <span><Link to="/services"> LEARN MORE → </Link></span>
            </div>
          </div>
          <div className="product-image">
            <img src={product4} alt="Product 04" width="250" height="200" />
          </div>
        </div>
      </div>
      <div className="services">
      <span><Link to="/services"> OTHER SERVICES </Link></span>
      </div>
    </div>
  );
};

export default PopularProducts;
