import "./TimeSlot.css";

function TimeSlot(props) {
  return (
    <button
      // <div className={`form-control ${!isValid ? "invalid" : ""}`}>
      className={`TimeSlot grid-item ${props.reserved ? "reserved" : ""}`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.day} {props.time} {props.reserved}
    </button>
  );
}
export default TimeSlot;
