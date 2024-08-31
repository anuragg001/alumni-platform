import React, { useState, useEffect } from 'react';
import { getAll, remove } from '../../services/api';

const NetworkingList = () => {
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    fetchConnections();
  }, []);

  const fetchConnections = async () => {
    const response = await getAll('networking');
    setConnections(response.data);
  };

  const handleDelete = async (id) => {
    await remove('networking', id);
    fetchConnections();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Networking Opportunities</h1>
      <ul className="space-y-2">
        {connections.map((connection) => (
          <li key={connection.id} className="flex justify-between p-2 bg-gray-100 rounded">
            <span>{connection.name} - {connection.profession}</span>
            <button 
              onClick={() => handleDelete(connection.id)} 
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

export default NetworkingList;
