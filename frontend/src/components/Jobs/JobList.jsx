import React, { useState, useEffect } from 'react';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    // Mock data instead of calling the API
    const mockJobs = [
      { id: 1, title: 'Frontend Developer', company: 'Company A' },
      { id: 2, title: 'Backend Developer', company: 'Company B' },
      { id: 3, title: 'Full Stack Developer', company: 'Company C' },
      // Add more mock jobs here
    ];
    setJobs(mockJobs);
  };

  const handleDelete = async (id) => {
    // Simulate delete action on mock data
    const filteredJobs = jobs.filter((job) => job.id !== id);
    setJobs(filteredJobs);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Job Opportunities</h1>
      <ul className="space-y-2">
        {jobs.map((job) => (
          <li 
            key={job.id} 
            className="flex justify-between items-center p-2 bg-gray-100 rounded shadow"
          >
            <span className="font-medium">{job.title} - {job.company}</span>
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
