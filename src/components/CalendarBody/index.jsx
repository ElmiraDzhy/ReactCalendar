import React from "react";
import Month from "../Month";
import styles from "./CalendarBody.module.css";

function CalendarBody(props) {
	return (
		<div className={styles.container}>
			<div>
				{/* <button>{"<"}</button> */}
				<h1>Month YYYY</h1>
				{/* <button>{">"}</button> */}
			</div>

			<Month />
		</div>
	);
}

export default CalendarBody;

