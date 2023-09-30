import React, { useEffect, useState } from "react";
import logo from "../../logo2.png";
import { Link } from "react-router-dom";
import "../css/Header.css";
import { CookiesProvider, useCookies,Cookies} from "react-cookie";
// import Cookies from 'js-cookie'



const Header = (props) => {
  const [cookies, setCookie,removeCookie] = useCookies(["user"]);
  const [pos,setPos]=useState("");
 

  return (
    <>
      <header>
        <div className="logo">
          <img
            src={logo}

            alt="Logo"
            style={{ width: "200px", height: "auto", marginLeft:"10px"}}
          />
         </div>
         <div className="heading3">
         <div className="heading2">
          <h2>DISASTER RESCUE WAVE</h2>
          </div>
        <div className="heading" >
          <span className="heading">Ministry Of Home Affairs, Gov. Of India</span>
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
            
              {
                cookies.user?
                <li>
                <Link to="/AgencyForm">Agency Form</Link> 
                </li>  :null
              }
              
            
            
              {
              cookies.user?
              <li>
              <Link to="/AgentMap">Map</Link>
              </li> : null
              }
            
            
              {
              cookies.user?
              <li>
              <Link to="/ReportMap">Reported cases</Link>
              </li> : null
              }
              
            {/* <li class="topDiv">
              <Link to="/AgencyForm">Agency Form</Link>
            </li>   */}
            {/* <li class="topDiv">
              <Link to="/AgentMap">Map</Link>
            </li>  */}
            {/* <li class="topDiv">
              <Link to="/ReportMap">Reported cases</Link>
            </li>  */}
            {
              !cookies.user?
              <li style={{marginRight:"70px"}}>
                <Link to="/Agency">Agency</Link>
                </li>:null
              }
            
            
              {
                cookies.user?
                <li>
                <button style={{width:"100px",background:"rgb(255, 128, 0)",marginRight:"50px"}} onClick={()=>{
                // cookies.remove('name', { path: '/'});
                // browser.cookies.removeCookie("user")
                // cookies.remove("user");
                document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
                }}>log out</button>
                </li>:null
              }
            
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