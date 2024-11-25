import React from 'react';

function SearchBar({ searchQuery, handleSearchChange }) {
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={e => handleSearchChange(e.target.value)}
        placeholder="Search by name"
      />
    </div>
  );
}

export default SearchBar;

