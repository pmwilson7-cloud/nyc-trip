import type { TimeSlot } from '../../types';
import styles from './Schedule.module.css';

interface ScheduleCellProps {
  activities: string[];
  slotKey: TimeSlot;
}

export function ScheduleCell({ activities, slotKey }: ScheduleCellProps) {
  const colorClass = styles[slotKey];

  return (
    <div className={`${styles.cell} ${colorClass}`}>
      {activities.map((activity, i) => (
        <div key={i} className={styles.activity}>
          {activity}
        </div>
      ))}
    </div>
  );
}
