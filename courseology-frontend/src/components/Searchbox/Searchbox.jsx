import React from "react";
import "./Searchbox.scss";

const SearchBox = ({ handleInput, searchTerm }) => {
  return (
    <form className="search-box">
      <label htmlFor="search-box" className="search-box__label">
        <input
          type="text"
          name="search"
          className="search-box__input"
          value={searchTerm}
          onInput={handleInput}
          placeholder="Search"
        />
      </label>
    </form>
  );
};

export default SearchBox;
