const express = require('express');
const { getNetworks, createNetwork } = require('../controllers/networkingController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/')
  .get(protect, getNetworks)
  .post(protect, createNetwork);

module.exports = router;
