import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

// Component States and Types:
// selectedState: Holds the currently selected state's data (name, image, description)
// weather: Holds the current weather data for the selected state
// weatherError: Holds any error messages from weather API calls

// State names mapped to their major cities for weather data
const stateCityMap = {
  "Andhra Pradesh": "Vijayawada",
  "Arunachal Pradesh": "Itanagar",
  "Assam": "Guwahati",
  "Bihar": "Patna",
  "Goa": "Panaji",
  "Gujarat": "Ahmedabad",
  "Haryana": "Chandigarh",
  "Himachal Pradesh": "Shimla",
  "Jharkhand": "Ranchi",
  "Karnataka": "Bangalore",
  "Kerala": "Thiruvananthapuram",
  "Madhya Pradesh": "Bhopal",
  "Maharashtra": "Mumbai",
  "Manipur": "Imphal",
  "Meghalaya": "Shillong",
  "Mizoram": "Aizawl",
  "Nagaland": "Kohima",
  "Odisha": "Bhubaneswar",
  "Punjab": "Chandigarh",
  "Rajasthan": "Jaipur",
  "Sikkim": "Gangtok",
  "Tamil Nadu": "Chennai",
  "Telangana": "Hyderabad",
  "Tripura": "Agartala",
  "Uttar Pradesh": "Lucknow",
  "Uttarakhand": "Dehradun",
  "West Bengal": "Kolkata",
  "Delhi": "Delhi",
  "Jammu and Kashmir": "Srinagar",
  "Ladakh": "Leh",
  "Puducherry": "Puducherry"
};

