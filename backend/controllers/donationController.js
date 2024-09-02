const Donation = require('../models/Donation');


exports.getDonations = async (req, res) => {
  try {
    const donations = await Donation.find();
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


exports.createDonation = async (req, res) => {
  const { donorName, amount, purpose } = req.body;

  try {
    const newDonation = new Donation({
      donorName,
      amount,
      purpose
    });

    const savedDonation = await newDonation.save();
    res.status(201).json(savedDonation);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
