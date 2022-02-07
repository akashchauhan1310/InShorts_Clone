import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts News made by -{" "}
        <a href="https://www.linkedin.com/in/shivansh-kaushal-8890531b2/" target="__blank">
          Shivansh ,Akash and Saarthi.
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/shivyy.21_/?hl=en" target="__blank">
        <i className="fab fa-instagram fa-3x"></i>
        </a>
        <a href="https://www.linkedin.com/in/shivansh-kaushal-8890531b2/" target="__blank">
        <i className="fab fa-linkedin-in fa-3x"></i>
        </a>
        <a href="mailto:someone@gmail.com" target="__blank">
        <i className="far fa-envelope fa-3x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;