import React from 'react';
import CalendarDay from './CalendarDay';
import CalendarBody from './CalendarBody';
import styles from './Calendar.module.css';

class Calendar extends React.Component {
  render() {
    return (
      <article className={styles.container}>
        <CalendarDay/>
        <CalendarBody/>
      </article>
    )
  }
}

export default Calendar;
