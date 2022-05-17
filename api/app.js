const express = require("express");
// const helmet = require("helmet");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const compression = require("compression");
const cors = require("cors");
const httpStatus = require("http-status");
// const routes = require("./routes");
const reservationList = require("./reservationList");

const app = express();

// set security HTTP headers
// app.use(helmet());

// parse json request body
// headers:
//  content-type: application/json
// body:
//  { "key": "value" }
app.use(express.json());

// parse urlencoded request body
// content-type: plain/text
// server.com/path/to/something?hello=world&page=2
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// gzip compression
// content-encoding: gzip
app.use(compression());

// enable cors
// browser protection
app.use(cors());
app.options("*", cors());

// - Mason Code Below
app.get("", (req, res) => {
  res.send(JSON.stringify("Hello Adrienne"));
});

// v1 api routes
app.use("/reservationList", reservationList);

// send back a 404 error for any unknown api request
app.use((_, res) => {
  return res.status(httpStatus.NOT_FOUND).send("Not found");
});

module.exports = app;
