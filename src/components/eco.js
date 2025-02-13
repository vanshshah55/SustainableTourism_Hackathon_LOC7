import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Globe, Users } from 'lucide-react';

const EcoInitiativesDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 mt-12">Eco-Friendly Initiatives</h1>
        <p className="text-gray-400">Promoting sustainable tourism practices across India</p>
      </div>

      {/* Initiative Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Smart Waste Management Card */}
        <Link 
          to="waste-management"
          className="block bg-gray-800 rounded-lg p-6 cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:bg-gray-750 no-underline"
        >
          <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <Trash2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold mb-2 text-white">Smart Waste Management</h2>
          <p className="text-gray-400 mb-4">IoT-enabled waste bins with real-time monitoring and recycling tracking system</p>
          <div className="bg-gray-700 rounded-full h-2 mb-2">
            <div className="bg-orange-500 h-2 rounded-full" style={{width: '75%'}}></div>
          </div>
          <div className="text-right text-orange-500">75%</div>
        </Link>

        {/* Carbon Footprint Tracker Card */}
        <Link 
          to="carbon-tracker"
          className="block bg-gray-800 rounded-lg p-6 cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:bg-gray-750 no-underline"
        >
          <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold mb-2 text-white">Carbon Footprint Tracker</h2>
          <p className="text-gray-400 mb-4">Monitor and offset your travel carbon footprint with eco-friendly alternatives</p>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Transport Emissions</span>
              <span className="text-green-500">-30%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Energy Consumption</span>
              <span className="text-green-500">-45%</span>
            </div>
          </div>
        </Link>

        {/* Community Engagement Card */}
        <Link 
          to="community"
          className="block bg-gray-800 rounded-lg p-6 cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:bg-gray-750 no-underline"
        >
          <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold mb-2 text-white">Community Engagement</h2>
          <p className="text-gray-400 mb-4">Support local communities through sustainable tourism initiatives</p>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-400">
              <span className="text-orange-500 mr-2">✓</span>
              Local Artisan Support
            </li>
            <li className="flex items-center text-gray-400">
              <span className="text-orange-500 mr-2">✓</span>
              Cultural Preservation
            </li>
            <li className="flex items-center text-gray-400">
              <span className="text-orange-500 mr-2">✓</span>
              Economic Development
            </li>
          </ul>
        </Link>
      </div>

      {/* Impact Dashboard */}
      <Link to="/waste-management" className="block bg-gray-800 rounded-lg p-8 mb-8 cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:bg-gray-750 no-underline">
        <h2 className="text-2xl font-bold mb-6 text-center">Impact Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">5000+</div>
            <div className="text-gray-400">Trees Planted</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">80%</div>
            <div className="text-gray-400">Waste Recycled</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">100+</div>
            <div className="text-gray-400">Local Communities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">-40%</div>
            <div className="text-gray-400">Carbon Reduction</div>
          </div>
        </div>
      </Link>

      {/* CTA Button */}
      <div className="text-center">
        <a 
          href="/join"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center no-underline"
        >
          Join Our Eco-Initiative
          <span className="ml-2">→</span>
        </a>
      </div>
    </div>
  );
};

export default EcoInitiativesDashboard;