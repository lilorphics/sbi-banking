import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import LoginPage from './Components/LoginPage';
import VerificationPage from './Components/VerificationPage';
import Logoo from './Components/Logoo';
import Banner from './Components/Banner';
import Alert from './Components/Alert';
import PopularProducts from './Components/PopularProducts';
import Footer from './Components/Footer';
import MainNavigation from './Components/MainNavigation';
import AboutUs from './Components/AboutUs'; 
import About from './Components/About'; 
import FAQs from './Components/Faqs';
import Services from './Components/Services';
import Banking from './Components/Banking';
import Cards from './Components/Cards';
import UserManual from './Components/UserManual';
import Bottom from './Components/Bottom';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Logoo />
                <MainNavigation/>
                <Alert />
                <Banner />
                <PopularProducts />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route 
            path="/verification" 
            element={<VerificationPage />} 
          />
          <Route 
            path="/aboutus" 
            element={<AboutUs />} 
          />
          <Route 
            path="/about" 
            element={<About />} 
          />
          <Route 
            path="/faqs" 
            element={<FAQs />} 
          />
          <Route 
            path="/services" 
            element={<Services />} 
          />
          <Route 
            path="/banking" 
            element={<Banking />} 
          />
          <Route 
            path="/cards" 
            element={<Cards />} 
          />
          <Route 
            path="/usermanual" 
            element={<UserManual />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
