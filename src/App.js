// App.js Anthony Healy
import React, { useState } from 'react';
import './css/App.css';
import MapComponent from './components/MapComponent';
import CustomMarker from './components/CustomMarker';
import 'leaflet/dist/leaflet.css';
import SearchBar from './components/SearchBar'; // Step 1: Import the SearchBar component

function App() {
  const position = [51.505, -0.09];
  const position1 = [51.505, -0.10];

  const [showMarkers, setShowMarkers] = useState(true);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <div className="card">

        {/* Step 2: Replace the input field with SearchBar component */}
        <SearchBar 
          onAddressChange={value => setInputValue(value)}
          value={inputValue}
        />

        <MapComponent center={position} zoom={13}>
          {showMarkers && <CustomMarker position={position} content="A sample popup." />}
          {showMarkers && <CustomMarker position={position1} content="A sample popup1." />}
        </MapComponent>

        <button
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            zIndex: 1000,
            padding: '8px 15px',
            borderRadius: '5px',
            border: 'none',
            background: '#D32F2F',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '0.9rem',
            transition: 'background-color 0.2s ease',
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#C12727'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#D32F2F'}
          onClick={() => setShowMarkers(false)}>
          Clear Markers
        </button>

      </div>
    </div>
  );
}

export default App;
