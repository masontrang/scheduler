import "./TimeSlot.css";

function TimeSlot(props) {
  return (
    <button
      className={`TimeSlot grid-item ${props.reserved ? !"reserved" : ""}`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.day} {props.hour} {props.label}
    </button>
  );
}
export default TimeSlot;
