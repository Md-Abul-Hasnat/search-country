import React, { useEffect, useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import Country from "../country/Country";
import "./home.css";

const Home = (props) => {
  const darkMode = props.modeData;

  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [loading, setLoading] = useState(true);

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
            <SearchBar modeData={darkMode} onChangeData={handleChange} />
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
