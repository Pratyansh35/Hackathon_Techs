import React from 'react'
import "../css/footers.css";
import emailicn from "../../email_icon2.gif";
function footers() {
  return (
    <>
    <footer>
        <div className="footer-div">
          <ul style={{fontWeight:"bold",fontSize:"20px"}}>USEFULL LINKS</ul>
          <ul>About</ul>
          <ul>Services</ul>
          <ul>Our Team</ul>
          <ul>Contact</ul>
        </div>
        <div className="footer-div">
          <h2>CONTRIBUTION</h2>
          <div>
            <input type="text" placeholder="Your Email Address" style={{ width: "70%",textAlign:"center",margin:"5px" }}/>
          </div>
          <button class='subcribebtn'>subscribe</button>

        </div>
        <div className="footer-div">
        <ul style={{fontWeight:"bold",fontSize:"20px"}}>CONTACT</ul>
          <pre style={{marginLeft:"15px"}}>144401, Innovative Studio,  L.P.U,<br/><br/>Phagwara, Punjab  0182 451 0311 </pre>
          <img src={emailicn} alt="email image" />

        </div>
      </footer>
    </>
  )
}

export default footers
