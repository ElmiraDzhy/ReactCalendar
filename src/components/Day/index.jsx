import React from 'react'
import styles from './Day.module.css'


function Day( props ) {
  const { isCurrentMonth, number } = props;
  // const className=
  return (
    <td className={styles.day}>
     {number }
    </td>
  )
}

export default Day
