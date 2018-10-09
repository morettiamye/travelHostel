const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const travelSchema = new Schema({
  city: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Trip = mongoose.model("Trip", travelSchema);

module.exports = Trip;
