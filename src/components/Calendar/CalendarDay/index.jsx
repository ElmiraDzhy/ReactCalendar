import React from 'react';
import styles from './CalendarDay.module.css';

function CalendarDay(props) {
  return (
    <div className={styles.day}>
      <h1 className={styles.title}>Day of Week</h1>
      <p className={styles['day-of-week']}>31</p>
    </div>
  )
}

export default CalendarDay;
