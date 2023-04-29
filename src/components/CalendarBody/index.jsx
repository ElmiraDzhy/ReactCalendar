import React from "react";
import Month from "../Month";
import styles from "./CalendarBody.module.css";
import { CalendarContext } from "../../contexts/CalendarContext";
import { format } from "date-fns";

function CalendarBody(props) {
	return (
		<CalendarContext.Consumer>
			{([date, changeCurrentDay]) => {
				const month = format(date, "MMMM");
				const year = format(date, "yyyy");
				return (
					<div className={styles.container}>
						<div>
							{/* <button>{"<"}</button> */}
							<h1 className={styles.title}>
								{month} {year}
							</h1>
							{/* <button>{">"}</button> */}
						</div>

						<Month />
					</div>
				);
			}}
		</CalendarContext.Consumer>
	);
}

export default CalendarBody;

