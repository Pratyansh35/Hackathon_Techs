import React, { useState, useEffect } from "react";
import img1 from "../../img1.jpg";
import img2 from "../../img2.jpg";
import img3 from "../../img3.png";
import emailicn from "../../email_icon2.gif";
import Header from "./Header";
import "../css/About.css";

const About = () => {

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
      setSlideIndex(1);
    }

    if (n < 1) {
      setSlideIndex(slides.length);
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  return (
    <>
      <Header />
      <div className="slideshow-container">
        <div className="mySlides fade">

          <img src={img1} style={{ width: "100%" }} />
        </div>

        <div className="mySlides fade">

          <img src={img2} style={{ width: "100%" }} />

        </div>

        <div className="mySlides fade">
          <img src={img3} style={{ width: "100%" }} />

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
  );
};

export default About;