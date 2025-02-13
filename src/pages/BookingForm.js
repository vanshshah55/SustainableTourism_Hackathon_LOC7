import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import QRCode from 'react-qr-code';
import { motion } from 'framer-motion';

const BookingForm = () => {
  const { mode } = useParams();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [selectedHelper, setSelectedHelper] = useState(null);
  const [budget, setBudget] = useState(5000);
  const [totalCost, setTotalCost] = useState(0);
  const [showQRCode, setShowQRCode] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    startDate: '',
    endDate: '',
    travelDestination: '',
    emergencyContact: '',
    specialRequests: '',
    accommodationPreference: '',
    isHandicapped: false,
    helperSelected: null,
    wantsGuide: false,
  });

  const destinations = {
    "Eco-Friendly Destination A": [
      { name: '3 Nights, 4 Days', cost: 5000 },
      { name: '5 Nights, 6 Days', cost: 8000 },
      { name: '7 Nights, 8 Days', cost: 12000 },
    ],
    "Eco-Friendly Destination B": [
      { name: '4 Nights, 5 Days', cost: 6000 },
      { name: '8 Nights, 9 Days', cost: 15000 },
    ],
  };

  const localGuides = {
    "Eco-Friendly Destination A": [
      {
        id: 1,
        name: 'Tom Wilson',
        experience: 'Local culture and history expert',
        cost: 1000,
        photo: 'https://via.placeholder.com/100',
      },
      {
        id: 2,
        name: 'Emily Davis',
        experience: 'Adventure and nature guide',
        cost: 1500,
        photo: 'https://via.placeholder.com/100',
      },
    ],
    "Eco-Friendly Destination B": [
      {
        id: 3,
        name: 'Sophia Brown',
        experience: 'Wildlife and eco-tourism specialist',
        cost: 2000,
        photo: 'https://via.placeholder.com/100',
      },
    ],
  };

  const helpers = {
    "Eco-Friendly Destination A": [
      {
        id: 1,
        name: 'John Doe',
        experience: 'Certified Nurse - 5 years experience',
        cost: 1000,
        photo: 'https://via.placeholder.com/100',
      },
      {
        id: 2,
        name: 'Jane Smith',
        experience: 'Healthcare Assistant - 3 years experience',
        cost: 1500,
        photo: 'https://via.placeholder.com/100',
      },
    ],
    "Eco-Friendly Destination B": [
      {
        id: 3,
        name: 'Mark Johnson',
        experience: 'Senior Care Specialist - 7 years experience',
        cost: 1800,
        photo: 'https://via.placeholder.com/100',
      },
      {
        id: 4,
        name: 'Sarah Williams',
        experience: 'Registered Nurse - 4 years experience',
        cost: 2000,
        photo: 'https://via.placeholder.com/100',
      },
    ],
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handlePackageSelect = (index, cost) => {
    setSelectedPackage(index);
    setTotalCost((prev) => prev - (selectedPackage !== null ? availablePackages[selectedPackage].cost : 0) + cost);
  };

  const handleHelperSelect = (index, cost) => {
    setSelectedHelper(index);
    setTotalCost((prev) => prev - (selectedHelper !== null ? helpersForDestination[selectedHelper].cost : 0) + cost);
  };

  const handleGuideSelect = (index, cost) => {
    setSelectedGuide(index);
    setTotalCost((prev) => prev - (selectedGuide !== null ? guidesForDestination[selectedGuide].cost : 0) + cost);
  };

  const handleSliderChange = (e) => {
    setBudget(Number(e.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowQRCode(true);
  };

  const handleQRCodeScanned = () => {
    setShowQRCode(false);
    setShowSuccessPopup(true);
  };

  const availablePackages = destinations[formData.travelDestination] || [];
  const guidesForDestination = localGuides[formData.travelDestination] || [];
  const helpersForDestination = helpers[formData.travelDestination] || [];

  return (
    <motion.div
      className="booking-form bg-[#1f2937] min-h-screen p-6 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-[#ff6b17] mb-8 mt-14">
        Bookings {mode?.replace('-', ' ')}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-[#2d3748] p-8 shadow-lg rounded-lg w-full max-w-2xl border border-gray-700"
      >
        {/* Basic Details */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-200 text-sm font-bold mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your full name"
            className="shadow appearance-none bg-[#1f2937] border border-gray-700 rounded w-full py-3 px-4 text-gray-200 focus:outline-none focus:border-[#ff6b17]"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-200 text-sm font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your.email@example.com"
            className="shadow appearance-none bg-[#1f2937] border border-gray-700 rounded w-full py-3 px-4 text-gray-200 focus:outline-none focus:border-[#ff6b17]"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Date Fields */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="startDate" className="block text-gray-200 text-sm font-bold mb-2">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              className="shadow appearance-none bg-[#1f2937] border border-gray-700 rounded w-full py-3 px-4 text-gray-200 focus:outline-none focus:border-[#ff6b17]"
              value={formData.startDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="endDate" className="block text-gray-200 text-sm font-bold mb-2">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              className="shadow appearance-none bg-[#1f2937] border border-gray-700 rounded w-full py-3 px-4 text-gray-200 focus:outline-none focus:border-[#ff6b17]"
              value={formData.endDate}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="travelDestination" className="block text-gray-200 text-sm font-bold mb-2">
            Travel Destination
          </label>
          <select
            id="travelDestination"
            name="travelDestination"
            className="shadow appearance-none bg-[#1f2937] border border-gray-700 rounded w-full py-3 px-4 text-gray-200 focus:outline-none focus:border-[#ff6b17]"
            value={formData.travelDestination}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Destination</option>
            {Object.keys(destinations).map((destination, index) => (
              <option key={index} value={destination}>
                {destination}
              </option>
            ))}
          </select>
        </div>

        {/* Budget Slider */}
        <div className="mb-6">
          <label htmlFor="budget" className="block text-gray-200 text-sm font-bold mb-2">
            Budget: ₹{budget}
          </label>
          <input
            type="range"
            id="budget"
            name="budget"
            min="1000"
            max="20000"
            step="1000"
            value={budget}
            onChange={handleSliderChange}
            className="w-full accent-[#ff6b17]"
          />
        </div>

        {/* Available Packages */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-200 mb-4">Available Packages</h2>
          {availablePackages
            .filter((pkg) => pkg.cost <= budget)
            .map((pkg, index) => (
              <div
                key={index}
                onClick={() => handlePackageSelect(index, pkg.cost)}
                className={`p-4 border rounded-lg shadow-md cursor-pointer mb-3 ${
                  selectedPackage === index ? 'bg-[#ff6b17] text-white' : 'bg-[#1f2937] text-gray-200'
                } border-gray-700 hover:border-[#ff6b17] transition-colors`}
              >
                <p className="font-bold">{pkg.name}</p>
                <p>Cost: ₹{pkg.cost}</p>
              </div>
            ))}
        </div>

        {/* Guide Selection */}
        <div className="mb-6">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="wantsGuide"
              name="wantsGuide"
              checked={formData.wantsGuide}
              onChange={handleInputChange}
              className="form-checkbox text-[#ff6b17] rounded"
            />
            <span className="text-gray-200 text-sm font-bold">Do you want a guide?</span>
          </label>
        </div>

        {formData.wantsGuide && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-200 mb-4">Available Guides</h2>
            {guidesForDestination.map((guide, index) => (
              <div
                key={guide.id}
                onClick={() => handleGuideSelect(index, guide.cost)}
                className={`flex items-center p-4 border rounded-lg shadow-md cursor-pointer mb-3 ${
                  selectedGuide === index ? 'bg-[#ff6b17] text-white' : 'bg-[#1f2937] text-gray-200'
                } border-gray-700 hover:border-[#ff6b17] transition-colors`}
              >
                {/* <img
                  src={guide.photo}
                  alt={guide.name}
                  className="w-16 h-16 rounded-full mr-4"
                /> */}
                <div>
                  <p className="font-bold">{guide.name}</p>
                  <p>{guide.experience}</p>
                  <p>Cost: ₹{guide.cost}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Handicap Assistance */}
        <div className="mb-6">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="isHandicapped"
              name="isHandicapped"
              checked={formData.isHandicapped}
              onChange={handleInputChange}
              className="form-checkbox text-[#ff6b17] rounded"
            />
            <span className="text-gray-200 text-sm font-bold">Do you require special assistance?</span>
          </label>
        </div>

        {formData.isHandicapped && formData.travelDestination && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-200 mb-4">Available Healthcare Assistants</h2>
            {helpersForDestination.map((helper, index) => (
              <div
                key={helper.id}
                onClick={() => handleHelperSelect(index, helper.cost)}
                className={`flex items-center p-4 border rounded-lg shadow-md cursor-pointer mb-3 ${
                  selectedHelper === index ? 'bg-[#ff6b17] text-white' : 'bg-[#1f2937] text-gray-200'
                } border-gray-700 hover:border-[#ff6b17] transition-colors`}
              >
                {/* <img
                  src={helper.photo}
                  alt={helper.name}
                  className="w-16 h-16 rounded-full mr-4"
                /> */}
                <div>
                  <p className="font-bold">{helper.name}</p>
                  <p>{helper.experience}</p>
                  <p>Cost: ₹{helper.cost}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Total Cost */}
        <div className="mb-6">
          <p className="text-xl font-bold text-[#ff6b17]">Total Cost: ₹{totalCost}</p>
        </div>

        <button
          type="submit"
          className="bg-[#ff6b17] hover:bg-[#e65c0d] text-white font-bold py-3 px-6 rounded-lg w-full transition-colors"
        >
          Book Now
        </button>
      </form>

      {/* QR Code Modal */}
      {showQRCode && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="bg-[#2d3748] p-8 rounded-lg shadow-lg text-center border border-gray-700">
            <QRCode value="booking-confirmation" size={128} />
            <p className="text-lg font-bold mt-4 text-gray-200">Scan this QR Code to Confirm Payment</p>
            <button
              onClick={handleQRCodeScanned}
              className="mt-6 bg-[#ff6b17] hover:bg-[#e65c0d] text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Simulate Payment Success
            </button>
          </div>
        </motion.div>
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="bg-[#2d3748] p-8 rounded-lg shadow-lg text-center border border-gray-700">
            <h2 className="text-2xl font-bold text-[#ff6b17]">Booking Successful!</h2>
            <p className="text-gray-200 mt-2">Your booking has been confirmed. Thank you!</p>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="mt-6 bg-[#ff6b17] hover:bg-[#e65c0d] text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default BookingForm;