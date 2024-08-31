import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/alumni" className="text-white hover:underline">
            Alumni
          </Link>
        </li>
        <li>
          <Link to="/donations" className="text-white hover:underline">
            Donations
          </Link>
        </li>
        <li>
          <Link to="/events" className="text-white hover:underline">
            Events
          </Link>
        </li>
        <li>
          <Link to="/feedback" className="text-white hover:underline">
            Feedback
          </Link>
        </li>
        <li>
          <Link to="/jobs" className="text-white hover:underline">
            Jobs
          </Link>
        </li>
        <li>
          <Link to="/networking" className="text-white hover:underline">
            Networking
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
