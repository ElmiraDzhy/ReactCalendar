import React from "react";
import Day from "../Day";
import {  isThisMonth,  getDate, addDays } from "date-fns";
import { CalendarContext } from "../../contexts/CalendarContext";


function Week(props) {
	const { startOfCurrentWeek } = props;

	return (
		<CalendarContext.Consumer>
			{(value) => {
				return <tr>{renderDays(startOfCurrentWeek)}</tr>;
			}}
		</CalendarContext.Consumer>
	);
}

export default Week;

function renderDays( start ) {
	const days = [];

	for (let i = 0; i < 7; i++) {
		if (isThisMonth(start)) {
			days.push(
				<Day
					key={i}
          number={ getDate( start ) }
          isCurrentMonth
				/>
			);
		} else {
			days.push(
				<Day
					key={i}
          number={ null }
          isCurrentMonth={false}
				/>
			);
    }
    start = addDays( start, 1 );
	}

	return days;
}


