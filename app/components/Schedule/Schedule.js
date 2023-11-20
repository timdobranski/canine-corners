import styles from './Schedule.module.css';
import React from 'react';

function ScheduleTable({ schedule }) {
  return (
    <div className={styles.scheduleWrapper}>
    <table className={styles.scheduleTable}>
      <thead className={styles.scheduleThead}>
        <tr>
          <th>Day</th>
          <th>Time at the Park</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody className={styles.scheduleTbody}>
        {Object.entries(schedule).map(([day, details]) => (
          <tr key={day} className={styles.scheduleRow}>
            <td>{day}</td>
            <td>{details ? details.time : '-'}</td>
            <td>{details ? details.duration : '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default ScheduleTable;