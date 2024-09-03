import React, { useState, useEffect } from 'react';

// Mock data
const mockJobs = [
  { id: 1, title: 'Software Engineer', company: 'google' },
  { id: 2, title: 'Product Manager', company: 'facebook' },
  { id: 3, title: 'Data Analyst', company: 'Data Solutions' },
  
];

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = () => {
    setJobs(mockJobs);
  };

  const handleDelete = (id) => {

    const filteredJobs = jobs.filter(job => job.id !== id);
    setJobs(filteredJobs);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Job Opportunities</h1>
      <ul className="space-y-2">
        {jobs.map((job) => (
          <li key={job.id} className="flex justify-between p-4 bg-gray-100 rounded-lg shadow-sm">
            <div className="flex-grow">
              <h3 className="text-lg font-semibold mb-1">{job.title}</h3>
              <p className="text-gray-700">{job.company}</p>
            </div>
            <button 
              onClick={() => handleDelete(job.id)} 
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
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
