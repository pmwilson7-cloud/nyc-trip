import { useState } from 'react';
import { TabBar, type Tab } from './components/TabBar/TabBar';
import { Schedule } from './components/Schedule/Schedule';
import { MapView } from './components/Map/MapView';
import type { Restaurant, RestaurantCategory } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('schedule');
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<RestaurantCategory | 'all'>('all');

  return (
    <>
      <TabBar active={activeTab} onChange={setActiveTab} />
      {activeTab === 'schedule' ? (
        <Schedule />
      ) : (
        <MapView
          selected={selectedRestaurant}
          onSelect={setSelectedRestaurant}
          categoryFilter={categoryFilter}
          onCategoryChange={setCategoryFilter}
        />
      )}
    </>
  );
}
