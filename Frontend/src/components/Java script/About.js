import React, { useState, useEffect } from "react";
import img1 from "../../img1.jpg";
import img2 from "../../img2.jpg";
import img3 from "../../img3.png";
import Header from "./Header";
import Footer from './footers';
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
      <Footer />
    </>
  );
};

export default About;