"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const Map = () => {
  const position = [27.1751, 78.0421];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{
        height: "700px",
        width: "90%",
        marginTop: "300px",
        border: "3px solid #dedede",
        borderRadius: "5%",
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          Taj Mahal <br /> A wonder of the world.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
