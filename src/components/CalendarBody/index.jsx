import React from "react";
import Month from "../Month";
import styles from "./CalendarBody.module.css";
import CalendarNavigation from "../CalendarNavigation";

function CalendarBody(props) {
	return (
		<div className={styles.container}>
			<CalendarNavigation />
			<Month />
		</div>
	);
}

export default CalendarBody;

