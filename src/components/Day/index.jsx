import React from "react";
import styles from "./Day.module.css";
import classNames from "classnames";
import { CalendarContext } from "../../contexts/CalendarContext";
import { isSameDay, getDate, getMonth, getYear } from "date-fns";

function Day(props) {
	const { number } = props;
	return (
		<CalendarContext.Consumer>
			{([date, changeCurrentDate]) => {
				const isCurrentMonth = getMonth(date) === getMonth(number) && getYear(date) === getYear(number);

				const className = classNames(styles.day, {
					[styles.currentDay]: isSameDay(date, number),
					[styles.isCurrent]: isCurrentMonth,
					[styles.isAnother]: !isCurrentMonth,
				});

				return (
					<td
						onClick={() => {
							changeCurrentDate(number);
						}}
						className={className}>
						{getDate(number)}
					</td>
				);
			}}
		</CalendarContext.Consumer>
	);
}

export default Day;

