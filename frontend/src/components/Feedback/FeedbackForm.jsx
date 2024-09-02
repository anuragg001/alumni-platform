import React, { useState } from 'react';
import { create } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({ name: '', email: '', message: '' });
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await create('feedback', feedback);
      navigate('/feedback');
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
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