import React from "react";
import CalendarDay from "../CalendarDay";
import CalendarBody from "../CalendarBody";
import styles from "./Calendar.module.css";
import { CalendarContext } from "../../contexts/CalendarContext";

class Calendar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
		};
	}

  render() {
    const { date } = this.state;
		return (
			<CalendarContext.Provider value={date}>
				<article className={styles.container}>
					<CalendarDay />
					<CalendarBody />
				</article>
			</CalendarContext.Provider>
		);
	}
}

export default Calendar;

