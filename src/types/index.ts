export type RestaurantCategory =
  | 'American'
  | 'Asian'
  | 'Deli & Bagels'
  | 'European'
  | 'Latin American & Caribbean'
  | 'Middle Eastern';

export const RESTAURANT_CATEGORIES: RestaurantCategory[] = [
  'American',
  'Asian',
  'Deli & Bagels',
  'European',
  'Latin American & Caribbean',
  'Middle Eastern',
];

export interface Restaurant {
  id: number;
  name: string;
  neighborhood: string;
  cuisine: string;
  category: RestaurantCategory;
  address: string;
  lat: number;
  lng: number;
  phone: string;
  hours: string;
  menuUrl: string;
}

export interface ScheduleEntry {
  activities: string[];
}

export interface DaySchedule {
  date: string;
  dayOfWeek: string;
  morning: ScheduleEntry;
  afternoon: ScheduleEntry;
  evening: ScheduleEntry;
  night: ScheduleEntry;
}

export type TimeSlot = 'morning' | 'afternoon' | 'evening' | 'night';

export const TIME_SLOTS: { key: TimeSlot; label: string }[] = [
  { key: 'morning', label: 'Morning' },
  { key: 'afternoon', label: 'Afternoon' },
  { key: 'evening', label: 'Evening' },
  { key: 'night', label: 'Night' },
];
