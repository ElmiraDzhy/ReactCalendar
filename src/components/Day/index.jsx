import React from "react";
import styles from "./Day.module.css";
import classNames from "classnames";
import { CalendarContext } from "../../contexts/CalendarContext";
import { isSameDay, getDate } from "date-fns";

function Day(props) {
	const { isCurrentMonth, number } = props;

	return (
		<CalendarContext.Consumer>
			{([date, changeCurrentDay]) => {
				const className = classNames(styles.day, {
					[styles.currentDay]: isSameDay(date, number),
					[styles.isCurrent]: isCurrentMonth,
					[styles.isAnother]: !isCurrentMonth,
				});

				return (
					<td
						onClick={() => {changeCurrentDay(number)}}
						className={className}>
						{getDate(number)}
					</td>
				);
			}}
		</CalendarContext.Consumer>
	);
}

export default Day;

