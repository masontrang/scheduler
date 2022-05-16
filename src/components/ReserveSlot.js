import "./ReserveSlot.css";

function ReserveSlot(props) {
  return (
    <div className="ReserveSlot">
      Reserve
      <div>
        {props.resHold.day}
        {" at "} {props.resHold.time}?
      </div>
      <div>
        <button
          className="reserveButton"
          onClick={() => {
            props.setReserveSlotModal(false);
            props.setConfirmRes(props.resHold);
            console.log("conf", props.confirmRes);
          }}
        >
          Yes
        </button>
        <button
          className="reserveButton"
          onClick={() => {
            props.setReserveSlotModal(false);
            props.setConfirmRes(false);
          }}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default ReserveSlot;
