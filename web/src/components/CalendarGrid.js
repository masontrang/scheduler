import "./CalendarGrid.css";
// import TimeSlotRows from "./TimeSlotRows";

import { useState } from "react";
import ReserveSlot from "./ReserveSlot";
// import TimeSlotColumns from "./TimeSlotColumns";
import TimeSlot from "./TimeSlot";

function CalendarGrid(props) {
  const [reserveSlotModal, setReserveSlotModal] = useState(false);
  const [modalConfirm, setModalConfirm] = useState(false);
  const [modalData, setModalData] = useState({ day: "", time: "" });
  // const [reservation, setReservation] = useState("");

  function reservationHandler(reservation) {
    setReserveSlotModal(true);
    setModalData({ day: reservation.day, time: reservation.time });
    if (modalConfirm) {
      reservation.name = "reserved";
      reservation.reserved = true;
      console.log("reservation List", props.reservationList);
      props.setReservationList(props.reservationList);
    }

    return;
  }

  return (
    <div className="cal-grid">
      <div className="modal">
        {reserveSlotModal ? (
          <ReserveSlot
            className="modal"
            setReserveSlotModal={setReserveSlotModal}
            setModalConfirm={setModalConfirm}
            modalData={modalData}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="timeSlots">
        {props.reservationList.map((reservation) => {
          return (
            <div>
              <TimeSlot
                className="hour-label"
                time={reservation.time}
                day={reservation.day}
                reserved={reservation.reserved}
                name={reservation.name}
                onClick={() => {
                  reservationHandler(reservation);
                }}
              ></TimeSlot>
            </div>
          );
        })}
      </div>
    </div>
  );

  // <TimeSlotRows days={days} hour={""} disabled={true} />
  // <TimeSlotRows
  //   days={days}
  //   hour={"8AM"}
  //   onClick={(day, hour) => {
  //     console.log(day, "8AM");

  //     let temp = { day: day, time: "8AM" };

  //     // setReserved = { setReserved };
  //     console.log("res", temp);
  //     setResHold(temp);
  //     setReserveSlotModal(true);
  //     // console.log("reservation list", reservationList);
  //   }}
  // />
}

export default CalendarGrid;
