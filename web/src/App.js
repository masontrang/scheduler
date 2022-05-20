import "./App.css";
import CalendarGrid from "./components/CalendarGrid";
import ViewSelector from "./components/ViewSelector";
// import ReserveSlot from "./components/ReserveSlot";
import React, { useState, useEffect } from "react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

const apiUrl = "http://localhost:8080";

async function getReservationList() {
  const response = await fetch(`${apiUrl}/reservationList`);
  const json = await response.json();
  const reservationList = json;
  return reservationList;
}

function App() {
  const [reservationList, setReservationList] = useState([]);

  useEffect(() => {
    getReservationList().then(setReservationList);
  }, []);

  async function saveReservationList() {
    const response = await fetch(`${apiUrl}/reservationList`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservationList),
    });
  }

  return (
    <div className="App">
      <header className="header">Scheduler</header>
      {/* <ViewSelector /> */}
      <CalendarGrid
        reservationList={reservationList}
        setReservationList={setReservationList}
        saveReservationList={saveReservationList}
      />
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
      <Profile></Profile>
    </div>
  );
}

export default App;
