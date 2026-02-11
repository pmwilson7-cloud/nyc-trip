import { schedule } from '../../data/schedule';
import { TIME_SLOTS } from '../../types';
import { ScheduleCell } from './ScheduleCell';
import styles from './Schedule.module.css';

export function Schedule() {
  return (
    <div className={styles.wrapper}>
      {/* Desktop: grid view */}
      <div className={styles.grid}>
        <div className={styles.cornerCell} />
        {schedule.map((day) => (
          <div key={day.date} className={styles.dayHeader}>
            <span className={styles.dayName}>{day.dayOfWeek}</span>
            <span className={styles.dayDate}>Apr {new Date(day.date + 'T12:00:00').getDate()}</span>
          </div>
        ))}

        {TIME_SLOTS.map((slot) => (
          <div key={slot.key} className={styles.gridRow}>
            <div className={styles.timeLabel}>
              {slot.label}
            </div>
            {schedule.map((day) => (
              <ScheduleCell
                key={`${day.date}-${slot.key}`}
                activities={day[slot.key].activities}
                slotKey={slot.key}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Mobile: card view */}
      <div className={styles.cards}>
        {schedule.map((day) => {
          const hasActivities = TIME_SLOTS.some(
            (slot) => day[slot.key].activities.length > 0
          );
          if (!hasActivities) return null;

          return (
            <div key={day.date} className={styles.dayCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardDay}>{day.dayOfWeek}, Apr {new Date(day.date + 'T12:00:00').getDate()}</span>
              </div>
              {TIME_SLOTS.map((slot) => {
                const activities = day[slot.key].activities;
                if (activities.length === 0) return null;
                return (
                  <div key={slot.key} className={styles.cardSlot}>
                    <div className={styles.cardSlotLabel}>{slot.label}</div>
                    <ScheduleCell
                      activities={activities}
                      slotKey={slot.key}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
