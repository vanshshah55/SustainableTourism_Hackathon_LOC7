import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Destinations = () => {
  const navigate = useNavigate();
  const handleTest = () => {
    window.location.href = '/flashcards';
  }
  const [tajMahalCapacity, setTajMahalCapacity] = useState(30);
  const [varanasiGhatsCapacity, setVaranasiGhatsCapacity] = useState(60);
  const [amberFortCapacity, setAmberFortCapacity] = useState(85);

  useEffect(() => {
    const interval = setInterval(() => {
      setTajMahalCapacity((prev) => Math.max(0, Math.min(100, prev + (Math.random() > 0.5 ? 5 : -5))));
      setVaranasiGhatsCapacity((prev) => Math.max(0, Math.min(100, prev + (Math.random() > 0.5 ? 5 : -5))));
      setAmberFortCapacity((prev) => Math.max(0, Math.min(100, prev + (Math.random() > 0.5 ? 5 : -5))));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="destinations" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate_animated animate_fadeIn">
          <h2 className="text-4xl font-bold text-white mb-4">Popular Destinations</h2>
          <p className="text-gray-400 text-lg">Discover India's most beautiful locations with real-time crowd insights</p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {/* Taj Mahal Card */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg animate_animated animate_fadeInUp">
            <div className="relative">
              <div className="h-48 bg-neutral-700 flex items-center justify-center">
                <img src="/images/taj mahal.jpg" alt="Taj Mahal" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-4 right-4 bg-[#FF6D00] text-white px-3 py-1 rounded-full text-sm">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Low Crowd
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Taj Mahal, Agra</h3>
              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <div className="h-2 bg-neutral-600 rounded-full overflow-hidden">
                    <div className="h-2 bg-green-500 rounded-full transition-all duration-500" style={{ width: `${tajMahalCapacity}%` }}></div>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">Current Capacity: {tajMahalCapacity}%</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <span>Best Time: 6AM - 8AM</span>
                <span>Wait Time: ~15 mins</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-neutral-700 text-xs text-gray-300 px-2 py-1 rounded">♿ Wheelchair Access</span>
                <span className="bg-neutral-700 text-xs text-gray-300 px-2 py-1 rounded">🚻 Restrooms</span>
                <span className="bg-neutral-700 text-xs text-gray-300 px-2 py-1 rounded">🅿️ Parking</span>
              </div>
              {/* <button className="w-full bg-[#FF6D00] hover:bg-[#FF8F00] text-white font-bold py-2 px-4 rounded-lg transition-colors">
                View Details
              </button> */}
            </div>
          </div>

          {/* Varanasi Ghats Card */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg animate_animated animate_fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="h-48 bg-neutral-700 flex items-center justify-center">
                <img src="/images/varanasi ghats.jpg" alt="Varanasi Ghats" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-4 right-4 bg-[#FF6D00] text-white px-3 py-1 rounded-full text-sm">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></span>
                  Moderate Crowd
                </span>
              </div>
              <div className="absolute bottom-4 left-4 bg-[#FF6D00] text-white px-3 py-1 rounded-full text-sm">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                  Trending Now: Kumbh Mela
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Prayagraj</h3>
              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <div className="h-2 bg-neutral-600 rounded-full overflow-hidden">
                    <div className="h-2 bg-yellow-500 rounded-full transition-all duration-500" style={{ width: `${varanasiGhatsCapacity}%` }}></div>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">Current Capacity: {varanasiGhatsCapacity}%</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <span>Best Time: 5AM - 7AM</span>
                <span>Wait Time: ~30 mins</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-neutral-700 text-xs text-gray-300 px-2 py-1 rounded">🚶 Guided Tours</span>
                <span className="bg-neutral-700 text-xs text-gray-300 px-2 py-1 rounded">📸 Photo Spots</span>
                <span className="bg-neutral-700 text-xs text-gray-300 px-2 py-1 rounded">🛍️ Local Market</span>
              </div>
              {/* <button className="w-full bg-[#FF6D00] hover:bg-[#FF8F00] text-white font-bold py-2 px-4 rounded-lg transition-colors">
                View Details
              </button> */}
            </div>
          </div>

          {/* Jaipur Fort Card */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg animate_animated animate_fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="h-48 bg-neutral-700 flex items-center justify-center">
                <img src="/images/jaipurfort.jpg" alt="Amber Fort" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-4 right-4 bg-[#FF6D00] text-white px-3 py-1 rounded-full text-sm">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                  High Crowd
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Amber Fort, Jaipur</h3>
              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <div className="h-2 bg-neutral-600 rounded-full overflow-hidden">
                    <div className="h-2 bg-red-500 rounded-full transition-all duration-500" style={{ width: `${amberFortCapacity}%` }}></div>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">Current Capacity: {amberFortCapacity}%</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <span>Best Time: 4PM - 6PM</span>
                <span>Wait Time: ~45 mins</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-neutral-700 text-xs text-gray-300 px-2 py-1 rounded">🎧 Audio Guide</span>
                <span className="bg-neutral-700 text-xs text-gray-300 px-2 py-1 rounded">♿ Elevator</span>
                <span className="bg-neutral-700 text-xs text-gray-300 px-2 py-1 rounded">🚌 Transport</span>
              </div>
              {/* <button className="w-full bg-[#FF6D00] hover:bg-[#FF8F00] text-white font-bold py-2 px-4 rounded-lg transition-colors">
                View Details
              </button> */}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={handleTest}
            className="inline-flex items-center px-6 py-3 border-2 border-[#FF6D00] text-[#FF6D00] hover:bg-[#FF6D00] hover:text-white font-medium rounded-lg transition-colors animate_animated animatepulse animate_infinite shadow-lg">
            Explore More Destinations
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;