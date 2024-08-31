import React, { useState, useEffect } from 'react';
import { getAll, remove } from '../../services/api';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const response = await getAll('events');
    setEvents(response.data);
  };

  const handleDelete = async (id) => {
    await remove('events', id);
    fetchEvents();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Events</h1>
      <ul className="space-y-2">
        {events.map((event) => (
          <li key={event.id} className="flex justify-between p-2 bg-gray-100 rounded">
            <span>{event.name} - {new Date(event.date).toLocaleDateString()}</span>
            <button 
              onClick={() => handleDelete(event.id)} 
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

export default EventList;
