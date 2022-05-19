import "./App.css";
import CalendarGrid from "./components/CalendarGrid";
import ViewSelector from "./components/ViewSelector";
// import ReserveSlot from "./components/ReserveSlot";
import React, { useState, useEffect } from "react";
const apiUrl = "http://localhost:8080";

async function getReservationList() {
  const response = await fetch(`${apiUrl}/reservationList`);
  const json = await response.json();

  // return json.map(reservation => ({
  //   ...reservation,
  // }))

  const reservationList = json;
  // console.log(reservationList);
  return reservationList;
  console.log("app", reservationList);
}

function App() {
  // const [reserveSlot, setReserveSlot] = useState(false);

  // const [blockTimeSlot, setBlockTimeSlot] = useState(false);
  const [reservationList, setReservationList] = useState([]);

  useEffect(() => {
    getReservationList().then(setReservationList);
  }, []);

  console.log("app", reservationList);

  return (
    <div className="App">
      <header>hi</header>
      <div>Hello</div>
      {/* <div>
        {reservationList.map((reservation) => (
          <div>
            Mapped from Express Server Day {reservation.day} Time{" "}
            {reservation.time}
          </div>
        ))}
      </div> */}
      <ViewSelector />

      <CalendarGrid reservationList={reservationList} />
    </div>
  );
}

export default App;
