const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const travelSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Travel = mongoose.model("Travel", travelSchema);

module.exports = Travel;
