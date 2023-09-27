import React from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "150px", height: "auto" }}
          />
         </div>
        <div className="heading">
          <span className="heading">Disaster Resistance</span>
        </div> 
        <nav class='navbarr'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Agency">For Agency</Link>
            </li>  
            <li>
              <Link to="/AgencyForm">Agency Form</Link>
            </li>  
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
