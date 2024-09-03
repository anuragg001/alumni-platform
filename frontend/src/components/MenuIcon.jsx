import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const MenuIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute top-4 left-4 z-10">
      <button 
        onClick={toggleMenu} 
        className="text-white text-3xl bg-gray-900 p-3 rounded-full shadow-lg hover:bg-gray-800 focus:outline-none"
      >
        <FaBars />
      </button>
      {isOpen && (
        <div className="absolute left-0 top-12 bg-white text-gray-900 rounded-lg shadow-lg border border-gray-200 w-48">
          <Link 
            to="/login" 
            className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link 
            to="/register" 
            className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default MenuIcon;
