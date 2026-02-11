import { schedule } from '../../data/schedule';
import { TIME_SLOTS } from '../../types';
import { ScheduleCell } from './ScheduleCell';
import styles from './Schedule.module.css';

export function Schedule() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {/* Header row */}
        <div className={styles.cornerCell} />
        {schedule.map((day) => (
          <div key={day.date} className={styles.dayHeader}>
            <span className={styles.dayName}>{day.dayOfWeek}</span>
            <span className={styles.dayDate}>Apr {new Date(day.date + 'T12:00:00').getDate()}</span>
          </div>
        ))}

        {/* Time slot rows */}
        {TIME_SLOTS.map((slot) => (
          <>
            <div key={slot.key} className={styles.timeLabel}>
              {slot.label}
            </div>
            {schedule.map((day) => (
              <ScheduleCell
                key={`${day.date}-${slot.key}`}
                activities={day[slot.key].activities}
                slotKey={slot.key}
              />
            ))}
          </>
        ))}
      </div>
    </div>
  );
}
