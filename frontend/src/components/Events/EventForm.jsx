import React, { useState, useEffect } from 'react';
import { create, update, getById } from '../../services/api';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EventForm = ({ isEdit = false }) => {
  const [event, setEvent] = useState({ name: '', date: '', description: '' });
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (isEdit) {
      fetchEvent();
    }
  }, [isEdit, id]); 
  const fetchEvent = async () => {
    try {
      const response = await getById('events', id);
      setEvent(response.data);
    } catch (error) {
      console.error("Error fetching event:", error);
    }
  };

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        await update('events', id, event);
      } else {
        await create('events', event);
      }
      navigate('/events'); 
    } catch (error) {
      console.error("Error saving event:", error);
    }
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
