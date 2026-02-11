import type { Restaurant } from '../../types';
import styles from './Map.module.css';

interface RestaurantDetailProps {
  restaurant: Restaurant;
  onClose: () => void;
}

export function RestaurantDetail({ restaurant, onClose }: RestaurantDetailProps) {
  const query = encodeURIComponent(restaurant.name + ' ' + restaurant.address);

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.detail}>
        <button className={styles.closeBtn} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.name}>{restaurant.name}</h2>
        <p className={styles.cuisine}>{restaurant.cuisine}</p>
        <p className={styles.neighborhood}>{restaurant.neighborhood}</p>

        <div className={styles.info}>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Address</span>
            <span>{restaurant.address}</span>
          </div>

          {restaurant.phone && (
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Phone</span>
              <a href={`tel:${restaurant.phone}`}>{restaurant.phone}</a>
            </div>
          )}

          {restaurant.hours && (
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Hours</span>
              <span>{restaurant.hours}</span>
            </div>
          )}
        </div>

        {restaurant.menuUrl && (
          <a
            href={restaurant.menuUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.menuLink}
          >
            View Menu &rarr;
          </a>
        )}

        <div className={styles.mapsRow}>
          <a
            href={`https://maps.apple.com/?q=${query}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.directionsLink}
          >
            Apple Maps
          </a>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${query}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.directionsLink}
          >
            Google Maps
          </a>
        </div>
      </div>
    </>
  );
}
