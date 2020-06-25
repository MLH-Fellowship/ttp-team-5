import React from "react";

const SearchFieldView = ({ value, onChange, onSearch, onRandom }) => {
    return (
      <div className="search">
        <h5>Enter a Soccer Players Name:</h5> 
        <input class="form-control" type="text" placeholder="Cristiano Ronaldo" value={value} onChange={onChange} aria-label="Search" />
        <button type="button" className="btn btn-secondary btn-sm" onClick={onSearch}>Search</button>
      </div>
    );
  };

export default SearchFieldView