import React, { useState } from 'react';
import { Clock, Sun, Zap } from 'lucide-react';

const SmartBookingSystem = () => {
  const [formData, setFormData] = useState({
    destination: '',
    date: '',
    timeSlot: '',
    visitors: '',
    accessibility: {
      wheelchairAccess: false,
      signLanguage: false,
      audioGuide: false,
      specialAssistance: false
    }
  });

  const handleAccessibilityChange = (option) => {
    setFormData(prev => ({
      ...prev,
      accessibility: {
        ...prev.accessibility,
        [option]: !prev.accessibility[option]
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Smart Booking System</h1>
        <p className="text-gray-400">Plan your sustainable journey with real-time insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Booking Form */}
        <div className="md:col-span-2">
          <div className="bg-gray-800 rounded-lg p-6">
            {/* Destination & Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-400 mb-2">Destination</label>
                <select 
                  className="w-full bg-gray-700 text-white rounded-md p-2 border border-gray-600"
                  value={formData.destination}
                  onChange={(e) => setFormData({...formData, destination: e.target.value})}
                >
                  <option value="">Select Destination</option>
                  <option value="dest1">Destination 1</option>
                  <option value="dest2">Destination 2</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Date</label>
                <input 
                  type="date"
                  className="w-full bg-gray-700 text-white rounded-md p-2 border border-gray-600"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
            </div>

            {/* Time Slot & Visitors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-400 mb-2">Time Slot</label>
                <select 
                  className="w-full bg-gray-700 text-white rounded-md p-2 border border-gray-600"
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({...formData, timeSlot: e.target.value})}
                >
                  <option value="">Select Time</option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Number of Visitors</label>
                <input 
                  type="number"
                  className="w-full bg-gray-700 text-white rounded-md p-2 border border-gray-600"
                  value={formData.visitors}
                  onChange={(e) => setFormData({...formData, visitors: e.target.value})}
                />
              </div>
            </div>

            {/* Accessibility Requirements */}
            <div className="mb-6">
              <label className="block text-gray-400 mb-3">Accessibility Requirements</label>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex items-center space-x-2">
                  <input 
                    type="checkbox"
                    checked={formData.accessibility.wheelchairAccess}
                    onChange={() => handleAccessibilityChange('wheelchairAccess')}
                    className="rounded border-gray-600"
                  />
                  <span className="text-gray-300">Wheelchair Access</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input 
                    type="checkbox"
                    checked={formData.accessibility.signLanguage}
                    onChange={() => handleAccessibilityChange('signLanguage')}
                    className="rounded border-gray-600"
                  />
                  <span className="text-gray-300">Sign Language</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input 
                    type="checkbox"
                    checked={formData.accessibility.audioGuide}
                    onChange={() => handleAccessibilityChange('audioGuide')}
                    className="rounded border-gray-600"
                  />
                  <span className="text-gray-300">Audio Guide</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input 
                    type="checkbox"
                    checked={formData.accessibility.specialAssistance}
                    onChange={() => handleAccessibilityChange('specialAssistance')}
                    className="rounded border-gray-600"
                  />
                  <span className="text-gray-300">Special Assistance</span>
                </label>
              </div>
            </div>

            {/* Book Now Button */}
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold">
              Book Now
            </button>
          </div>
        </div>

        {/* Status & Recommendations */}
        <div className="space-y-4">
          {/* Current Status */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Current Status</h2>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-400 mb-1">Crowd Level</div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-2 bg-green-500 rounded-full w-1/4"></div>
                </div>
                <div className="text-sm text-green-500 mt-1">Low</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Expected Wait Time</div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-2 bg-orange-500 rounded-full w-1/3"></div>
                </div>
                <div className="text-sm text-orange-500 mt-1">15 mins</div>
              </div>
            </div>
          </div>

          {/* Smart Recommendations */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Smart Recommendations</h2>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Clock className="w-5 h-5 mr-2 text-blue-400" />
                Best time to visit: 9 AM - 10 AM
              </div>
              <div className="flex items-center text-gray-300">
                <Sun className="w-5 h-5 mr-2 text-yellow-400" />
                Weather: Sunny, 25°C
              </div>
              <div className="flex items-center text-gray-300">
                <Zap className="w-5 h-5 mr-2 text-orange-400" />
                Special events today
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartBookingSystem;