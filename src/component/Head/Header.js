import React, { useState } from "react";
import "./header.css";

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });
  // Toogle Menu
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="logo"></div>

          <div className="navlink">
            <ul
              className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#features">About</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#portfolio">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>

            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fa fa-times close home-btn"></i>
              ) : (
                <i className="fa fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
