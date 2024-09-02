const express = require('express');
const { getFeedback, createFeedback } = require('../controllers/feedbackController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/')
  .get(protect, getFeedback)
  .post(protect, createFeedback);

module.exports = router;
