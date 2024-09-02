import React from 'react';
import { Link } from 'react-router-dom';
import { FaHandHoldingUsd, FaCalendarAlt, FaCommentDots, FaBriefcase, FaNetworkWired, FaUser, FaSignInAlt, FaGraduationCap } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Menu Bar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaGraduationCap className="text-2xl text-teal-500" />
            <span className="text-xl font-bold">AlumniConnect</span>
          </div>
          <div className="space-x-4">
            <Link to="/login" className="inline-flex items-center hover:text-teal-300 transition-colors">
              <FaSignInAlt className="mr-2" />
              Login
            </Link>
            <Link to="/register" className="inline-flex items-center hover:text-teal-300 transition-colors">
              <FaUser className="mr-2" />
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* Enhanced Header */}
      <header className="bg-gray-800 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-teal-400">
            Alumni Management Dashboard
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-gray-300">
            Empowering connections, fostering growth, and celebrating success in our alumni community.
          </p>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { to: "/donations", icon: FaHandHoldingUsd, title: "Donations", desc: "Manage and view donation details." },
            { to: "/events", icon: FaCalendarAlt, title: "Events", desc: "Organize and track events." },
            { to: "/feedback", icon: FaCommentDots, title: "Feedback", desc: "Collect and review user feedback." },
            { to: "/jobs", icon: FaBriefcase, title: "Job Opportunities", desc: "Post and manage job listings." },
            { to: "/networking", icon: FaNetworkWired, title: "Networking", desc: "Connect with alumni and build networks." },
          ].map((item, index) => (
            <Link key={index} to={item.to} className="bg-gray-800 rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:bg-gray-700 border border-gray-700">
              <div className="flex items-center space-x-4">
                <item.icon className="text-4xl text-teal-500" />
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;