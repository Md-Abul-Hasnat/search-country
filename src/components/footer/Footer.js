import React from "react";
import "./footer.css";

const Footer = (props) => {
  const darkMode = props.modeData;

  return (
    <section className={!darkMode ? "footer light-mode" : "footer"}>
      <p>Made with love by WebDev Hasnat || Sylhet || Bangladesh </p>
    </section>
  );
};

export default Footer;
