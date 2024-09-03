import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-gray-400">
            We are a community-driven platform, connecting alumni with current students, facilitating mentorship, networking, and growth opportunities.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2"><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
            <li className="mb-2"><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
            <li className="mb-2"><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
            <li className="mb-2"><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <ul className="flex space-x-4">
            <li>
              <a href="https://www.instagram.com/__anuraagg?igsh=eXI1MHlqa2R5Z2s1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaInstagram className="text-2xl" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/anurag-jaiswal-a96281276/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaLinkedin className="text-2xl" />
              </a>
            </li>
          </ul>
        </div>

      </div>
      
      <div className="text-center mt-8 text-gray-500">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
