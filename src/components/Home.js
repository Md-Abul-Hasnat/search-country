import React, { useEffect, useState } from "react";
import Country from "./Country";

const Home = () => {
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
    <main>
      <section className="header">
        <h1> Search Country You Are Interested About . . . !! </h1>
        <form>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Search for a country "
          />
        </form>
      </section>

      {loading ? (
        <h1 className="loader">Loading data ...</h1>
      ) : (
        <section className="body">
          <div className="body-wrapper">
            {countries.map((country, i) => (
              <Country key={i} country={country} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default Home;
