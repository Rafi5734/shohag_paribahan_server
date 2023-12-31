const mongoose = require("mongoose");

const ticketConfigSchema = new mongoose.Schema({
  // _id: { type: String },
  from: { type: String },
  to: { type: String },
  journeyDate: { type: String },
  boardingPlace: { type: String },
  boardingTime: { type: String },
  departureTime: { type: String },
  destinationPlace: { type: String },
  fare: { type: Number },
  extraInformation: { type: String },
  seats: { type: Number },
  coachType: { type: String },
  passengers: { type: Array },
});

const ticketConfig = mongoose.model("TicketConfig", ticketConfigSchema);

module.exports = ticketConfig;
