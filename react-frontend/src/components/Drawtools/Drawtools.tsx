import React from 'react';
import { FeatureGroup } from 'react-leaflet';
import { EditControl, DrawEvents } from 'react-leaflet-draw';
import 'leaflet-draw/dist/leaflet.draw.css';


interface DrawToolsProps {
  onDrawCreate: (e: DrawEvents.Created) => void;
  onDrawDelete: () => void;
}

const DrawTools: React.FC<DrawToolsProps> = ({ onDrawCreate, onDrawDelete }) => {
  return (
    <FeatureGroup>
      <EditControl
        position="topright"
        onCreated={onDrawCreate}
        onDeleted={onDrawDelete}
        draw={{
          rectangle: false,
          polygon: true,
          polyline: false,
          circle: false,
          marker: false,
          circlemarker: false,
        }}
      />
    </FeatureGroup>
  );
};

export default DrawTools;
