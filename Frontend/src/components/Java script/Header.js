import React, { useEffect } from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";
import "../css/Header.css";
import { CookiesProvider, useCookies,Cookies} from "react-cookie";
import browser from 'react-cookie'
// import Cookies from 'js-cookie'


const Header = (props) => {
  const [cookies, setCookie,removeCookie] = useCookies(["user"]);


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
        <CookiesProvider>
        <nav class='navbarr'>
        <nav class='dropdown'>
          
          <div className="dropbtn">
          </div>
          <div className="dropdown-content" id="navItems">
          <ul>
            <li class="topDiv">
            
              <Link to="/">Home</Link>
            </li>
            
            <li class="topDiv">
            
              <Link to="/about">About</Link>
            </li>
            <li>
              {
                cookies.user?
                <Link to="/AgencyForm">Agency Form</Link> : null
                // checklog()
              }
              
            </li>  
            <li>
              {
              cookies.user?
              <Link to="/AgentMap">Map</Link> : null
              }
            </li>
            <li>
              {
              cookies.user?
              <Link to="/ReportMap">Reported cases</Link> : null
              }
              </li>
            {/* <li class="topDiv">
              <Link to="/AgencyForm">Agency Form</Link>
            </li>   */}
            {/* <li class="topDiv">
              <Link to="/AgentMap">Map</Link>
            </li>  */}
            {/* <li class="topDiv">
              <Link to="/ReportMap">Reported cases</Link>
            </li>  */}
            <li>{
              !cookies.user?
                <Link to="/Agency">Agency Login</Link>:null
              }
            </li>
            <li>
              {
                cookies.user?
                <button style={{width:"100px"}} onClick={()=>{
                // cookies.remove('name', { path: '/'});
                // browser.cookies.removeCookie("user")
                // cookies.remove("user");
              }}>log out</button>:null
              }
            </li>
          </ul>
          </div>
        </nav>
        </nav>
        </CookiesProvider>
      </header>
    </>
  );
};

export default Header;
