import React, { useState, useEffect } from 'react';
import { getAll, remove } from '../../services/api';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const response = await getAll('jobs');
    setJobs(response.data);
  };

  const handleDelete = async (id) => {
    await remove('jobs', id);
    fetchJobs();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Job Opportunities</h1>
      <ul className="space-y-2">
        {jobs.map((job) => (
          <li key={job.id} className="flex justify-between p-2 bg-gray-100 rounded">
            <span>{job.title} - {job.company}</span>
            <button 
              onClick={() => handleDelete(job.id)} 
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

export default JobList;
