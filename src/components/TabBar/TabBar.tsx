import styles from './TabBar.module.css';

export type Tab = 'schedule' | 'map';

interface TabBarProps {
  active: Tab;
  onChange: (tab: Tab) => void;
}

export function TabBar({ active, onChange }: TabBarProps) {
  return (
    <nav className={styles.tabBar}>
      <button
        className={`${styles.tab} ${active === 'schedule' ? styles.active : ''}`}
        onClick={() => onChange('schedule')}
      >
        Schedule
      </button>
      <button
        className={`${styles.tab} ${active === 'map' ? styles.active : ''}`}
        onClick={() => onChange('map')}
      >
        Restaurants
      </button>
    </nav>
  );
}
