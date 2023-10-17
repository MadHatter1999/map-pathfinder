// App.js Anthony Healy
import React, { useState } from 'react';
import './css/App.css';
import MapComponent from './components/MapComponent';
import CustomMarker from './components/CustomMarker';
import 'leaflet/dist/leaflet.css';

function App() {
  const position = [51.505, -0.09];
  const position1 = [51.505, -0.10];

  // Step 1: Maintain a state to determine if markers should be displayed.
  const [showMarkers, setShowMarkers] = useState(true);

  return (
    <div className="App">
      <div className="card">
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
            background: '#D32F2F', // Primary red color
            color: '#fff',
            cursor: 'pointer',
            fontSize: '0.9rem',
            transition: 'background-color 0.2s ease',
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#C12727'} // Darkened red for hover
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#D32F2F'} // Return to primary red color
          onClick={() => setShowMarkers(false)}>
          Clear Markers
        </button>

      </div>
    </div>
  );
}

export default App;
