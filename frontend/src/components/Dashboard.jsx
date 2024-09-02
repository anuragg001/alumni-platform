import React from 'react';
import { Link } from 'react-router-dom';
import { FaHandHoldingUsd, FaCalendarAlt, FaCommentDots, FaBriefcase, FaNetworkWired } from 'react-icons/fa';
import MenuIcon from './MenuIcon'; // Import the MenuIcon component

const Dashboard = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 p-6">
      <MenuIcon />
      <h1 className="text-5xl font-extrabold mb-12 text-center text-white drop-shadow-lg">Alumni Management Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <Link to="/donations" className="bg-gradient-to-r from-teal-800 via-teal-700 to-teal-600 text-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center space-x-4">
            <FaHandHoldingUsd className="text-white text-4xl" />
            <div>
              <h2 className="text-xl font-semibold">Donations</h2>
              <p>Manage and view donation details.</p>
            </div>
          </div>
        </Link>

        <Link to="/events" className="bg-gradient-to-r from-purple-800 via-purple-700 to-purple-600 text-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center space-x-4">
            <FaCalendarAlt className="text-white text-4xl" />
            <div>
              <h2 className="text-xl font-semibold">Events</h2>
              <p>Organize and track events.</p>
            </div>
          </div>
        </Link>

        <Link to="/feedback" className="bg-gradient-to-r from-orange-800 via-orange-700 to-orange-600 text-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center space-x-4">
            <FaCommentDots className="text-white text-4xl" />
            <div>
              <h2 className="text-xl font-semibold">Feedback</h2>
              <p>Collect and review user feedback.</p>
            </div>
          </div>
        </Link>
        
        <Link to="/jobs" className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center space-x-4">
            <FaBriefcase className="text-white text-4xl" />
            <div>
              <h2 className="text-xl font-semibold">Job Opportunities</h2>
              <p>Post and manage job listings.</p>
            </div>
          </div>
        </Link>

        <Link to="/networking" className="bg-gradient-to-r from-red-800 via-red-700 to-red-600 text-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center space-x-4">
            <FaNetworkWired className="text-white text-4xl" />
            <div>
              <h2 className="text-xl font-semibold">Networking</h2>
              <p>Connect with alumni and build networks.</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
