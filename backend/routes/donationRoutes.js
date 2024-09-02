const express = require('express');
const { getDonations, createDonation } = require('../controllers/donationController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/')
  .get(protect, getDonations)
  .post(protect, createDonation);

module.exports = router;
