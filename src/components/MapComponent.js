// MapComponent.js Anthony Healy
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

function MapComponent({ children, center, zoom }) {
  return (
    <MapContainer center={center} zoom={zoom} style={{ width: '100%', height: '100%' }}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {children}
    </MapContainer>
  );
}

export default MapComponent;