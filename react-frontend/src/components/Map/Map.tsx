import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import './Map.scss';


// const Map = ({ onDraw }) => {
const Map = ({ }) => {
  return(
    // TODO: make the className or ID different/variable for the draw and display maps?
    <div className="map">
      <MapContainer center={[51.505, -0.09]} zoom={3}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* TODO: add draw tools */}
      </MapContainer>
    </div>
  )
}

export default Map;