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
            style={{ width: "100px", height: "auto", marginLeft:"10px"}}
          />
         </div>
         <div className="heading3">
         <div className="heading2">
          <h2>MINISTRY OF HOME AFFAIRS</h2>
          </div>
        <div className="heading">
          <span className="heading">Disaster Rescue Wave</span>
        </div> 
        </div>
        <nav class='navbarr'>
          <ul>
            <li class="topDiv">
              <Link to="/">Home</Link>
            </li>
            
            <li class="topDiv">
              <Link to="/about">About</Link>
            </li>
            <li class="topDiv">
              <Link to="/AgencyForm">Agency Form</Link>
            </li>  
            <li class="topDiv">
              <Link to="/AgentMap">Map</Link>
            </li> 
            <li>
              <Link to="/ReportMap">Reported cases</Link>
            </li> 
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
