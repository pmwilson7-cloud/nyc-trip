import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import { restaurants } from '../../data/restaurants';
import { RestaurantMarker } from './RestaurantMarker';
import { RestaurantDetail } from './RestaurantDetail';
import type { Restaurant } from '../../types';
import styles from './Map.module.css';
import 'leaflet/dist/leaflet.css';

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
        className={styles.map}
        zoomControl={false}
      >
        <ZoomControl position="topright" />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
