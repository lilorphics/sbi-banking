import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import Menu from "./Menu";
import "./MainNavigation.css";
import location from "../Assets/location.png";

const MainNavigation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [netBankingSubTabs, setNetBankingSubTabs] = useState(false);
  const [investmentDepositsSubTabs, setInvestmentDepositsSubTabs] = useState(false);
  const [loansSubTabs, setLoansSubTabs] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const [aboutUsSubTabs, setAboutUsSubTabs] = useState(false);
  const [cardsSubTabs, setCardsSubTabs] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setShowSuggestions(event.target.value !== "");
  };

  const handleNetBankingHover = () => {
    setNetBankingSubTabs(true);
  };

  const handleNetBankingLeave = () => {
    setNetBankingSubTabs(false);
  };

  const handleInvestmentDepositsHover = () => {
    setInvestmentDepositsSubTabs(true);
  };

  const handleInvestmentDepositsLeave = () => {
    setInvestmentDepositsSubTabs(false);
  };

  const handleLoansHover = () => {
    setLoansSubTabs(true);
  };

  const handleLoansLeave = () => {
    setLoansSubTabs(false);
  };

  const handleAboutUsHover = () => {
    setAboutUsSubTabs(true);
  };

  const handleAboutUsLeave = () => {
    setAboutUsSubTabs(false);
  };

  const handleCardsHover = () => {
    setCardsSubTabs(true);
  };

  const handleCardsLeave = () => {
    setCardsSubTabs(false);
  };

  const suggestions = [
    "Net Banking",
    "Investment & Deposits",
    "Loans",
    "YONO",
    "State Home Loan",
    "Education Loan",
    "Personal Loan",
  ];

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <header className="main-navigation">
      <nav className="main-navigation__header">
        <Menu />
        <ul className="main-navigation__tabs">
          <li
            onMouseEnter={handleNetBankingHover}
            onMouseLeave={handleNetBankingLeave}
          >
            Net Banking
            {netBankingSubTabs && (
              <ul className="main-navigation__sub-tabs">
                <li><Link to="/banking">Online Banking</Link></li>
                <li>Personal Banking</li>
                <li>Corporate Banking</li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={handleInvestmentDepositsHover}
            onMouseLeave={handleInvestmentDepositsLeave}
          >
            Investment & Deposits
            {investmentDepositsSubTabs && (
              <ul className="main-navigation__sub-tabs">
                <li>Fixed Deposits</li>
                <li>Recurring Deposits</li>
                <li>Savings Accounts</li>
                <li>Current Accounts</li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={handleLoansHover}
            onMouseLeave={handleLoansLeave}
          >
            Loans 
            {loansSubTabs && (
              <ul className="main-navigation__sub-tabs">
                <li><Link to="/services">Home Loan</Link></li>
                <li>Personal Loan</li>
                <li>Car Loan</li>
                <li>Education Loan</li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={handleAboutUsHover}
            onMouseLeave={handleAboutUsLeave}
          >
            About Us
            {aboutUsSubTabs && (
              <ul className="main-navigation__sub-tabs">
                <li className="aboutus1"><Link to="/about">We are SBI bank - for more information click on me!</Link></li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={handleCardsHover}
            onMouseLeave={handleCardsLeave}
          >
            Cards
            {cardsSubTabs && (
              <ul className="main-navigation__sub-tabs">
                <li><Link to="/cards">Credit Cards</Link></li>
                <li>Debit Cards</li>
              </ul>
            )}
          </li>
          <li className="main-navigation__tabs-yono">YONO</li>
        </ul>
      </nav>
      <div className="main-navigation__search-container">
        <input
          type="search"
          className="main-navigation__search-input"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        {showSuggestions && (
          <ul className="main-navigation__suggestions">
            {filteredSuggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        )}
        <img src={location} alt="Location" className="main-navigation__location-pin" />
      </div>
    </header>
  );
};

export default MainNavigation;
