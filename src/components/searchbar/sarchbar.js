import React, { useState } from "react";
import "./searchbar.css";
import search from "../../images/searchvector2.png";
import { Link } from "react-router-dom";

export function SearchBar() {
  let [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };

  const eventHandler = () => {
    document.getElementById("submit-button").value = null;
  };

  return (
    <div className="wrap">
      <div className="search">
        <input
          id="submit-button"
          type="text"
          onChange={handleChange}
          className="searchTerm"
          placeholder="search..."
        />
        <Link to={`/search/${value}`}>
          <button onClick={eventHandler}>
            <img id="searchImage" alt="search" src={search}></img>
          </button>
        </Link>
      </div>
    </div>
  );
}
