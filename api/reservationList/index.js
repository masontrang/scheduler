const { Router } = require("express");
const router = Router();

// let days = 6;
// let hours = 23;

let days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];
let hours = [
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

let reservationList = [];

for (day of days) {
  for (hour of hours) {
    let reservation = { day: day, time: hour, name: "", reserved: false };
    reservationList.push(reservation);
  }
}

const initialState = reservationList;

router.get("/", (req, res) => {
  res.json(reservationList); // return all the notes
});

router.post("/", (req, res) => {});

module.exports = router;