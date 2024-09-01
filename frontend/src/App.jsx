import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import DonationList from './components/Donations/DonationList';
import DonationForm from './components/Donations/DonationForm';
import EventList from './components/Events/EventList';
import EventForm from './components/Events/EventForm';
import FeedbackList from './components/Feedback/FeedbackList';
import FeedbackForm from './components/Feedback/FeedbackForm';
import JobList from './components/Jobs/JobList';
import JobForm from './components/Jobs/JobForm';
import NetworkingList from './components/Networking/NetworkingList';
import NetworkingForm from './components/Networking/NetworkingForm';
import Footer from './Footer'; 

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/donations" element={<DonationList />} />
            <Route path="/donations/new" element={<DonationForm />} />
            <Route path="/donations/edit/:id" element={<DonationForm />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/events/new" element={<EventForm />} />
            <Route path="/events/edit/:id" element={<EventForm />} />
            <Route path="/feedback" element={<FeedbackList />} />
            <Route path="/feedback/new" element={<FeedbackForm />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/jobs/new" element={<JobForm />} />
            <Route path="/jobs/edit/:id" element={<JobForm />} />
            <Route path="/networking" element={<NetworkingList />} />
            <Route path="/networking/new" element={<NetworkingForm />} />
            <Route path="/networking/edit/:id" element={<NetworkingForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
