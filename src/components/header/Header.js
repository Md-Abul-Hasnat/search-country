import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  // const { darkMode, setDarkMode } = props.modeData;

  return (
    <header className="header">
      <div className="header-wrapper">
        <h2> Where in the world?</h2>
        <div className="dark-mode">
          <h3>
            <FontAwesomeIcon className="icon" icon={faMoon} />
            Light Mode
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
