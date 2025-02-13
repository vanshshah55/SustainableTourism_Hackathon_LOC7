import React, { useState } from 'react';

const emergencyServicesData = [
  { state: 'Andhra Pradesh', services: 'Police: 100, Ambulance: 108, Fire: 101' },
  { state: 'Arunachal Pradesh', services: 'Police: 100, Ambulance: 108, Fire: 101' },
  { state: 'Assam', services: 'Police: 100, Ambulance: 108, Fire: 101' },
  { state: 'Bihar', services: 'Police: 100, Ambulance: 108, Fire: 101' },
  { state: 'Chhattisgarh', services: 'Police: 100, Ambulance: 108, Fire: 101' },
  { state: 'Goa', services: 'Police: 100, Ambulance: 108, Fire: 101' },
  { state: 'Gujarat', services: 'Police: 100, Ambulance: 108, Fire: 101' },
  { state: 'Haryana', services: 'Police: 100, Ambulance: 108, Fire: 101' },
  { state: 'Himachal Pradesh', services: 'Police: 100, Ambulance: 108, Fire: 101' },
  { state: 'Jharkhand', services: 'Police: 100, Ambulance: 108, Fire: 101' },
  { state: 'Karnataka', services: 'Police: 100, Ambulance: 108, Fire: 101' },
  { state: 'Kerala', services: 'Police: 100, Ambulance: 108, Fire: 101' },
  { state: 'Madhya Pradesh', services: 'Police: 100, Ambulance: 108, Fire: 101' },
  { state: 'Maharashtra', services: 'Police: 100, Ambulance: 108, Fire: 101' },
  { state: 'Manipur', services: 'Police: 100, Ambulance: 108, Fire: 101' },
  { state: 'Meghalaya', services: 'Police: 100, Ambulance: 108, Fire: 101' },
  { state: 'Mizoram', services: 'Police: 100, Ambulance: 108, Fire: 101' },
  { state: 'Nagaland', services: 'Police: 100, Ambulance: 108, Fire: 101' },
  { state: 'Odisha', services: 'Police: 100, Ambulance: 108, Fire: 101' },
  { state: 'Punjab', services: 'Police: 100, Ambulance: 108, Fire: 101' },
  { state: 'Rajasthan', services: 'Police: 100, Ambulance: 108, Fire: 101' },
  { state: 'Sikkim', services: 'Police: 100, Ambulance: 108, Fire: 101' },
  { state: 'Tamil Nadu', services: 'Police: 100, Ambulance: 108, Fire: 101' },
  { state: 'Telangana', services: 'Police: 100, Ambulance: 108, Fire: 101' },
  { state: 'Tripura', services: 'Police: 100, Ambulance: 108, Fire: 101' },
  { state: 'Uttar Pradesh', services: 'Police: 100, Ambulance: 108, Fire: 101' },
  { state: 'Uttarakhand', services: 'Police: 100, Ambulance: 108, Fire: 101' },
  { state: 'West Bengal', services: 'Police: 100, Ambulance: 108, Fire: 101' },
];

const EmergencyServices = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = emergencyServicesData.filter((item) =>
    item.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-20 bg-neutral-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <h1 className="text-4xl font-bold text-white mb-4">Emergency Services</h1>
        <p className="text-gray-400 text-lg mb-8">Contact details and procedures for emergency services tailored for differently-abled travelers.</p>
        <input
          type="text"
          placeholder="Search by state"
          className="w-full p-3 mb-8 rounded-lg bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6D00]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((item, index) => (
            <div key={index} className="bg-neutral-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-2">{item.state}</h2>
              <p className="text-gray-400">{item.services}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmergencyServices;