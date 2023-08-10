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
    res.status(500).json({ message: "TicketConfig internal server error" });
    res.status(404).json({ message: "TicketConfig list not founded" });
  }
  res.status(200).json(ticketConfig);
});

const getTicketConfig = expressHandler(async (req, res) => {
  const ticketConfig = await TicketConfig.find();

  if (!ticketConfig) {
    res.status(500).json({ message: "TicketConfig internal server error" });
    res.status(404).json({ message: "TicketConfig list not found" });
  }
  res.status(200).json(ticketConfig);
});

const getOneTicketConfig = expressHandler(async (req, res) => {
  const ticketConfig = await TicketConfig.findById(req.params.id);

  if (!ticketConfig) {
    res.status(500).json({ message: "TicketConfig internal server error" });
    res.status(404).json({ message: "TicketConfig list not founded" });
  }
  res.status(200).json(ticketConfig);
});

const updateTicketConfig = expressHandler(async (req, res) => {
  const ticketConfig = await TicketConfig.findByIdAndUpdate(
    req.params.id,
    {
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
    },
    {
      new: true,
    }
  );

  if (!ticketConfig) {
    res.status(500).json({ message: "Ticket config internal server error" });
    res.status(404).json({ message: "Ticket config list not found" });
  } else {
    res.status(200).json(ticketConfig);
  }
});

const deleteOneTicketConfig = expressHandler(async (req, res) => {
  const ticketConfig = await TicketConfig.findByIdAndDelete(req.params.id);

  if (!ticketConfig) {
    res.status(500).json({ message: "Internal server error" });
    res.status(404).json({ message: "Ticket not found" });
  } else {
    res.status(200).json({ message: "Ticket delete successfully!" });
  }
});

module.exports = {
  postTicketConfig,
  getTicketConfig,
  updateTicketConfig,
  getOneTicketConfig,
  deleteOneTicketConfig,
};
