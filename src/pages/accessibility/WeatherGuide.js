import React, { useState, useEffect } from 'react';

const WeatherGuide = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [destination, setDestination] = useState('Delhi'); // Default destination
  const [summary, setSummary] = useState('');

  const destinations = {
    Delhi: { lat: 28.6139, lon: 77.209 },
    Mumbai: { lat: 19.076, lon: 72.8777 },
    Bangalore: { lat: 12.9716, lon: 77.5946 },
    Chennai: { lat: 13.0827, lon: 80.2707 },
    Kolkata: { lat: 22.5726, lon: 88.3639 },
    Hyderabad: { lat: 17.385, lon: 78.4867 },
    Pune: { lat: 18.5204, lon: 73.8567 },
    Jaipur: { lat: 26.9124, lon: 75.7873 },
    Ahmedabad: { lat: 23.0225, lon: 72.5714 },
    Surat: { lat: 21.1702, lon: 72.8311 },
    Lucknow: { lat: 26.8467, lon: 80.9462 },
    Kanpur: { lat: 26.4499, lon: 80.3319 },
    Nagpur: { lat: 21.1458, lon: 79.0882 },
    Indore: { lat: 22.7196, lon: 75.8577 },
    Thane: { lat: 19.2183, lon: 72.9781 },
    Bhopal: { lat: 23.2599, lon: 77.4126 },
    Visakhapatnam: { lat: 17.6868, lon: 83.2185 },
    Patna: { lat: 25.5941, lon: 85.1376 },
    Vadodara: { lat: 22.3072, lon: 73.1812 },
    Ghaziabad: { lat: 28.6692, lon: 77.4538 },
  };

  const { lat, lon } = destinations[destination];
  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Asia/Kolkata`;

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
        generateSummary(data);
      })
      .catch(error => console.error('Error fetching weather data:', error));
  }, [destination]);

  const generateSummary = (data) => {
    if (!data || !data.daily || data.daily.temperature_2m_max.length === 0) {
      setSummary('No weather data available.');
      return;
    }

    const todayTempMax = data.daily.temperature_2m_max[0];
    const todayTempMin = data.daily.temperature_2m_min[0];
    const weatherDescription = data.daily.weathercode[0];

    let travelRecommendation = 'It is a good time to travel.';
    if (todayTempMax < 10 || todayTempMax > 35 || weatherDescription.includes('rain')) {
      travelRecommendation = 'It might not be the best time to travel.';
    }

    setSummary(`The current temperature in ${destination} ranges from ${todayTempMin}°C to ${todayTempMax}°C. ${travelRecommendation}`);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  return (
    <div className="py-20 bg-neutral-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <h1 className="text-4xl font-bold text-white mb-4">Weather Guide</h1>
        <p className="text-gray-400 text-lg mb-8">Check climate conditions for your destination.</p>
        <div className="mb-8">
          <label htmlFor="destination" className="text-white mr-4">Select Destination:</label>
          <select id="destination" value={destination} onChange={handleDestinationChange} className="p-2 rounded bg-neutral-800 text-white">
            {Object.keys(destinations).map((dest) => (
              <option key={dest} value={dest}>{dest}</option>
            ))}
          </select>
        </div>
        {weatherData ? (
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-4">Weather Forecast for {destination}</h2>
            <p className="text-lg mb-4">{summary}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {weatherData.daily.time.map((date, index) => (
                <div key={index} className="bg-neutral-800 p-4 rounded-lg">
                  <p className="text-lg font-bold">{new Date(date).toLocaleDateString()}</p>
                  <p className="text-gray-400">Max Temp: {weatherData.daily.temperature_2m_max[index]}°C</p>
                  <p className="text-gray-400">Min Temp: {weatherData.daily.temperature_2m_min[index]}°C</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-400">Loading weather data...</p>
        )}
      </div>
    </div>
  );
};

export default WeatherGuide;