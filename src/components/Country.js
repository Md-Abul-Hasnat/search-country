import React from "react";
import { useNavigate } from "react-router-dom";

const Country = (props) => {
  const { capital, flags, name, population } = props.country;

  const navigate = useNavigate();

  function handleClick(props) {
    navigate(`/country/${props}`);
  }

  return (
    <article>
      <img src={flags.png} alt="flag" />
      <div className="details">
        <h2 className="name"> {name.common} </h2>
        <h3> Capital : {capital} </h3>
        <h3> Population : {(population / 1000000).toFixed(2)} Million </h3>

        <button onClick={() => handleClick(name.common)} className="learn-more">
          Learn More ...
        </button>
      </div>
    </article>
  );
};

export default Country;
