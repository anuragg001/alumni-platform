import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
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
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="bg-gray-800 text-white py-4">
          <nav className="container mx-auto flex justify-between items-center">
            <div>
              <Link to="/" className="text-lg font-bold">
                My App
              </Link>
            </div>
            <div>
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                >
                  Logout
                </button>
              ) : (
                <div>
                  <Link
                    to="/login"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </header>

        <main className="flex-grow">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route
              path="/"
              element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route
              path="/donations"
              element={isLoggedIn ? <DonationList /> : <Navigate to="/login" />}
            />
            <Route
              path="/donations/new"
              element={isLoggedIn ? <DonationForm /> : <Navigate to="/login" />}
            />
            <Route
              path="/donations/edit/:id"
              element={isLoggedIn ? <DonationForm /> : <Navigate to="/login" />}
            />
            <Route
              path="/events"
              element={isLoggedIn ? <EventList /> : <Navigate to="/login" />}
            />
            <Route
              path="/events/new"
              element={isLoggedIn ? <EventForm /> : <Navigate to="/login" />}
            />
            <Route
              path="/events/edit/:id"
              element={isLoggedIn ? <EventForm /> : <Navigate to="/login" />}
            />
            <Route
              path="/feedback"
              element={isLoggedIn ? <FeedbackList /> : <Navigate to="/login" />}
            />
            <Route
              path="/feedback/new"
              element={isLoggedIn ? <FeedbackForm /> : <Navigate to="/login" />}
            />
            <Route
              path="/jobs"
              element={isLoggedIn ? <JobList /> : <Navigate to="/login" />}
            />
            <Route
              path="/jobs/new"
              element={isLoggedIn ? <JobForm /> : <Navigate to="/login" />}
            />
            <Route
              path="/jobs/edit/:id"
              element={isLoggedIn ? <JobForm /> : <Navigate to="/login" />}
            />
            <Route
              path="/networking"
              element={isLoggedIn ? <NetworkingList /> : <Navigate to="/login" />}
            />
            <Route
              path="/networking/new"
              element={isLoggedIn ? <NetworkingForm /> : <Navigate to="/login" />}
            />
            <Route
              path="/networking/edit/:id"
              element={isLoggedIn ? <NetworkingForm /> : <Navigate to="/login" />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;