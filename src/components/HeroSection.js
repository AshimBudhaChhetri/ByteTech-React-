import React, { useState, useEffect, useRef } from "react";
import "./herosection.css";
import Heroimg from "../assets/hero-img.png";

const HeroSection = () => {
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  const handleOutsideClick = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !event.target.classList.contains("menu-icon")
    ) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="herosection">
        <div className="hero-container">
          <div className="header">
            <div className="logo">
              <h3>bytetech solution</h3>
            </div>
            <div className={`navbar ${isActive ? "active" : ""}`}>
              <div className="menu-icon" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <div
                ref={menuRef}
                className={`menu-items ${isActive ? "active" : ""}`}
              >
                <p>
                  <a href="#home">Home</a>
                </p>
                <p>
                  <a href="#service">Services</a>
                </p>
                <p>
                  <a href="#project">Projects</a>
                </p>
                <p>
                  <a href="#aboutus">About us</a>
                </p>
                <p>
                  <a href="#contact">Contact</a>
                </p>
              </div>
            </div>
          </div>
          <div className="hero-content">
            <div className="column1">
              <div className="row1">
                <h1>
                  Empowering Business with web design, development and video
                  solution.
                </h1>
                <p>
                  It's time to stand out in the digital landscape and propel
                  your business forward. Don't wait any longer - unlock your
                  digital potential and embark on a journey of success. Contact
                  us today to get started!
                </p>
              </div>
              <div className="row2">
                <button>Contact us</button>
              </div>
            </div>
            <div className="column2">
              <img src={Heroimg} alt="heroimg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
