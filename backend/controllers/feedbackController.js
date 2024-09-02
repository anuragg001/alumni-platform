const Feedback = require('../models/Feedback');


exports.getFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find().populate('user', 'name email');
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


exports.createFeedback = async (req, res) => {
  const { comments, rating } = req.body;

  try {
    const newFeedback = new Feedback({
      user: req.user.id,
      comments,
      rating
    });

    const savedFeedback = await newFeedback.save();
    res.status(201).json(savedFeedback);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
