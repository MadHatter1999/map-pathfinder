// components/SearchBar.js Anthony Healy

import React from 'react';

function SearchBar({ onAddressChange, value, onSearch }) {
    return (
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <input
                type="text"
                onChange={e => onAddressChange(e.target.value)}
                value={value}
                placeholder="Enter an address..."
                style={{
                    padding: '10px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    flex: 1,
                    marginRight: '10px'
                }}
            />
            <button
                onClick={() => onSearch(value)}
                style={{
                    background: '#003153',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '10px 15px',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease',
                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
                }}
                onMouseOver={e => e.currentTarget.style.backgroundColor = '#003366'}
                onMouseOut={e => e.currentTarget.style.backgroundColor = '#003153'}
            >
                Search
            </button>
        </div>
    );
}

export default SearchBar;
