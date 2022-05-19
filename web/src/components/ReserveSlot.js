import "./ReserveSlot.css";

function ReserveSlot(props) {
  let nameOfReservation = document.getElementById("nameId");
  return (
    <div className="ReserveSlot">
      Reserve {props.modalData.day} at {props.modalData.time} ?
      <div>
        {/* {props.resHold.day} */}
        {/* {" at "} {props.resHold.time}? */}
      </div>
      {/* <label for="name">Name</label> */}
      <form>
        <input
          className="inputField"
          type="text"
          name="name"
          id="nameId"
          placeholder="Enter name"
        ></input>
      </form>
      <div>
        <button
          className="reserveButton"
          onClick={() => {
            props.setReserveSlotModal(false);
            props.setModalConfirm(true);
            // console.log(nameOfReservation);
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
}

export default ReserveSlot;