// Sample states data array (you should replace this with your complete data)
const statesAndUTs = [
  { 
    name: "Andhra Pradesh", 
    image: "/images/andhra-pradesh.jpg",
    description: "Known for its rich cultural heritage, Tirupati Temple, and beautiful coastline."
  },
  { 
    name: "Arunachal Pradesh", 
    image: "/images/ap.jpg",
    description: "The Land of the Rising Sun, famous for Tawang Monastery and scenic landscapes.",
    moreDescription: "The state's tribal culture is one of its key highlights, with lush green mountains and valleys offering plenty of trekking opportunities."
  },
  { 
    name: "Assam", 
    image: "/images/assam.jpg",
    description: "Famous for its tea gardens, Kaziranga National Park, and the mighty Brahmaputra River.",
    moreDescription: "Assam is the heart of tea production in India, with lush green tea estates and a rich biodiversity in its national parks."
  },
  { 
    name: "Bihar", 
    image: "/images/bihar.jpg",
    description: "Birthplace of Buddhism, home to Bodh Gaya and ancient Nalanda University.",
    moreDescription: "Bihar holds historical significance, with monuments like Nalanda and Bodh Gaya attracting pilgrims and history enthusiasts from all over the world."
  },
  { 
    name: "Goa", 
    image: "/images/goa.jpg",
    description: "Famous for its stunning beaches, nightlife, and Portuguese heritage.",
    moreDescription: "Goa's beaches are a major attraction, offering a mix of relaxation, water sports, and vibrant party scenes."
  },
  { 
    name: "Gujarat", 
    image: "/images/gujarat.jpg",
    description: "Home to Gir National Park, the Rann of Kutch, and the Statue of Unity.",
    moreDescription: "Gujarat is famous for its rich cultural diversity, traditional festivals, and the striking salt marshes of Rann of Kutch."
  },
  { 
    name: "Haryana", 
    image: "/images/haryana.jpg",
    description: "A historical and industrial hub, home to Kurukshetra and modern Gurgaon.",
    moreDescription: "Haryana is an industrial powerhouse, with a growing IT sector and rich historical landmarks, especially related to the Mahabharata."
  },
  { 
    name: "Himachal Pradesh", 
    image: "/images/himachal.jpg",
    description: "A paradise for nature lovers, featuring Shimla, Manali, and Spiti Valley.",
    moreDescription: "This state is renowned for its pristine hill stations and religious sites, along with trekking routes amidst the snow-covered Himalayas."
  },
  { 
    name: "Jharkhand", 
    image: "/images/jharkhand.jpg",
    description: "Known for its rich minerals, waterfalls, and tribal culture.",
    moreDescription: "Jharkhand offers an unspoiled natural beauty, with vast forests and waterfalls, as well as a vibrant tribal culture that shapes its identity."
  },
  { 
    name: "Karnataka", 
    image: "/images/karnataka.jpg",
    description: "Home to Bangalore, Mysore Palace, and UNESCO sites like Hampi.",
    moreDescription: "Karnataka has a unique blend of modern tech hubs and ancient history, with several UNESCO heritage sites and natural beauty."
  },
  { 
    name: "Kerala", 
    image: "/images/kerala.jpg",
    description: "God's Own Country, famous for backwaters, Ayurveda, and lush greenery.",
    moreDescription: "Kerala offers a mix of beaches, backwaters, and hills, along with its famed Ayurveda treatments and cultural practices like Kathakali."
  },
  { 
    name: "Maharashtra", 
    image: "/images/maharashtra.jpg",
    description: "Mumbai, Ajanta-Ellora caves, and the Western Ghats define this vibrant state.",
    moreDescription: "Maharashtra is home to the financial capital of India, Mumbai, and rich historical sites like the Ajanta and Ellora caves."
  },
  { 
    name: "Manipur", 
    image: "/images/manipur.jpg",
    description: "Land of jewels, known for Loktak Lake and classical Manipuri dance.",
    moreDescription: "Manipur's lakes, valleys, and mountain views create a picturesque backdrop to its vibrant cultural festivals and dance forms."
  },
  { 
    name: "Meghalaya", 
    image: "/images/meghalaya.jpg",
    description: "The Abode of Clouds, home to Cherrapunji and living root bridges.",
    moreDescription: "Meghalaya is famous for its monsoon rains, creating lush green landscapes and the unique living root bridges that showcase indigenous craftsmanship."
  },
  { 
    name: "Mizoram", 
    image: "/images/mizoram.jpg",
    description: "A land of rolling hills, vibrant culture, and lush green forests.",
    moreDescription: "Mizoram is blessed with beautiful landscapes, with its hilltops offering breathtaking views and an interesting culture rooted in traditions."
  },
  { 
    name: "Nagaland", 
    image: "/images/nagaland.jpg",
    description: "Famous for Hornbill Festival and the indigenous Naga tribes.",
    moreDescription: "Nagaland is culturally rich, with various tribes and their festivals, such as the Hornbill Festival, which celebrates traditional dance, music, and crafts."
  },
  { 
    name: "Odisha", 
    image: "/images/odisha.jpg",
    description: "Rich in temples, including the Sun Temple at Konark and Puri Jagannath.",
    moreDescription: "Odisha is famous for its ancient temples, with exquisite architecture and vibrant art forms like Odissi dance and Pattachitra paintings."
  },
  { 
    name: "Punjab", 
    image: "/images/punjab.jpg",
    description: "Land of the Golden Temple, bhangra dance, and delicious cuisine.",
    moreDescription: "Punjab's history is deeply tied to its Sikh culture, with landmarks like the Golden Temple, and is famous for its rich agricultural heritage and lively festivals."
  },
  { 
    name: "Rajasthan", 
    image: "/images/rajasthan.jpg",
    description: "Home to Jaipur, Jodhpur, deserts, and historic forts.",
    moreDescription: "Rajasthan boasts magnificent palaces and forts, with its deserts offering a unique cultural and travel experience, rich in royal heritage."
  },
  { 
    name: "Tamil Nadu", 
    image: "/images/tamil-nadu.jpg",
    description: "Known for ancient temples, classical music, and Marina Beach.",
    moreDescription: "Tamil Nadu offers a unique blend of Dravidian architecture, cultural festivals, and ancient temples, making it an essential part of India's heritage."
  },
  { 
    name: "Telangana", 
    image: "/images/telangana.jpg",
    description: "Home to Hyderabad, Charminar, and IT hubs.",
    moreDescription: "Telangana is a perfect mix of historical monuments like Charminar and technological advancements, with Hyderabad being a center for IT innovation."
  },
  { 
    name: "Uttar Pradesh", 
    image: "/images/uttar pradesh.jpg",
    description: "Home to the Taj Mahal, Varanasi, and Lucknow's Awadhi culture.",
    moreDescription: "Uttar Pradesh is the birthplace of ancient civilizations and boasts historic landmarks, including the Taj Mahal and the spiritual city of Varanasi."
  },
  { 
    name: "Uttarakhand", 
    image: "/images/uttarakhand.jpg",
    description: "Land of the Himalayas, featuring Kedarnath and Rishikesh.",
    moreDescription: "Uttarakhand offers spiritual retreats and adventurous activities, with sacred sites like Kedarnath and a wide range of outdoor experiences like trekking and rafting."
  },
  { 
    name: "West Bengal", 
    image: "/images/westbengal.jpg",
    description: "Cultural hub with Kolkata, Darjeeling, and the Sundarbans.",
    moreDescription: "West Bengal is renowned for its vibrant culture, including its music, art, and festivals, with scenic destinations like Darjeeling and the Sundarbans."
  },
  { 
    name: "Delhi", 
    image: "/images/delhi.jpg",
    description: "Capital city of India, featuring historical monuments and bustling markets.",
    moreDescription: "Delhi is a blend of ancient history and modern urban life, with iconic sites like the Red Fort, India Gate, and vibrant markets like Chandni Chowk."
  },
  { 
    name: "Jammu and Kashmir", 
    image: "/images/jk.jpg",
    description: "A scenic paradise, home to Dal Lake and Gulmarg.",
    moreDescription: "Jammu and Kashmir is a tranquil haven with stunning landscapes, offering both spiritual experiences and adventures in the Himalayas."
  },
  { 
    name: "Ladakh", 
    image: "/images/ladakh.jpg",
    description: "Famous for Pangong Lake, monasteries, and breathtaking landscapes.",
    moreDescription: "Ladakh is a high-altitude desert region known for its unique culture, stunning monasteries, and outdoor adventures like trekking and biking."
  },
  { 
    name: "Puducherry", 
    image: "/images/puducherry.jpg",
    description: "A French colonial town with beautiful beaches and Auroville.",
    moreDescription: "Puducherry offers a unique fusion of French colonial influence and Indian culture, with peaceful beaches and spiritual centers like Auroville."
  }
];

