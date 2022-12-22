import React from "react";
import format from "date-fns/format";
import "./Calendar.css";
import { DateRangePicker } from "rsuite";

function Calendar(props) {
  function daysBetween(startDate, endDate) {
    let date_1 = new Date(endDate);
    let date_2 = new Date(startDate);
    // console.log(date_1)
    // console.log(date_2)
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    props.setNumberOfNights(TotalDays);
    props.setStartDate(startDate);
    props.setEndDate(endDate);
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  return (
    <div>
      <DateRangePicker
        appearance="subtle"
        placement="bottomEnd"
        placeholder={""}
        editable={false}
        style={{ minWidth: "90%", textAlignLast: "end" }}
        onOk={(value) => {
          // console.log(format(value[0], 'MM/dd/yyy'));
          // console.log(format(value[1], 'MM/dd/yyyy'));
          daysBetween(
            format(value[0], "MM/dd/yyy"),
            format(value[1], "MM/dd/yyyy")
          );
          daysBetween(
            format(value[0], "MM/dd/yyy"),
            format(value[1], "MM/dd/yyyy")
          );
          // console.log(props.numberOfNights)
          props.setNightlyRate(getRandomInt(300, 600));
        }}
      />
    </div>
  );
}

export default Calendar;
