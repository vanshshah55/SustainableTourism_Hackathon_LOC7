import React from 'react';

const TourismInformationCentre = () => {
  const tourismCenters = [
    {
      city: 'Delhi',
      address: '28, Janpath, Connaught Place, New Delhi, Delhi 110001, India',
      phone: '+91 11 2336 5358',
      email: 'info@delhitourism.gov.in',
    },
    {
      city: 'Mumbai',
      address: 'Madame Cama Road, Nariman Point, Mumbai, Maharashtra 400021, India',
      phone: '+91 22 2202 6711',
      email: 'info@mumbaitourism.gov.in',
    },
    {
      city: 'Bangalore',
      address: 'Karnataka State Tourism Development Corporation, 49, 2nd Floor, Khanija Bhavan, Race Course Road, Bangalore, Karnataka 560001, India',
      phone: '+91 80 2235 2828',
      email: 'info@karnatakatourism.org',
    },
    {
      city: 'Chennai',
      address: 'Tamil Nadu Tourism Complex, Wallajah Road, Triplicane, Chennai, Tamil Nadu 600002, India',
      phone: '+91 44 2538 3333',
      email: 'info@tamilnadutourism.org',
    },
    {
      city: 'Kolkata',
      address: '3/2, B.B.D. Bagh (East), Kolkata, West Bengal 700001, India',
      phone: '+91 33 2248 8271',
      email: 'info@westbengaltourism.gov.in',
    },
  ];

  return (
    <div className="py-20 bg-neutral-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <h1 className="text-4xl font-bold text-white mb-4">Tourism Information Centre</h1>
        <p className="text-gray-400 text-lg mb-8">Find local tourism offices for assistance.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourismCenters.map((center, index) => (
            <div key={index} className="bg-neutral-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-2">{center.city}</h2>
              <p className="text-gray-400 mb-2"><strong>Address:</strong> {center.address}</p>
              <p className="text-gray-400 mb-2"><strong>Phone:</strong> <a href={`tel:${center.phone}`} className="text-blue-400 hover:underline">{center.phone}</a></p>
              <p className="text-gray-400"><strong>Email:</strong> <a href={`mailto:${center.email}`} className="text-blue-400 hover:underline">{center.email}</a></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourismInformationCentre;