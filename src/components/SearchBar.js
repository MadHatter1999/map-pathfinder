// components/SearchBar.js Anthony Healy

import React from 'react';

function SearchBar({ onAddressChange, value, onSearch }) {
    return (
        <div style={{ position: 'relative', zIndex: 2 }}>
            <input
                type="text"
                onChange={e => onAddressChange(e.target.value)}
                value={value} 
                placeholder="Enter an address..."
            />
            <button onClick={() => onSearch(value)}>Search</button>
        </div>

    );
}


export default SearchBar;
