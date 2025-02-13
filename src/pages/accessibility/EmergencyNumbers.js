import React, { useState } from 'react';

const emergencyNumbersData = [
  { state: 'Andhra Pradesh', number: '100' },
  { state: 'Arunachal Pradesh', number: '100' },
  { state: 'Assam', number: '100' },
  { state: 'Bihar', number: '100' },
  { state: 'Chhattisgarh', number: '100' },
  { state: 'Goa', number: '100' },
  { state: 'Gujarat', number: '100' },
  { state: 'Haryana', number: '100' },
  { state: 'Himachal Pradesh', number: '100' },
  { state: 'Jharkhand', number: '100' },
  { state: 'Karnataka', number: '100' },
  { state: 'Kerala', number: '100' },
  { state: 'Madhya Pradesh', number: '100' },
  { state: 'Maharashtra', number: '100' },
  { state: 'Manipur', number: '100' },
  { state: 'Meghalaya', number: '100' },
  { state: 'Mizoram', number: '100' },
  { state: 'Nagaland', number: '100' },
  { state: 'Odisha', number: '100' },
  { state: 'Punjab', number: '100' },
  { state: 'Rajasthan', number: '100' },
  { state: 'Sikkim', number: '100' },
  { state: 'Tamil Nadu', number: '100' },
  { state: 'Telangana', number: '100' },
  { state: 'Tripura', number: '100' },
  { state: 'Uttar Pradesh', number: '100' },
  { state: 'Uttarakhand', number: '100' },
  { state: 'West Bengal', number: '100' },
];

const EmergencyNumbers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNumbers = emergencyNumbersData.filter((item) =>
    item.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-20 bg-neutral-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <h1 className="text-4xl font-bold text-white mb-4">Emergency Numbers</h1>
        <p className="text-gray-400 text-lg mb-8">Important contact numbers for emergencies.</p>
        <input
          type="text"
          placeholder="Search by state"
          className="w-full p-3 mb-8 rounded-lg bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6D00]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredNumbers.map((item, index) => (
            <div key={index} className="bg-neutral-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-2">{item.state}</h2>
              <p className="text-gray-400">Emergency Number: {item.number}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmergencyNumbers;