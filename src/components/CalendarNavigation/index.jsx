import React from "react";
import styles from "./CalendarNavigation.module.css";
import { setDate, subMonths, addMonths, isThisMonth, format } from "date-fns";
import { CalendarContext } from "../../contexts/CalendarContext";

function CalendarNavigation(props) {
	return (
		<CalendarContext.Consumer>
			{([date, changeCurrentDate]) => {
				const month = format(date, "MMMM");
				const year = format(date, "yyyy");
				return (
					<div className={styles.wrapper}>
						<button
							onClick={() => {
								let newDate = setDate(subMonths(date, 1), 1);
								if (isThisMonth(newDate)) {
									newDate = new Date();
								}

								changeCurrentDate(newDate);
							}}
							className={styles.arrow}>
							{"<"}
						</button>
						<h1 className={styles.title}>
							{month} {year}
						</h1>
						<button
							onClick={() => {
								let newDate = setDate(addMonths(date, 1), 1);
								if (isThisMonth(newDate)) {
									newDate = new Date();
								}
								changeCurrentDate(newDate);
							}}
							className={styles.arrow}>
							{">"}
						</button>
					</div>
				);
			}}
		</CalendarContext.Consumer>
	);
}

export default CalendarNavigation;