// Detailed information for each state
const stateDetails = {
  "Andhra Pradesh": {
    popularSpots: ["Tirupati Temple", "Araku Valley", "Vishakhapatnam Beach", "Undavalli Caves", "Srisailam Temple"],
    activities: ["Temple pilgrimage", "Beach activities", "Hill station tours", "Cave exploration", "Water sports"],
    culture: ["Kuchipudi dance", "Telugu literature", "Carnatic music", "Traditional handicrafts", "Kalamkari art"]
  },
  "Arunachal Pradesh": {
    popularSpots: ["Tawang Monastery", "Namdapha National Park", "Sela Pass", "Ziro Valley", "Parasuram Kund"],
    activities: ["Monastery visits", "Wildlife spotting", "Mountain trekking", "River rafting", "Cultural tours"],
    culture: ["Monpa art", "Buddhist festivals", "Tribal heritage", "Traditional weaving", "Folk music"]
  },
  "Assam": {
    popularSpots: ["Kaziranga National Park", "Kamakhya Temple", "Majuli Island", "Manas National Park", "Sivasagar"],
    activities: ["Wildlife safaris", "Tea garden tours", "River cruises", "Bird watching", "Temple visits"],
    culture: ["Bihu dance", "Sattriya dance", "Assamese cuisine", "Silk weaving", "Mask making"]
  },
  "Bihar": {
    popularSpots: ["Mahabodhi Temple", "Nalanda University Ruins", "Golghar", "Vikramshila", "Rajgir"],
    activities: ["Buddhist circuit tours", "Historical expeditions", "Spiritual retreats", "Archaeological visits", "Rural tourism"],
    culture: ["Buddhist heritage", "Folk music", "Madhubani painting", "Traditional crafts", "Religious festivals"]
  },
  "Goa": {
    popularSpots: ["Calangute Beach", "Basilica of Bom Jesus", "Fort Aguada", "Dudhsagar Falls", "Anjuna Flea Market"],
    activities: ["Beach hopping", "Water sports", "Heritage walks", "Casino gaming", "Cruise trips"],
    culture: ["Portuguese heritage", "Carnival celebration", "Goan cuisine", "Feni making", "Konkani music"]
  },
  "Gujarat": {
    popularSpots: ["Rann of Kutch", "Gir National Park", "Somnath Temple", "Statue of Unity", "Sabarmati Ashram"],
    activities: ["Lion safaris", "Desert camping", "Temple tours", "Heritage walks", "Textile shopping"],
    culture: ["Garba dance", "Folk crafts", "Traditional textiles", "Gujarati cuisine", "Tribal culture"]
  },
  "Haryana": {
    popularSpots: ["Kingdom of Dreams", "Sultanpur Bird Sanctuary", "Kurukshetra", "Pinjore Gardens", "Badkhal Lake"],
    activities: ["Heritage tours", "Bird watching", "Religious pilgrimages", "Adventure sports", "Rural tourism"],
    culture: ["Phag dance", "Folk music", "Haryanvi cuisine", "Traditional wrestling", "Rural games"]
  },
  "Himachal Pradesh": {
    popularSpots: ["Shimla", "Manali", "Dharamshala", "Spiti Valley", "Kullu Valley"],
    activities: ["Skiing", "Paragliding", "Trekking", "Mountain biking", "River rafting"],
    culture: ["Buddhist monasteries", "Folk festivals", "Himachali cuisine", "Wool weaving", "Tribal traditions"]
  },
  "Jharkhand": {
    popularSpots: ["Hundru Falls", "Betla National Park", "Deoghar", "Patratu Valley", "McCluskieganj"],
    activities: ["Waterfall visits", "Wildlife safaris", "Tribal tours", "Rock climbing", "Cave exploration"],
    culture: ["Tribal art", "Folk dances", "Traditional music", "Sohrai painting", "Tribal festivals"]
  },
  "Karnataka": {
    popularSpots: ["Hampi", "Mysore Palace", "Jog Falls", "Coorg", "Gokarna Beach"],
    activities: ["Heritage tours", "Wildlife safaris", "Coffee plantation visits", "Beach activities", "Temple visits"],
    culture: ["Yakshagana", "Carnatic music", "Mysore painting", "Silk weaving", "Traditional dance forms"]
  },
  "Kerala": {
    popularSpots: ["Alleppey Backwaters", "Munnar", "Wayanad", "Kovalam Beach", "Fort Kochi"],
    activities: ["Houseboat cruises", "Ayurvedic treatments", "Wildlife safaris", "Beach activities", "Spice plantation tours"],
    culture: ["Kathakali dance", "Theyyam ritual art", "Kerala cuisine", "Temple festivals", "Traditional boat races"]
  },
  "Madhya Pradesh": {
    popularSpots: ["Khajuraho Temples", "Bandhavgarh National Park", "Sanchi Stupa", "Orchha", "Mandu"],
    activities: ["Tiger safaris", "Temple tours", "Heritage walks", "River rafting", "Cave exploration"],
    culture: ["Tribal art", "Gond painting", "Folk dances", "Traditional crafts", "Madhya Pradesh cuisine"]
  },
  "Maharashtra": {
    popularSpots: ["Gateway of India", "Ajanta Caves", "Ellora Caves", "Lonavala", "Mahabaleshwar"],
    activities: ["Cave exploration", "Beach visits", "Hill station tours", "Wildlife safaris", "Historical tours"],
    culture: ["Lavani dance", "Warli art", "Maharashtrian cuisine", "Traditional theater", "Folk music"]
  },
  "Manipur": {
    popularSpots: ["Loktak Lake", "Keibul Lamjao National Park", "Imphal Valley", "Kangla Fort", "Shree Govindajee Temple"],
    activities: ["Lake tours", "Wildlife watching", "Cultural visits", "Adventure sports", "Temple visits"],
    culture: ["Manipuri dance", "Martial arts", "Traditional sports", "Handloom weaving", "Folk festivals"]
  },
  "Meghalaya": {
    popularSpots: ["Living Root Bridges", "Cherrapunji", "Shillong", "Mawsynram", "Nohkalikai Falls"],
    activities: ["Cave exploration", "Waterfall visits", "Trekking", "Rock climbing", "Village tours"],
    culture: ["Khasi culture", "Traditional music", "Folk festivals", "Tribal customs", "Local cuisine"]
  },
  "Mizoram": {
    popularSpots: ["Phawngpui Peak", "Reiek Heritage Village", "Vantawng Falls", "Tam Dil", "Murlen National Park"],
    activities: ["Hiking", "Village tours", "Bird watching", "Cave exploration", "Cultural visits"],
    culture: ["Cheraw dance", "Bamboo craft", "Traditional festivals", "Folk music", "Mizo cuisine"]
  },
  "Nagaland": {
    popularSpots: ["Kohima", "Dzukou Valley", "Khonoma Village", "Triple Falls", "Intanki National Park"],
    activities: ["Trekking", "Village visits", "Cultural tours", "Bird watching", "Festival celebrations"],
    culture: ["Hornbill Festival", "Tribal traditions", "Folk music", "Traditional weaving", "Naga cuisine"]
  },
  "Odisha": {
    popularSpots: ["Konark Sun Temple", "Puri Beach", "Chilika Lake", "Lingaraj Temple", "Udayagiri Caves"],
    activities: ["Temple tours", "Beach visits", "Bird watching", "Cultural tours", "Handicraft shopping"],
    culture: ["Odissi dance", "Pattachitra art", "Temple architecture", "Traditional crafts", "Maritime heritage"]
  },
  "Punjab": {
    popularSpots: ["Golden Temple", "Jallianwala Bagh", "Wagah Border", "Anandpur Sahib", "Qila Mubarak"],
    activities: ["Religious tours", "Farm visits", "Heritage walks", "Border ceremonies", "Food tours"],
    culture: ["Bhangra dance", "Giddha dance", "Punjabi cuisine", "Folk music", "Traditional festivals"]
  },
  "Rajasthan": {
    popularSpots: ["Hawa Mahal", "Mehrangarh Fort", "Lake Palace", "Jaisalmer Fort", "Ranthambore National Park"],
    activities: ["Desert safaris", "Palace tours", "Camel rides", "Folk music nights", "Heritage walks"],
    culture: ["Rajasthani folk dance", "Miniature paintings", "Block printing", "Puppet shows", "Traditional music"]
  },
  "Sikkim": {
    popularSpots: ["Nathula Pass", "Tsomgo Lake", "Gangtok", "Pelling", "Yumthang Valley"],
    activities: ["Mountain trekking", "Monastery visits", "Yak rides", "River rafting", "Cable car rides"],
    culture: ["Buddhist festivals", "Traditional prayer wheels", "Sikkimese cuisine", "Carpet weaving", "Folk dances"]
  },
  "Tamil Nadu": {
    popularSpots: ["Meenakshi Temple", "Marina Beach", "Ooty", "Thanjavur", "Mahabalipuram"],
    activities: ["Temple tours", "Hill station visits", "Beach activities", "Cultural shows", "Heritage walks"],
    culture: ["Bharatanatyam", "Carnatic music", "Temple architecture", "Bronze casting", "Classical literature"]
  },
  "Telangana": {
    popularSpots: ["Charminar", "Ramoji Film City", "Golconda Fort", "Warangal Fort", "Hussain Sagar"],
    activities: ["Heritage tours", "Shopping", "Lake visits", "Museum tours", "Cultural experiences"],
    culture: ["Perini dance", "Bidri craft", "Hyderabadi cuisine", "Folk festivals", "Traditional art forms"]
  },
  "Tripura": {
    popularSpots: ["Ujjayanta Palace", "Neermahal", "Unakoti", "Tripura Sundari Temple", "Sepahijala Wildlife Sanctuary"],
    activities: ["Palace visits", "Temple tours", "Wildlife watching", "Cultural visits", "Lake tours"],
    culture: ["Hojagiri dance", "Bamboo craft", "Traditional music", "Local festivals", "Tribal customs"]
  },
  "Uttar Pradesh": {
    popularSpots: ["Taj Mahal", "Varanasi Ghats", "Fatehpur Sikri", "Vrindavan", "Sarnath"],
    activities: ["Heritage tours", "Spiritual walks", "River cruises", "Food tours", "Cultural experiences"],
    culture: ["Kathak dance", "Lucknowi cuisine", "Classical music", "Traditional crafts", "Religious festivals"]
  },
  "Uttarakhand": {
    popularSpots: ["Kedarnath", "Rishikesh", "Nainital", "Valley of Flowers", "Mussoorie"],
    activities: ["Pilgrimage tours", "River rafting", "Yoga retreats", "Trekking", "Wildlife spotting"],
    culture: ["Folk dances", "Traditional music", "Local festivals", "Pahari cuisine", "Temple architecture"]
  },
  "West Bengal": {
    popularSpots: ["Victoria Memorial", "Darjeeling", "Sundarbans", "Howrah Bridge", "Kalimpong"],
    activities: ["Heritage walks", "Tea garden visits", "Tiger safaris", "River cruises", "Mountain tours"],
    culture: ["Durga Puja", "Bengali literature", "Classical music", "Traditional art", "Bengali cuisine"]
  },
  "Delhi": {
    popularSpots: ["Red Fort", "Qutub Minar", "India Gate", "Humayun's Tomb", "Lotus Temple"],
    activities: ["Heritage walks", "Food tours", "Shopping", "Museum visits", "Cultural experiences"],
    culture: ["Mughal heritage", "Street food", "Art galleries", "Cultural performances", "Historical monuments"]
  },
  "Jammu and Kashmir": {
    popularSpots: ["Dal Lake", "Gulmarg", "Pahalgam", "Vaishno Devi", "Shalimar Bagh"],
    activities: ["Shikara rides", "Skiing", "Trekking", "Pilgrimage", "Garden visits"],
    culture: ["Kashmiri handicrafts", "Traditional cuisine", "Folk music", "Carpet weaving", "Local festivals"]
  },
  "Ladakh": {
    popularSpots: ["Pangong Lake", "Leh Palace", "Nubra Valley", "Hemis Monastery", "Zanskar Valley"],
    activities: ["Monastery visits", "Mountain biking", "Camel safaris", "River rafting", "Cultural tours"],
    culture: ["Buddhist festivals", "Traditional music", "Thangka painting", "Ladakhi cuisine", "Ancient monasteries"]
  },
  "Puducherry": {
    popularSpots: ["Promenade Beach", "Auroville", "Paradise Beach", "French Quarter", "Bharathi Park"],
    activities: ["Beach visits", "Heritage walks", "Yoga sessions", "Water sports", "Cultural tours"],
    culture: ["French heritage", "Tamil culture", "Aurobindo Ashram", "Indo-French cuisine", "Colonial architecture"]
  }
};

