const express = require('express');
const { getEvents, createEvent } = require('../controllers/eventController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/')
  .get(protect, getEvents)
  .post(protect, createEvent);

module.exports = router;
