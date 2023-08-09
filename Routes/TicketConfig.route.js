const express = require("express");
import { postTicketConfig } from "../Controllers/TicketConfigController";

const ticketConfigRoute = express.Router();
ticketConfigRoute.route("/admin/config").post(postTicketConfig);
export { ticketConfigRoute };
