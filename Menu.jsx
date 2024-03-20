import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom"; 
import "./Menu.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const options = [
    { label: "About Us", path: "/about" },
    { label: "Login", path: "/login" },
    { label: "Net Banking", path: "/banking" },
    { label: "Services", path: "/services" },
    { label: "User Manual", path: "/usermanual" },
    { label: "FAQs", path: "/faqs" },
    { label: "Customer Care", path: "/aboutus" },
  ];

  return (
    <div className="menu" onClick={handleClick}>
      <div className="menu__label">
        <MenuIcon />
      </div>
      {isOpen && (
        <ul className="menu__dropdown">
          {options.map((option) => (
            <li key={option.path}>
              <Link to={option.path}>{option.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
