import React, { useState } from 'react';
import './Faqs.css';
import Bottom from './Bottom';

const FAQs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const faqs = [
    { question: 'What is State Bank of India (SBI)?', answer: 'State Bank of India (SBI) is a Fortune 500 company and the largest public sector bank in India. It offers a wide range of banking and financial services to its customers.' },
    { question: 'Where is the headquarters of SBI located?', answer: 'The headquarters of State Bank of India is located in Mumbai, Maharashtra, India.' },
    { question: 'How many branches does SBI have?', answer: 'SBI has over 22,000 branches spread across India, making it the largest banking network in the country.' },
    { question: 'What services does SBI offer?', answer: 'SBI offers a variety of services including retail banking, corporate banking, international banking, loans, investments, and insurance.' },
    { question: 'How can I open an account with SBI?', answer: 'You can open an account with SBI by visiting any of its branches and submitting the required documents as per the banks guidelines.' },
    { question: 'Is SBI a government-owned bank?', answer: 'Yes, SBI is a government-owned bank and is regulated by the Reserve Bank of India (RBI).' },
];


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredFAQs = faqs.filter((faq) => {
    return faq.question.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
    <div className="faq-container">
      <h1>FAQs</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search FAQs"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="faq-list">
        {filteredFAQs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
    <Bottom/>
    </>
  );
};

export default FAQs;
