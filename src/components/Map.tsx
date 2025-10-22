"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { MapContainerProps, TileLayerProps } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function Map() {
  const [mapSource, setMapSource] = useState<"osm" | "google">("osm");
  const position: [number, number] = [4.711, -74.072]; // Bogotá

  const safeMapProps: MapContainerProps = {
    center: position,
    zoom: 13,
    scrollWheelZoom: true,
    style: { height: "100%", width: "100%" },
  } as unknown as MapContainerProps;

  // Fuentes de mapas
  const mapLayers: Record<"osm" | "google", TileLayerProps> = {
    osm: {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    },
    google: {
      attribution: '&copy; <a href="https://www.google.com/maps">Google</a>',
      url: "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    },
  };

  return (
    <div className="h-[300px] w-full rounded-2xl overflow-hidden shadow-lg relative">
      <MapContainer {...safeMapProps}>
        <TileLayer {...(mapLayers[mapSource] as unknown as TileLayerProps)} />
        <Marker position={position}>
          <Popup>
            📍 <strong>Bogotá</strong>
            <br /> Ciudad de referencia.
          </Popup>
        </Marker>
      </MapContainer>

      {/* Selector de fuente */}
      <div className="absolute top-2 right-2 bg-white/90 rounded-xl shadow p-1 flex space-x-1 text-xs">
        <button
          onClick={() => setMapSource("osm")}
          className={`px-2 py-1 rounded-lg ${
            mapSource === "osm" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          OSM
        </button>
        <button
          onClick={() => setMapSource("google")}
          className={`px-2 py-1 rounded-lg ${
            mapSource === "google" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Google
        </button>
      </div>
    </div>
  );
}
