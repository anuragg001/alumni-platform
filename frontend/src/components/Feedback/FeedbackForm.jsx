import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Mock data (for simulation purposes)
const mockFeedbacks = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', message: 'Great service!' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', message: 'Loved it!' },
  // Add more mock feedback here if needed
];

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({ name: '', email: '', message: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate saving feedback
    console.log('Submitting feedback:', feedback);
    // Simulate adding to mock data (optional, for simulation only)
    mockFeedbacks.push({ ...feedback, id: mockFeedbacks.length + 1 });
    navigate('/feedback'); // Navigate after "submission"
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Submit Feedback</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={feedback.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={feedback.email}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Feedback"
          value={feedback.message}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
