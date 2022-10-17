import React from "react";
import "./searchBar.css";

const SearchBar = (props) => {
  const darkMode = props.modeData;

  function handleChange(e) {
    props.onChangeData(e);
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
        <select className="filter" name="select" id="select">
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Ocenia">Ocenia</option>
        </select>
      </div>
    </section>
  );
};

export default SearchBar;
