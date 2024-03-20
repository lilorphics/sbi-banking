import React from "react";
import "./Logoo.css";
import logo1 from "../Assets/sbi-logo-33205.png";
import logo2 from "../Assets/sbi-logo-33219.png";
import logo3 from "../Assets/download.jpeg";

const Logoo = () => {
  return (
    <div className="styles.logo">
    <div id="d1">
      <img id="im1" src={logo1} alt="Logo 1" />
      </div>
      <div>
      <img id="im2" src={logo2} alt="Logo 2" />
      </div>
      <div>
      <img id="im3" src={logo3} alt="Logo 3" />
      </div>
    </div>
  );
};

export default Logoo;