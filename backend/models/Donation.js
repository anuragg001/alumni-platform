const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  donorName: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  purpose: {
    type: String,
    required: true
  }
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
