// components/SearchBar.js Anthony Healy

import React from 'react';

function SearchBar({ onAddressChange, value }) {

    return (
        <input 
            type="text"
            value={value}
            onChange={e => onAddressChange(e.target.value)}
            placeholder="Enter an address..."
            style={{
                position: 'absolute',
                top: '10px',
                left: '40px',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                zIndex: 1001
            }}
        />
    );
}

export default SearchBar;
