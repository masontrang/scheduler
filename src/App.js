import "./App.css";
import CalendarGrid from "./components/CalendarGrid";
import ViewSelector from "./components/ViewSelector";
import ReserveSlot from "./components/ReserveSlot";
import React, { useState } from "react";

function App() {
  const [reserveSlot, setReserveSlot] = useState(false);

  const [blockTimeSlot, setBlockTimeSlot] = useState(false);
  const [confirmRes, setConfirmRes] = useState(false);

  let reserveration = { day: "mon", hour: "8am", resName: "mason" };

  return (
    <div className="App">
      <header>hi</header>
      <ViewSelector />

      <CalendarGrid />
    </div>
  );
}

export default App;
