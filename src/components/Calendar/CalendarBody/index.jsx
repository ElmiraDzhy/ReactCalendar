import React from 'react'
import Month from './Month'
import styles from './CalendarBody.module.css';

function CalendarBody(props) {
  return (
    <div className={styles.container}>
      <h1>Month YYYY</h1>

      <Month/>
      
    </div>
  )
}

export default CalendarBody
