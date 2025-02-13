import React, { useState, useEffect } from 'react';

const CrowdMonitor = () => {
  const [locations, setLocations] = useState([
    { name: "Taj Mahal", crowdLevel: 30, status: "Low" },
    { name: "Qutub Minar", crowdLevel: 60, status: "Moderate" },
    { name: "Gateway of India", crowdLevel: 85, status: "High" },
    { name: "Mysore Palace", crowdLevel: 45, status: "Moderate" },
    { name: "Amber Fort", crowdLevel: 55, status: "Moderate" },
    { name: "Hawa Mahal", crowdLevel: 40, status: "Moderate" },
    { name: "Red Fort", crowdLevel: 70, status: "High" },
    { name: "Victoria Memorial", crowdLevel: 50, status: "Moderate" },
    { name: "Golden Temple", crowdLevel: 75, status: "High" },
    { name: "Konark Sun Temple", crowdLevel: 35, status: "Low" },
    { name: "Meenakshi Temple", crowdLevel: 65, status: "Moderate" },
    { name: "Khajuraho Temples", crowdLevel: 25, status: "Low" },
    { name: "Ajanta Caves", crowdLevel: 30, status: "Low" },
    { name: "Ellora Caves", crowdLevel: 35, status: "Low" },
    { name: "India Gate", crowdLevel: 80, status: "High" },
    { name: "Charminar", crowdLevel: 55, status: "Moderate" },
    { name: "Fatehpur Sikri", crowdLevel: 40, status: "Moderate" },
    { name: "Hampi", crowdLevel: 45, status: "Moderate" },
    { name: "Mahabodhi Temple", crowdLevel: 50, status: "Moderate" },
    { name: "Brihadeeswara Temple", crowdLevel: 35, status: "Low" }
  ]);

  const [showAllLocations, setShowAllLocations] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [alerts, setAlerts] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [alertsEnabled, setAlertsEnabled] = useState(true);

  // Custom Alert Component
  const CustomAlert = ({ message, onClose }) => (
    <div className="bg-neutral-900 border border-[#FF6D00] rounded-lg p-4 flex items-center gap-2">
      <div className="text-[#FF6D00]">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zM8 5v3M8 11h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span className="text-white flex-1">{message}</span>
      <button onClick={onClose} className="text-gray-400 hover:text-white">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4l-8 8M4 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );

  const updateCrowdLevels = () => {
    setLocations(prevLocations => 
      prevLocations.map(location => {
        const variation = Math.floor(Math.random() * 25) - 12;
        let newLevel = location.crowdLevel + variation;
        newLevel = Math.max(0, Math.min(100, newLevel));
        
        let newStatus = "Low";
        if (newLevel > 70) newStatus = "High";
        else if (newLevel > 40) newStatus = "Moderate";
        
        checkAlerts(location.name, newLevel);
        
        return {
          ...location,
          crowdLevel: newLevel,
          status: newStatus
        };
      })
    );
  };

  const checkAlerts = (locationName, crowdLevel) => {
    if (!alertsEnabled) return;

    alerts.forEach(alert => {
      if (alert.location === locationName) {
        if (alert.type === 'high' && crowdLevel > 70) {
          addNotification(`High crowd alert at ${locationName}! Current level: ${crowdLevel}%`);
        } else if (alert.type === 'low' && crowdLevel < 40) {
          addNotification(`Low crowd alert at ${locationName}! Current level: ${crowdLevel}%`);
        }
      }
    });
  };

  const addNotification = (message) => {
    const newNotification = {
      id: Date.now(),
      message
    };
    setNotifications(prev => [newNotification, ...prev]);

    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
    }, 5000);
  };

  const setAlert = (type) => {
    if (!selectedLocation) return;
    
    const newAlert = {
      location: selectedLocation,
      type
    };
    
    setAlerts(prev => [...prev, newAlert]);
    setShowAlertModal(false);
    setSelectedLocation("");
    addNotification(`Alert set for ${selectedLocation} - ${type === 'low' ? 'Low' : 'High'} crowd level`);
  };

  const removeAlert = (location, type) => {
    setAlerts(prev => prev.filter(alert => 
      !(alert.location === location && alert.type === type)
    ));
    addNotification(`Alert removed for ${location}`);
  };

  useEffect(() => {
    const interval = setInterval(updateCrowdLevels, 10000);
    return () => clearInterval(interval);
  }, [alerts, alertsEnabled]);

  const filteredLocations = locations.filter(location =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedLocations = showAllLocations ? filteredLocations : filteredLocations.slice(0, 4);

  const getStatusColor = (status) => {
    switch (status) {
      case "Low": return "green";
      case "Moderate": return "yellow";
      case "High": return "red";
      default: return "gray";
    }
  };

  const AlertModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-neutral-800 p-6 rounded-xl max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">Manage Alerts</h3>
          <button 
            onClick={() => setShowAlertModal(false)}
            className="text-gray-400 hover:text-white"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Global Alerts Toggle */}
        <div className="mb-6 flex items-center justify-between bg-neutral-700 p-3 rounded-lg">
          <span className="text-white">All Alerts</span>
          <button
            onClick={() => setAlertsEnabled(!alertsEnabled)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              alertsEnabled ? 'bg-green-500' : 'bg-gray-500'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                alertsEnabled ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Current Alerts Section */}
        {alerts.length > 0 && (
          <div className="mb-6">
            <h4 className="text-white mb-2">Current Alerts:</h4>
            <div className="space-y-2">
              {alerts.map((alert, index) => (
                <div key={index} className="flex items-center justify-between bg-neutral-700 p-2 rounded">
                  <span className="text-white">
                    {alert.location} - {alert.type === 'high' ? 'High' : 'Low'} crowd
                  </span>
                  <button
                    onClick={() => removeAlert(alert.location, alert.type)}
                    className="text-red-500 hover:text-red-400"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Set New Alert Section */}
        <div className="mb-6">
          <h4 className="text-white mb-2">Set New Alert:</h4>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full bg-neutral-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6D00] mb-4"
          >
            <option value="">Choose a location...</option>
            {locations.map((location, index) => (
              <option key={index} value={location.name}>{location.name}</option>
            ))}
          </select>

          <div className="flex gap-4">
            <button
              onClick={() => setAlert('low')}
              disabled={!selectedLocation}
              className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white py-2 rounded-lg transition-colors"
            >
              Alert on Low Crowd
            </button>
            <button
              onClick={() => setAlert('high')}
              disabled={!selectedLocation}
              className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white py-2 rounded-lg transition-colors"
            >
              Alert on High Crowd
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-[#1f2937]">
      {/* Notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {notifications.map(notification => (
          <CustomAlert 
            key={notification.id} 
            message={notification.message}
            onClose={() => setNotifications(prev => prev.filter(n => n.id !== notification.id))}
          />
        ))}
      </div>

      {showAlertModal && <AlertModal />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32 ">
          <h2 className="text-4xl font-bold text-white mb-4">Real-Time Crowd Monitoring</h2>
          <p className="text-gray-400 text-lg">Make informed decisions with live crowd density data</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-neutral-900 p-6 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Live Crowd Monitor</h3>
              <span className="bg-green-500 px-3 py-1 rounded-full text-sm text-white animate-pulse">Live Updates</span>
            </div>

            <div className="mb-6">
              <input
                type="text"
                placeholder="Search locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-neutral-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6D00]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 max-h-[600px] overflow-y-auto">
              {displayedLocations.map((location, index) => (
                <div key={index} className="bg-neutral-800 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">{location.name}</span>
                    <span className={`text-${getStatusColor(location.status)}-500`}>
                      {location.status}
                    </span>
                  </div>
                  <div className="h-2 bg-neutral-700 rounded-full">
                    <div
                      className={`h-2 bg-${getStatusColor(location.status)}-500 rounded-full transition-all duration-1000`}
                      style={{ width: `${location.crowdLevel}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-6">
              <button 
                onClick={() => setShowAlertModal(true)}
                className="flex-1 bg-[#FF6D00] hover:bg-[#FF8F00] text-white py-2 rounded-lg transition-colors"
              >
                Manage Alerts
              </button>
              <button
                onClick={() => setShowAllLocations(!showAllLocations)}
                className="flex-1 border border-[#FF6D00] text-[#FF6D00] hover:bg-[#FF6D00] hover:text-white py-2 rounded-lg transition-colors"
              >
                {showAllLocations ? "Show Less" : "View All Locations"}
              </button>
            </div>
          </div>

          <div className="space-y-6 ">
            <div className="bg-neutral-600 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#FF6D00] p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Wait Time Prediction</h4>
                  <p className="text-gray-400">AI-powered waiting time estimates</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-600 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#2E7D32] p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Smart Notifications</h4>
                  <p className="text-gray-400">Get alerts when crowd levels change</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-600 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#1565C0] p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Route Optimization</h4>
                  <p className="text-gray-400">Smart suggestions for less crowded times</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrowdMonitor;


