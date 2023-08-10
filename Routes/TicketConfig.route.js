const express = require("express");
// import { postTicketConfig } from "../Controllers/TicketConfigController";
const {
  postTicketConfig,
  getTicketConfig,
  updateTicketConfig,
  getOneTicketConfig,
} = require("../Controllers/TicketConfigController.js");

const ticketConfigRoute = express.Router();
ticketConfigRoute.route("/").post(postTicketConfig).get(getTicketConfig);
ticketConfigRoute.route("/:id").put(updateTicketConfig).get(getOneTicketConfig);


module.exports = { ticketConfigRoute };
