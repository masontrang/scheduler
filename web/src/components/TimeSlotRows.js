import TimeSlot from "./TimeSlot";
import "./TimeSlotRowsCols.css";

function TimeSlotRows(props) {
  const days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];

  return (
    <div className="TimeSlotRows">
      {days.map((day) => {
        return (
          <div>
            <TimeSlot
              key={props.hour}
              day={day}
              hour={props.hour}
              disabled={props.disabled}
              reserved={props.reserved}
              onClick={() => {
                props.onClick(day);
              }}
            ></TimeSlot>
          </div>
        );
      })}
    </div>
  );
}

export default TimeSlotRows;
