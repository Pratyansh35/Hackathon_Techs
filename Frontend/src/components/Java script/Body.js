import React, { useState, useEffect } from "react";
import "../css/Body.css";
import { Link } from "react-router-dom";
import Header from './Header';
import "../css/About.css";
import img1 from "../../img1.jpg";
import img2 from "../../img2.jpg";
import img3 from "../../img3.png";

 function Body() {
  const [warningText, setWarningText] =useState("Hurry up!!! You are not in a safe zone you, need to evacute quickly form the place");
  const chagetext = () => {
    setWarningText("You are in a safe zone")
  }
  const [slideIndex, setSlideIndex] = useState(1);
  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  // Next/previous controls
  function plusSlides(n) {
    setSlideIndex((slideIndex) => slideIndex + n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    setSlideIndex(n);
  }

  function showSlides(n) {
    let slides = document.querySelectorAll(".mySlides");
    let dots = document.querySelectorAll(".dot");
  
    if (n > slides.length) {
      n = 1; // Set n to 1 to go back to the first image.
    }
  
    if (n < 1) {
      n = slides.length; // Set n to the last image.
    }
  
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  
    slides[n - 1].style.display = "block";
    dots[n - 1].className += " active";
  }

  return (

    <>
    <Header/>
    <div className="body">
    <div>
      <div className="card">
        <marquee>
        Emergency NDRF - National Disaster Response Force No. 01202766013</marquee>
        {/* <p className="card-text">
          {warningText}
        </p>
        <button className="card-btn" onClick={chagetext}>Learn More</button> */}
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
    </div>
    <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src={img1} style={{ width: "100%" }} />
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src={img2} style={{ width: "100%" }} />
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src={img3} style={{ width: "100%" }} />
          <div className="text">Caption Three</div>
        </div>

        <a className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </a>
      </div>
      <br />

      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
        
    </>
  )

  
}

export default Body;