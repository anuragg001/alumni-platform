import React, { useState, useEffect } from 'react';

const DonationList = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = () => {
   
    const mockDonations = [
      { id: 1, donor_name: 'Anurag Jaiswal', amount: 100 },
      { id: 2, donor_name: 'Aman verma ', amount: 50 },
      { id: 3, donor_name: 'Aysuh Dubey', amount: 75 },

    ];
    setDonations(mockDonations);
  };

  const handleDelete = (id) => {
    const filteredDonations = donations.filter((donation) => donation.id !== id);
    setDonations(filteredDonations);
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
