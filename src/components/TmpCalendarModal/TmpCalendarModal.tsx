import React, { useState } from "react"
import "./TmpCalendarModal.scss"
// "react-date-range/dist/components/DateRange"
// import DateRange from "react-date-range/dist/components/DateRange" // theme css file
import "react-date-range/dist/styles.css" // main css file
import "react-date-range/dist/theme/default.css"
import { DateRange } from "react-date-range"

const TmpCalendarModal = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ])

  function dateHandler(e: any) {
    console.log(state)
  }

  return (
    <>
      <div className="calendar-container" onClick={dateHandler}>
        <DateRange
          className="calendar"
          editableDateInputs={true}
          onChange={(item: any) => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
          months={2}
          direction={"horizontal"}
          minDate={new Date()}
          showDateDisplay={false}
          rangeColors={["#168738"]}
        />
        <button className="check-button">Check</button>
      </div>
    </>
  )
}

export default TmpCalendarModal
