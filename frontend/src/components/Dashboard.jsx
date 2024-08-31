import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Alumni Management Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Link to="/donations" className="bg-blue-500 text-white p-4 rounded hover:bg-blue-700">
          Donations
        </Link>
        <Link to="/events" className="bg-green-500 text-white p-4 rounded hover:bg-green-700">
          Events
        </Link>
        <Link to="/feedback" className="bg-yellow-500 text-white p-4 rounded hover:bg-yellow-700">
          Feedback
        </Link>
        <Link to="/jobs" className="bg-purple-500 text-white p-4 rounded hover:bg-purple-700">
          Job Opportunities
        </Link>
        <Link to="/networking" className="bg-red-500 text-white p-4 rounded hover:bg-red-700">
          Networking
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
