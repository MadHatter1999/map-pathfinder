// /Components/MapComponent.js Anthony Healy
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';

const MapComponent = forwardRef(({ children, center, zoom }, ref) => {
  const mapInstance = useRef(null);

  useImperativeHandle(ref, () => ({
    getLeafletElement: () => mapInstance.current,
  }));

  // Extract positions from children (assuming they are markers)
  const positions = React.Children.map(children, child => {
    if (child.type === "Marker") {
      return child.props.position;
    }
    return null;
  }).filter(pos => pos !== null);

  return (
    <MapContainer ref={mapInstance} center={center} zoom={zoom} style={{ width: '100%', height: '100%' }}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {children}
      {/* Render polyline using the extracted positions */}
      <Polyline positions={positions} color="lime" />
    </MapContainer>
  );
});

export default MapComponent;
