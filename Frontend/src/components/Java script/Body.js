import React from "react";
import "../css/Body.css";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function Body() {
  const [warningText, setWarningText] =useState("Hurry up!!! You are not in a safe zone you, need to evacute quickly form the place");
  const chagetext = () => {
    setWarningText("You are in a safe zone");
  }
  return (
    <div className="body">
      <div className="card">
          <p className="card-text">
            {warningText}
          </p>
          <button className="card-btn" onClick={chagetext}>Learn More</button>
      </div>


      <div className="container">
        
        <Link to="/Form"> <button className="navButtons">Report Disaster</button></Link>
        <Link to="/Volunteer"><button className="navButtons">Volunteer</button></Link>
      </div>
      <div className="containerAgency">
      <Link to="/Agency"><button className="navAgency">Agency</button></Link>
     </div> 
     <div className="container">
        <Link to="/Video"> <button className="navButtons">Awareness Program</button></Link>
        <button className="navButtons">Donate Campaign</button></div>
    </div>
  );
}
