const mongoose = require("mongoose");

const ticketConfigSchema = new mongoose.Schema({
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
  passengers: [],
});

const ticketConfig = mongoose.model("TicketConfig", ticketConfigSchema);

export default ticketConfig;
