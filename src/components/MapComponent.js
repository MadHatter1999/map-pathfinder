import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const MapComponent = forwardRef(({ children, center, zoom }, ref) => {
  const mapInstance = useRef(null);

  useImperativeHandle(ref, () => ({
    getLeafletElement: () => mapInstance.current,
  }));

  return (
    <MapContainer ref={mapInstance} center={center} zoom={zoom} style={{ width: '100%', height: '100%' }}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {children}
    </MapContainer>
  );
});

export default MapComponent;
