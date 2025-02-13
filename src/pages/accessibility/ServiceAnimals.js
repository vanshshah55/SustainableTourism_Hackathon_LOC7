import React from 'react';

const ServiceAnimals = () => {
  return (
    <div className="py-20 bg-neutral-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <h1 className="text-4xl font-bold text-white mb-4">Service Animals</h1>
        <p className="text-gray-400 text-lg mb-8">Guidelines and facilities for travelers with service animals, including pet-friendly accommodations.</p>
        
        <div className="bg-neutral-800 p-6 rounded-lg mb-8 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">General Guidelines</h2>
          <ul className="list-disc list-inside text-gray-400">
            <li>Service animals are allowed in most public places, including restaurants, hotels, and public transportation.</li>
            <li>Ensure your service animal is well-behaved and under control at all times.</li>
            <li>Carry documentation that verifies your service animal's training and purpose.</li>
            <li>Be aware of any specific regulations or requirements at your destination.</li>
          </ul>
        </div>

        <div className="bg-neutral-800 p-6 rounded-lg mb-8 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Pet-Friendly Accommodations</h2>
          <p className="text-gray-400 mb-4">Here are some pet-friendly accommodations you can consider:</p>
          <ul className="list-disc list-inside text-gray-400">
            <li>The Ritz-Carlton, Bangalore - 99 Residency Road, Bangalore, Karnataka 560025, India. Phone: +91 80 4914 8000</li>
            <li>Taj Mahal Palace, Mumbai - Apollo Bunder, Mumbai, Maharashtra 400001, India. Phone: +91 22 6665 3366</li>
            <li>Hyatt Regency, Delhi - Bhikaiji Cama Place, Ring Road, New Delhi, Delhi 110066, India. Phone: +91 11 2679 1234</li>
            <li>ITC Grand Chola, Chennai - No. 63, Mount Road, Guindy, Chennai, Tamil Nadu 600032, India. Phone: +91 44 2220 0000</li>
          </ul>
        </div>

        <div className="bg-neutral-800 p-6 rounded-lg mb-8 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Travel Tips</h2>
          <ul className="list-disc list-inside text-gray-400">
            <li>Plan ahead and inform your accommodation about your service animal.</li>
            <li>Pack essentials for your service animal, including food, water, and any medications.</li>
            <li>Ensure your service animal has proper identification tags.</li>
            <li>Take regular breaks during travel to allow your service animal to rest and relieve itself.</li>
          </ul>
        </div>

        <div className="bg-neutral-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Useful Resources</h2>
          <ul className="list-disc list-inside text-gray-400">
            <li><a href="https://www.ada.gov/service_animals_2010.htm" className="text-blue-400 hover:underline">ADA Service Animals Guidelines</a></li>
            <li><a href="https://www.transportation.gov/individuals/aviation-consumer-protection/service-animals" className="text-blue-400 hover:underline">Service Animals on Flights</a></li>
            <li><a href="https://www.petfriendlytravel.com/" className="text-blue-400 hover:underline">Pet-Friendly Travel</a></li>
            <li><a href="https://www.akc.org/expert-advice/training/service-dog-training-101/" className="text-blue-400 hover:underline">Service Dog Training 101</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceAnimals;