import "./CalendarGrid.css";
// import TimeSlotRows from "./TimeSlotRows";

import { useState, useEffect } from "react";
import ReserveSlot from "./ReserveSlot";
// import TimeSlotColumns from "./TimeSlotColumns";
import TimeSlot from "./TimeSlot";
import { useAuth0 } from "@auth0/auth0-react";

function CalendarGrid(props) {
  const [reserveSlotModal, setReserveSlotModal] = useState(false);
  const [modalConfirm, setModalConfirm] = useState(false);
  const [modalData, setModalData] = useState({ day: "", time: "" });
  // const [reservedStyle, setReservedStyle] = useState(false);
  // const [reservation, setReservation] = useState("");

  const { user, isAuthenticated, isLoading } = useAuth0();

  // useEffect(() => {
  //   props.saveReservationList();
  // }, [modalConfirm]);

  function reservationHandler(reservation, index) {
    setReserveSlotModal(true);
    setModalData({
      day: reservation.day,
      time: reservation.time,
      name: reservation.name,
      reserved: reservation.reserved,
    });
    if (modalConfirm) {
      reservation.reserved = true;
      const listCopy = props.reservationList.slice();
      listCopy[index] = { ...reservation, reserved: true, name: user.name };
      console.log("reservation name", reservation.name);
      props.setReservationList(listCopy);
    }
    return;
  }

  return (
    <div className="cal-grid">
      <div className="modal">
        {reserveSlotModal && (
          <ReserveSlot
            className="modal"
            setReserveSlotModal={setReserveSlotModal}
            setModalConfirm={setModalConfirm}
            modalData={modalData}
            saveReservationList={props.saveReservationList}
          />
        )}
      </div>
      <div className="timeSlots">
        {props.reservationList.map((reservation, index) => {
          return (
            <div>
              <TimeSlot
                className="hour-label"
                time={reservation.time}
                day={reservation.day}
                reserved={reservation.reserved}
                name={reservation.name}
                onClick={() => {
                  reservationHandler(reservation, index);
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
