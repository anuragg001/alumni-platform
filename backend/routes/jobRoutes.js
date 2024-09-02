const express = require('express');
const { getJobs, createJob } = require('../controllers/jobController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/')
  .get(protect, getJobs)
  .post(protect, createJob);

module.exports = router;
