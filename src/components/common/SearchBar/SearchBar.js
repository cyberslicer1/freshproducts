import React from 'react';
import './SearchBar.scss';

const SearchBar = ({ searchTerm, onSearchChange, placeholder = "Search products..." }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-bar__input"
      />
      <button className="search-bar__button">
        🔍
      </button>
    </div>
  );
};

export default SearchBar;