import React from "react";

const SearchFieldView = ({ value, onChange, onSearch, onRandom }) => {
    return (
      <div className="search">
        <h5>Enter a Soccer Players Name:</h5> 
        <input className="main-input" placeholder="Cristiano Ronaldo" value={value} onChange={onChange} />
        <button className="button" onClick={onSearch}>Search</button>
      </div>
    );
  };

export default SearchFieldView