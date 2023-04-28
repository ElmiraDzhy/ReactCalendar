import React from "react";
import Week from "../Week";
import { CalendarContext } from "../../contexts/CalendarContext";
import { getWeeksInMonth, getDaysInMonth, getDay, startOfMonth } from "date-fns";

function Month(props) {
	return (
		<CalendarContext.Consumer>
			{(value) => {
				const weeksInMonth = getWeeksInMonth(value);

        const daysInMonth = Array.from( Array( getDaysInMonth( value ) + 1 ).keys() );
        daysInMonth.shift();
        
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
						<tbody>{renderWeeks(weeksInMonth, daysInMonth, value)}</tbody>
					</table>
				);
			}}
		</CalendarContext.Consumer>
	);
}

function renderWeeks(amountOfWeeks, daysInMonth, date) {
  const weeks = [];
  const daysInFirstWeek = 7 - getDay( startOfMonth( date ) );
  for ( let i = 0; i < amountOfWeeks; i++ ) {
    if ( i === 0 ) {
      weeks.push(
        <Week
          key={i}
          weekNumber={i}
          daysInMonth={daysInMonth.splice(0, daysInFirstWeek)}
        />
      );
    } else {
      weeks.push(
        <Week
          key={i}
          weekNumber={i}
          daysInMonth={daysInMonth.splice(0, 7)}
        />
      );
    }

		
	}
	return weeks;
}

export default Month;

