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
          <span className="heading">Disaster Resistance</span>
        </div>
        <nav>
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

          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
