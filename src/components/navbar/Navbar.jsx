import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

function Navbar() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [isDarkMode, setDarkMode] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode(!isDarkMode);
  }

  return (
    <div className="portfolio__navbar">
      <div className="portfolio__navbar-links">
        <div className="portfolio__navbar-logo">
          <img src={logo} alt="portfolio logo" />
        </div>
        <div className="portfolio__navbar-links_container">
          <p>
            <a href="#home">Home </a>
          </p>
          <p>
            <a href="#about"> About </a>
          </p>
          <p>
            <a href="#services">Services</a>
          </p>
          <p>
            <a href="#projects"> Projects</a>
          </p>
          <p>
            <a href="#contact">Contact</a>
          </p>
        </div>
        <div className={`${isDarkMode ? "dark-mode" : "light-mode"}`}>
          <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        </div>
        <div className="portfolio__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="portfolio__navbar-menu_container scale-up-center">
              <div className="portfolio__navbar-menu_container-links">
                <p>
                  <a href="#home">Home </a>
                </p>
                <p>
                  <a href="#projects"> Projects</a>
                </p>
                <p>
                  <a href="#about"> About </a>
                </p>
                <p>
                  <a href="#contact">Contact</a>
                </p>
              </div>
              <div className="portfolio__navbar-menu_cvbutton">
                <button type="button" onClick={toggleDarkMode}>
                  Change Mode
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
