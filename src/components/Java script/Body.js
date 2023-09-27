import React from "react";
import "../css/Body.css";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function Body() {
  const [warningText, setWarningText] =useState("Hurry up!!! You are not in an safe zone you need to evacute quickli form the place");
  const chagetext = () => {
    setWarningText("You are in a safe zone");
  }
  return (
    <>
      <div className="card">
        <div className="card-body">
          <p className="card-text">
            {warningText}
          </p>
          <button className="card-btn" onClick={chagetext}>Learn More</button>
        </div>
      </div>


      <div className="container">
        
        <Link to="/Form"> <button className="navButtons">Form</button></Link>
        <button className="navButtons">Learn</button>
        <Link to="/Video"> <button className="navButtons">Video</button></Link>
        <button className="navButtons">Donate</button>
      </div>
    </>
  );
}
