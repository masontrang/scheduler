import "./ReserveSlot.css";

function ReserveSlot(props) {
  const reservedOutput = (
    <div
      onClick={() => {
        props.setReserveSlotModal(false);
        props.setModalConfirm(false);
      }}
    >
      {props.modalData.day} at {props.modalData.time} is reserved by{" "}
      {props.modalData.name}
    </div>
  );

  const notReservedOutput = (
    <div>
      Reserve {props.modalData.day} at {props.modalData.time} ?
      <div>
        <button
          className="reserveButton"
          onClick={() => {
            props.setReserveSlotModal(false);
            props.setModalConfirm(true);
            props.saveReservationList();
          }}
        >
          Yes
        </button>
        <button
          className="reserveButton"
          onClick={() => {
            props.setReserveSlotModal(false);
            props.setModalConfirm(false);
          }}
        >
          No
        </button>
      </div>
    </div>
  );

  return (
    <div className="ReserveSlot">
      {props.modalData.reserved ? reservedOutput : notReservedOutput}
    </div>
  );
}

export default ReserveSlot;
