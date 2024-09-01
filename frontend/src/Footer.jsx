import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Information */}
        <div>
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-gray-400">
            We are a community-driven platform, connecting alumni with current students, facilitating mentorship, networking, and growth opportunities.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2"><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
            <li className="mb-2"><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
            <li className="mb-2"><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
            <li className="mb-2"><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <ul className="flex space-x-4">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>

      </div>
      
      {/* Copyright Section */}
      <div className="text-center mt-8 text-gray-500">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
