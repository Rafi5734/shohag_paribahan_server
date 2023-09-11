const express = require("express");
// import { postTicketConfig } from "../Controllers/TicketConfigController";
const {
  postTicketConfig,
  getTicketConfig,
  updateTicketConfig,
  getOneTicketConfig,
  deleteOneTicketConfig,
  // filterTicket,
} = require("../Controllers/TicketConfigController.js");

const ticketConfigRoute = express.Router();
ticketConfigRoute.route("/").post(postTicketConfig).get(getTicketConfig);
ticketConfigRoute
  .route("/:id")
  .put(updateTicketConfig)
  .get(getOneTicketConfig)
  .delete(deleteOneTicketConfig);

// ticketConfigRoute.route("/filter_ticket").get(filterTicket);


module.exports = { ticketConfigRoute };
