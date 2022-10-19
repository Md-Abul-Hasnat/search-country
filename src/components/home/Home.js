import React, { useEffect, useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import Country from "../country/Country";
import "./home.css";

const Home = (props) => {
  const darkMode = props.modeData;

  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [region, setRegion] = useState("all");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setAllCountries(data);
        setLoading(false);
      });
  }, []);

  function handleChange(e) {
    const searchText = e.target.value.toLowerCase();
    const matchedCountries = allCountries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(searchText);
    });
    setCountries(matchedCountries);
  }

  function handleRegionChange(e) {
    setRegion(e.target.value);
  }

  const url =
    region === "all"
      ? "https://restcountries.com/v3.1/all"
      : `https://restcountries.com/v3.1/region/${region}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, [region]);

  return (
    <>
      {loading ? (
        <h1 className={!darkMode ? "loading light-mode" : "loading"}>
          Getting Data ...
        </h1>
      ) : (
        <section
          className={!darkMode ? "main-section light-mode" : "main-section"}
        >
          <div className="search-bar-wrapper">
            <SearchBar
              onRegionChange={handleRegionChange}
              modeData={darkMode}
              onChangeData={handleChange}
            />
          </div>
          <div className="countries-wrapper">
            {countries.map((country, i) => (
              <Country modeData={darkMode} key={i} country={country} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
