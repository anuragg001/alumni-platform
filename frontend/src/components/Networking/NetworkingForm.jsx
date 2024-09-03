import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Mock data
const mockConnections = [
  { id: 1, name: 'Alice Johnson', profession: 'Engineer', email: 'alice@example.com', location: 'New York' },
  { id: 2, name: 'Bob Smith', profession: 'Designer', email: 'bob@example.com', location: 'San Francisco' },
  { id: 3, name: 'Carol White', profession: 'Manager', email: 'carol@example.com', location: 'Chicago' },
];

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

  const fetchConnection = () => {
    // Simulate fetching connection from mock data
    const connectionData = mockConnections.find((conn) => conn.id === parseInt(id));
    if (connectionData) {
      setConnection(connectionData);
    }
  };

  const handleChange = (e) => {
    setConnection({ ...connection, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate save action with mock data
    if (isEdit) {
      console.log('Updating connection', connection);
    } else {
      console.log('Creating new connection', connection);
    }
    navigate('/networking');
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
