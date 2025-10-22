"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

export default function MapClient() {
  // Coordenadas de ejemplo (Bogotá)
  const position: LatLngExpression = [4.711, -74.0721];

  const customIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
    iconSize: [38, 38],
    iconAnchor: [19, 38],
  });

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg border">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            📍 Estás aquí — Ejemplo en Bogotá, Colombia.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
