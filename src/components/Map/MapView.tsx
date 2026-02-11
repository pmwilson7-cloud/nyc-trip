import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import { restaurants } from '../../data/restaurants';
import { RestaurantMarker } from './RestaurantMarker';
import { RestaurantDetail } from './RestaurantDetail';
import type { Restaurant } from '../../types';
import styles from './Map.module.css';
import 'leaflet/dist/leaflet.css';

const NYC_BOUNDS = new L.LatLngBounds(
  [40.49, -74.27], // SW corner (Staten Island)
  [40.92, -73.68], // NE corner (Bronx / Queens)
);

interface MapViewProps {
  selected: Restaurant | null;
  onSelect: (r: Restaurant | null) => void;
}

export function MapView({ selected, onSelect }: MapViewProps) {
  return (
    <div className={styles.container}>
      <MapContainer
        center={[40.775, -73.975]}
        zoom={13}
        minZoom={11}
        maxBounds={NYC_BOUNDS}
        maxBoundsViscosity={1.0}
        className={styles.map}
        zoomControl={false}
      >
        <ZoomControl position="topright" />
        <TileLayer
          attribution='Map data &copy; Google'
          url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          maxZoom={20}
        />
        {restaurants.map((r) => (
          <RestaurantMarker
            key={r.id}
            restaurant={r}
            isSelected={selected?.id === r.id}
            onSelect={onSelect}
          />
        ))}
      </MapContainer>
      {selected && (
        <RestaurantDetail
          restaurant={selected}
          onClose={() => onSelect(null)}
        />
      )}
    </div>
  );
}
