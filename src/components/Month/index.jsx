import React from "react";
import Week from "../Week";
import { CalendarContext } from "../../contexts/CalendarContext";
import { getWeeksInMonth, startOfMonth, startOfWeek, addDays } from "date-fns";
import styles from './Month.module.css';

function Month(props) {
	return (
		<CalendarContext.Consumer>
			{(value) => {
				const weeksInMonth = getWeeksInMonth(value);

				return (
					<table className={styles.month}>
						<thead>
							<tr>
								<th className={styles.dayOfWeek}> s </th>
								<th className={styles.dayOfWeek}> m </th>
								<th className={styles.dayOfWeek}> t </th>
								<th className={styles.dayOfWeek}> w </th>
								<th className={styles.dayOfWeek}> t </th>
								<th className={styles.dayOfWeek}> f </th>
								<th className={styles.dayOfWeek}> s</th>
							</tr>
						</thead>
						<tbody>{renderWeeks(weeksInMonth, value)}</tbody>
					</table>
				);
			}}
		</CalendarContext.Consumer>
	);
}

function renderWeeks(amountOfWeeks, date) {
	const weeks = [];

	let dateToCalculate = startOfMonth(date);

	for (let i = 0; i < amountOfWeeks; i++) {
		let startOfCurrentWeek = startOfWeek(dateToCalculate);

		weeks.push(
			<Week
				key={i}
				startOfCurrentWeek={startOfCurrentWeek}
			/>
		);
		dateToCalculate = addDays(dateToCalculate, 7);
	}

	return weeks;
}

export default Month;

