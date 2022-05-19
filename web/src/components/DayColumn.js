import TimeSlot from "./TimeSlot";
import "./TimeSlotRowsCols.css";
function DayColumn(props) {
  console.log("daycol", props.reservationList);
  const days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];

  return (
    <div>
      {props.reservationList.map((reservation) => {
        return (
          <div>
            {
              <TimeSlot
                hour={reservation.time}
                day={reservation.day}
                label={props.label}
              ></TimeSlot>
            }
          </div>
        );
      })}
    </div>
  );
}

export default DayColumn;
