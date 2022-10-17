import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./country.css";

const Country = (props) => {
  const { capital, flags, name, population, region } = props.country;
  const darkMode = props.modeData;

  const navigate = useNavigate();

  return (
    <Link to={`/country/${name.common}`}>
      <article className={!darkMode ? "country light-mode" : "country"}>
        <img src={flags.png} alt="flag" />
        <div className="details">
          <h2 className="name"> {name.common} </h2>
          <h3>
            <span>Capital :</span> {capital}
          </h3>
          <h3>
            <span>Population :</span> {(population / 1000000).toFixed(2)}{" "}
            Million
          </h3>
          <h3>
            <span>Region :</span> {region}
          </h3>
        </div>
      </article>
    </Link>
  );
};

export default Country;
