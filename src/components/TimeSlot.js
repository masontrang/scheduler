import "./TimeSlot.css";

function TimeSlot(props) {
  return (
    <button
      className="TimeSlot grid-item"
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.day} {props.hour}
    </button>
  );
}
export default TimeSlot;
