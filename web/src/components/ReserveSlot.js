import "./ReserveSlot.css";
import { useEffect } from "react";

function ReserveSlot(props) {
  //   let confirmRes = [];
  //   function setConfirmRes(value) {
  //     confirmRes = value;
  //   }

  //   useEffect(() => {
  //     setConfirmRes();
  //   }, [props.confirmRes]);

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
            console.log("confirmResHold-", props.resHold);
            props.setConfirmRes(props.resHold);
            // props.setReserved(true);
            // console.log("conf", props.confirmRes);

            // props.confirmRes = props.resHold;
            // console.log("conf2", props.confirmRes);
            
            return props.confirmRes;
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
