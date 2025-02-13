import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsRenderer, Autocomplete } from '@react-google-maps/api';
import { Search, Navigation, MapPin, Train, Bus, Trash2, Star, Plus, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const libraries = ["places"];

const mapContainerStyle = {
  width: '100%',
  height: '70vh'
};

const defaultCenter = {
  lat: 19.1090,
  lng: 72.8330
};

const dummyPoints = {
  mainStations: [
    // Western Line Stations (North to South)
    { lat: 19.1524, lng: 72.8488, type: 'train_station', name: 'Goregaon Railway Station' },
    { lat: 19.1297, lng: 72.8472, type: 'train_station', name: 'Jogeshwari Railway Station' },
    { lat: 19.1190, lng: 72.8470, type: 'train_station', name: 'Andheri Railway Station' },
    { lat: 19.1087, lng: 72.8444, type: 'train_station', name: 'Vile Parle Railway Station' },
    { lat: 19.0968, lng: 72.8437, type: 'train_station', name: 'Santa Cruz Railway Station' },
    { lat: 19.0809, lng: 72.8394, type: 'train_station', name: 'Bandra Railway Station' },
    
    // Central Line Stations
    { lat: 19.1783, lng: 72.9302, type: 'train_station', name: 'Ghatkopar Railway Station' },
    { lat: 19.1665, lng: 72.9373, type: 'train_station', name: 'Vikhroli Railway Station' },
    { lat: 19.1547, lng: 72.9411, type: 'train_station', name: 'Kanjurmarg Railway Station' },
    { lat: 19.1301, lng: 72.9425, type: 'train_station', name: 'Kurla Railway Station' },
    
    // Main bus depots
    { lat: 19.1196, lng: 72.8534, type: 'bus_station', name: 'Andheri Bus Depot' },
    { lat: 19.1084, lng: 72.8385, type: 'bus_station', name: 'Vile Parle Bus Depot' },
    { lat: 19.0883, lng: 72.8262, type: 'bus_station', name: 'Juhu Beach Bus Stop' }
  ]
};

function LocalExperiences() {
  const [map, setMap] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [directions, setDirections] = useState(null);
  const [transitMode, setTransitMode] = useState('TRANSIT');
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const [originAutocomplete, setOriginAutocomplete] = useState(null);
  const [destAutocomplete, setDestAutocomplete] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [destInput, setDestInput] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLegend, setShowLegend] = useState(true);
  const [routeDustbins, setRouteDustbins] = useState([]);

  const customDustbinIcon = {
    path: "M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z",
    fillColor: "#9333ea",
    fillOpacity: 1,
    strokeWeight: 0,
    scale: 1.5,
    anchor: window.google?.maps?.Point ? new window.google.maps.Point(12, 12) : null
  };

  const markerIcons = {
    train_station: {
      url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      scaledSize: window.google?.maps?.Size ? new window.google.maps.Size(40, 40) : null
    },
    bus_station: {
      url: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
      scaledSize: window.google?.maps?.Size ? new window.google.maps.Size(40, 40) : null
    },
    bicycle_store: {
      url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
      scaledSize: window.google?.maps?.Size ? new window.google.maps.Size(40, 40) : null
    }
  };

  const generateDustbinsAlongPath = (path, count = 10, deflectionRange = 0.0005) => {
    if (!path || path.length < 2) return [];
    
    const dustbins = [];
    const pathPoints = path.length;
    const interval = Math.floor(pathPoints / count);
    
    for (let i = interval; i < pathPoints - interval; i += interval) {
      const point = path[i];
      const randomDeflection = {
        lat: (Math.random() * 2 - 1) * deflectionRange,
        lng: (Math.random() * 2 - 1) * deflectionRange
      };
      
      dustbins.push({
        lat: point.lat() + randomDeflection.lat,
        lng: point.lng() + randomDeflection.lng
      });
    }
    
    return dustbins;
  };

  function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setCurrentLocation(pos);
          setSearchInput('Current Location');
          if (map) {
            map.panTo(pos);
          }
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  }

  function searchNearbyPlaces(location, type) {
    if (!map || !window.google) return;

    const service = new window.google.maps.places.PlacesService(map);
    const request = {
      location: location,
      radius: '1000',
      type: type
    };

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setNearbyPlaces(prevPlaces => [...prevPlaces, ...results.map(place => ({
          ...place,
          type: type
        }))]);
      }
    });
  }

  useEffect(() => {
    if (currentLocation && isLoaded && map) {
      setNearbyPlaces([]);
      searchNearbyPlaces(currentLocation, 'train_station');
      searchNearbyPlaces(currentLocation, 'bus_station');
      searchNearbyPlaces(currentLocation, 'bicycle_store');
    }
  }, [currentLocation, map, isLoaded]);

  useEffect(() => {
    if (currentLocation && destination && isLoaded && window.google) {
      const directionsService = new window.google.maps.DirectionsService();

      directionsService.route(
        {
          origin: currentLocation,
          destination: destination,
          travelMode: window.google.maps.TravelMode[transitMode]
        },
        (result, status) => {
          if (status === 'OK') {
            setDirections(result);
            
            const path = result.routes[0].overview_path;
            const newDustbins = generateDustbinsAlongPath(path);
            setRouteDustbins(newDustbins);
          }
        }
      );
    }
  }, [currentLocation, destination, transitMode, isLoaded]);

  function onOriginPlaceChanged() {
    if (originAutocomplete) {
      const place = originAutocomplete.getPlace();
      if (place.geometry) {
        setCurrentLocation({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        });
        setSearchInput(place.formatted_address);
      }
    }
  }

  function onDestPlaceChanged() {
    if (destAutocomplete) {
      const place = destAutocomplete.getPlace();
      if (place.geometry) {
        setDestination({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        });
        setDestInput(place.formatted_address);
      }
    }
  }

  function handleScriptLoad() {
    setIsLoaded(true);
  }

  function onMapLoad(mapInstance) {
    setMap(mapInstance);
  }

  const Legend = () => (
    <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg z-10 max-w-xs">
      <h3 className="font-bold text-lg mb-2 text-black">Map Legend</h3>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-red-500"></div>
          <span className="text-black">Railway Stations</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
          <span className="text-black">Bus Depots</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
          <span className="text-black">Bike Rentals</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-purple-500"></div>
          <span className="text-black">Dustbins</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-blue-500"></div>
          <span className="text-black">Current Location</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-red-600"></div>
          <span className="text-black">Destination</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pt-20"> {/* Added pt-20 for navbar spacing */}
      {/* Map Section */}
      <div className="p-4 max-w-7xl mx-auto">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-100">Local Transport Routes</h2>
          
          <LoadScript
            googleMapsApiKey="AIzaSyAKqPWSTRWIgMBVWgF6h3H1TkinF13A9XI"
            libraries={libraries}
            onLoad={handleScriptLoad}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative">
                {isLoaded && (
                  <Autocomplete
                    onLoad={setOriginAutocomplete}
                    onPlaceChanged={onOriginPlaceChanged}
                  >
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter starting location"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        className="w-full p-3 border rounded-lg pl-10 text-lg text-gray-900"
                      />
                      <div className="absolute left-3 top-3">
                        <Search size={24} className="text-gray-400" />
                      </div>
                    </div>
                  </Autocomplete>
                )}
                <button
                  onClick={getCurrentLocation}
                  className="absolute right-3 top-3 text-blue-500 hover:text-blue-600"
                  title="Use current location"
                >
                  <Navigation size={24} />
                </button>
              </div>

              <div className="relative">
                {isLoaded && (
                  <Autocomplete
                    onLoad={setDestAutocomplete}
                    onPlaceChanged={onDestPlaceChanged}
                  >
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter destination"
                        value={destInput}
                        onChange={(e) => setDestInput(e.target.value)}
                        className="w-full p-3 border rounded-lg pl-10 text-lg text-gray-900"
                      />
                      <div className="absolute left-3 top-3">
                        <MapPin size={24} className="text-gray-400" />
                      </div>
                    </div>
                  </Autocomplete>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-6 mb-8">
              <select
                className="p-3 border rounded-lg text-lg bg-white text-gray-900 shadow-sm"
                value={transitMode}
                onChange={(e) => setTransitMode(e.target.value)}
              >
                <option value="TRANSIT">Public Transit</option>
                <option value="WALKING">Walking</option>
                <option value="DRIVING">Driving</option>
              </select>

              <button
                className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors text-lg"
                onClick={() => {
                  setDestination(null);
                  setDirections(null);
                  setDestInput('');
                  setRouteDustbins([]);
                }}
              >
                Clear Route
              </button>

              <button
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors text-lg"
                onClick={() => setShowLegend(!showLegend)}
              >
                {showLegend ? 'Hide Legend' : 'Show Legend'}
              </button>
            </div>

            <div className="rounded-lg overflow-hidden shadow-xl relative h-[70vh]">
              {isLoaded && (
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={currentLocation || defaultCenter}
                  zoom={13}
                  onLoad={onMapLoad}
                  options={{
                    styles: [
                      {
                        featureType: "transit",
                        elementType: "all",
                        stylers: [{ visibility: "on" }]
                      },
                      {
                        featureType: "transit.station",
                        elementType: "all",
                        stylers: [{ visibility: "on" }]
                      },
                      {
                        featureType: "transit.station.rail",
                        elementType: "all",
                        stylers: [{ visibility: "on" }]
                      },
                      {
                        featureType: "rail",
                        elementType: "all",
                        stylers: [{ visibility: "on" }]
                      },
                      {
                        featureType: "transit.line",
                        elementType: "geometry",
                        stylers: [{ visibility: "on" }, { weight: 3 }, { color: "#1a73e8" }]
                      }
                    ]
                  }}
                >
                  {currentLocation && (
                    <Marker
                      position={currentLocation}
                      icon={{
                        url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                        scaledSize: window.google?.maps?.Size ? new window.google.maps.Size(40, 40) : null
                      }}
                      title="Starting Point"
                    />
                  )}

                  {destination && (
                    <Marker
                      position={destination}
                      icon={{
                        url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
                        scaledSize: window.google?.maps?.Size ? new window.google.maps.Size(40, 40) : null
                      }}
                      title="Destination"
                    />
                  )}

                  {routeDustbins.map((point, index) => (
                    <Marker
                      key={`dustbin-${index}`}
                      position={point}
                      icon={customDustbinIcon}
                      title={`Dustbin ${index + 1}`}
                    />
                  ))}

                  {dummyPoints.mainStations.map((point, index) => (
                    <Marker
                      key={`station-${index}`}
                      position={point}
                      icon={markerIcons[point.type]}
                      title={point.name}
                    />
                  ))}

                  {directions && (
                    <DirectionsRenderer
                      directions={directions}
                      options={{
                        suppressMarkers: true,
                        polylineOptions: {
                          strokeColor: "#4A90E2",
                          strokeWeight: 6
                        }
                      }}
                    />
                  )}
                </GoogleMap>
              )}
              {showLegend && <Legend />}
            </div>
          </LoadScript>
        </div>
      </div>

      {/* Host Section */}
      <div className="p-4 max-w-7xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Become a Local Experience Host</h2>
              <p className="text-gray-400 mb-6">Share your culture, skills, and heritage with travelers from around the world</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-400">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-2" />
                  Flexible scheduling
                </div>
                <div className="flex items-center text-gray-400">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-2" />
                  Earn additional income
                </div>
                <div className="flex items-center text-gray-400">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-2" />
                  Promote local culture
                </div>
              </div>
              <Link to="/apply-host" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg inline-flex items-center">
                Apply as Host
                <Plus className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">500+</div>
                <div className="text-gray-400 text-sm">Active Local Hosts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">4.8/5</div>
                <div className="text-gray-400 text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">10k+</div>
                <div className="text-gray-400 text-sm">Experiences Hosted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocalExperiences;