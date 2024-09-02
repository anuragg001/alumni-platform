const express = require('express');
const { getAlumni, createAlumni } = require('../controllers/alumniController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/')
  .get(protect, getAlumni)
  .post(protect, createAlumni);

module.exports = router;
