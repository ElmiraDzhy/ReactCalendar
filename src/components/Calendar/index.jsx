import React from 'react';
import CalendarDay from './CalendarDay';
import CalendarBody from './CalendarBody';

class Calendar extends React.Component {
  render() {
    return (
      <div>
        <CalendarDay/>
        <CalendarBody/>
      </div>
    )
  }
}

export default Calendar;
