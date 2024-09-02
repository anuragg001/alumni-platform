const Alumni = require('../models/Alumni');


exports.getAlumni = async (req, res) => {
  try {
    const alumni = await Alumni.find();
    res.json(alumni);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


exports.createAlumni = async (req, res) => {
  const { name, graduationYear, email, jobTitle, company } = req.body;

  try {
    const newAlumni = new Alumni({
      name,
      graduationYear,
      email,
      jobTitle,
      company
    });

    const savedAlumni = await newAlumni.save();
    res.status(201).json(savedAlumni);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
