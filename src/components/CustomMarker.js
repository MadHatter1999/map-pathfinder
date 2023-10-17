// CustomMarker.js Anthony Healy
import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon-2x.png';
function CustomMarker({ position, content }) {
  return (
    <Marker position={position}>
      <Popup>
        {content}
      </Popup>
    </Marker>
  );
}

export default CustomMarker;
