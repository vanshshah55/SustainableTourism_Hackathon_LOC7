import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-white mb-4">Smart Features for Sustainable Tourism</h2>
          <p className="text-gray-400 text-lg">Innovative solutions for a better travel experience</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <a href="#crowd-monitor" className="bg-neutral-700 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
            <div className="bg-[#FF6D00] rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Real-time Crowd Monitor</h3>
            <p className="text-gray-400">Live updates on tourist density at popular destinations to help you plan better visits and avoid overcrowding.</p>
          </a>

          <a href="#accessibility" className="bg-neutral-700 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="bg-[#2E7D32] rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Enhanced Accessibility</h3>
            <p className="text-gray-400">Detailed accessibility information and facilities for differently-abled travelers at every destination.</p>
          </a>

          <a href="#waste-management" className="bg-neutral-700 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="bg-[#1565C0] rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Smart Waste Management</h3>
            <p className="text-gray-400">Digital tracking of waste disposal and recycling initiatives at tourist locations.</p>
          </a>

          <a href="#cultural-integration" className="bg-neutral-700 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="bg-[#FF6D00] rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zM5 12c0 1.657-1.343 3-3 3S-1 13.657-1 12s1.343-3 3-3 3 1.343 3 3z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Local Cultural Integration</h3>
            <p className="text-gray-400">Connect with local communities and experience authentic cultural experiences through verified hosts.</p>
          </a>

          <a href="#live-updates" className="bg-neutral-700 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: '0.8s' }}>
            <div className="bg-[#2E7D32] rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zM5 12c0 1.657-1.343 3-3 3S-1 13.657-1 12s1.343-3 3-3 3 1.343 3 3z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Live Updates</h3>
            <p className="text-gray-400">Get instant updates about weather, transport, and local events at your chosen destination.</p>
          </a>

          <a href="#eco-impact" className="bg-neutral-700 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: '1s' }}>
            <div className="bg-[#1565C0] rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zM5 12c0 1.657-1.343 3-3 3S-1 13.657-1 12s1.343-3 3-3 3 1.343 3 3z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Eco-Impact Tracker</h3>
            <p className="text-gray-400">Monitor and reduce your carbon footprint while traveling with our smart eco-tracking system.</p>
          </a>
        </div>

        <div className="mt-16 text-center">
          <a href="#booking" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#FF6D00] hover:bg-[#FF8F00] transition-colors animate__animated animate__pulse animate__infinite">
            Start Your Eco-Journey
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;