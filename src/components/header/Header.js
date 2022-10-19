import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { darkMode, setDarkMode } = props.modeData;

  return (
    <header className={!darkMode ? " header light-mode" : "header"}>
      <div className="header-wrapper">
        <Link to="/">
          <h2> Where in the world?</h2>
        </Link>
        <div onClick={() => setDarkMode(!darkMode)} className="dark-mode">
          <h3>
            {darkMode ? (
              <FontAwesomeIcon className="icon" icon={faMoon} />
            ) : (
              <FontAwesomeIcon className="icon" icon={faSun} />
            )}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
