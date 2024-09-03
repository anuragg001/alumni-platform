const Network = require('../models/Network');


exports.getNetworks = async (req, res) => {
  try {
    const networks = await Network.find().populate('alumni', 'name email').populate('connections', 'name email');
    res.json(networks);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


exports.createNetwork = async (req, res) => {
  const { alumni, connections } = req.body;

  try {
    const newNetwork = new Network({
      alumni,
      connections
    });

    const savedNetwork = await newNetwork.save();
    res.status(201).json(savedNetwork);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
