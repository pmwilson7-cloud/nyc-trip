import { useState } from 'react';
import { TabBar, type Tab } from './components/TabBar/TabBar';
import { Schedule } from './components/Schedule/Schedule';
import { MapView } from './components/Map/MapView';
import type { Restaurant } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('schedule');
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  return (
    <>
      <TabBar active={activeTab} onChange={setActiveTab} />
      {activeTab === 'schedule' ? (
        <Schedule />
      ) : (
        <MapView
          selected={selectedRestaurant}
          onSelect={setSelectedRestaurant}
        />
      )}
    </>
  );
}
