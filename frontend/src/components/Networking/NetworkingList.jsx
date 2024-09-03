import React, { useState, useEffect } from 'react';


const mockConnections = [
  { id: 1, name: 'Anurag jaiswal', profession: 'Engineer' },
  { id: 2, name: 'Aman verma', profession: 'Designer' },
  { id: 3, name: 'Ayush dubey', profession: 'Manager' },
];

const NetworkingList = () => {
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    fetchConnections();
  }, []);

  const fetchConnections = () => {
   
    setConnections(mockConnections);
  };

  const handleDelete = (id) => {

    const updatedConnections = connections.filter((connection) => connection.id !== id);
    setConnections(updatedConnections);
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
