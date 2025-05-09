const mongoose = require('mongoose');

const classItemSchema = new mongoose.Schema({
  className: String,
  time: String,
  trainer: String
});

const scheduleSchema = new mongoose.Schema({
  day: { type: String, required: true },
  classes: [classItemSchema]
});

module.exports = mongoose.model('Schedule', scheduleSchema);
