// CustomMarker.js Anthony Healy
import React from 'react';
import { Marker } from 'react-leaflet';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon-2x.png';

function CustomMarker({ position, content }) {
  return (
    <Marker position={position}>
      {/* Place a popup here */}
    </Marker>
  );
}

export default CustomMarker;
