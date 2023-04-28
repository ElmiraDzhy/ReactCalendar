import React from "react";
import Week from "../Week";
import { CalendarContext } from "../../contexts/CalendarContext";
import { getWeeksInMonth, startOfMonth, startOfWeek, addDays } from "date-fns";

function Month(props) {
	return (
		<CalendarContext.Consumer>
			{(value) => {
				const weeksInMonth = getWeeksInMonth(value);

				return (
					<table>
						<thead>
							<tr>
								<th> s </th>
								<th> m </th>
								<th> t </th>
								<th> w </th>
								<th> t </th>
								<th> f </th>
								<th> s</th>
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

