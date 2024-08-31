import React, { useState, useEffect } from 'react';
import { getAll, remove } from '../../services/api';

const AlumniList = () => {
  const [alumni, setAlumni] = useState([]);

  useEffect(() => {
    fetchAlumni();
  }, []);

  const fetchAlumni = async () => {
    const response = await getAll('alumni');
    setAlumni(response.data);
  };

  const handleDelete = async (id) => {
    await remove('alumni', id);
    fetchAlumni();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Alumni List</h1>
      <ul className="space-y-2">
        {alumni.map((alum) => (
          <li key={alum.id} className="flex justify-between p-2 bg-gray-100 rounded">
            <span>{alum.name} - {alum.graduation_year}</span>
            <button 
              onClick={() => handleDelete(alum.id)} 
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

export default AlumniList;
