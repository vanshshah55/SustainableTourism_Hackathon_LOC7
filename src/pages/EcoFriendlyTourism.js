import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const EcoFriendlyTourism = () => {
  const pixabayKey = '48720358-14371172cd06074c80d6b7e5e';
  const [imageUrls, setImageUrls] = useState({});

  const fetchImageUrl = async (query) => {
    const url = `https://pixabay.com/api/?key=${pixabayKey}&q=${encodeURIComponent(query)}&image_type=photo&pretty=true`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.hits && data.hits.length > 0) {
        return data.hits[0].webformatURL;
      } else {
        console.error(`No images found for query: ${query}`);
        return '';
      }
    } catch (error) {
      console.error(`Error fetching image for query: ${query}`, error);
      return '';
    }
  };

  useEffect(() => {
    const loadImages = async () => {
      const queries = [
        'public transport',
        'cycling',
        'walking',
        'carpooling',
        'electric vehicle',
        'local business',
      ];

      const promises = queries.map((query) => fetchImageUrl(query));
      const results = await Promise.all(promises);

      const newImageUrls = {};
      queries.forEach((query, index) => {
        newImageUrls[query] = results[index];
      });

      setImageUrls(newImageUrls);
    };

    loadImages();
  }, []);

  return (
    <div className="eco-friendly-tourism bg-[#1f2937] min-h-screen p-6 mt-14">
      <h1 className="text-4xl font-bold text-[#FF6D00] mb-4">Eco-Friendly Tourism</h1>
      <p className="text-lg text-white mb-6">
        Discover eco-friendly ways to travel and reduce your carbon footprint. Choose sustainable travel options and contribute to a healthier planet.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[{
          title: 'Public Transportation',
          query: 'public transport',
          description: 'Use buses, metros, and trams to reduce traffic congestion and lower emissions.',
          mode: 'public-transport'
        }, {
          title: 'Cycling',
          query: 'cycling',
          description: "Explore cycling routes. It's eco-friendly and promotes physical health.",
          mode: 'cycling'
        }, , {
          title: 'Carpooling',
          query: 'carpooling',
          description: 'Consider carpooling to reduce the number of vehicles on the road.',
          mode: 'carpooling'
        }, {
          title: 'Electric Vehicles',
          query: 'electric vehicle',
          description: 'Opt for electric or hybrid vehicles to lower your environmental impact.',
          mode: 'electric-vehicles'
        }, ].map((item, index) => (
          <Link key={index} to={`/booking/${item.mode}`} className="card bgcolor-rgb(59 130 246 / 0.5) shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
            <img src={imageUrls[item.query] || '/placeholder.jpg'} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold text-[#FF6D00] mb-2">{item.title}</h2>
              <p className="text-white">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EcoFriendlyTourism;