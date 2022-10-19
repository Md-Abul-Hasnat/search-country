import React from "react";
import "./searchBar.css";

const SearchBar = (props) => {
  const darkMode = props.modeData;

  function handleChange(e) {
    props.onChangeData(e);
  }

  function handleRegionDataChange(e) {
    props.onRegionChange(e);
  }

  return (
    <section className={!darkMode ? "search-bar light-mode" : "search-bar"}>
      <div className="search-left">
        <form>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Search for a country . . ."
          />
        </form>
      </div>
      <div className="search-right">
        <label htmlFor="select">Filter by region :</label>
        <select
          onChange={handleRegionDataChange}
          className="filter"
          name="select"
          id="select"
        >
          <option value="all">All</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default SearchBar;
