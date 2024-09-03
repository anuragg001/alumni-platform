const mongoose = require('mongoose');

const networkSchema = new mongoose.Schema({
  alumni: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Alumni',
    required: true
  },
  connections: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Alumni'
  }],
  createdDate: {
    type: Date,
    default: Date.now
  }
});

const Network = mongoose.model('Network', networkSchema);

module.exports = Network;
