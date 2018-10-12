const db = require("../models");

// Define and export controller methods here

module.exports = {
  findAll: (req, res) => {
    db.Trip.find(req.query)
      .sort({ date: -1 })
      .then(dbTrip => res.json(dbTrip))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.Trip
      .findById(req.params.id)
      .then(dbTrip => res.json(dbTrip))
      .catch(err => res.status(422).json(err));
  },
  findByCity: (req, res) => {
    db.Trip
      .find({ city: req.body.city })
      .then(dbTrip => res.json(dbTrip))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    console.log("this is req.body: " + req.body.user)
    db.Trip
      .create(req.body)
      .then(dbTrip => res.json(dbTrip))
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
    db.Trip
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbTrip => res.json(dbTrip))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    db.Trip
      .findById({ _id: req.params.id })
      .then(dbTrip => dbTrip.remove())
      .then(dbTrip => res.json(dbTrip))
      .catch(err => res.status(422).json(err));
  }
};
