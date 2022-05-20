import "./CalendarGrid.css";
// import TimeSlotRows from "./TimeSlotRows";

import { useState } from "react";
import ReserveSlot from "./ReserveSlot";
// import TimeSlotColumns from "./TimeSlotColumns";
import TimeSlot from "./TimeSlot";
import { useAuth0 } from "@auth0/auth0-react";

function CalendarGrid(props) {
  const [reserveSlotModal, setReserveSlotModal] = useState(false);
  const [modalConfirm, setModalConfirm] = useState(false);
  const [modalData, setModalData] = useState({ day: "", time: "" });
  const { user, isAuthenticated, isLoading } = useAuth0();
  let days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];
  let hours = [
    "",
    "8AM",
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
    "7PM",
    "8PM",
  ];

  function reservationHandler(reservation, index) {
    setReserveSlotModal(true);
    setModalData({
      day: reservation.day,
      time: reservation.time,
      name: reservation.name,
      reserved: reservation.reserved,
    });
    if (modalConfirm && !reservation.reserved) {
      const listCopy = props.reservationList.slice();
      listCopy[index] = { ...reservation, reserved: true, name: user.name };
      console.log("reservation name", reservation.name);
      props.setReservationList(listCopy);
    } else if (modalConfirm && reservation.reserved) {
      const listCopy = props.reservationList.slice();
      listCopy[index] = { ...reservation, reserved: false, name: "name" };
      props.setReservationList(listCopy);
    }
    setModalConfirm(false);
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
      {isAuthenticated && (
        <div className="timeSlots">
          {hours.map((hour) => {
            return <TimeSlot time={hour} disabled="disabled"></TimeSlot>;
          })}

          {props.reservationList.map((reservation, index) => {
            return (
              <div>
                <TimeSlot
                  className="hour-label"
                  time={reservation.time}
                  day={reservation.day}
                  reserved={reservation.reserved}
                  name={reservation.name}
                  disabled={reservation.disabled}
                  onClick={() => {
                    reservationHandler(reservation, index);
                  }}
                ></TimeSlot>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CalendarGrid;
