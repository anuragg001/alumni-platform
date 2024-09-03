const Job = require('../models/Job');

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createJob = async (req, res) => {
  const { title, company, location, description, requirements, applicationDeadline } = req.body;

  try {
    const newJob = new Job({
      title,
      company,
      location,
      description,
      requirements,
      applicationDeadline
    });

    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
