import React from "react";
import styles from "./CalendarDay.module.css";
import { CalendarContext } from "../../contexts/CalendarContext";
import {getDate, format} from 'date-fns'

function CalendarDay(props) {
	return (
		<CalendarContext.Consumer>
      { ( [date] ) => {
				return <div className={styles.day}>
					<h1 className={styles.title}>{format(date, 'EEEE')}</h1>
					<p className={styles["day-of-week"]}> {getDate(date)} </p>
				</div>;
			}}
		</CalendarContext.Consumer>
	);
}

export default CalendarDay;

