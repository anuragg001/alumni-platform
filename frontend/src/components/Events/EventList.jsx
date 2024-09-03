import React, { useState, useEffect } from 'react';

const mockEvents = [
  { id: 1, name: 'Event 1', date: '2024-09-01' },
  { id: 2, name: 'Event 2', date: '2024-09-02' },
  { id: 3, name: 'Event 3', date: '2024-09-03' },
  // Add more mock events here
];

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    // Simulate fetching events from mock data
    setEvents(mockEvents);
  };

  const handleDelete = (id) => {
    // Simulate delete action on mock data
    const filteredEvents = events.filter(event => event.id !== id);
    setEvents(filteredEvents);
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
