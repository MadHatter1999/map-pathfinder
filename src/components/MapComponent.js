//MapComponent.js Anthony Healy
import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';

const Routing = ({ positions }) => {
  const map = useMap();
  const routingControlRef = useRef(null);

  useEffect(() => {
    if (!map || positions.length <= 1) return;

    // Check if there's an existing routing control
    if (!routingControlRef.current) {
      const routingControl = L.Routing.control({
        waypoints: positions.map(pos => L.latLng(pos)),
        routeWhileDragging: true,
        createMarker: function(i, wp, nWps) {
          return null;  // Prevent default marker creation
        }
      }).addTo(map);

      routingControlRef.current = routingControl;
    } else {
      // Update the existing routing control with new waypoints
      routingControlRef.current.setWaypoints(positions.map(pos => L.latLng(pos)));
    }

  }, [positions, map]);

  return null;
};


const MapComponent = forwardRef(({ children, center, zoom, route }, ref) => {
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
      {route && route.length > 1 && <Routing positions={route} />}
    </MapContainer>
  );
});

export default MapComponent;
