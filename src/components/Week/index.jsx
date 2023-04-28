import React from "react";
import Day from "../Day";
import { getDay, startOfMonth } from "date-fns";
import { CalendarContext } from "../../contexts/CalendarContext";

function Week(props) {
  const { weekNumber, daysInMonth } = props;
  
	return (
		<CalendarContext.Consumer>
      { ( value ) => {
        const startOfFirstWeek = getDay(startOfMonth( value ));

				return <tr>{renderDays(weekNumber, startOfFirstWeek, daysInMonth)}</tr>;
			}}

		</CalendarContext.Consumer>
	);
}

export default Week;


function renderDays( weekNumber, startOfFirstWeek , daysInMonth) {
  const days = [];

  if ( weekNumber === 0 ) {
    for ( let i = 0; i < 7; i++ ){
      if ( i === startOfFirstWeek ) {
        days.push( <Day key={ i } number={ daysInMonth.shift()} />)
      }
      else {
        days.push( <Day key={ i } number={null} />)
        
      }
    }
  } else {
    for (let i = 0; i < 7; i++) {
      days.push( <Day key={ i } number={ (daysInMonth.shift())}/>)
      
    }
  }
  return days;
}

