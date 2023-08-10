const express = require("express");
// import { postTicketConfig } from "../Controllers/TicketConfigController";
const {
  postTicketConfig,
  getTicketConfig,
} = require("../Controllers/TicketConfigController.js");

const ticketConfigRoute = express.Router();
ticketConfigRoute.route("/").post(postTicketConfig).get(getTicketConfig);


module.exports = { ticketConfigRoute };
