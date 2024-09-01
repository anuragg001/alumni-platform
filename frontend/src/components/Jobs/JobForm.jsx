import React, { useState, useEffect } from 'react';
import { create, update, getById } from '../../services/api';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

const JobForm = ({ isEdit = false }) => {
  const [job, setJob] = useState({ title: '', company: '', description: '', location: '', apply_link: '' });
  const { id } = useParams();
  const navigate = useNavigate(); 

  useEffect(() => {
    if (isEdit) {
      fetchJob();
    }
  }, [isEdit, id]);

  const fetchJob = async () => {
    try {
      const response = await getById('jobs', id);
      setJob(response.data);
    } catch (error) {
      console.error("Error fetching job:", error);
    }
  };

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        await update('jobs', id, job);
      } else {
        await create('jobs', job);
      }
      navigate('/jobs'); 
    } catch (error) {
      console.error("Error saving job:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{isEdit ? 'Edit Job' : 'Add Job'}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={job.title}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={job.company}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={job.description}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={job.location}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="url"
          name="apply_link"
          placeholder="Application Link"
          value={job.apply_link}
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

export default JobForm;
