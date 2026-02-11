import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import type { Restaurant } from '../../types';

const defaultIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const selectedIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  iconRetinaUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface RestaurantMarkerProps {
  restaurant: Restaurant;
  isSelected: boolean;
  onSelect: (r: Restaurant) => void;
}

export function RestaurantMarker({ restaurant, isSelected, onSelect }: RestaurantMarkerProps) {
  return (
    <Marker
      position={[restaurant.lat, restaurant.lng]}
      icon={isSelected ? selectedIcon : defaultIcon}
      eventHandlers={{
        click: () => onSelect(restaurant),
      }}
    >
      <Tooltip direction="top" offset={[0, -35]}>
        <strong>{restaurant.name}</strong>
        <br />
        {restaurant.cuisine}
      </Tooltip>
    </Marker>
  );
}
