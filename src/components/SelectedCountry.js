import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SelectedCountry = () => {
  const info = useParams();

  const [selectedCountry, setSelectedCountry] = useState({});
  const [loading, setLoading] = useState(true);
  const {
    name,
    flags,
    capital,
    area,
    borders,
    currencies,
    languages,
    population,
    timezones,
    region,
    subregion,
  } = selectedCountry;

  async function fetchData() {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${info.name}`
    );
    const data = await response.json();
    setSelectedCountry(data[0]);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [info.name]);

  return (
    <section className="selected-country">
      <Link className="back-btn" to={"/"}>
        Go Back
      </Link>

      {loading ? (
        <h1> Loading Data... </h1>
      ) : (
        <div className="selected-country-wrapper">
          <div className="img">
            <img src={flags?.svg} alt="flag" />
          </div>
          <div className="selected-details">
            <div className="country-details">
              <div className="details-left">
                <h3>{name.common}</h3>
                <p>
                  <span>Official Name :</span> {name.official}
                </p>
                <p>
                  <span>Population :</span>
                  {(population / 1000000).toFixed(2)} Million
                </p>
                <p>
                  <span>Region :</span> {region}
                </p>
                <p>
                  <span>Subregion :</span> {subregion}
                </p>
                <p>
                  <span>Capital :</span> {capital}
                </p>
              </div>
              <div className="details-right">
                <p>
                  <span>Timezones :</span> {timezones[0]}
                </p>
                <p>
                  <span>Currencies : </span>
                  {currencies[Object.keys(currencies)].name}
                </p>
                <p>
                  <span>Languages:</span> {Object.values(languages).join(", ")}
                </p>
                <p>
                  <span>Area:</span> {area} Km<sup>2</sup>
                </p>
              </div>
            </div>
            {borders ? (
              <div className="borders">
                <p>Border Countries :</p>
                {borders.map((border, i) => (
                  <small key={i}> {border} </small>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default SelectedCountry;
