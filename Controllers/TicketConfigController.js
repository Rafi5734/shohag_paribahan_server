const expressHandler = require("express-async-handler");
const TicketConfig = require("../Models/TicketConfig.model");

const postTicketConfig = expressHandler(async (req, res) => {
  const ticketConfig = await TicketConfig.insertMany({
    from: req.body.from,
    to: req.body.to,
    journeyDate: req.body.journeyDate,
    boardingPlace: req.body.boardingPlace,
    boardingTime: req.body.boardingTime,
    departureTime: req.body.departureTime,
    destinationPlace: req.body.destinationPlace,
    fare: req.body.fare,
    extraInformation: req.body.extraInformation,
    seats: req.body.seats,
    coachType: req.body.coachType,
    passengers: req.body.passengers,
  });

  if (!ticketConfig) {
    res.status(500).json({ message: "TicketConfig not inserted" });
  }
  res.status(200).json(ticketConfig);
});
export { postTicketConfig };