const StateExplorer = () => {
  // State Management using useState hooks
  const [selectedState, setSelectedState] = useState(null);  // Holds the currently selected state
  const [weather, setWeather] = useState(null);             // Holds weather data
  const [weatherError, setWeatherError] = useState(null);   // Holds weather API errors
  const [isLoading, setIsLoading] = useState(false);        // Tracks loading state

  // useEffect hook to fetch weather data when a state is selected
  useEffect(() => {
    // Skip if no state is selected
    if (!selectedState) return;

    // Define the weather fetching function
    const fetchWeather = async (stateName) => {
      setIsLoading(true);        // Start loading
      setWeather(null);          // Clear previous weather data
      setWeatherError(null);     // Clear any previous errors

      try {
        // Get the major city for the selected state
        const city = stateCityMap[stateName] || stateName;
        
        // OpenWeatherMap API call
        const API_KEY = '89406934a5021d7b27a972ab313839a3'; // Replace with your actual API key
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${API_KEY}&units=metric`
        );

        // Check if the API call was successful
        if (!response.ok) {
          throw new Error('Weather data not available');
        }

        // Parse the weather data
        const data = await response.json();
        
        // Format and store the weather data
        setWeather({
          temp: `${Math.round(data?.main?.temp)}°C`,
          condition: data?.weather[0].main,
          humidity: `${data?.main.humidity}%`,
          windSpeed: `${Math.round(data?.wind.speed * 3.6)} km/h`, // Convert m/s to km/h
          icon: `https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`
        });

      } catch (error) {
        console.error('Error fetching weather:', error);
        setWeatherError('Unable to fetch weather data');
        
        // Set mock weather data for development/demo
        setWeather({
          temp: `${Math.floor(20 + Math.random() * 15)}°C`,
          condition: 'Sunny',
          humidity: `${Math.floor(60 + Math.random() * 20)}%`,
          windSpeed: `${Math.floor(5 + Math.random() * 20)} km/h`,
          icon: 'https://openweathermap.org/img/wn/01d@2x.png'
        });
      } finally {
        setIsLoading(false);  // Stop loading regardless of outcome
      }
    };

    // Call the fetch function when the component mounts or state changes
    fetchWeather(selectedState.name);
  }, [selectedState]); // Dependency array - effect runs when selectedState changes

  // Handler for state selection
  const handleStateClick = (state) => {
    setSelectedState(state);  // Update selected state
    setWeather(null);        // Clear weather data
  };
  return (
    <div className="min-h-screen bg-[#1f2937] p-6 pt-16 mt-14"> {/* Added pt-16 for top padding */}
      {selectedState ? (
        // Detailed view for selected state
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
          {/* Header with state name and back button */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-4xl font-bold text-gray-800 font-serif tracking-wide">
              {selectedState.name}
            </h2>
            <button 
              onClick={() => setSelectedState(null)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Back to States
            </button>
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* State image */}
            <div className="col-span-2">
              <img 
                src={selectedState.image} 
                alt={selectedState.name}
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Weather and information cards */}
            <div className="space-y-6">
              {/* Weather card */}
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                  Current Weather in {stateCityMap[selectedState.name]}
                </h3>
                {isLoading ? (
                  <div className="flex items-center justify-center h-32">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-800"></div>
                  </div>
                ) : weather ? (
                  <div className="text-gray-700 space-y-2">
                    <div className="flex items-center gap-4">
                      <img 
                        src={weather.icon} 
                        alt={weather.condition}
                        className="w-16 h-16"
                      />
                      <p className="text-3xl font-bold">{weather.temp}</p>
                    </div>
                    <p className="text-xl">{weather.condition}</p>
                    <div className="mt-4 space-y-1">
                      <p>Humidity: {weather.humidity}</p>
                      <p>Wind Speed: {weather.windSpeed}</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500">No weather data available</p>
                )}
                {weatherError && (
                  <p className="text-red-500 mt-2">{weatherError}</p>
                )}
              </div>

              {/* Popular spots card */}
              <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Popular Spots</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  {stateDetails[selectedState.name]?.popularSpots.map((spot, index) => (
                    <li key={index} className="text-lg">{spot}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Activities and culture cards */}
            <div className="space-y-6">
              {/* Activities card */}
              <div className="bg-purple-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-purple-800 mb-4">Activities</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  {stateDetails[selectedState.name]?.activities.map((activity, index) => (
                    <li key={index} className="text-lg">{activity}</li>
                  ))}
                </ul>
              </div>

              {/* Cultural aspects card */}
              <div className="bg-orange-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-orange-800 mb-4">Cultural Aspects</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  {stateDetails[selectedState.name]?.culture.map((aspect, index) => (
                    <li key={index} className="text-lg">{aspect}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Grid view of all states
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {statesAndUTs.map((state, index) => (
            <motion.div 
              key={index} 
              className="relative cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleStateClick(state)}
            >
              <div className="relative">
                <img
                  src={state.image}
                  alt={state.name}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 rounded-b-lg">
                  <h3 className="text-xl font-serif font-bold text-white text-center tracking-wide">
                    {state.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StateExplorer;