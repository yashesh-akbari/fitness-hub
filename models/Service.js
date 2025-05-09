const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: String,
  short: String,
  description: String,
  rating: Number,
  icon: String,
  reviews: [
    {
      user: String,
      comment: String
    }
  ]
});

module.exports = mongoose.model('Service', serviceSchema);