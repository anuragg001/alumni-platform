import React, { useState, useEffect } from 'react';
import { create, update, getById } from '../../services/api';
import { useParams, useHistory } from 'react-router-dom';

const AlumniForm = ({ isEdit = false }) => {
  const [alumni, setAlumni] = useState({ name: '', graduation_year: '', field_of_study: '' });
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (isEdit) {
      fetchAlumni();
    }
  }, []);

  const fetchAlumni = async () => {
    const response = await getById('alumni', id);
    setAlumni(response.data);
  };

  const handleChange = (e) => {
    setAlumni({ ...alumni, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit) {
      await update('alumni', id, alumni);
    } else {
      await create('alumni', alumni);
    }
    history.push('/alumni');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{isEdit ? 'Edit Alumni' : 'Add Alumni'}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={alumni.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="graduation_year"
          placeholder="Graduation Year"
          value={alumni.graduation_year}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="field_of_study"
          placeholder="Field of Study"
          value={alumni.field_of_study}
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

export default AlumniForm;
