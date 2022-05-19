import TimeSlot from "./TimeSlot";
import "./TimeSlotRowsCols.css";

function TimeSlotColumns(props) {
  const hours = [
    "",
    "8AM",
    "9AM",
    "10AM",
    "11AM",
    "Noon",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
    "7PM",
  ];

  console.log("timeslotcols2", props.reservationList2);

  return (
    <div className="TimeSlotColumns">
      {hours.map((hour) => {
        return (
          <div>
            <TimeSlot
              className="hour-label"
              hour={hour}
              disabled={true}
            ></TimeSlot>
          </div>
        );
      })}
      {/* {props.reservationList.map((reservation) => {
        return (
          <div>
            <TimeSlot></TimeSlot>
          </div>
        );
      })} */}
    </div>
  );
}

export default TimeSlotColumns;
