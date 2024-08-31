import React, { useState, useEffect } from 'react';
import { getAll, remove } from '../../services/api';

const DonationList = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    const response = await getAll('donations');
    setDonations(response.data);
  };

  const handleDelete = async (id) => {
    await remove('donations', id);
    fetchDonations();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Donations</h1>
      <ul className="space-y-2">
        {donations.map((donation) => (
          <li key={donation.id} className="flex justify-between p-2 bg-gray-100 rounded">
            <span>{donation.donor_name} - ${donation.amount}</span>
            <button 
              onClick={() => handleDelete(donation.id)} 
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

export default DonationList;
