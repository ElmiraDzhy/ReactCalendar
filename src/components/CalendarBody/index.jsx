import React from "react";
import Month from "../Month";
import styles from "./CalendarBody.module.css";
import { CalendarContext } from "../../contexts/CalendarContext";
import { addMonths, format, subMonths } from "date-fns";

function CalendarBody(props) {
	return (
		<CalendarContext.Consumer>
			{([date, changeCurrentDay]) => {
				const month = format(date, "MMMM");
				const year = format(date, "yyyy");
				return (
					<div className={styles.container}>
						<div className={styles.wrapper}>
							<button
								onClick={() => {
									const newDate = subMonths(date, 1);
									changeCurrentDay(newDate);
								}}
								className={styles.arrow}>
								{"<"}
							</button>
							<h1 className={styles.title}>
								{month} {year}
							</h1>
							<button
								onClick={() => {
									const newDate = addMonths(date, 1);
									changeCurrentDay(newDate);
								}}
								className={styles.arrow}>
								{">"}
							</button>
						</div>

						<Month />
					</div>
				);
			}}
		</CalendarContext.Consumer>
	);
}

export default CalendarBody;

