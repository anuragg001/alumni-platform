import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const mockEvents = [
  { id: 1, name: 'Event 1', date: '2024-09-01', description: 'description' },
  { id: 2, name: 'Event 2', date: '2024-09-02', description: 'Description of the event' },
  { id: 3, name: 'Event 3', date: '2024-09-03', description: 'Description of the evenet ' },
];

const EventForm = ({ isEdit = false }) => {
  const [event, setEvent] = useState({ name: '', date: '', description: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isEdit && id) {
      fetchEvent();
    }
  }, [isEdit, id]);

  const fetchEvent = () => {

    const eventData = mockEvents.find((event) => event.id === parseInt(id));
    if (eventData) {
      setEvent(eventData);
    }
  };

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isEdit ? 'Updating event' : 'Creating new event', event);
    navigate('/events');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{isEdit ? 'Edit Event' : 'Add Event'}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          value={event.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="date"
          name="date"
          value={event.date}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          name="description"
          placeholder="Event Description"
          value={event.description}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Save
        </button>
      </form>
    </div>
  );
};

export default EventForm;
