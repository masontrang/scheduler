import "./CalendarGrid.css";
import TimeSlotRows from "./TimeSlotRows";
import TimeSlotColumns from "./TimeSlotColumns";
import { Fragment, useState } from "react";
import ReserveSlot from "./ReserveSlot";

const days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];

function CalendarGrid(props) {
  const [reserveSlotModal, setReserveSlotModal] = useState(false);
  const [resHold, setResHold] = useState({ t: 0, q: 0 });
  const [confirmRes, setConfirmRes] = useState({ t: 0, q: 0 });
  return (
    <div>
      <div className="cal-grid">
        {reserveSlotModal ? (
          <ReserveSlot
            className="modal"
            setReserveSlotModal={setReserveSlotModal}
            setConfirmRes={setConfirmRes}
            resHold={resHold}
            confirmRes={confirmRes}
            // onClickHandler={setConfirmRes(true)}
          ></ReserveSlot>
        ) : (
          <></>
        )}
        <TimeSlotColumns />
        <div>
          <TimeSlotRows days={days} hour={""} disabled={true} />
          <TimeSlotRows
            days={days}
            hour={"8AM"}
            onClick={(day, hour) => {
              console.log(day, "8AM");
              setReserveSlotModal(true);
              let temp = { day: day, time: "8AM" };

              console.log("res", temp);
              setResHold(temp);
            }}
          />
          <TimeSlotRows
            days={days}
            hour={"9AM"}
            onClick={(day, hour) => {
              console.log(day, "9AM");
              setReserveSlotModal(true);
              let temp = { day: day, time: "9AM" };
              setResHold(temp);
              console.log("res", resHold);
            }}
          />
          <TimeSlotRows
            days={days}
            hour={"10AM"}
            onClick={(day, hour) => {
              console.log(day, "10AM");
            }}
          />
          <TimeSlotRows
            days={days}
            hour={"11AM"}
            onClick={(day, hour) => {
              console.log(day, "11AM");
            }}
          />
          <TimeSlotRows
            days={days}
            hour={"Noon"}
            onClick={(day, hour) => {
              console.log(day, "Noon");
            }}
          />
          <TimeSlotRows
            days={days}
            hour={"1PM"}
            onClick={(day, hour) => {
              console.log(day, "1PM");
            }}
          />
          <TimeSlotRows
            days={days}
            hour={"2PM"}
            onClick={(day) => {
              console.log(day, "2PM");
            }}
          />
          <TimeSlotRows
            days={days}
            hour={"3PM"}
            onClick={(day, hour) => {
              console.log(day, "3PM");
            }}
          />
          <TimeSlotRows
            days={days}
            hour={"4PM"}
            onClick={(day, hour) => {
              console.log(day, "4PM");
            }}
          />
          <TimeSlotRows
            days={days}
            hour={"5PM"}
            onClick={(day, hour) => {
              console.log(day, "5PM");
            }}
          />
          <TimeSlotRows
            days={days}
            hour={"6PM"}
            onClick={(day, hour) => {
              console.log(day, "6PM");
            }}
          />
          <TimeSlotRows
            days={days}
            hour={"7PM"}
            onClick={(day, hour) => {
              console.log(day, "7PM");
            }}
          />

          {/* <div className="grid-container">
        <div class="grid-item item1">Date Range</div>
        <div class="grid-item">Day</div>
        <div class="grid-item">Sun</div>
        <div class="grid-item">Mon</div>
        <div class="grid-item">Tues</div>
        <div class="grid-item">Wed</div>
        <div class="grid-item">Thur</div>
        <div class="grid-item">Fri</div>
        <div class="grid-item">Sat</div>

        <div class="grid-item">Row2</div>
        <div class="grid-item">Row2</div>
        <div class="grid-item">Row2</div>
        <div class="grid-item">Row2</div>
        <div class="grid-item">Row2</div>
        <div class="grid-item">Row2</div>
        <div class="grid-item">Row3</div>
        <div class="grid-item">Row3</div>
        <div class="grid-item">Row3</div>
        <div class="grid-item">Row3</div>
        <div class="grid-item">Row3</div>
        <div class="grid-item">Row3</div>
        <div class="grid-item">Row3</div>
        <div class="grid-item">Row3</div>
      </div> */}
        </div>
      </div>
    </div>
  );
}

export default CalendarGrid;