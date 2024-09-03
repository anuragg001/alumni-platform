import React, { useState, useEffect } from 'react';

// Mock data
const mockFeedbacks = [
  { id: 1, name: 'John Doe', message: 'Great service!' },
  { id: 2, name: 'Jane Smith', message: 'Loved it!' },
  { id: 3, name: 'Alice Johnson', message: 'Could be better.' },
  // Add more mock feedback here if needed
];

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = () => {
    // Simulate fetching feedbacks from mock data
    setFeedbacks(mockFeedbacks);
  };

  const handleDelete = (id) => {
    // Simulate delete action on mock data
    const filteredFeedbacks = feedbacks.filter(feedback => feedback.id !== id);
    setFeedbacks(filteredFeedbacks);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Feedback</h1>
      <ul className="space-y-2">
        {feedbacks.map((feedback) => (
          <li key={feedback.id} className="flex justify-between p-2 bg-gray-100 rounded">
            <span>{feedback.name}: {feedback.message}</span>
            <button 
              onClick={() => handleDelete(feedback.id)} 
              className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
