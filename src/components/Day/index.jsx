import React from 'react'
import styles from './Day.module.css'

function Day( props ) {
  const { isCurrentMonth, number } = props;
  console.log(isCurrentMonth)
  return (
    <td className={styles.day}>
     {number }
    </td>
  )
}

export default Day
