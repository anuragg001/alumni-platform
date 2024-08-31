import React, { useState, useEffect } from 'react';
import { getAll, remove } from '../../services/api';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    const response = await getAll('feedback');
    setFeedbacks(response.data);
  };

  const handleDelete = async (id) => {
    await remove('feedback', id);
    fetchFeedbacks();
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
