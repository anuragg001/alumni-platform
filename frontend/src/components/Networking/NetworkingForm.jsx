import React, { useState, useEffect } from 'react';
import { create, update, getById } from '../../services/api';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

const NetworkingForm = ({ isEdit = false }) => {
  const [connection, setConnection] = useState({
    name: '',
    profession: '',
    email: '',
    location: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isEdit) {
      fetchConnection();
    }
  }, [isEdit, id]); 

  const fetchConnection = async () => {
    try {
      const response = await getById('networking', id);
      setConnection(response.data);
    } catch (error) {
      console.error('Error fetching connection:', error);
    }
  };

  const handleChange = (e) => {
    setConnection({ ...connection, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        await update('networking', id, connection);
      } else {
        await create('networking', connection);
      }
      navigate('/networking');
    } catch (error) {
      console.error('Error saving connection:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        {isEdit ? 'Edit Connection' : 'Add Connection'}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={connection.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="profession" className="block text-sm font-medium text-gray-700">
            Profession
          </label>
          <input
            type="text"
            name="profession"
            id="profession"
            value={connection.profession}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={connection.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            value={connection.location}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isEdit ? 'Update Connection' : 'Add Connection'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NetworkingForm;
