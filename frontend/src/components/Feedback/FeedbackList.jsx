import React, { useState, useEffect } from 'react';

// Mock data
const mockFeedbacks = [
  { id: 1, name: 'Aman verma', message: 'Great service!' },
  { id: 2, name: 'Abhishek pandey', message: 'Loved it!' },
  { id: 3, name: 'Nitesh tiwari', message: 'Could be better.' },

];

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = () => {

    setFeedbacks(mockFeedbacks);
  };

  const handleDelete = (id) => {

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
