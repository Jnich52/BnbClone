import React from 'react';
import './Calendar.css';


import { DateRangePicker } from 'rsuite';

function Calendar() {
    return(
        <>
        <DateRangePicker appearance="subtle" placement='bottomEnd' placeholder={'Check In | Check Out'} editable={false}/>
      </>
    )
}

export default Calendar;