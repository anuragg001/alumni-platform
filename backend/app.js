const express = require('express');
const dotenv = require('dotenv');

dotenv.config();


const alumniRoutes = require('./routes/alumniRoutes');
const authRoutes = require('./routes/authRoutes');
const donationRoutes = require('./routes/donationRoutes');
const eventRoutes = require('./routes/eventRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const jobRoutes = require('./routes/jobRoutes');
const networkingRoutes = require('./routes/networkingRoutes');

const app = express();
app.use(express.json());

app.use('/api/alumni', alumniRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/networking', networkingRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;
