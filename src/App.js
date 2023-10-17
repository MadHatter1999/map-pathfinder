import React, { useEffect, useState } from 'react';
import './css/App.css';
import MapComponent from './components/MapComponent';
import CustomMarker from './components/CustomMarker';
import 'leaflet/dist/leaflet.css';
import SearchBar from './components/SearchBar';

function App() {
  const [initialPosition, setInitialPosition] = useState([44.6488, -63.5752]);
  const [inputValue, setInputValue] = useState("");
  const [markers, setMarkers] = useState([
    { position: initialPosition, content: "A sample popup." }
  ]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords)
        const { latitude, longitude } = position.coords;
        const newInitialPosition = [latitude, longitude];
        setInitialPosition(newInitialPosition);
        setMarkers([{ position: newInitialPosition, content: "Your current location." }]);
      }, (error) => {
        console.error("Error accessing geolocation:", error);
      });
    }
  }, []);


  const handleSearch = async (address) => {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${address}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.length) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        setMarkers([...markers, { position: [lat, lon], content: address }]);
      } else {
        alert("Address not found.");
      }
    } catch (error) {
      console.error("Error fetching lat-long:", error);
    }
  };

  return (
    <div className="App">
      <div className="card">
        <SearchBar 
          onAddressChange={value => setInputValue(value)}
          value={inputValue}
          onSearch={handleSearch}
        />

        <MapComponent center={initialPosition} zoom={13}>
          {markers.map((marker, idx) => (
            <CustomMarker key={idx} position={marker.position} content={marker.content} />
          ))}
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
          onClick={() => setMarkers([])}>
          Clear Markers
        </button>
      </div>
    </div>
  );
}

export default App;
