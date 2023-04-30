import React from "react";
import Day from "../Day";
import { isThisMonth, addDays } from "date-fns";

function Week(props) {
	const { startOfCurrentWeek } = props;
	return <tr>{renderDays(startOfCurrentWeek)}</tr>;
}

export default Week;

function renderDays(start) {
	const days = [];
	for (let i = 0; i < 7; i++) {
		if (isThisMonth(start)) {
			days.push(
				<Day
					key={i}
					number={start}
					isCurrentMonth
				/>
			);
		} else {
			days.push(
				<Day
					key={i}
					number={start}
				/>
			);
		}
		start = addDays(start, 1);
	}

	return days;
}

